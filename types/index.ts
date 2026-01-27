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
}

export interface MatchResult {
  team: KBOTeam;
  reason: string;
  compatibility: number;
  aiMessage: string;
}
