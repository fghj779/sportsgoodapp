import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { kboTeams } from '@/data/teams';
import { Answer } from '@/types';

// Cloudflare Pages와 호환되도록 런타임 설정
export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { answers }: { answers: Answer[] } = await request.json();

    if (!answers || answers.length === 0) {
      return NextResponse.json(
        { error: '답변이 필요합니다.' },
        { status: 400 }
      );
    }

    // 답변 분석을 위한 프롬프트 생성
    const userProfile = analyzeAnswers(answers);
    
    // Cloudflare Edge에서 OpenAI 초기화
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || '',
    });
    
    // OpenAI API 호출 (v5.2.0 호환)
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `너는 20대 여성을 위한 친근한 언니 같은 KBO 야구팀 매칭 전문가야. 
사용자의 성향을 분석해서 가장 잘 맞는 KBO 구단을 추천해줘.
재치있고 귀엽게, 밈과 문화를 활용해서 설명해줘.
반말로 친근하게 대해주되, 존중하는 태도를 유지해.

KBO 10개 구단 (색깔 계열 포함):
1. LG 트윈스 (lg) - 빨강/레드, 2023 우승, 열정, 트렌디, 힙, 따뜻한 색
2. KIA 타이거즈 (kia) - 빨강/레드, 2024 우승, 호랑이, 열정, 광주, 따뜻한 색
3. 두산 베어스 (doosan) - 네이비/파랑, 명문, 역전의 DNA, 클래식, 차가운 색
4. SSG 랜더스 (ssg) - 빨강/레드, 2022 우승, 럭셔리, 부자 구단, 따뜻한 색
5. KT 위즈 (kt) - 블랙/검정, 신생팀, 마법사, 2021 우승, 쿨함, 중립 색
6. 삼성 라이온즈 (samsung) - 블루/파랑, 최다 우승(8회), 명가, 대구, 차가운 색
7. NC 다이노스 (nc) - 네이비/파랑, 공룡, 파워, 경상도 열정, 차가운 색
8. 키움 히어로즈 (kiwoom) - 버건디/레드, 히어로, 서울, 실내 구장, 따뜻한 색
9. 롯데 자이언츠 (lotte) - 네이비/파랑, 부산 자부심, 최고 팬심, 차가운 색
10. 한화 이글스 (hanwha) - 오렌지/주황, 해탈의 경지, 인내심, 따뜻한 색

**중요**: 사용자의 색깔 선호도를 반드시 고려해서 매칭하세요!
- 따뜻한 색 선호 → 빨강/레드/오렌지 계열 팀 우선
- 차가운 색 선호 → 파랑/네이비 계열 팀 우선
- 베이직 컬러 선호 → 블랙/네이비 같은 차분한 팀`
        },
        {
          role: "user",
          content: `이 사용자의 성향을 분석해서 딱 맞는 KBO 구단 1개를 추천해줘:

${userProfile}

다음 형식으로 JSON만 응답해줘:
{
  "teamId": "구단 영문 소문자 id (doosan, lg, kt, ssg, nc, kiwoom, samsung, lotte, hanwha, kia 중 하나)",
  "compatibility": 호환도 숫자 (75-99),
  "reason": "3줄 요약으로 왜 이 팀이 맞는지 재치있게 설명 (각 줄은 30자 이내, 이모지 포함)"
}

예시:
{
  "teamId": "lg",
  "compatibility": 95,
  "reason": "🔥 트렌디하고 열정적인 너는 LG 찐팬감!\n✨ 잠실을 붉게 물들이는 우승팀과 함께해\n💖 인싸 야구팬의 시작은 여기서부터야"
}`
        }
      ],
      temperature: 0.8,
      max_tokens: 500,
      response_format: { type: "json_object" },
    });

    const aiResponse = completion.choices[0].message.content;
    
    if (!aiResponse) {
      throw new Error('AI 응답을 받지 못했습니다.');
    }

    // JSON 파싱 (안전하게)
    let result;
    try {
      result = JSON.parse(aiResponse);
    } catch (parseError) {
      console.error('JSON 파싱 에러:', aiResponse);
      throw new Error('AI 응답을 파싱할 수 없습니다.');
    }
    
    // 결과 유효성 검사
    if (!result.teamId || !result.compatibility || !result.reason) {
      console.error('AI 응답 형식 오류:', result);
      throw new Error('AI 응답 형식이 올바르지 않습니다.');
    }

    // 해당 팀 정보 찾기
    const matchedTeam = kboTeams.find(team => team.id === result.teamId);
    
    if (!matchedTeam) {
      console.error('매칭된 팀을 찾을 수 없음:', result.teamId);
      // 기본값으로 LG 트윈스 반환 (가장 트렌디한 팀)
      const defaultTeam = kboTeams.find(team => team.id === 'lg') || kboTeams[0];
      return NextResponse.json({
        team: defaultTeam,
        compatibility: result.compatibility || 85,
        aiMessage: result.reason || '너랑 찰떡궁합인 팀을 찾았어! 💕',
      });
    }

    return NextResponse.json({
      team: matchedTeam,
      compatibility: result.compatibility,
      aiMessage: result.reason,
    });

  } catch (error: any) {
    console.error('Match API Error:', error);
    
    // API 키 관련 에러 처리
    if (error.status === 401) {
      return NextResponse.json(
        { error: 'OpenAI API 키가 유효하지 않습니다. .env.local 파일을 확인해주세요.' },
        { status: 401 }
      );
    }
    
    // 할당량 초과 에러 처리
    if (error.status === 429) {
      return NextResponse.json(
        { error: 'API 사용량이 초과되었습니다. 잠시 후 다시 시도해주세요.' },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: error.message || '매칭 중 오류가 발생했습니다. 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}

function analyzeAnswers(answers: Answer[]): string {
  const aCount = answers.filter(a => a.selected === 'A').length;
  const bCount = answers.filter(a => a.selected === 'B').length;
  
  // 색깔 관련 질문 분석 (질문 10, 15번)
  const colorQ10 = answers.find(a => a.questionId === 10);
  const colorQ15 = answers.find(a => a.questionId === 15);
  
  let colorPreference = '';
  if (colorQ10?.selected === 'A') {
    colorPreference = '따뜻한 색 (빨강, 주황, 분홍) 선호';
  } else if (colorQ10?.selected === 'B') {
    colorPreference = '차가운 색 (파랑, 보라, 초록) 선호';
  }
  
  let wardrobeStyle = '';
  if (colorQ15?.selected === 'A') {
    wardrobeStyle = '화려하고 밝은 컬러 선호';
  } else if (colorQ15?.selected === 'B') {
    wardrobeStyle = '베이직하고 차분한 컬러 선호';
  }
  
  let profile = `총 20개 질문 중:\n`;
  profile += `- A 선택: ${aCount}개 (적극적, 외향적, 트렌디, 열정적 성향)\n`;
  profile += `- B 선택: ${bCount}개 (신중함, 내향적, 클래식, 차분한 성향)\n\n`;
  
  profile += `색깔 선호도:\n`;
  profile += `- ${colorPreference}\n`;
  profile += `- ${wardrobeStyle}\n\n`;
  
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
