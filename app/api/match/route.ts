import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { kboTeams } from '@/data/teams';
import { Answer } from '@/types';
import { rateLimit } from '@/lib/rateLimit';
import { AIResponseSchema, AnswersSchema } from '@/lib/schemas';
import { QUESTION_IDS, API_CONFIG } from '@/lib/constants';
import { ZodError } from 'zod';

// Edge Runtime 설정
export const runtime = 'edge';

// Gemini 클라이언트 싱글톤 (메모리 효율)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: API_CONFIG.GEMINI_MODEL });

export async function POST(request: NextRequest) {
  try {
    // ============================================
    // 1. Rate Limiting (IP 기반)
    // ============================================
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    const { success, remaining } = rateLimit(ip);
    
    if (!success) {
      return NextResponse.json(
        { 
          error: '너무 많은 요청이에요! 😅\n1분 후에 다시 시도해주세요.',
          retryAfter: 60 
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Math.floor(Date.now() / 1000) + 60),
          }
        }
      );
    }

    // ============================================
    // 2. 입력 검증 (Zod)
    // ============================================
    const body = await request.json();
    const answers = AnswersSchema.parse(body.answers);

    // ============================================
    // 3. 답변 분석
    // ============================================
    const userProfile = analyzeAnswers(answers);

    // ============================================
    // 4. Gemini API 호출 (타임아웃 적용)
    // ============================================
    const prompt = `당신은 20대 여성을 위한 친근한 언니 같은 KBO 야구팀 매칭 전문가입니다.
사용자의 성향을 분석해서 가장 잘 맞는 KBO 구단을 추천해주세요.
재치있고 귀엽게, 밈과 문화를 활용해서 설명해주세요.
반말로 친근하게 대해주되, 존중하는 태도를 유지해주세요.

KBO 10개 구단 (색깔 계열 포함):
1. LG 트윈스 (lg) - 빨강/레드, 2025 우승, 열정, 트렌디, 힙, 따뜻한 색
2. KIA 타이거즈 (kia) - 빨강/레드, 2024 우승, 호랑이, 열정, 광주, 따뜻한 색
3. 두산 베어스 (doosan) - 네이비/파랑, 명문, 역전의 DNA, 클래식, 차가운 색, 먹산
4. SSG 랜더스 (ssg) - 빨강/레드, 2022 우승, 럭셔리, 부자 구단, 따뜻한 색
5. KT 위즈 (kt) - 블랙/검정, 신생팀, 마법사, 2021 우승, 쿨함, 중립 색
6. 삼성 라이온즈 (samsung) - 블루/파랑, 최다 우승(8회), 명가, 대구, 차가운 색
7. NC 다이노스 (nc) - 네이비/파랑, 공룡, 파워, 경상도 열정, 차가운 색
8. 키움 히어로즈 (kiwoom) - 버건디/레드, 히어로, 서울, 실내 구장, 따뜻한 색
9. 롯데 자이언츠 (lotte) - 네이비/파랑, 부산 자부심, 최고 팬심, 차가운 색
10. 한화 이글스 (hanwha) - 오렌지/주황, 해탈의 경지, 인내심, 따뜻한 색, 2026 슈퍼팀

**중요**: 사용자의 색깔 선호도를 반드시 고려해서 매칭하세요!
- 따뜻한 색 선호 → 빨강/레드/오렌지 계열 팀 우선
- 차가운 색 선호 → 파랑/네이비 계열 팀 우선
- 베이직 컬러 선호 → 블랙/네이비 같은 차분한 팀

사용자 프로필:
${userProfile}

다음 JSON 형식으로만 응답해주세요 (다른 텍스트 없이):
{
  "teamId": "구단 영문 소문자 id (doosan, lg, kt, ssg, nc, kiwoom, samsung, lotte, hanwha, kia 중 하나)",
  "compatibility": 호환도 숫자 (75-99),
  "reason": "3줄 요약으로 왜 이 팀이 맞는지 재치있게 설명 (각 줄은 30자 이내, 이모지 포함)"
}

예시:
{
  "teamId": "lg",
  "compatibility": 95,
  "reason": "🔥 트렌디하고 열정적인 너는 LG 찐팬감!\\n✨ 잠실을 붉게 물들이는 우승팀과 함께해\\n💖 인싸 야구팬의 시작은 여기서부터야"
}`;

    const result = await Promise.race([
      model.generateContent(prompt),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('API 타임아웃')), API_CONFIG.TIMEOUT_MS)
      ),
    ]);

    const response = await result.response;
    const text = response.text();

    // ============================================
    // 5. 응답 파싱 및 검증
    // ============================================
    // JSON만 추출 (Gemini가 추가 텍스트를 붙일 수 있음)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('AI 응답에서 JSON을 찾을 수 없습니다.');
    }

    const aiResponse = AIResponseSchema.parse(JSON.parse(jsonMatch[0]));

    // ============================================
    // 6. 팀 정보 매칭
    // ============================================
    const matchedTeam = kboTeams.find(team => team.id === aiResponse.teamId);

    if (!matchedTeam) {
      console.error('매칭된 팀을 찾을 수 없음:', aiResponse.teamId);
      // Fallback: LG 트윈스
      const defaultTeam = kboTeams.find(team => team.id === 'lg') || kboTeams[0];
      return NextResponse.json({
        team: defaultTeam,
        compatibility: aiResponse.compatibility,
        aiMessage: aiResponse.reason,
      }, {
        headers: {
          'X-RateLimit-Remaining': String(remaining),
        }
      });
    }

    // ============================================
    // 7. 성공 응답
    // ============================================
    return NextResponse.json({
      team: matchedTeam,
      compatibility: aiResponse.compatibility,
      aiMessage: aiResponse.reason,
    }, {
      headers: {
        'X-RateLimit-Remaining': String(remaining),
      }
    });

  } catch (error: any) {
    console.error('Match API Error:', error);

    // ============================================
    // 에러 핸들링
    // ============================================
    
    // Zod 검증 에러
    if (error instanceof ZodError) {
      return NextResponse.json(
        { 
          error: '요청 형식이 올바르지 않아요. 😢\n처음부터 다시 시도해주세요!',
          details: error.issues,
        },
        { status: 400 }
      );
    }

    // 타임아웃 에러
    if (error.message?.includes('타임아웃')) {
      return NextResponse.json(
        { error: 'AI 응답이 너무 느려요. 😴\n다시 시도해주세요!' },
        { status: 504 }
      );
    }

    // API 키 에러
    if (error.message?.includes('API key') || error.status === 401) {
      return NextResponse.json(
        { error: 'AI 서비스 설정 오류입니다. 관리자에게 문의해주세요.' },
        { status: 500 }
      );
    }

    // 기타 에러
    return NextResponse.json(
      { 
        error: '매칭 중 오류가 발생했어요. 😢\n잠시 후 다시 시도해주세요!',
      },
      { status: 500 }
    );
  }
}

/**
 * 답변 분석 함수
 */
function analyzeAnswers(answers: Answer[]): string {
  const aCount = answers.filter(a => a.selected === 'A').length;
  const bCount = answers.filter(a => a.selected === 'B').length;

  // 색깔 관련 질문 분석 (상수 사용)
  const colorQ = answers.find(a => a.questionId === QUESTION_IDS.COLOR_PREFERENCE);
  const styleQ = answers.find(a => a.questionId === QUESTION_IDS.WARDROBE_STYLE);

  let colorPreference = '';
  if (colorQ?.selected === 'A') {
    colorPreference = '따뜻한 색 (빨강, 주황, 분홍) 선호';
  } else if (colorQ?.selected === 'B') {
    colorPreference = '차가운 색 (파랑, 보라, 초록) 선호';
  }

  let wardrobeStyle = '';
  if (styleQ?.selected === 'A') {
    wardrobeStyle = '화려하고 밝은 컬러 선호';
  } else if (styleQ?.selected === 'B') {
    wardrobeStyle = '베이직하고 차분한 컬러 선호';
  }

  let profile = `총 20개 질문 중:\n`;
  profile += `- A 선택: ${aCount}개 (적극적, 외향적, 트렌디, 열정적 성향)\n`;
  profile += `- B 선택: ${bCount}개 (신중함, 내향적, 클래식, 차분한 성향)\n\n`;

  profile += `색깔 선호도:\n`;
  profile += `- ${colorPreference}\n`;
  profile += `- ${wardrobeStyle}\n\n`;

  // 성향 분석
  if (aCount > 15) {
    profile += '매우 외향적이고 열정적인 스타일. 트렌디하고 힙한 것을 좋아함.';
  } else if (aCount > 12) {
    profile += '외향적이고 활발한 편. 새로운 것에 도전하는 것을 즐김.';
  } else if (aCount > 8) {
    profile += '균형잡힌 성향. 때로는 적극적이고 때로는 신중함.';
  } else if (aCount > 5) {
    profile += '신중하고 차분한 편. 안정적인 것을 선호함.';
  } else {
    profile += '매우 신중하고 내향적. 클래식하고 전통적인 것을 좋아함.';
  }

  return profile;
}
