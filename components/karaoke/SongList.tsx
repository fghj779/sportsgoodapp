'use client';

import { motion } from 'framer-motion';
import { CheerSong } from '@/types';
import { cn } from '@/lib/utils';
import { Play, User } from 'lucide-react';

interface SongListProps {
  songs: CheerSong[];
  selectedSongId: string | null;
  onSelectSong: (song: CheerSong) => void;
  teamColor?: string;
}

export default function SongList({ songs, selectedSongId, onSelectSong, teamColor }: SongListProps) {
  if (songs.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>아직 등록된 응원가가 없어요 🎵</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {songs.map((song, idx) => (
        <motion.button
          key={song.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.05 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectSong(song)}
          className={cn(
            'w-full flex items-center gap-4 p-4 rounded-xl transition-all text-left',
            selectedSongId === song.id
              ? 'bg-gradient-to-r from-pink-50 to-purple-50 border-2 shadow-md'
              : 'bg-white border-2 border-gray-100 hover:border-pink-200'
          )}
          style={{
            borderColor: selectedSongId === song.id ? teamColor : undefined,
          }}
        >
          <div
            className={cn(
              'w-12 h-12 rounded-full flex items-center justify-center',
              selectedSongId === song.id ? 'bg-white' : 'bg-gray-100'
            )}
            style={{
              backgroundColor: selectedSongId === song.id ? teamColor : undefined,
            }}
          >
            {song.type === 'player' ? (
              <User
                size={20}
                className={selectedSongId === song.id ? 'text-white' : 'text-gray-500'}
              />
            ) : (
              <Play
                size={20}
                className={selectedSongId === song.id ? 'text-white' : 'text-gray-500'}
              />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-800 truncate">{song.title}</h3>
            {song.playerName && (
              <p className="text-sm text-gray-500">{song.playerName}</p>
            )}
          </div>
          {selectedSongId === song.id && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-2xl"
            >
              🎤
            </motion.div>
          )}
        </motion.button>
      ))}
    </div>
  );
}
