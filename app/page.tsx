'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Card from '@/components/Card';
import BaseballAnimation from '@/components/BaseballAnimation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            KBO-TI
          </h1>
          <p className="text-2xl text-gray-700 mb-2">
            내 운명의 야구팀 찾기 ⚾💖
          </p>
          <p className="text-gray-500">
            2026 뉴비를 위한 찐 맞춤 매칭
          </p>
        </motion.div>

        <Card className="mb-8">
          <div className="text-center space-y-6">
            <BaseballAnimation />
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                야구 처음이라 어떤 팀 응원할지 모르겠다고? 🤔
              </h2>
              <p className="text-gray-600 leading-relaxed">
                걱정 마! 20개의 귀여운 밸런스 게임으로<br />
                너랑 찰떡궁합인 KBO 팀을 찾아줄게 💕
              </p>
            </div>

            <div className="bg-pink-50 rounded-2xl p-6 space-y-3 text-left">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-semibold text-gray-800">AI 맞춤 분석</h3>
                  <p className="text-sm text-gray-600">너의 성향을 딥하게 분석해줘</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚾</span>
                <div>
                  <h3 className="font-semibold text-gray-800">KBO 10개 구단</h3>
                  <p className="text-sm text-gray-600">각 팀의 밈과 문화까지 소개</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎵</span>
                <div>
                  <h3 className="font-semibold text-gray-800">응원가 & 패션</h3>
                  <p className="text-sm text-gray-600">유니폼 스타일도 알려줄게</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                onClick={() => router.push('/quiz')}
                className="w-full"
              >
                시작하기 💖
              </Button>
              <p className="text-xs text-gray-400 mt-4">
                소요 시간: 약 3분 ⏱️
              </p>
            </div>
          </div>
        </Card>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-center text-sm text-gray-500"
        >
          <p>Made with 💕 for KBO Newbies</p>
        </motion.div>
      </div>
    </div>
  );
}
