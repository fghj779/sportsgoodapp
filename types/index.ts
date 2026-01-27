export interface Question {
  id: number;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  category: 'basic_vibe' | 'cheering_culture' | 'fandom' | 'in_game_style';
  emoji: string;
}

export interface Answer {
  questionId: number;
  selected: 'A' | 'B' | 'C' | 'D';
}

export interface Player {
  name: string;
  position: string;
  number?: number;
  description: string;
}

export interface MascotInfo {
  name: string;
  description: string;
  imageUrl: string;
}

export interface FoodInfo {
  name: string;
  description: string;
}

export interface KBOTeam {
  id: string;
  name: string;
  sponsor: string;
  englishName: string;
  color: string;
  colorScheme: 'warm' | 'cool' | 'neutral';
  mascot: string;
  mascotInfo: MascotInfo;
  logo: string;
  stadium: string;
  homeCity: string;
  foods: FoodInfo[];
  cheerSongUrl: string;
  uniformStyle: string;
  fashion: string;
  meme: string;
  description: string;
  keywords: string[];
  vibe: string;
  starPlayers: Player[];
  legends: Player[];
  history: {
    founded: string;
    championships: number;
    recentAchievements: string[];
    majorEvents: string[];
  };
  ticketPlatform: string;
  personality: {
    keywords: string[];
    tip: string;
    bestFor: string;
  };
  // Optional legacy fields
  teamPhoto?: string;
  officialWebsite?: string;
  ticketUrl?: string;
  transportation?: {
    subway?: {
      line: string;
      station: string;
      exit: string;
      walkTime: string;
    };
    ktx?: {
      station: string;
      distance: string;
      transport: string;
    };
    parking: string;
  };
  seatPrices?: {
    premium?: string;
    table?: string;
    box?: string;
    infield: string;
    outfield: string;
  };
}

export interface MatchResult {
  team: KBOTeam;
  compatibility: number;
  aiMessage: string;
}

// 2026 시즌 뎁스차트
export interface PositionPlayer {
  starter: string;
  backup: string[];
}

export interface TeamLineup {
  catcher: PositionPlayer;
  firstBase: PositionPlayer;
  secondBase: PositionPlayer;
  thirdBase: PositionPlayer;
  shortStop: PositionPlayer;
  leftField: PositionPlayer;
  centerField: PositionPlayer;
  rightField: PositionPlayer;
  designatedHitter: PositionPlayer;
}

export interface Bullpen {
  closer: string;
  setup: string[];
  middle: string[];
}

export interface TeamDepthChart {
  manager: string;
  notes: string;
  lineup: TeamLineup;
  rotation: string[];
  bullpen: Bullpen;
}
