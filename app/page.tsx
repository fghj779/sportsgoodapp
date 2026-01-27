'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Card from '@/components/Card';
import BaseballAnimation from '@/components/BaseballAnimation';
import { kboTeams } from '@/data/teams';
import { Sparkles, Mail, BookOpen, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [showRules, setShowRules] = useState(false);
  const [showContact, setShowContact] = useState(false);

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

        {/* 야구룰 유튜브 영상 */}
        <AnimatePresence>
          {showRules && (
            <motion.div
              id="baseball-rules"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <Card>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">⚾ 야구 룰 기초!</h2>
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
                  🎬 야구가 처음이라면 이 영상부터 시작해보세요!
                </p>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 10개 구단 미리보기 (간소화) */}
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
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + idx * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-pink-200 transition-all cursor-default"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">{team.logo}</div>
                    <div className="text-sm font-bold text-gray-800 mb-1">
                      {team.name}
                    </div>
                    <div className="text-xs text-gray-500 space-y-0.5">
                      <p>📍 {team.homeCity}</p>
                      <p>🏆 우승 {team.history.championships}회</p>
                      <p>{team.mascot}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-400 mt-4">
              테스트를 완료하면 각 팀에 대해 더 자세히 알아볼 수 있어요! 💕
            </p>
          </Card>
        </motion.div>

        {/* 제휴문의 작은 버튼 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <button
            onClick={() => setShowContact(true)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-purple-600 transition-colors"
          >
            <Mail size={16} />
            제휴문의
          </button>
        </motion.div>

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
