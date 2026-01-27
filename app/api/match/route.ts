import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { kboTeams } from '@/data/teams';
import { Answer } from '@/types';
import { rateLimit } from '@/lib/rateLimit';
import { AIResponseSchema, AnswersSchema } from '@/lib/schemas';
import { QUESTION_IDS, API_CONFIG } from '@/lib/constants';
import { ZodError } from 'zod';

// Edge Runtime 설정
export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(request: NextRequest) {
  try {
    // Rate Limiting (IP 기반)
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

    // 입력 검증
    const body = await request.json();
    const answers = AnswersSchema.parse(body.answers);

    // 답변 분석
    const userProfile = analyzeAnswers(answers);

    // OpenAI API 호출
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

다음 JSON 형식으로만 응답해주세요:
{
  "teamId": "구단 영문 소문자 id (doosan, lg, kt, ssg, nc, kiwoom, samsung, lotte, hanwha, kia 중 하나)",
  "compatibility": 호환도 숫자 (75-99),
  "aiMessage": "3줄 요약으로 왜 이 팀이 맞는지 재치있게 설명 (각 줄은 30자 이내, 이모지 포함)"
}`;

    const completion = await Promise.race([
      openai.chat.completions.create({
        model: API_CONFIG.MODEL,
        messages: [
          {
            role: 'system',
            content: '당신은 친근한 20대 여성 언니 같은 KBO 팀 매칭 전문가입니다.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: API_CONFIG.TEMPERATURE,
        max_tokens: API_CONFIG.MAX_TOKENS,
        response_format: { type: "json_object" },
      }),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('API 타임아웃')), API_CONFIG.TIMEOUT_MS)
      ),
    ]);

    const aiResponseText = completion.choices[0].message.content || '{}';

    // 응답 파싱 및 검증
    const aiResponse = AIResponseSchema.parse(JSON.parse(aiResponseText));

    // 팀 정보 매칭
    const matchedTeam = kboTeams.find(team => team.id === aiResponse.teamId);

    if (!matchedTeam) {
      console.error('매칭된 팀을 찾을 수 없음:', aiResponse.teamId);
      // Fallback: LG 트윈스
      const defaultTeam = kboTeams.find(team => team.id === 'lg') || kboTeams[0];
      return NextResponse.json({
        team: defaultTeam,
        compatibility: aiResponse.compatibility,
        aiMessage: aiResponse.aiMessage,
      }, {
        headers: {
          'X-RateLimit-Remaining': String(remaining),
        }
      });
    }

    // 성공 응답
    return NextResponse.json({
      team: matchedTeam,
      compatibility: aiResponse.compatibility,
      aiMessage: aiResponse.aiMessage,
    }, {
      headers: {
        'X-RateLimit-Remaining': String(remaining),
      }
    });

  } catch (error: any) {
    console.error('Match API Error:', error);
    console.error('Error details:', {
      message: error.message,
      status: error.status,
      type: error.type,
      code: error.code,
    });

    // 에러 핸들링

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
    if (error.status === 401 || error.code === 'invalid_api_key') {
      console.error('API Key Error - Current key:', process.env.OPENAI_API_KEY ? '(설정됨)' : '(없음)');
      return NextResponse.json(
        { error: 'AI 서비스 설정 오류입니다. 관리자에게 문의해주세요.' },
        { status: 500 }
      );
    }

    // 할당량 초과 에러
    if (error.status === 429 || error.code === 'rate_limit_exceeded') {
      return NextResponse.json(
        { error: 'API 할당량이 초과되었어요. 😭\n잠시 후 다시 시도해주세요!' },
        { status: 429 }
      );
    }

    // 기타 에러
    return NextResponse.json(
      {
        error: '매칭 중 오류가 발생했어요. 😢\n잠시 후 다시 시도해주세요!',
        debug: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

function analyzeAnswers(answers: Answer[]): string {
  // 4지선다 답변 분석
  const aCount = answers.filter(a => a.selected === 'A').length;
  const bCount = answers.filter(a => a.selected === 'B').length;
  const cCount = answers.filter(a => a.selected === 'C').length;
  const dCount = answers.filter(a => a.selected === 'D').length;

  // 질문별 성향 분석
  // Q1: 선수단 구성 선호
  const q1 = answers.find(a => a.questionId === 1);
  let rosterPreference = '';
  if (q1?.selected === 'A') rosterPreference = '유망주 성장형 팀 선호';
  else if (q1?.selected === 'B') rosterPreference = '베테랑 안정감 팀 선호';
  else if (q1?.selected === 'C') rosterPreference = '신구조화 밸런스 팀 선호';
  else if (q1?.selected === 'D') rosterPreference = '실력 중시, 연령 무관';

  // Q2: 연고지 선호
  const q2 = answers.find(a => a.questionId === 2);
  let regionPreference = '';
  if (q2?.selected === 'A') regionPreference = '수도권/충청권 선호';
  else if (q2?.selected === 'B') regionPreference = '영남권(부산/대구/창원) 선호';
  else if (q2?.selected === 'C') regionPreference = '호남권(광주) 선호';
  else if (q2?.selected === 'D') regionPreference = '지역 무관, 팀 스타일 중시';

  // Q4: 성적 마인드
  const q4 = answers.find(a => a.questionId === 4);
  let performanceMindset = '';
  if (q4?.selected === 'A') performanceMindset = '우승 지상주의 (강팀 선호)';
  else if (q4?.selected === 'B') performanceMindset = '화끈한 타격전 선호 (도파민형)';
  else if (q4?.selected === 'C') performanceMindset = '언더독 응원형 (모성애형)';
  else if (q4?.selected === 'D') performanceMindset = '비주얼/케미 중시 (아이돌팬형)';

  // Q11: 최애 선수 기준
  const q11 = answers.find(a => a.questionId === 11);
  let playerPreference = '';
  if (q11?.selected === 'A') playerPreference = '실력 중시형';
  else if (q11?.selected === 'B') playerPreference = '비주얼 중시형 (얼빠)';
  else if (q11?.selected === 'C') playerPreference = '팬서비스/예능감 중시형';
  else if (q11?.selected === 'D') playerPreference = '팀 충성도 중시형 (프랜차이즈 스타)';

  // Q14: 팀 분위기 선호
  const q14 = answers.find(a => a.questionId === 14);
  let vibePreference = '';
  if (q14?.selected === 'A') vibePreference = '규율과 카리스마 선호';
  else if (q14?.selected === 'B') vibePreference = '자유분방 축제형 선호';
  else if (q14?.selected === 'C') vibePreference = '가족같은 따뜻한 분위기 선호';
  else if (q14?.selected === 'D') vibePreference = '프로페셔널 비즈니스형 선호';

  // Q15: 짜릿한 순간
  const q15 = answers.find(a => a.questionId === 15);
  let excitementType = '';
  if (q15?.selected === 'A') excitementType = '홈런 중심 파워야구 선호';
  else if (q15?.selected === 'B') excitementType = '도루/작전 스마트야구 선호';
  else if (q15?.selected === 'C') excitementType = '삼진쇼 투수야구 선호';
  else if (q15?.selected === 'D') excitementType = '호수비 수비야구 선호';

  let profile = `총 20개 질문 분석 결과:\n`;
  profile += `- A 선택: ${aCount}개 / B 선택: ${bCount}개 / C 선택: ${cCount}개 / D 선택: ${dCount}개\n\n`;

  profile += `세부 성향:\n`;
  profile += `- ${rosterPreference}\n`;
  profile += `- ${regionPreference}\n`;
  profile += `- ${performanceMindset}\n`;
  profile += `- ${playerPreference}\n`;
  profile += `- ${vibePreference}\n`;
  profile += `- ${excitementType}\n\n`;

  // 종합 성향 분석
  const dominant = Math.max(aCount, bCount, cCount, dCount);
  if (dominant === aCount) {
    profile += '종합 성향: 열정적이고 전통을 중시하는 타입. 우승 경쟁팀이나 명문구단에 어울림.';
  } else if (dominant === bCount) {
    profile += '종합 성향: 안정감 있고 경험을 중시하는 타입. 노련한 베테랑이 많은 팀에 어울림.';
  } else if (dominant === cCount) {
    profile += '종합 성향: 따뜻하고 감성적인 타입. 가족같은 분위기의 팀이나 언더독 팀에 어울림.';
  } else {
    profile += '종합 성향: 합리적이고 개방적인 타입. 새로운 시도를 좋아하고 실력 중심으로 판단함.';
  }

  return profile;
}

