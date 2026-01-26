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

export interface KBOTeam {
  id: string;
  name: string;
  englishName: string;
  color: string;
  mascot: string;
  logo: string;
  stadium: string;
  cheerSongUrl: string;
  uniformStyle: string;
  fashion: string;
  meme: string;
  description: string;
  keywords: string[];
}

export interface MatchResult {
  team: KBOTeam;
  reason: string;
  compatibility: number;
  aiMessage: string;
}
