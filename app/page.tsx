'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Card from '@/components/Card';
import BaseballAnimation from '@/components/BaseballAnimation';
import { kboTeams } from '@/data/teams';
import { Sparkles, Mail } from 'lucide-react';

export default function Home() {
  const router = useRouter();

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

        {/* 시작 버튼 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Button
            onClick={() => router.push('/quiz')}
            className="text-xl px-12 py-6 shadow-2xl hover:shadow-pink-300/50"
          >
            <Sparkles className="mr-2" size={24} />
            시작하기
          </Button>
        </motion.div>

        {/* 10개 구단 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              KBO 10개 구단 둘러보기 ⚾
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {kboTeams.map((team, idx) => (
                <motion.button
                  key={team.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const params = new URLSearchParams({
                      teamId: team.id,
                      compatibility: '95',
                      message: encodeURIComponent(`${team.name}에 대해 궁금하신가요? 테스트를 통해 더 자세히 알아보세요! 💕`)
                    });
                    router.push(`/result?${params.toString()}`);
                  }}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all border-2 border-transparent hover:border-pink-200"
                  style={{ borderColor: 'transparent' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = team.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  <div className="text-4xl mb-2">{team.logo}</div>
                  <div className="text-xs font-semibold text-gray-700 text-center leading-tight">
                    {team.name}
                  </div>
                </motion.button>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* 하단 설명 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-sm text-gray-500 space-y-2"
        >
          <p>🎯 20s 여성을 위한 야구 입문 가이드</p>
          <p>🤖 AI 기반 팀 매칭 시스템</p>
          <p>⚡ 소요 시간: 약 3분</p>
        </motion.div>

        {/* 비즈니스 문의 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Mail className="text-purple-500" size={24} />
              <h3 className="text-xl font-bold text-gray-800">제휴문의</h3>
            </div>
            <p className="text-gray-600 mb-4">
              비즈니스 제휴나 협업 문의가 있으시면 언제든지 연락주세요! 💼
            </p>
            <a
              href="mailto:contact@sportsgoodapp.com"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
            >
              📧 이메일 보내기
            </a>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
