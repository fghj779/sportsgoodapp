'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Card from '@/components/Card';
import BaseballAnimation from '@/components/BaseballAnimation';
import { kboTeams } from '@/data/teams';
import { Sparkles, Mail, BookOpen, TrendingUp, X, Mic2 } from 'lucide-react';
import dynamic from 'next/dynamic';

const RankingChart = dynamic(() => import('@/components/RankingChart'), { ssr: false });
import BaseballRules from '@/components/BaseballRules';
import { useState } from 'react';

// 팀 기본 정보 데이터
const teamBasicInfo: Record<string, { founded: string; wins: string; lastWin: string }> = {
  kia: { founded: '1982', wins: '12회', lastWin: '2024' },
  samsung: { founded: '1982', wins: '8회', lastWin: '2014' },
  doosan: { founded: '1982', wins: '6회', lastWin: '2019' },
  ssg: { founded: '2000', wins: '5회', lastWin: '2022' },
  lg: { founded: '1982', wins: '4회', lastWin: '2025' },
  lotte: { founded: '1982', wins: '2회', lastWin: '1992' },
  hanwha: { founded: '1986', wins: '1회', lastWin: '1999' },
  nc: { founded: '2011', wins: '1회', lastWin: '2020' },
  kt: { founded: '2013', wins: '1회', lastWin: '2021' },
  kiwoom: { founded: '2008', wins: '0회', lastWin: '-' },
};

export default function Home() {
  const router = useRouter();
  const [showRules, setShowRules] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showRanking, setShowRanking] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const selectedTeamData = selectedTeam ? kboTeams.find(t => t.id === selectedTeam) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 애니메이션 */}
        <div className="text-center">
          <BaseballAnimation />
        </div>

        {/* 제목 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
            ⚾ KBO 신입팬
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
              스타터팩
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            20개의 질문으로 찾는 나의 찰떡 야구팀! 💕
          </p>
          <p className="text-sm text-gray-500">
            AI가 너의 성향을 분석해서 딱 맞는 KBO 팀을 추천해줄게!
          </p>
        </motion.div>

        {/* 시작 버튼 & 야구룰 버튼 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => router.push('/quiz')}
            className="text-xl px-12 py-6 shadow-2xl hover:shadow-pink-300/50 w-full sm:w-auto"
          >
            <Sparkles className="mr-2" size={24} />
            시작하기
          </Button>
          <Button
            variant="secondary"
            onClick={() => setShowRules(!showRules)}
            className="text-xl px-12 py-6 shadow-2xl w-full sm:w-auto bg-white border-2 border-gray-300 hover:border-pink-300"
          >
            <BookOpen className="mr-2" size={24} />
            야구룰 알아보기
          </Button>
        </motion.div>

        {/* 야구룰 가이드 - 영상 + 설명 같이 */}
        <AnimatePresence>
          {showRules && (
            <motion.div
              id="baseball-rules"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden space-y-6"
            >
              {/* 유튜브 영상 */}
              <Card>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">🎬 3분만에 배우는 야구!</h2>
                  <button
                    onClick={() => setShowRules(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} className="text-gray-500" />
                  </button>
                </div>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ZcD8LOTvyKU"
                    title="야구 룰 기초"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-3">
                  🎧 영상을 보며 야구 기본 룰을 익혀보세요!
                </p>
              </Card>

              {/* 기존 야구룰 텍스트 설명 */}
              <BaseballRules />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 순위 변동 & 노래방 버튼 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <button
            onClick={() => setShowRanking(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-purple-200 hover:border-purple-400 text-purple-600 font-semibold rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <TrendingUp size={20} />
            순위 변동 보기 (2015~2025)
          </button>
          <button
            onClick={() => router.push('/karaoke')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl shadow-sm hover:shadow-md hover:from-pink-600 hover:to-purple-600 transition-all"
          >
            <Mic2 size={20} />
            응원가 노래방
          </button>
        </motion.div>

        {/* 순위 변동 모달 */}
        <AnimatePresence>
          {showRanking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowRanking(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-6 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-purple-500" size={24} />
                    <h3 className="text-xl font-bold text-gray-800">KBO 순위 변동 (2015~2025)</h3>
                  </div>
                  <button
                    onClick={() => setShowRanking(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>
                <RankingChart />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 10개 구단 버튼 - 클릭시 해당 팀 정보 표시 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-2xl">⚾</span>
              <h2 className="text-2xl font-bold text-gray-800">
                구단 먼저 알아보기
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {kboTeams.map((team, idx) => (
                <motion.button
                  key={team.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTeam(team.id)}
                  className="p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-pink-300 transition-all"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">{team.logo}</div>
                    <div className="text-sm font-bold text-gray-800">
                      {team.name}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
            <p className="text-center text-sm text-gray-400 mt-4">
              👆 각 구단을 클릭해서 기본 정보를 확인해보세요!
            </p>
          </Card>
        </motion.div>

        {/* 팀 정보 팝업 모달 */}
        <AnimatePresence>
          {selectedTeam && selectedTeamData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedTeam(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{selectedTeamData.logo}</span>
                    <h3 className="text-xl font-bold text-gray-800">{selectedTeamData.name}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedTeam(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>

                {/* 팀 기본 정보 테이블 */}
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">📅 창단</span>
                    <span className="font-semibold text-gray-800">{teamBasicInfo[selectedTeam].founded}년</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">🏆 우승</span>
                    <span className="font-semibold text-pink-600">{teamBasicInfo[selectedTeam].wins}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">🥇 최근 우승</span>
                    <span className="font-semibold text-gray-800">{teamBasicInfo[selectedTeam].lastWin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">📍 연고지</span>
                    <span className="font-semibold text-gray-800">{selectedTeamData.homeCity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">🎭 마스코트</span>
                    <span className="font-semibold text-gray-800">{selectedTeamData.mascot}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const params = new URLSearchParams({
                      teamId: selectedTeam,
                      compatibility: '95',
                      message: encodeURIComponent(`${selectedTeamData.name}에 대해 더 알아보세요! 💕`)
                    });
                    router.push(`/result?${params.toString()}`);
                  }}
                  className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg"
                >
                  📚 더 자세히 알아보기
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 푸터 */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center space-y-4 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <button
              onClick={() => setShowContact(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-purple-600 transition-colors"
            >
              <Mail size={16} />
              제휴문의
            </button>
            <span className="text-gray-300">|</span>
            <a
              href="/privacy"
              className="text-gray-500 hover:text-purple-600 transition-colors"
            >
              개인정보처리방침
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="/terms"
              className="text-gray-500 hover:text-purple-600 transition-colors"
            >
              이용약관
            </a>
          </div>
          <p className="text-xs text-gray-400">
            KBO-TI는 KBO와 공식적으로 제휴하지 않은 팬 서비스입니다.
          </p>
        </motion.footer>

        {/* 제휴문의 모달 */}
        <AnimatePresence>
          {showContact && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowContact(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Mail className="text-purple-500" size={24} />
                    <h3 className="text-xl font-bold text-gray-800">제휴문의</h3>
                  </div>
                  <button
                    onClick={() => setShowContact(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>
                <form
                  action="https://formspree.io/f/xlgbzgow"
                  method="POST"
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      이메일 주소
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      문의 내용
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      placeholder="제휴 관련 문의 내용을 작성해주세요..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
                  >
                    📧 문의하기
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
