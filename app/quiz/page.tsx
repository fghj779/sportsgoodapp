'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { questions } from '@/data/questions';
import { Answer } from '@/types';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { Sparkles, ArrowLeft } from 'lucide-react';

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = async (selected: 'A' | 'B') => {
    const newAnswers = [
      ...answers,
      { questionId: questions[currentQuestion].id, selected }
    ];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 모든 질문 완료 - AI 매칭 시작
      setIsLoading(true);
      try {
        const response = await fetch('/api/match', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answers: newAnswers }),
        });

        const result = await response.json();

        if (!response.ok) {
          // 서버에서 반환한 에러 메시지 사용
          throw new Error(result.error || '매칭에 실패했습니다.');
        }
        
        // 결과 페이지로 이동
        localStorage.setItem('matchResult', JSON.stringify(result));
        router.push('/result');
      } catch (error: any) {
        console.error('매칭 API 에러:', error);
        
        // 사용자 친화적인 에러 메시지
        let errorMessage = '매칭 중 오류가 발생했습니다. 😢\n';
        
        if (error.message.includes('API 키')) {
          errorMessage += 'OpenAI API 키를 확인해주세요.';
        } else if (error.message.includes('사용량')) {
          errorMessage += '잠시 후 다시 시도해주세요.';
        } else {
          errorMessage += '다시 시도해주세요!';
        }
        
        alert(errorMessage);
        setIsLoading(false);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center p-4">
        <Card className="text-center space-y-6 max-w-md">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-8xl mx-auto"
          >
            ⚾
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-800">
            AI가 열심히 분석 중...
          </h2>
          <p className="text-gray-600">
            너한테 찰떡인 팀을 찾고 있어! 💕
          </p>
          <div className="flex gap-2 justify-center">
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-3 h-3 bg-pink-400 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              className="w-3 h-3 bg-purple-400 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              className="w-3 h-3 bg-blue-400 rounded-full"
            />
          </div>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* 헤더 */}
        <div className="mb-6">
          <button
            onClick={() => currentQuestion === 0 ? router.push('/') : handlePrevious()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>이전</span>
          </button>
        </div>

        {/* 프로그레스 바 */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-700">
              {currentQuestion + 1} / {questions.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-400 to-purple-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* 질문 카드 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <div className="text-center space-y-8">
                {/* 이모지 */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="text-7xl"
                >
                  {question.emoji}
                </motion.div>

                {/* 질문 */}
                <div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="text-pink-400" size={20} />
                    <span className="text-sm font-semibold text-pink-500 uppercase">
                      {question.category}
                    </span>
                    <Sparkles className="text-pink-400" size={20} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {question.question}
                  </h2>
                </div>

                {/* 선택지 */}
                <div className="space-y-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer('A')}
                    className="w-full p-6 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    {question.optionA}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer('B')}
                    className="w-full p-6 bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    {question.optionB}
                  </motion.button>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* 힌트 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-500 mt-6"
        >
          솔직하게 답할수록 정확해져! 💯
        </motion.p>
      </div>
    </div>
  );
}
