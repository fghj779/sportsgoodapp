'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CheerSong } from '@/types';
import { kboTeams } from '@/data/teams';
import { getCheerSongsByTeamId } from '@/data/cheerSongs';
import Card from '@/components/Card';
import TeamSelector from '@/components/karaoke/TeamSelector';
import CheerSongTabs from '@/components/karaoke/CheerSongTabs';
import SongList from '@/components/karaoke/SongList';
import KaraokePlayer from '@/components/karaoke/KaraokePlayer';
import BunjangButton from '@/components/merch/BunjangButton';
import { Home, Mic2 } from 'lucide-react';

type TabType = 'team' | 'player';

export default function KaraokePage() {
  const router = useRouter();
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>('hanwha');
  const [activeTab, setActiveTab] = useState<TabType>('team');
  const [selectedSong, setSelectedSong] = useState<CheerSong | null>(null);

  const selectedTeam = selectedTeamId
    ? kboTeams.find((t) => t.id === selectedTeamId)
    : null;
  const cheerSongs = selectedTeamId
    ? getCheerSongsByTeamId(selectedTeamId)
    : null;

  const currentSongs =
    activeTab === 'team'
      ? cheerSongs?.teamSongs || []
      : cheerSongs?.playerSongs || [];

  const handleSelectTeam = (teamId: string) => {
    setSelectedTeamId(teamId);
    setSelectedSong(null);
    setActiveTab('team');
  };

  const handleSelectSong = (song: CheerSong) => {
    setSelectedSong(song);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 pb-24">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mic2 size={40} className="text-pink-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              KBO{' '}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                노래방
              </span>
            </h1>
          </div>
          <p className="text-gray-600">
            구단 응원가 가사를 보면서 따라 불러보세요! 🎤
          </p>
        </motion.div>

        {/* 팀 선택 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <TeamSelector
            selectedTeamId={selectedTeamId}
            onSelectTeam={handleSelectTeam}
          />
        </motion.div>

        {/* 메인 컨텐츠 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 왼쪽: 곡 목록 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-4">
              {/* 선택된 팀 표시 */}
              {selectedTeam && (
                <div className="flex items-center gap-3 mb-4 pb-4 border-b-2 border-gray-100">
                  <span className="text-4xl">{selectedTeam.logo}</span>
                  <div>
                    <h2 className="font-bold text-gray-800">{selectedTeam.name}</h2>
                    <p className="text-sm text-gray-500">응원가 모음</p>
                  </div>
                </div>
              )}

              {/* 탭 */}
              <div className="mb-4">
                <CheerSongTabs
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                  teamColor={selectedTeam?.color}
                />
              </div>

              {/* 곡 목록 */}
              <div className="max-h-[400px] overflow-y-auto">
                <SongList
                  songs={currentSongs}
                  selectedSongId={selectedSong?.id || null}
                  onSelectSong={handleSelectSong}
                  teamColor={selectedTeam?.color}
                />
              </div>
            </Card>
          </motion.div>

          {/* 오른쪽: 플레이어 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card>
              <KaraokePlayer
                song={selectedSong}
                teamColor={selectedTeam?.color}
                teamName={selectedTeam?.name}
                onClose={() => setSelectedSong(null)}
              />
            </Card>
          </motion.div>
        </div>

        {/* 홈 버튼 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 hover:border-pink-300 rounded-xl font-semibold text-gray-700 hover:text-pink-600 transition-all"
          >
            <Home size={20} />
            홈으로 돌아가기
          </button>
        </motion.div>
      </div>

      {/* 번개장터 하단 버튼 */}
      {selectedTeam && (
        <BunjangButton
          context={{
            type: selectedSong?.type === 'player' ? 'player' : 'team',
            teamId: selectedTeam.id,
            teamName: selectedTeam.name,
            playerName: selectedSong?.playerName,
          }}
        />
      )}
    </div>
  );
}
