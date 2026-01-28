'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Music, Users } from 'lucide-react';

type TabType = 'team' | 'player';

interface CheerSongTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  teamColor?: string;
}

export default function CheerSongTabs({ activeTab, onTabChange, teamColor }: CheerSongTabsProps) {
  return (
    <div className="flex rounded-xl bg-gray-100 p-1">
      <button
        onClick={() => onTabChange('team')}
        className={cn(
          'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all relative',
          activeTab === 'team' ? 'text-white' : 'text-gray-600 hover:text-gray-800'
        )}
      >
        {activeTab === 'team' && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 rounded-lg"
            style={{ backgroundColor: teamColor || '#ec4899' }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        <Music size={18} className="relative z-10" />
        <span className="relative z-10">팀 응원가</span>
      </button>
      <button
        onClick={() => onTabChange('player')}
        className={cn(
          'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all relative',
          activeTab === 'player' ? 'text-white' : 'text-gray-600 hover:text-gray-800'
        )}
      >
        {activeTab === 'player' && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 rounded-lg"
            style={{ backgroundColor: teamColor || '#ec4899' }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        <Users size={18} className="relative z-10" />
        <span className="relative z-10">선수 라인업</span>
      </button>
    </div>
  );
}
