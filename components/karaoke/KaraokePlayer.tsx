'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheerSong } from '@/types';
import LyricsDisplay from './LyricsDisplay';
import YouTubeEmbed from './YouTubeEmbed';
import { X, Music } from 'lucide-react';

interface KaraokePlayerProps {
  song: CheerSong | null;
  teamColor?: string;
  teamName?: string;
  onClose: () => void;
}

export default function KaraokePlayer({ song, teamColor, teamName, onClose }: KaraokePlayerProps) {
  if (!song) {
    return (
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 text-center">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl mb-4"
        >
          🎤
        </motion.div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">응원가를 선택해주세요</h3>
        <p className="text-gray-600">왼쪽 목록에서 노래를 선택하면 가사와 함께 재생됩니다</p>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={song.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="space-y-4"
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: teamColor || '#ec4899' }}
            >
              <Music size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-bold text-gray-800">{song.title}</h2>
              {song.playerName && (
                <p className="text-sm text-gray-500">{song.playerName} 응원가</p>
              )}
              {teamName && !song.playerName && (
                <p className="text-sm text-gray-500">{teamName}</p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* 유튜브 플레이어 */}
        <YouTubeEmbed videoId={song.youtubeVideoId} startTime={song.startTime} />

        {/* 가사 표시 */}
        <LyricsDisplay lyrics={song.lyrics} teamColor={teamColor} />
      </motion.div>
    </AnimatePresence>
  );
}
