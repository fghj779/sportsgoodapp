'use client';

import { motion } from 'framer-motion';
import { kboTeams } from '@/data/teams';
import { cn } from '@/lib/utils';

interface TeamSelectorProps {
  selectedTeamId: string | null;
  onSelectTeam: (teamId: string) => void;
}

export default function TeamSelector({ selectedTeamId, onSelectTeam }: TeamSelectorProps) {
  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
      <div className="flex gap-3 min-w-max px-1">
        {kboTeams.map((team, idx) => (
          <motion.button
            key={team.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectTeam(team.id)}
            className={cn(
              'flex flex-col items-center justify-center p-3 rounded-xl transition-all min-w-[70px]',
              selectedTeamId === team.id
                ? 'bg-gradient-to-br from-pink-100 to-purple-100 border-2 shadow-lg'
                : 'bg-white border-2 border-gray-100 hover:border-pink-200'
            )}
            style={{
              borderColor: selectedTeamId === team.id ? team.color : undefined,
            }}
          >
            <span className="text-3xl mb-1">{team.logo}</span>
            <span
              className={cn(
                'text-xs font-semibold truncate max-w-[60px]',
                selectedTeamId === team.id ? 'text-gray-800' : 'text-gray-600'
              )}
            >
              {team.name.split(' ')[0]}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
