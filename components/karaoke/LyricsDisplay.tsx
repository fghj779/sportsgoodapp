'use client';

import { motion } from 'framer-motion';

interface LyricsDisplayProps {
  lyrics: string[];
  teamColor?: string;
}

export default function LyricsDisplay({ lyrics, teamColor }: LyricsDisplayProps) {
  return (
    <div
      className="rounded-2xl p-6 min-h-[300px] flex flex-col items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${teamColor || '#ec4899'}15, ${teamColor || '#8b5cf6'}15)`,
      }}
    >
      <div className="text-center space-y-3">
        {lyrics.map((line, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={
              line === ''
                ? 'h-4'
                : 'text-xl md:text-2xl font-bold text-gray-800 leading-relaxed'
            }
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
