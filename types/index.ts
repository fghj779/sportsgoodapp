export interface Question {
  id: number;
  question: string;
  optionA: string;
  optionB: string;
  category: 'personality' | 'style' | 'preference' | 'emotion' | 'social';
  emoji: string;
}

export interface Answer {
  questionId: number;
  selected: 'A' | 'B';
}

export interface Player {
  name: string;
  position: string;
  description: string;
}

export interface KBOTeam {
  id: string;
  name: string;
  englishName: string;
  color: string;
  colorScheme: 'warm' | 'cool' | 'neutral';  // 색 계열
  mascot: string;
  logo: string;
  teamPhoto: string;  // 팀 대표 사진 (누끼 제거된 PNG)
  stadium: string;
  homeCity: string;  // 연고지
  cheerSongUrl: string;
  uniformStyle: string;
  fashion: string;
  meme: string;
  description: string;
  keywords: string[];
  vibe: string;  // 팀 분위기
  starPlayers: Player[];  // 현재 스타 플레이어
  legends: Player[];  // 레전드 선수
  history: {
    founded: string;
    championships: number;
    recentAchievements: string[];
    majorEvents: string[];
  };
  // 신규 추가 기능
  officialWebsite: string;  // 공식 홈페이지
  ticketUrl: string;  // 티켓 예매 링크
  ticketPlatform: string;  // 예매 플랫폼 (티켓링크, 인터파크 등)
  transportation: {  // 교통편 정보
    subway?: {
      line: string;
      station: string;
      exit: string;
      walkTime: string;
    };
    ktx?: {
      station: string;
      distance: string;
      transport: string;  // 버스/택시
    };
    parking: string;
  };
  seatPrices: {  // 좌석별 가격
    premium?: string;
    table?: string;
    box?: string;
    infield: string;  // 내야
    outfield: string;  // 외야
  };
  personality: {  // 성향별 꿀팁
    keywords: string[];
    tip: string;
    bestFor: string;
  };
}

export interface MatchResult {
  team: KBOTeam;
  reason: string;
  compatibility: number;
  aiMessage: string;
}
