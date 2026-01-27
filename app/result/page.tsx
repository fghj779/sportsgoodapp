'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { MatchResult } from '@/types';
import Button from '@/components/Button';
import Card from '@/components/Card';
import BaseballRules from '@/components/BaseballRules';
import { Share2, Home, RotateCcw, Heart, MapPin, Shirt, Music, Trophy, Star, Users, History, Palette } from 'lucide-react';

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<MatchResult | null>(null);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    const savedResult = localStorage.getItem('matchResult');
    if (savedResult) {
      setResult(JSON.parse(savedResult));
    } else {
      router.push('/');
    }
  }, [router]);

  const handleShare = async () => {
    const shareText = `나는 ${result?.team.name} 팬! ⚾💖\nKBO-TI로 내 운명의 야구팀을 찾았어요!\n\n궁합도: ${result?.compatibility}%`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'KBO-TI 결과',
          text: shareText,
          url: window.location.origin,
        });
      } catch (err) {
        console.log('공유 취소됨');
      }
    } else {
      navigator.clipboard.writeText(shareText);
      alert('결과가 클립보드에 복사되었어요! 📋');
    }
  };

  const handleRetry = () => {
    localStorage.removeItem('matchResult');
    router.push('/quiz');
  };


  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-6xl mb-4"
          >
            ⚾
          </motion.div>
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  const { team, compatibility, aiMessage } = result;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* 메인 결과 카드 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: team.color }} />
            
            {/* 상단 로고 */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="pt-4"
            >
              <div className="text-8xl mb-4">{team.logo}</div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {team.name}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {team.englishName}
              </p>
            </motion.div>

            {/* 궁합도 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Heart className="text-pink-500" fill="currentColor" />
                <span className="text-lg font-semibold text-gray-700">궁합도</span>
                <Heart className="text-pink-500" fill="currentColor" />
              </div>
              <div className="text-5xl font-bold text-pink-500 mb-2">
                {compatibility}%
              </div>
              <div className="h-3 bg-white rounded-full overflow-hidden max-w-md mx-auto">
                <motion.div
                  className="h-full bg-gradient-to-r from-pink-400 to-purple-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${compatibility}%` }}
                  transition={{ delay: 0.8, duration: 1 }}
                />
              </div>
            </motion.div>

            {/* AI 메시지 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-2xl p-6 border-2 border-pink-200"
            >
              <div className="text-2xl mb-4">✨</div>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {aiMessage}
              </p>
            </motion.div>
          </Card>
        </motion.div>

        {/* 팀 분위기 & 컬러 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Palette className="text-purple-500" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">팀 컬러 & 분위기</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div 
                  className="w-20 h-20 rounded-full shadow-lg"
                  style={{ backgroundColor: team.color }}
                />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">{team.uniformStyle}</p>
                  <p className="text-gray-600 text-sm">{team.fashion}</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4">
                <p className="text-gray-700">{team.vibe}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* 스타 플레이어 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Star className="text-yellow-500" size={28} fill="currentColor" />
              <h2 className="text-2xl font-bold text-gray-800">현재 스타 플레이어</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {team.starPlayers.map((player, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + idx * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4"
                >
                  <div className="text-3xl mb-2">⭐</div>
                  <h3 className="font-bold text-gray-800 text-lg">{player.name}</h3>
                  <p className="text-sm text-purple-600 mb-2">{player.position}</p>
                  <p className="text-sm text-gray-600">{player.description}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* 레전드 선수 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-amber-500" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">레전드 선수</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {team.legends.map((legend, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + idx * 0.1 }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4"
                >
                  <div className="text-3xl mb-2">🏆</div>
                  <h3 className="font-bold text-gray-800 text-lg">{legend.name}</h3>
                  <p className="text-sm text-amber-600 mb-2">{legend.position}</p>
                  <p className="text-sm text-gray-600">{legend.description}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* 팀 역사 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <History className="text-indigo-500" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">팀 역사</h2>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 rounded-xl p-4 text-center">
                  <p className="text-sm text-indigo-600 mb-1">창단</p>
                  <p className="text-2xl font-bold text-gray-800">{team.history.founded}</p>
                </div>
                <div className="bg-pink-50 rounded-xl p-4 text-center">
                  <p className="text-sm text-pink-600 mb-1">우승 횟수</p>
                  <p className="text-2xl font-bold text-gray-800">{team.history.championships}회</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">최근 성적</h3>
                <ul className="space-y-2">
                  {team.history.recentAchievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-pink-500">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">주요 이벤트</h3>
                <ul className="space-y-2">
                  {team.history.majorEvents.map((event, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-purple-500">•</span>
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* 기존 팀 상세 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Card>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              더 알아보기 📚
            </h2>

            <div className="space-y-6">
              {/* 구단 설명 */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-2xl">{team.mascot}</div>
                  <h3 className="font-semibold text-gray-800">팀 소개</h3>
                </div>
                <p className="text-gray-700">{team.description}</p>
                <p className="text-gray-600 text-sm mt-2 italic">"{team.meme}"</p>
              </div>

              {/* 홈구장 & 연고지 */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <MapPin className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-2">홈구장 & 연고지</h3>
                  <p className="text-gray-700 mb-1">🏟️ {team.stadium}</p>
                  <p className="text-sm text-blue-600">📍 연고지: {team.homeCity}</p>
                </div>
              </div>

              {/* 유니폼 스타일 */}
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                <Shirt className="text-purple-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">유니폼 패션</h3>
                  <p className="text-gray-700 mb-2">{team.uniformStyle}</p>
                  <p className="text-sm text-gray-600">{team.fashion}</p>
                </div>
              </div>

              {/* 응원가 */}
              <div className="p-4 bg-pink-50 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Music className="text-pink-500" size={24} />
                  <h3 className="font-semibold text-gray-800">응원가</h3>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={team.cheerSongUrl.replace('watch?v=', 'embed/')}
                    title="응원가"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <a
                  href={team.cheerSongUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-4 py-2 bg-pink-500 text-white rounded-full text-sm hover:bg-pink-600 transition-colors"
                >
                  유튜브에서 보기 🎵
                </a>
              </div>

              {/* 키워드 태그 */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">팀 키워드</h3>
                <div className="flex flex-wrap gap-2">
                  {team.keywords.map((keyword, index) => (
                    <motion.span
                      key={keyword}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.6 + index * 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      #{keyword}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* 야구 룰 가이드 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="text-center mb-4">
              <button
                onClick={() => setShowRules(!showRules)}
                className="text-2xl font-bold text-gray-800 hover:text-pink-500 transition-colors"
              >
                {showRules ? '▼ 야구 룰 가이드 접기' : '▶ 야구 룰 가이드 보기'}
              </button>
              <p className="text-gray-600 text-sm mt-2">
                야구가 처음이라면 꼭 읽어보세요! ⚾
              </p>
            </div>
          </Card>
          
          {showRules && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4"
            >
              <BaseballRules />
            </motion.div>
          )}
        </motion.div>

        {/* 액션 버튼들 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <Button
            variant="secondary"
            onClick={handleShare}
            className="flex items-center justify-center gap-2"
          >
            <Share2 size={20} />
            <span>결과 공유하기</span>
          </Button>
          
          <Button
            variant="secondary"
            onClick={handleRetry}
            className="flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} />
            <span>다시 해보기</span>
          </Button>
          
          <Button
            variant="secondary"
            onClick={() => router.push('/')}
            className="flex items-center justify-center gap-2"
          >
            <Home size={20} />
            <span>홈으로</span>
          </Button>
        </motion.div>

        {/* 푸터 메시지 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
          className="text-center space-y-2"
        >
          <p className="text-gray-600">
            이제 {team.name} 경기 보러 가볼까? ⚾✨
          </p>
          <p className="text-sm text-gray-500">
            야구장에서 만나요! 💕
          </p>
        </motion.div>
      </div>
    </div>
  );
}
