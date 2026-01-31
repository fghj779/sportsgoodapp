'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { kboTeams } from '@/data/teams';

export default function ShareImagePage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const teamId = params.teamId as string;
  const compatibility = searchParams.get('compatibility') || '95';

  const team = kboTeams.find(t => t.id === teamId);

  if (!team) {
    return <div>팀을 찾을 수 없습니다</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center">
        {/* 팀 컬러 바 */}
        <div
          className="h-2 -mx-8 -mt-8 mb-6 rounded-t-3xl"
          style={{ backgroundColor: team.color }}
        />

        {/* 헤더 */}
        <p className="text-purple-600 font-semibold mb-1">KBO-TI 결과</p>
        <p className="text-gray-500 text-sm mb-6">내 운명의 야구팀 찾기</p>

        {/* 팀 로고 */}
        <div className="text-8xl mb-4">{team.logo}</div>

        {/* 팀 이름 */}
        <h1 className="text-3xl font-bold text-gray-800 mb-1">{team.name}</h1>
        <p className="text-gray-500 mb-6">{team.englishName}</p>

        {/* 궁합도 */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-pink-500">💖</span>
            <span className="text-gray-700 font-semibold">궁합도</span>
            <span className="text-pink-500">💖</span>
          </div>
          <div className="text-5xl font-bold text-pink-500 mb-3">
            {compatibility}%
          </div>
          <div className="h-3 bg-white rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-400 to-purple-400"
              style={{ width: `${compatibility}%` }}
            />
          </div>
        </div>

        {/* 메시지 */}
        <p className="text-gray-600 mb-4">나와 찰떡인 야구팀을 찾았어요!</p>

        {/* 푸터 */}
        <div className="pt-4 border-t border-gray-100">
          <p className="text-gray-400 text-sm">kbo-ti.vercel.app</p>
          <p className="text-purple-500 text-sm mt-1">나도 테스트하러 가기! ⚾</p>
        </div>
      </div>

      {/* 저장 안내 */}
      <div className="fixed bottom-4 left-4 right-4 bg-black/80 text-white p-4 rounded-xl text-center">
        <p className="font-bold mb-1">📸 이미지 저장 방법</p>
        <p className="text-sm">스크린샷을 찍거나, 이미지를 길게 눌러 저장하세요!</p>
      </div>
    </div>
  );
}
