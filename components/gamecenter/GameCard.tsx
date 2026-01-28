'use client';

import { motion } from 'framer-motion';
import { ScheduledGame } from '@/types';
import { kboTeams } from '@/data/teams';
import { MapPin, Clock } from 'lucide-react';

interface GameCardProps {
  game: ScheduledGame;
  onSelect?: (game: ScheduledGame) => void;
  delay?: number;
}

export default function GameCard({ game, onSelect, delay = 0 }: GameCardProps) {
  const homeTeam = kboTeams.find((t) => t.id === game.homeTeam);
  const awayTeam = kboTeams.find((t) => t.id === game.awayTeam);

  if (!homeTeam || !awayTeam) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect?.(game)}
      className="w-full bg-white rounded-xl p-4 border-2 border-gray-100 hover:border-pink-300 transition-all text-left"
    >
      {/* 팀 정보 */}
      <div className="flex items-center justify-between mb-3">
        {/* 원정팀 */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">{awayTeam.logo}</span>
          <div>
            <p className="text-xs text-gray-500">원정</p>
            <p className="font-semibold text-gray-800">{awayTeam.name.split(' ')[0]}</p>
          </div>
        </div>

        {/* VS */}
        <div className="text-xl font-bold text-gray-400">VS</div>

        {/* 홈팀 */}
        <div className="flex items-center gap-2">
          <div className="text-right">
            <p className="text-xs text-gray-500">홈</p>
            <p className="font-semibold text-gray-800">{homeTeam.name.split(' ')[0]}</p>
          </div>
          <span className="text-3xl">{homeTeam.logo}</span>
        </div>
      </div>

      {/* 경기 정보 */}
      <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{game.time}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={14} />
          <span>{game.stadium}</span>
        </div>
      </div>
    </motion.button>
  );
}
