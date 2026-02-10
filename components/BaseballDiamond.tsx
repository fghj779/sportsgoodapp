'use client';

import { motion } from 'framer-motion';
import { DepthChart } from '@/types';

interface BaseballDiamondProps {
  depthChart: DepthChart;
  teamColor: string;
}

export default function BaseballDiamond({ depthChart, teamColor }: BaseballDiamondProps) {
  const { best9 } = depthChart;

  // 실제 야구장 포지션 좌표 (top-down view) - 실제 위치에 맞게 수정
  const positions = {
    catcher: { x: 50, y: 90, label: '포수 (C)' },  // 홈플레이트 뒤
    firstBase: { x: 82, y: 28, label: '1루수 (1B)' },  // 1루 베이스 오른쪽
    secondBase: { x: 50, y: 22, label: '2루수 (2B)' },  // 2루 베이스 근처
    thirdBase: { x: 18, y: 28, label: '3루수 (3B)' },  // 3루 베이스 왼쪽
    shortStop: { x: 35, y: 32, label: '유격수 (SS)' },  // 2루-3루 사이, 약간 뒤
    leftField: { x: 12, y: 8, label: '좌익수 (LF)' },  // 외야 좌측 깊숙히
    centerField: { x: 50, y: 3, label: '중견수 (CF)' },  // 외야 중앙 깊숙히
    rightField: { x: 88, y: 8, label: '우익수 (RF)' },  // 외야 우측 깊숙히
    dh: { x: 92, y: 50, label: '지명타자 (DH)' }  // 필드 밖 오른쪽
  };

  const positionMap: { [key: string]: keyof typeof positions } = {
    catcher: 'catcher',
    firstBase: 'firstBase',
    secondBase: 'secondBase',
    thirdBase: 'thirdBase',
    shortStop: 'shortStop',
    leftField: 'leftField',
    centerField: 'centerField',
    rightField: 'rightField',
    dh: 'dh'
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative" style={{ paddingBottom: '100%' }}>
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* 외야 잔디 (초록) */}
          <path
            d="M 0 0 L 100 0 L 100 50 Q 50 20 0 50 Z"
            fill="#7CB342"
            opacity="0.7"
          />

          {/* 내야 흙 (갈색) */}
          <path
            d="M 0 50 Q 50 20 100 50 L 100 100 L 0 100 Z"
            fill="#8D6E63"
            opacity="0.8"
          />

          {/* 내야 다이어몬드 흙 */}
          <path
            d="M 50 88 L 78 25 L 50 25 L 22 25 L 50 88 Z"
            fill="#A1887F"
            stroke="#5D4037"
            strokeWidth="0.5"
          />

          {/* 파울 라인 (좌측) */}
          <line
            x1="50"
            y1="88"
            x2="0"
            y2="50"
            stroke="white"
            strokeWidth="1"
            opacity="0.8"
          />

          {/* 파울 라인 (우측) */}
          <line
            x1="50"
            y1="88"
            x2="100"
            y2="50"
            stroke="white"
            strokeWidth="1"
            opacity="0.8"
          />

          {/* 베이스 라인 */}
          <line x1="50" y1="88" x2="78" y2="25" stroke="white" strokeWidth="0.8" opacity="0.6" />
          <line x1="50" y1="88" x2="22" y2="25" stroke="white" strokeWidth="0.8" opacity="0.6" />
          <line x1="78" y1="25" x2="50" y2="25" stroke="white" strokeWidth="0.8" opacity="0.6" />
          <line x1="22" y1="25" x2="50" y2="25" stroke="white" strokeWidth="0.8" opacity="0.6" />

          {/* 투수 마운드 (초록 원형) */}
          <circle
            cx="50"
            cy="50"
            r="3"
            fill="#7CB342"
            stroke="white"
            strokeWidth="0.3"
          />
          <line
            x1="50"
            y1="48"
            x2="50"
            y2="52"
            stroke="white"
            strokeWidth="0.2"
          />

          {/* 1루 베이스 (흰색 사각형) */}
          <rect x="75" y="22" width="6" height="6" fill="white" stroke="#5D4037" strokeWidth="0.5" rx="0.5" />

          {/* 2루 베이스 (흰색 다이아몬드) */}
          <path
            d="M 50 25 L 53 22 L 50 19 L 47 22 Z"
            fill="white"
            stroke="#5D4037"
            strokeWidth="0.5"
          />

          {/* 3루 베이스 (흰색 사각형) */}
          <rect x="19" y="22" width="6" height="6" fill="white" stroke="#5D4037" strokeWidth="0.5" rx="0.5" />

          {/* 홈플레이트 (흰색 5각형) */}
          <path
            d="M 50 88 L 48 91 L 50 93 L 52 91 Z"
            fill="white"
            stroke="#5D4037"
            strokeWidth="0.5"
          />

          {/* 포지션별 선수 표시 */}
          {Object.entries(best9).map(([key, players]) => {
            const posKey = key as keyof typeof best9;
            const pos = positions[positionMap[posKey]];
            if (!pos) return null;

            const mainPlayer = players[0] || '미정';
            // 외국인 선수 표시 제거 (이모지 제거)
            const cleanPlayer = mainPlayer.replace(/🇺🇸|🇩🇴|🇻🇪|🇨🇦|🇵🇦|🇦🇺|🇹🇼|🇯🇵/g, '').trim();

            return (
              <g key={key}>
                {/* 그림자 효과 */}
                <circle
                  cx={pos.x}
                  cy={pos.y + 0.8}
                  r="7"
                  fill="rgba(0,0,0,0.3)"
                  opacity="0.4"
                />
                {/* 포지션 원 */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="7"
                  fill={teamColor}
                  stroke="white"
                  strokeWidth="1.2"
                  opacity="0.95"
                />
                {/* 선수 이름 (원 안) */}
                <text
                  x={pos.x}
                  y={pos.y + 1.2}
                  fontSize="2.5"
                  fill="white"
                  fontWeight="bold"
                  textAnchor="middle"
                  className="font-sans"
                >
                  {cleanPlayer.length > 5 ? cleanPlayer.substring(0, 5) : cleanPlayer}
                </text>
                {/* 포지션 라벨 */}
                <text
                  x={pos.x}
                  y={pos.y - 9}
                  fontSize="2.5"
                  fill="white"
                  textAnchor="middle"
                  fontWeight="700"
                  stroke="#333"
                  strokeWidth="0.2"
                >
                  {pos.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* 선수 상세 정보 (모바일용) */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(best9).map(([key, players]) => {
          const posKey = key as keyof typeof best9;
          const pos = positions[positionMap[posKey]];
          if (!pos) return null;

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-white rounded-lg shadow-md border-2"
              style={{ borderColor: `${teamColor}40` }}
            >
              <h3 className="font-bold text-sm mb-2" style={{ color: teamColor }}>
                {pos.label}
              </h3>
              <div className="space-y-1">
                {players.map((player, idx) => (
                  <div
                    key={idx}
                    className={`text-sm ${
                      idx === 0
                        ? 'font-bold text-gray-800'
                        : 'text-gray-600'
                    }`}
                  >
                    {idx === 0 ? '⭐' : '→'} {player}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
