'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { kboTeams } from '@/data/teams';
import { depthCharts } from '@/data/depthChart';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function DepthChartPage() {
  const params = useParams();
  const router = useRouter();
  const teamId = params.teamId as string;

  const team = kboTeams.find(t => t.id === teamId);
  const depthChart = depthCharts.find(d => d.teamId === teamId);

  if (!team || !depthChart) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center p-4">
        <Card className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            팀을 찾을 수 없습니다
          </h2>
          <Button onClick={() => router.push('/')}>
            홈으로 돌아가기
          </Button>
        </Card>
      </div>
    );
  }

  const positionLabels: { [key: string]: string } = {
    catcher: '포수 (C)',
    firstBase: '1루수 (1B)',
    secondBase: '2루수 (2B)',
    thirdBase: '3루수 (3B)',
    shortStop: '유격수 (SS)',
    leftField: '좌익수 (LF)',
    centerField: '중견수 (CF)',
    rightField: '우익수 (RF)',
    dh: '지명타자 (DH)'
  };

  return (
    <div
      className="min-h-screen py-8 px-4"
      style={{
        background: `linear-gradient(135deg, ${team.color}15 0%, ${team.color}05 50%, transparent 100%)`
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mb-4"
          >
            <ArrowLeft size={20} className="mr-1" />
            뒤로 가기
          </button>

          <div className="flex items-center gap-6 mb-6">
            <span className="text-8xl">{team.logo}</span>
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-2">
                {team.name}
              </h1>
              <p className="text-2xl text-gray-600">2026 시즌 뎁스차트</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Best 9 타선 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">⚾</span>
                Best 9 타선
              </h2>
              <div className="space-y-3">
                {Object.entries(depthChart.best9).map(([position, players]) => (
                  <div
                    key={position}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      {positionLabels[position]}
                    </p>
                    <p className="text-base text-gray-800">
                      {(players as string[]).join(' → ')}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* 투수진 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* 선발 로테이션 */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp size={28} className="text-green-600" />
                선발 로테이션
              </h2>
              <div className="space-y-2">
                {depthChart.rotation.map((pitcher, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <span className="text-lg font-bold text-green-700 w-8">
                      {index + 1}선발
                    </span>
                    <span className="text-base text-gray-800">{pitcher}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* 불펜 */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">🔥</span>
                불펜
              </h2>
              <div className="space-y-4">
                {/* 마무리 */}
                <div>
                  <p className="text-sm font-semibold text-red-600 mb-2">마무리 (CL)</p>
                  <div className="p-3 bg-red-50 rounded-lg">
                    <p className="text-base text-gray-800">
                      {depthChart.bullpen.closer.join(', ')}
                    </p>
                  </div>
                </div>

                {/* 필승조 */}
                <div>
                  <p className="text-sm font-semibold text-orange-600 mb-2">필승조 (Setup)</p>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <p className="text-base text-gray-800">
                      {depthChart.bullpen.setup.join(', ')}
                    </p>
                  </div>
                </div>

                {/* 중간계투 */}
                <div>
                  <p className="text-sm font-semibold text-blue-600 mb-2">중간계투/추격조</p>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-base text-gray-800">
                      {depthChart.bullpen.middle.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* 하단 안내 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <Card className="p-4 bg-gray-50">
            <p className="text-sm text-gray-600">
              📝 2026 시즌 뎁스차트는 나무위키 및 야구 커뮤니티 정보를 기반으로 작성되었습니다.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              실제 경기 라인업과 다를 수 있습니다.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
