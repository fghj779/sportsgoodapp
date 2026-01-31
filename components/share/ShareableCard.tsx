'use client';

import { forwardRef } from 'react';
import { KBOTeam } from '@/types';

interface ShareableCardProps {
  team: KBOTeam;
  compatibility: number;
  aiMessage: string;
}

const ShareableCard = forwardRef<HTMLDivElement, ShareableCardProps>(
  ({ team, compatibility, aiMessage }, ref) => {
    return (
      <div
        ref={ref}
        className="w-[360px] bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-6 rounded-3xl"
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
      >
        {/* 헤더 */}
        <div className="text-center mb-4">
          <p className="text-sm text-purple-600 font-semibold mb-1">KBO-TI 결과</p>
          <p className="text-xs text-gray-500">내 운명의 야구팀 찾기</p>
        </div>

        {/* 메인 카드 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg relative overflow-hidden">
          {/* 팀 컬러 바 */}
          <div
            className="absolute top-0 left-0 w-full h-2"
            style={{ backgroundColor: team.color }}
          />

          {/* 팀 로고 & 이름 */}
          <div className="text-center pt-2 mb-4">
            <div className="text-7xl mb-3">{team.logo}</div>
            <h2 className="text-2xl font-bold text-gray-800">{team.name}</h2>
            <p className="text-sm text-gray-500">{team.englishName}</p>
          </div>

          {/* 궁합도 */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-pink-500">💖</span>
              <span className="text-sm font-semibold text-gray-700">궁합도</span>
              <span className="text-pink-500">💖</span>
            </div>
            <div className="text-4xl font-bold text-pink-500 text-center mb-2">
              {compatibility}%
            </div>
            <div className="h-2 bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-400 to-purple-400"
                style={{ width: `${compatibility}%` }}
              />
            </div>
          </div>

          {/* AI 메시지 (축약) */}
          <div className="bg-gray-50 rounded-xl p-4 border border-pink-100">
            <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
              {aiMessage.length > 100 ? aiMessage.substring(0, 100) + '...' : aiMessage}
            </p>
          </div>
        </div>

        {/* 푸터 */}
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">kbo-ti.vercel.app</p>
          <p className="text-xs text-purple-600 mt-1">나도 테스트하러 가기! ⚾</p>
        </div>
      </div>
    );
  }
);

ShareableCard.displayName = 'ShareableCard';

export default ShareableCard;
