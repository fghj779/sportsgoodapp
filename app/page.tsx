'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import BaseballAnimation from '@/components/BaseballAnimation';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 애니메이션 */}
        <BaseballAnimation />

        {/* 제목 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
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
        >
          <Button
            onClick={() => router.push('/quiz')}
            className="text-xl px-12 py-6 shadow-2xl hover:shadow-pink-300/50"
          >
            <Sparkles className="mr-2" size={24} />
            시작하기
          </Button>
        </motion.div>

        {/* 하단 설명 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-sm text-gray-500 space-y-2"
        >
          <p>🎯 20s 여성을 위한 야구 입문 가이드</p>
          <p>🤖 AI 기반 팀 매칭 시스템</p>
          <p>⚡ 소요 시간: 약 3분</p>
        </motion.div>
      </div>
    </div>
  );
}
