'use client';

import { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { MatchResult } from '@/types';
import { kboTeams } from '@/data/teams';
import Button from '@/components/Button';
import Card from '@/components/Card';
import BaseballRules from '@/components/BaseballRules';
import { Share2, Home, RotateCcw, Heart, MapPin, Shirt, Music, Trophy, Star, Users, History, Palette, Mic2, Sparkles } from 'lucide-react';
import YouTubeAutoPlayer from '@/components/YouTubeAutoPlayer';
import MerchBlock from '@/components/merch/MerchBlock';
import DepthChart from '@/components/DepthChart';
import { depthCharts } from '@/data/depthCharts';
import ShareModal from '@/components/share/ShareModal';

function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [result, setResult] = useState<MatchResult | null>(null);
  const [showRules, setShowRules] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    // URL 파라미터에서 결과 가져오기 (localStorage 대신!)
    const teamId = searchParams.get('teamId');
    const compatibility = searchParams.get('compatibility');
    const message = searchParams.get('message');

    if (!teamId || !compatibility || !message) {
      // 파라미터가 없으면 크롤러 친화적 폴백 콘텐츠 표시
      return;
    }

    // 팀 정보 찾기
    const team = kboTeams.find(t => t.id === teamId);
    if (!team) {
      router.push('/');
      return;
    }

    // 결과 설정
    setResult({
      team,
      compatibility: parseInt(compatibility),
      aiMessage: decodeURIComponent(message),
    });
  }, [router, searchParams]);

  const handleRetry = () => {
    // localStorage 사용 안 함!
    router.push('/quiz');
  };


  if (!result) {
    // 크롤러 친화적 폴백: 퀴즈 소개 + 팀 그리드 + CTA
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* 퀴즈 소개 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              KBO-TI 결과 페이지
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              20개의 질문으로 찾는 나의 찰떡 야구팀! AI가 너의 성향을 분석해서 딱 맞는 KBO 팀을 추천해줄게!
            </p>
          </motion.div>

          {/* KBO 10개 구단 그리드 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
              KBO 10개 구단
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {kboTeams.map((t) => (
                <div
                  key={t.id}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-2">{t.logo}</div>
                  <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.homeCity}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <button
              onClick={() => router.push('/quiz')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg rounded-2xl hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
            >
              <Sparkles size={24} />
              나의 찰떡 야구팀 찾으러 가기
            </button>
          </motion.div>
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

            {/* 상단 팀 사진 - 누끼 제거된 큰 이미지 */}
            <motion.div
              initial={{ scale: 0, y: -50 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
              className="pt-4 relative"
            >
              {/* 팀 사진 배경 효과 */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />

              {/* 팀 사진 (fallback: 이모지) */}
              <div className="relative z-10 flex justify-center items-center mb-6">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  {/* 빛나는 효과 */}
                  <div className="absolute inset-0 blur-3xl opacity-30 rounded-full" style={{ backgroundColor: team.color }} />

                  {/* 실제 이미지 or 이모지 */}
                  <div className="relative text-9xl md:text-[12rem] filter drop-shadow-2xl">
                    {team.logo}
                  </div>
                </motion.div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
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

              {/* 주요 이벤트 */}
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

        {/* 2026 시즌 뎁스차트 */}
        {depthCharts[team.id] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <DepthChart
              depthChart={depthCharts[team.id]}
              teamColor={team.color}
              teamName={team.name}
            />
          </motion.div>
        )}

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

              {/* 성향별 꿀팁 */}
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-300">
                <span className="text-3xl">💡</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-2">이 팀 꿀팁!</h3>
                  <p className="text-gray-700 mb-2">{team.personality.tip}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {team.personality.keywords.map((keyword, idx) => (
                      <span key={idx} className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium">
                        #{keyword}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-orange-600">✨ {team.personality.bestFor}</p>
                </div>
              </div>

              {/* 교통편 */}
              {team.transportation && (
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                  <span className="text-2xl">🚇</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-3">경기장 가는 법</h3>
                    {team.transportation.subway && (
                      <div className="mb-2">
                        <p className="text-sm font-semibold text-green-600">🚇 지하철</p>
                        <p className="text-gray-700 text-sm">
                          {team.transportation.subway.line} {team.transportation.subway.station} {team.transportation.subway.exit} ({team.transportation.subway.walkTime})
                        </p>
                      </div>
                    )}
                    {team.transportation.ktx && (
                      <div className="mb-2">
                        <p className="text-sm font-semibold text-blue-600">🚄 KTX</p>
                        <p className="text-gray-700 text-sm">
                          {team.transportation.ktx.station} → {team.transportation.ktx.transport}
                        </p>
                      </div>
                    )}
                    {team.transportation.parking && (
                      <p className="text-xs text-gray-500 mt-2">🅿️ {team.transportation.parking}</p>
                    )}
                  </div>
                </div>
              )}

              {/* 좌석 가격 */}
              {team.seatPrices && (
                <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-xl">
                  <span className="text-2xl">🎫</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-3">좌석별 가격 (2025 시즌)</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="text-left text-gray-600">
                            <th className="py-1.5 pr-2 font-medium">좌석</th>
                            <th className="py-1.5 px-2 font-medium">주중</th>
                            <th className="py-1.5 px-2 font-medium">주말</th>
                          </tr>
                        </thead>
                        <tbody>
                          {team.seatPrices.seats.map((seat, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white/60' : ''}>
                              <td className="py-1.5 pr-2 font-medium text-gray-800">
                                {seat.name}
                                {seat.note && <span className="block text-xs text-gray-400 font-normal">{seat.note}</span>}
                              </td>
                              <td className="py-1.5 px-2 text-gray-700">{seat.weekday}</td>
                              <td className="py-1.5 px-2 text-gray-700 font-semibold">{seat.weekend}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {team.seatPrices.note && (
                      <p className="text-xs text-amber-600 mt-2">{team.seatPrices.note}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-2">
                      💳 예매: {team.ticketPlatform}
                    </p>
                  </div>
                </div>
              )}

              {/* 티켓 예매 버튼 */}
              <div className="text-center">
                <a
                  href={team.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-4 px-6 rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
                >
                  🎫 {team.name} 티켓 예매하기
                </a>
                <p className="text-xs text-gray-500 mt-2">
                  📱 {team.ticketPlatform} |
                  <a href={team.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">
                    공식 홈페이지
                  </a>
                </p>
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

              {/* 응원가 - 자동 재생 */}
              <div className="p-4 bg-pink-50 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Music className="text-pink-500" size={24} />
                  <h3 className="font-semibold text-gray-800">응원가 🎵</h3>
                </div>
                <YouTubeAutoPlayer videoUrl={team.cheerSongUrl} teamColor={team.color} />
                <a
                  href={team.cheerSongUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-4 py-2 bg-pink-500 text-white rounded-full text-sm hover:bg-pink-600 transition-colors w-full text-center"
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

        {/* 번개장터 굿즈 블록 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.65 }}
        >
          <MerchBlock
            context={{
              type: 'team',
              teamId: team.id,
              teamName: team.name,
            }}
            title={`${team.name} 굿즈 구매하기`}
            description="번개장터에서 유니폼, 모자, 응원도구를 만나보세요!"
          />
        </motion.div>

        {/* 노래방 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.68 }}
        >
          <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mic2 size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-1">응원가 따라부르기</h3>
                <p className="text-sm text-gray-600">
                  {team.name} 응원가 가사를 보면서 연습해보세요!
                </p>
              </div>
            </div>
            <button
              onClick={() => router.push('/karaoke')}
              className="w-full mt-4 py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all"
            >
              🎤 노래방 가기
            </button>
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

        {/* 공유 버튼 (강조) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">결과를 공유해보세요!</h3>
              <p className="text-sm text-gray-600">친구들과 함께 야구장 가요 ⚾</p>
            </div>
            <button
              onClick={() => setShowShareModal(true)}
              className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all"
            >
              <Share2 size={24} />
              친구에게 공유하기
            </button>
          </Card>
        </motion.div>

        {/* 액션 버튼들 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.85 }}
          className="grid grid-cols-2 gap-4"
        >
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

        {/* 공유 모달 */}
        <ShareModal
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
          team={team}
          compatibility={compatibility}
          aiMessage={aiMessage}
        />

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

        {/* 푸터 */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
          className="text-center space-y-4 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
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
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-6xl mb-4"
          >
            ⚾
          </motion.div>
          <p className="text-gray-600">결과 불러오는 중...</p>
        </div>
      </div>
    }>
      <ResultContent />
    </Suspense>
  );
}
