'use client';

import { motion } from 'framer-motion';
import { ScheduledGame } from '@/types';
import { getTodayGames } from '@/data/mockGames';
import GameCard from './GameCard';
import { Calendar } from 'lucide-react';

interface TodayGamesProps {
  onSelectGame?: (game: ScheduledGame) => void;
}

export default function TodayGames({ onSelectGame }: TodayGamesProps) {
  const games = getTodayGames();

  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-lg"
    >
      {/* 헤더 */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
          <Calendar size={20} className="text-white" />
        </div>
        <div>
          <h2 className="font-bold text-gray-800">오늘의 경기</h2>
          <p className="text-sm text-gray-500">{today}</p>
        </div>
      </div>

      {/* 경기 목록 */}
      <div className="space-y-3">
        {games.map((game, idx) => (
          <GameCard
            key={game.id}
            game={game}
            onSelect={onSelectGame}
            delay={idx * 0.1}
          />
        ))}
      </div>

      {games.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>오늘은 경기가 없어요 ⚾</p>
        </div>
      )}
    </motion.div>
  );
}
