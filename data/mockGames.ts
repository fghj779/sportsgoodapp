import { ScheduledGame } from '@/types';

// 오늘의 경기 Mock 데이터
export const todayGames: ScheduledGame[] = [
  {
    id: 'game-1',
    date: '2025-04-15',
    time: '18:30',
    homeTeam: 'doosan',
    awayTeam: 'lg',
    stadium: '잠실',
  },
  {
    id: 'game-2',
    date: '2025-04-15',
    time: '18:30',
    homeTeam: 'kia',
    awayTeam: 'samsung',
    stadium: '광주',
  },
  {
    id: 'game-3',
    date: '2025-04-15',
    time: '18:30',
    homeTeam: 'hanwha',
    awayTeam: 'nc',
    stadium: '대전',
  },
  {
    id: 'game-4',
    date: '2025-04-15',
    time: '18:30',
    homeTeam: 'lotte',
    awayTeam: 'ssg',
    stadium: '사직',
  },
  {
    id: 'game-5',
    date: '2025-04-15',
    time: '18:30',
    homeTeam: 'kiwoom',
    awayTeam: 'kt',
    stadium: '고척',
  },
];

export function getTodayGames(): ScheduledGame[] {
  return todayGames;
}

export function getGameById(id: string): ScheduledGame | undefined {
  return todayGames.find((game) => game.id === id);
}
