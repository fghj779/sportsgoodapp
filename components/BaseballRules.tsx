'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Card from './Card';
import { ChevronDown, ChevronUp } from 'lucide-react';

/* ─── 인라인 SVG 다이어그램 컴포넌트들 ─── */

function BaseballDiamondDiagram() {
  return (
    <div className="w-full max-w-sm mx-auto my-4">
      <svg viewBox="0 0 300 290" className="w-full">
        <defs>
          <radialGradient id="diamondGrass" cx="50%" cy="82%" r="75%">
            <stop offset="0%" stopColor="#66BB6A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#388E3C" stopOpacity="0.12" />
          </radialGradient>
          <radialGradient id="diamondDirt" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#A1887F" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8D6E63" stopOpacity="0.15" />
          </radialGradient>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#e91e63" />
          </marker>
        </defs>

        {/* 외야 잔디 (부채꼴) */}
        <path d="M 150 240 L 15 105 Q 150 -15 285 105 Z" fill="url(#diamondGrass)" />
        {/* 외야 펜스 */}
        <path d="M 15 105 Q 150 -15 285 105" fill="none" stroke="#2E7D32" strokeWidth="4" opacity="0.5" />

        {/* 내야 다이아몬드 흙 */}
        <path d="M 150 240 L 222 162 L 150 85 L 78 162 Z" fill="url(#diamondDirt)" />

        {/* 베이스 라인 */}
        <line x1="150" y1="240" x2="222" y2="162" stroke="white" strokeWidth="2.5" opacity="0.8" />
        <line x1="222" y1="162" x2="150" y2="85" stroke="white" strokeWidth="2.5" opacity="0.8" />
        <line x1="150" y1="85" x2="78" y2="162" stroke="white" strokeWidth="2.5" opacity="0.8" />
        <line x1="78" y1="162" x2="150" y2="240" stroke="white" strokeWidth="2.5" opacity="0.8" />

        {/* 파울 라인 연장 */}
        <line x1="150" y1="240" x2="285" y2="105" stroke="white" strokeWidth="1.5" opacity="0.25" />
        <line x1="150" y1="240" x2="15" y2="105" stroke="white" strokeWidth="1.5" opacity="0.25" />

        {/* 투수 마운드 */}
        <circle cx="150" cy="172" r="7" fill="#A1887F" opacity="0.5" />
        <circle cx="150" cy="172" r="4" fill="#8D6E63" stroke="white" strokeWidth="1.5" />
        <text x="150" y="192" textAnchor="middle" fontSize="10" fill="#555" fontWeight="bold">투수</text>

        {/* 2루 */}
        <rect x="144" y="79" width="12" height="12" fill="white" stroke="#666" strokeWidth="1.5" rx="1" transform="rotate(45 150 85)" />
        <text x="150" y="72" textAnchor="middle" fontSize="11" fill="#333" fontWeight="bold">2루</text>

        {/* 1루 */}
        <rect x="216" y="156" width="12" height="12" fill="white" stroke="#666" strokeWidth="1.5" rx="1" />
        <text x="242" y="155" textAnchor="middle" fontSize="11" fill="#333" fontWeight="bold">1루</text>

        {/* 3루 */}
        <rect x="72" y="156" width="12" height="12" fill="white" stroke="#666" strokeWidth="1.5" rx="1" />
        <text x="58" y="155" textAnchor="middle" fontSize="11" fill="#333" fontWeight="bold">3루</text>

        {/* 홈플레이트 */}
        <path d="M 145 236 L 150 247 L 155 236 L 153 233 L 147 233 Z" fill="white" stroke="#555" strokeWidth="1.5" />
        <text x="150" y="264" textAnchor="middle" fontSize="11" fill="#333" fontWeight="bold">홈</text>

        {/* 주루 방향 화살표 (반시계) */}
        <path d="M 162 235 Q 225 195 220 160" fill="none" stroke="#e91e63" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrowhead)" />
        <path d="M 225 150 Q 195 95 158 83" fill="none" stroke="#e91e63" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrowhead)" />
        <path d="M 142 83 Q 100 95 80 150" fill="none" stroke="#e91e63" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrowhead)" />
        <path d="M 78 170 Q 95 220 140 240" fill="none" stroke="#e91e63" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrowhead)" />

        <text x="150" y="215" textAnchor="middle" fontSize="10" fill="#e91e63" fontWeight="bold">반시계 방향 주루</text>
      </svg>
    </div>
  );
}

function StrikeZoneDiagram() {
  const [pitchKey, setPitchKey] = useState(0);
  const [showingPitch, setShowingPitch] = useState(false);

  const playPitches = () => {
    setPitchKey((k) => k + 1);
    setShowingPitch(true);
  };

  // 스트라이크: 존 한가운데로 (cx=55, cy=92)
  // 볼: 존 바깥 왼쪽 높이로 (cx=8, cy=48)
  return (
    <div className="w-full max-w-[240px] mx-auto my-4 space-y-2">
      <svg viewBox="0 0 170 220" className="w-full">
        {/* 타자 실루엣 */}
        <circle cx="120" cy="45" r="14" fill="#ddd" stroke="#999" strokeWidth="1" />
        <line x1="120" y1="59" x2="120" y2="110" stroke="#ccc" strokeWidth="4" strokeLinecap="round" />
        <line x1="120" y1="110" x2="110" y2="155" stroke="#ccc" strokeWidth="4" strokeLinecap="round" />
        <line x1="120" y1="110" x2="130" y2="155" stroke="#ccc" strokeWidth="4" strokeLinecap="round" />
        {/* 배트 */}
        <line x1="105" y1="75" x2="70" y2="40" stroke="#8D6E63" strokeWidth="3" strokeLinecap="round" />

        {/* 스트라이크 존 */}
        <rect x="25" y="55" width="65" height="78" fill="rgba(244, 67, 54, 0.12)" stroke="#F44336" strokeWidth="2" strokeDasharray="6,3" rx="3" />

        {/* 존 내부 9분할 */}
        <line x1="46.7" y1="55" x2="46.7" y2="133" stroke="#F44336" strokeWidth="0.5" opacity="0.3" />
        <line x1="68.3" y1="55" x2="68.3" y2="133" stroke="#F44336" strokeWidth="0.5" opacity="0.3" />
        <line x1="25" y1="81" x2="90" y2="81" stroke="#F44336" strokeWidth="0.5" opacity="0.3" />
        <line x1="25" y1="107" x2="90" y2="107" stroke="#F44336" strokeWidth="0.5" opacity="0.3" />

        {/* 레이블 */}
        <text x="57" y="48" textAnchor="middle" fontSize="10" fill="#F44336" fontWeight="bold">어깨</text>
        <text x="57" y="148" textAnchor="middle" fontSize="10" fill="#F44336" fontWeight="bold">무릎</text>

        {/* 홈플레이트 */}
        <path d="M 37 167 L 57 177 L 77 167 L 72 162 L 42 162 Z" fill="white" stroke="#555" strokeWidth="1.5" />
        <text x="57" y="192" textAnchor="middle" fontSize="10" fill="#555">홈플레이트</text>

        {/* 애니메이션: 스트라이크 공 (존 한가운데) */}
        {showingPitch && (
          <g key={`strike-${pitchKey}`}>
            <motion.line
              x1="57" y1="0" x2="57" y2="94"
              stroke="#F44336" strokeWidth="1.5" strokeDasharray="4,3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
            <motion.circle
              r="7" fill="white" stroke="#F44336" strokeWidth="2"
              initial={{ cx: 57, cy: -10 }}
              animate={{ cx: 57, cy: 94 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeIn' }}
            />
            <motion.circle
              cx="57" cy="94" r="12" fill="#F44336"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.4, 0] }}
              transition={{ duration: 0.5, delay: 0.7 }}
            />
            <motion.text
              x="57" y="94" textAnchor="middle" dominantBaseline="central"
              fontSize="11" fontWeight="bold" fill="#F44336"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              STRIKE!
            </motion.text>
          </g>
        )}

        {/* 애니메이션: 볼 공 (존 바깥 왼쪽 높게) */}
        {showingPitch && (
          <g key={`ball-${pitchKey}`}>
            <motion.line
              x1="8" y1="0" x2="8" y2="42"
              stroke="#2196F3" strokeWidth="1.5" strokeDasharray="4,3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.3, delay: 1.6 }}
            />
            <motion.circle
              r="7" fill="white" stroke="#2196F3" strokeWidth="2"
              initial={{ cx: 8, cy: -10 }}
              animate={{ cx: 8, cy: 42 }}
              transition={{ duration: 0.5, delay: 1.6, ease: 'easeIn' }}
            />
            <motion.circle
              cx="8" cy="42" r="12" fill="#2196F3"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.4, 0] }}
              transition={{ duration: 0.5, delay: 2.1 }}
            />
            <motion.text
              x="8" y="28" textAnchor="middle"
              fontSize="11" fontWeight="bold" fill="#2196F3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 2.2 }}
            >
              BALL!
            </motion.text>
          </g>
        )}

        <text x="57" y="212" textAnchor="middle" fontSize="9" fill="#2196F3" fontWeight="bold">존 바깥 = 볼</text>
      </svg>
      <button
        onClick={playPitches}
        className="w-full py-2 rounded-xl text-white text-xs font-bold bg-gradient-to-r from-red-500 to-blue-500 active:scale-95 transition-transform"
      >
        투구 시뮬레이션 보기
      </button>
    </div>
  );
}

function PositionsDiagram() {
  const positions = [
    { x: 150, y: 28, label: '중견수', sub: 'CF', color: '#4CAF50' },
    { x: 52, y: 62, label: '좌익수', sub: 'LF', color: '#4CAF50' },
    { x: 248, y: 62, label: '우익수', sub: 'RF', color: '#4CAF50' },
    { x: 108, y: 140, label: '유격수', sub: 'SS', color: '#FF9800' },
    { x: 172, y: 122, label: '2루수', sub: '2B', color: '#FF9800' },
    { x: 218, y: 155, label: '1루수', sub: '1B', color: '#FF9800' },
    { x: 82, y: 165, label: '3루수', sub: '3B', color: '#FF9800' },
    { x: 150, y: 178, label: '투수', sub: 'P', color: '#F44336' },
    { x: 150, y: 258, label: '포수', sub: 'C', color: '#9C27B0' },
  ];

  return (
    <div className="w-full max-w-sm mx-auto my-4">
      <svg viewBox="0 0 300 300" className="w-full">
        <defs>
          <radialGradient id="fieldGrass" cx="50%" cy="80%" r="75%">
            <stop offset="0%" stopColor="#66BB6A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#388E3C" stopOpacity="0.15" />
          </radialGradient>
          <radialGradient id="infieldDirt" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A1887F" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8D6E63" stopOpacity="0.15" />
          </radialGradient>
        </defs>

        {/* 외야 잔디 (부채꼴) */}
        <path d="M 150 248 L 10 108 Q 150 -20 290 108 Z" fill="url(#fieldGrass)" />

        {/* 외야 펜스 */}
        <path d="M 10 108 Q 150 -20 290 108" fill="none" stroke="#2E7D32" strokeWidth="4" opacity="0.6" />

        {/* 내야 다이아몬드 흙 */}
        <path d="M 150 248 L 222 168 L 150 90 L 78 168 Z" fill="url(#infieldDirt)" />

        {/* 베이스 라인 */}
        <line x1="150" y1="248" x2="222" y2="168" stroke="white" strokeWidth="2" opacity="0.6" />
        <line x1="222" y1="168" x2="150" y2="90" stroke="white" strokeWidth="2" opacity="0.6" />
        <line x1="150" y1="90" x2="78" y2="168" stroke="white" strokeWidth="2" opacity="0.6" />
        <line x1="78" y1="168" x2="150" y2="248" stroke="white" strokeWidth="2" opacity="0.6" />

        {/* 파울 라인 */}
        <line x1="150" y1="248" x2="290" y2="108" stroke="white" strokeWidth="1.5" opacity="0.3" />
        <line x1="150" y1="248" x2="10" y2="108" stroke="white" strokeWidth="1.5" opacity="0.3" />

        {/* 베이스 마커 */}
        <path d="M 146 244 L 150 253 L 154 244 L 152 241 L 148 241 Z" fill="white" stroke="#666" strokeWidth="1" />
        <rect x="217" y="163" width="10" height="10" fill="white" stroke="#666" strokeWidth="1" rx="1" />
        <rect x="145" y="85" width="10" height="10" fill="white" stroke="#666" strokeWidth="1" rx="1" transform="rotate(45 150 90)" />
        <rect x="73" y="163" width="10" height="10" fill="white" stroke="#666" strokeWidth="1" rx="1" />

        {/* 투수 마운드 */}
        <circle cx="150" cy="178" r="8" fill="#A1887F" opacity="0.4" />

        {/* 포지션 마커 */}
        {positions.map((pos, i) => (
          <g key={i}>
            <circle cx={pos.x} cy={pos.y} r="16" fill={pos.color} opacity="0.9" />
            <text x={pos.x} y={pos.y - 2} textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">{pos.label}</text>
            <text x={pos.x} y={pos.y + 8} textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.8)">{pos.sub}</text>
          </g>
        ))}

        {/* 범례 */}
        <circle cx="45" cy="288" r="5" fill="#F44336" />
        <text x="55" y="291" fontSize="9" fill="#555">배터리</text>
        <circle cx="115" cy="288" r="5" fill="#FF9800" />
        <text x="125" y="291" fontSize="9" fill="#555">내야수</text>
        <circle cx="185" cy="288" r="5" fill="#4CAF50" />
        <text x="195" y="291" fontSize="9" fill="#555">외야수</text>
      </svg>
    </div>
  );
}

type HitType = 'single' | 'double' | 'triple' | 'homerun';

const hitConfig: Record<HitType, {
  label: string;
  color: string;
  ballPath: string;
  ballEnd: { x: number; y: number };
  runnerStops: number;
  emoji: string;
}> = {
  single: {
    label: '1루타',
    color: '#4CAF50',
    ballPath: 'M 150 230 Q 200 170 235 140',
    ballEnd: { x: 235, y: 140 },
    runnerStops: 1,
    emoji: '🏃',
  },
  double: {
    label: '2루타',
    color: '#2196F3',
    ballPath: 'M 150 230 Q 175 130 200 80',
    ballEnd: { x: 200, y: 80 },
    runnerStops: 2,
    emoji: '🏃💨',
  },
  triple: {
    label: '3루타',
    color: '#FF9800',
    ballPath: 'M 150 230 Q 100 120 55 80',
    ballEnd: { x: 55, y: 80 },
    runnerStops: 3,
    emoji: '🏃💨💨',
  },
  homerun: {
    label: '홈런',
    color: '#F44336',
    ballPath: 'M 150 230 Q 80 80 60 15',
    ballEnd: { x: 60, y: 15 },
    runnerStops: 4,
    emoji: '💥🎉',
  },
};

// 베이스 좌표 (홈 → 1루 → 2루 → 3루 → 홈)
const bases = [
  { x: 150, y: 232 }, // 홈
  { x: 222, y: 155 }, // 1루
  { x: 150, y: 78 },  // 2루
  { x: 78, y: 155 },  // 3루
  { x: 150, y: 232 }, // 홈 (복귀)
];

function HitTypesDiagram() {
  const [activeHit, setActiveHit] = useState<HitType | null>(null);
  const [animKey, setAnimKey] = useState(0);

  const playAnimation = (type: HitType) => {
    setActiveHit(type);
    setAnimKey((k) => k + 1);
  };

  const config = activeHit ? hitConfig[activeHit] : null;
  const isHomerun = activeHit === 'homerun';

  // 주자 경로 키프레임 생성
  const runnerXKeys = config
    ? bases.slice(0, config.runnerStops + 1).map((b) => b.x)
    : [];
  const runnerYKeys = config
    ? bases.slice(0, config.runnerStops + 1).map((b) => b.y)
    : [];

  const runDuration = config ? config.runnerStops * 0.6 : 0;

  // 홈런 전용 타이밍
  const hrBallDuration = 0.7;
  const hrRunDelay = 0.8;
  const hrRunDuration = 2.4; // 4베이스 * 0.6
  const hrCelebDelay = hrRunDelay + hrRunDuration + 0.2;

  // 불꽃놀이 파티클 생성
  const fireworkParticles = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    return {
      endX: Math.cos(angle) * 40,
      endY: Math.sin(angle) * 40,
      color: ['#FFD700', '#FF6B6B', '#4ECDC4', '#FF69B4', '#FFA500', '#7B68EE'][i % 6],
    };
  });

  // 색종이 파티클
  const confettiParticles = Array.from({ length: 20 }, (_, i) => ({
    x: 30 + Math.random() * 240,
    delay: Math.random() * 0.8,
    color: ['#FFD700', '#FF6B6B', '#4ECDC4', '#FF69B4', '#FFA500', '#7B68EE', '#F44336', '#2196F3'][i % 8],
    size: 3 + Math.random() * 4,
    rotation: Math.random() * 360,
  }));

  // 관중석 점들 (펜스 위)
  const spectatorDots = Array.from({ length: 24 }, (_, i) => {
    const t = i / 23;
    // 펜스 곡선 위에 점들 배치 (곡선: M 20 110 Q 150 -10 280 110)
    const x = 20 + t * 260;
    const y = 110 * (1 - 2 * t * (1 - t)) + (-10) * 2 * t * (1 - t) - 12;
    return { x, y };
  });

  return (
    <div className="w-full max-w-sm mx-auto my-4 space-y-3">
      {/* 버튼 */}
      <div className="grid grid-cols-4 gap-2">
        {(Object.entries(hitConfig) as [HitType, typeof hitConfig[HitType]][]).map(
          ([key, val]) => (
            <button
              key={key}
              onClick={() => playAnimation(key)}
              className="py-2 px-1 rounded-xl text-white text-xs font-bold transition-all active:scale-95"
              style={{
                backgroundColor: activeHit === key ? val.color : `${val.color}80`,
                boxShadow: activeHit === key ? `0 4px 14px ${val.color}50` : 'none',
              }}
            >
              {val.label}
            </button>
          )
        )}
      </div>

      {/* 필드 */}
      <div className="relative bg-gradient-to-b from-green-50 to-amber-50 rounded-2xl p-2 border border-gray-200 overflow-hidden">
        <svg viewBox="0 0 300 270" className="w-full">
          <defs>
            {/* 잔디 그라데이션 */}
            <radialGradient id="grassGrad" cx="50%" cy="85%" r="80%">
              <stop offset="0%" stopColor="#66BB6A" stopOpacity="0.3" />
              <stop offset="60%" stopColor="#4CAF50" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#388E3C" stopOpacity="0.1" />
            </radialGradient>
            {/* 홈런 공 글로우 */}
            <filter id="ballGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* 베이스 발광 */}
            <filter id="baseGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* 불꽃 글로우 */}
            <filter id="fireworkGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 외야 잔디 (개선된 그라데이션) */}
          <path d="M 150 240 L 20 110 Q 150 -10 280 110 Z" fill="url(#grassGrad)" />

          {/* 관중석 (펜스 위 작은 점들) */}
          {isHomerun && spectatorDots.map((dot, i) => (
            <motion.circle
              key={`spec-${i}`}
              cx={dot.x}
              cy={dot.y}
              r="2.5"
              fill={i % 3 === 0 ? '#FF6B6B' : i % 3 === 1 ? '#4ECDC4' : '#FFD700'}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.8, 0.3], y: [dot.y, dot.y - 3, dot.y] }}
              transition={{ duration: 0.5, delay: hrCelebDelay + (i * 0.03), repeat: 2 }}
            />
          ))}
          {!isHomerun && spectatorDots.map((dot, i) => (
            <circle
              key={`spec-s-${i}`}
              cx={dot.x}
              cy={dot.y}
              r="2"
              fill="#999"
              opacity="0.25"
            />
          ))}

          {/* 외야 펜스 (두꺼운 벽 표현) */}
          <path d="M 20 110 Q 150 -10 280 110" fill="none" stroke="#1B5E20" strokeWidth="5" opacity="0.7" />
          <path d="M 20 113 Q 150 -7 280 113" fill="none" stroke="#2E7D32" strokeWidth="2" opacity="0.4" />

          {/* 내야 */}
          <path d="M 150 232 L 222 155 L 150 78 L 78 155 Z" fill="#8D6E63" opacity="0.15" />

          {/* 베이스 라인 */}
          <line x1="150" y1="232" x2="222" y2="155" stroke="white" strokeWidth="2" opacity="0.7" />
          <line x1="222" y1="155" x2="150" y2="78" stroke="white" strokeWidth="2" opacity="0.7" />
          <line x1="150" y1="78" x2="78" y2="155" stroke="white" strokeWidth="2" opacity="0.7" />
          <line x1="78" y1="155" x2="150" y2="232" stroke="white" strokeWidth="2" opacity="0.7" />

          {/* 파울 라인 */}
          <line x1="150" y1="232" x2="280" y2="110" stroke="white" strokeWidth="1.5" opacity="0.3" />
          <line x1="150" y1="232" x2="20" y2="110" stroke="white" strokeWidth="1.5" opacity="0.3" />

          {/* 투수 마운드 */}
          <circle cx="150" cy="160" r="5" fill="#8D6E63" stroke="white" strokeWidth="1.5" opacity="0.6" />

          {/* 베이스 마커 */}
          <path d="M 146 228 L 150 237 L 154 228 L 152 225 L 148 225 Z" fill="white" stroke="#666" strokeWidth="1.5" />
          <rect x="217" y="150" width="10" height="10" fill="white" stroke="#666" strokeWidth="1" rx="1" />
          <rect x="145" y="73" width="10" height="10" fill="white" stroke="#666" strokeWidth="1" rx="1" transform="rotate(45 150 78)" />
          <rect x="73" y="150" width="10" height="10" fill="white" stroke="#666" strokeWidth="1" rx="1" />

          {/* 베이스 레이블 */}
          <text x="240" y="163" fontSize="10" fill="#666" fontWeight="bold">1B</text>
          <text x="150" y="67" textAnchor="middle" fontSize="10" fill="#666" fontWeight="bold">2B</text>
          <text x="56" y="163" fontSize="10" fill="#666" fontWeight="bold" textAnchor="end">3B</text>
          <text x="150" y="254" textAnchor="middle" fontSize="10" fill="#666" fontWeight="bold">HOME</text>

          {/* ===== Phase 1: 타자 스윙 (홈런 전용) ===== */}
          {isHomerun && config && (
            <g key={`batter-${animKey}`}>
              {/* 타자 스틱피겨 */}
              <circle cx="165" cy="215" r="5" fill="#333" /> {/* 머리 */}
              <line x1="165" y1="220" x2="165" y2="235" stroke="#333" strokeWidth="2" strokeLinecap="round" /> {/* 몸 */}
              <line x1="165" y1="235" x2="160" y2="245" stroke="#333" strokeWidth="2" strokeLinecap="round" /> {/* 왼쪽 다리 */}
              <line x1="165" y1="235" x2="170" y2="245" stroke="#333" strokeWidth="2" strokeLinecap="round" /> {/* 오른쪽 다리 */}
              {/* 배트 (스윙 애니메이션) */}
              <motion.line
                x1="165"
                y1="224"
                x2="180"
                y2="210"
                stroke="#8D6E63"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ rotate: -30 }}
                animate={{ rotate: [- 30, 60] }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ transformOrigin: '165px 224px' }}
              />
            </g>
          )}

          {/* ===== 타구 궤적 (비홈런 - 기존 유지) ===== */}
          {config && !isHomerun && (
            <g key={`ball-${animKey}`}>
              <motion.path
                d={config.ballPath}
                fill="none"
                stroke={config.color}
                strokeWidth="2.5"
                strokeDasharray="6,4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
              <motion.circle
                r="6"
                fill={config.color}
                initial={{ cx: 150, cy: 230, opacity: 1, scale: 1 }}
                animate={{
                  cx: config.ballEnd.x,
                  cy: config.ballEnd.y,
                  opacity: [1, 1, 0.8],
                  scale: [1, 1.2, 0.8],
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
              <motion.circle
                cx={config.ballEnd.x}
                cy={config.ballEnd.y}
                r="10"
                fill={config.color}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 0.3, 0], scale: [0, 2, 3] }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </g>
          )}

          {/* ===== Phase 2: 홈런 공 비행 강화 ===== */}
          {isHomerun && config && (
            <g key={`hr-ball-${animKey}`}>
              {/* 궤적 경로 (골드색) */}
              <motion.path
                d={config.ballPath}
                fill="none"
                stroke="#FFD700"
                strokeWidth="3"
                strokeDasharray="6,4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: hrBallDuration, ease: 'easeOut', delay: 0.2 }}
              />
              {/* 빛나는 골드색 공 + glow */}
              <motion.circle
                r="7"
                fill="#FFD700"
                filter="url(#ballGlow)"
                initial={{ cx: 150, cy: 230, opacity: 1 }}
                animate={{
                  cx: config.ballEnd.x,
                  cy: config.ballEnd.y,
                  opacity: [1, 1, 0.9],
                }}
                transition={{ duration: hrBallDuration, ease: 'easeOut', delay: 0.2 }}
              />
              {/* 공 꼬리 잔상 */}
              {[1, 2, 3].map((t) => (
                <motion.circle
                  key={`trail-${t}`}
                  r={7 - t * 1.5}
                  fill="#FFD700"
                  opacity={0.3 - t * 0.08}
                  initial={{ cx: 150, cy: 230 }}
                  animate={{
                    cx: config.ballEnd.x,
                    cy: config.ballEnd.y,
                  }}
                  transition={{ duration: hrBallDuration, ease: 'easeOut', delay: 0.2 + t * 0.06 }}
                />
              ))}
              {/* 펜스 통과 "GONE!" 텍스트 */}
              <motion.text
                x="150"
                y="95"
                textAnchor="middle"
                fontSize="18"
                fontWeight="bold"
                fill="#FFD700"
                stroke="#B8860B"
                strokeWidth="0.5"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1, 0.8] }}
                transition={{ duration: 1.2, delay: 0.6 }}
              >
                GONE!
              </motion.text>
              {/* 펜스 통과 시 burst 파티클 */}
              {[0, 1, 2, 3, 4, 5].map((i) => {
                const angle = (i / 6) * Math.PI * 2;
                const fenceX = 85; // 공이 펜스를 넘는 대략적 위치
                const fenceY = 55;
                return (
                  <motion.circle
                    key={`burst-${i}`}
                    r="3"
                    fill={['#FFD700', '#FF6B6B', '#FFA500'][i % 3]}
                    initial={{ cx: fenceX, cy: fenceY, opacity: 0, scale: 0 }}
                    animate={{
                      cx: fenceX + Math.cos(angle) * 25,
                      cy: fenceY + Math.sin(angle) * 25,
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  />
                );
              })}
              {/* 관중석 착탄 폭발 */}
              <motion.circle
                cx={config.ballEnd.x}
                cy={config.ballEnd.y}
                r="15"
                fill="#FFD700"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 0.5, 0], scale: [0, 2.5, 4] }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
              <motion.text
                x={config.ballEnd.x}
                y={config.ballEnd.y}
                textAnchor="middle"
                fontSize="16"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.2, delay: 0.7 }}
              >
                💥
              </motion.text>
            </g>
          )}

          {/* ===== 주자 애니메이션 (비홈런 - 기존 유지) ===== */}
          {config && !isHomerun && runnerXKeys.length > 1 && (
            <g key={`runner-${animKey}`}>
              {Array.from({ length: config.runnerStops }).map((_, i) => (
                <motion.line
                  key={i}
                  x1={bases[i].x}
                  y1={bases[i].y}
                  x2={bases[i + 1].x}
                  y2={bases[i + 1].y}
                  stroke={config.color}
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.55,
                    ease: 'easeInOut',
                  }}
                />
              ))}
              <motion.circle
                r="9"
                fill={config.color}
                stroke="white"
                strokeWidth="2.5"
                initial={{ cx: runnerXKeys[0], cy: runnerYKeys[0] }}
                animate={{ cx: runnerXKeys, cy: runnerYKeys }}
                transition={{
                  duration: runDuration,
                  delay: 0.4,
                  ease: 'easeInOut',
                  times: runnerXKeys.map((_, i) => i / (runnerXKeys.length - 1)),
                }}
              />
              <motion.text
                fontSize="11"
                textAnchor="middle"
                dominantBaseline="central"
                initial={{ x: runnerXKeys[0], y: runnerYKeys[0] }}
                animate={{ x: runnerXKeys, y: runnerYKeys }}
                transition={{
                  duration: runDuration,
                  delay: 0.4,
                  ease: 'easeInOut',
                  times: runnerXKeys.map((_, i) => i / (runnerXKeys.length - 1)),
                }}
              >
                🏃
              </motion.text>
              <motion.circle
                cx={runnerXKeys[runnerXKeys.length - 1]}
                cy={runnerYKeys[runnerYKeys.length - 1]}
                r="14"
                fill="none"
                stroke={config.color}
                strokeWidth="2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 2] }}
                transition={{ duration: 0.8, delay: 0.4 + runDuration }}
              />
            </g>
          )}

          {/* ===== Phase 3: 홈런 주자 베이스 러닝 (강화) ===== */}
          {isHomerun && config && (
            <g key={`hr-runner-${animKey}`}>
              {/* 주루 경로 표시 */}
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.line
                  key={`hr-path-${i}`}
                  x1={bases[i].x}
                  y1={bases[i].y}
                  x2={bases[i + 1].x}
                  y2={bases[i + 1].y}
                  stroke="#F44336"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{
                    duration: 0.5,
                    delay: hrRunDelay + i * 0.55,
                    ease: 'easeInOut',
                  }}
                />
              ))}

              {/* 각 베이스 하이라이트 (발광 펄스) */}
              {bases.slice(1, 5).map((base, i) => (
                <motion.circle
                  key={`base-glow-${i}`}
                  cx={base.x}
                  cy={base.y}
                  r="12"
                  fill="#FFD700"
                  filter="url(#baseGlow)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 0.6, 0], scale: [0, 1.5, 2] }}
                  transition={{
                    duration: 0.5,
                    delay: hrRunDelay + i * 0.6 + 0.3,
                  }}
                />
              ))}

              {/* 먼지 이펙트 (각 베이스마다) */}
              {bases.slice(1, 5).map((base, bi) =>
                [0, 1, 2, 3].map((pi) => {
                  const angle = (pi / 4) * Math.PI + Math.PI / 4;
                  return (
                    <motion.circle
                      key={`dust-${bi}-${pi}`}
                      r="2"
                      fill="#8D6E63"
                      initial={{ cx: base.x, cy: base.y, opacity: 0 }}
                      animate={{
                        cx: base.x + Math.cos(angle) * 15,
                        cy: base.y + Math.sin(angle) * 15,
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 0.4,
                        delay: hrRunDelay + bi * 0.6 + 0.3,
                      }}
                    />
                  );
                })
              )}

              {/* 주자 (원) */}
              <motion.circle
                r="10"
                fill="#F44336"
                stroke="white"
                strokeWidth="2.5"
                initial={{ cx: runnerXKeys[0], cy: runnerYKeys[0] }}
                animate={{ cx: runnerXKeys, cy: runnerYKeys }}
                transition={{
                  duration: hrRunDuration,
                  delay: hrRunDelay,
                  ease: 'easeInOut',
                  times: runnerXKeys.map((_, i) => i / (runnerXKeys.length - 1)),
                }}
              />
              {/* 주자 아이콘 */}
              <motion.text
                fontSize="12"
                textAnchor="middle"
                dominantBaseline="central"
                initial={{ x: runnerXKeys[0], y: runnerYKeys[0] }}
                animate={{ x: runnerXKeys, y: runnerYKeys }}
                transition={{
                  duration: hrRunDuration,
                  delay: hrRunDelay,
                  ease: 'easeInOut',
                  times: runnerXKeys.map((_, i) => i / (runnerXKeys.length - 1)),
                }}
              >
                🏃
              </motion.text>
            </g>
          )}

          {/* ===== Phase 4: 홈 도착 세레브레이션 ===== */}
          {isHomerun && config && (
            <g key={`hr-celeb-${animKey}`}>
              {/* 불꽃놀이: 홈플레이트에서 방사형 burst */}
              {fireworkParticles.map((p, i) => (
                <motion.circle
                  key={`fw-${i}`}
                  r="3.5"
                  fill={p.color}
                  filter="url(#fireworkGlow)"
                  initial={{ cx: 150, cy: 232, opacity: 0, scale: 0 }}
                  animate={{
                    cx: 150 + p.endX,
                    cy: 232 + p.endY,
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1.5, 1, 0],
                  }}
                  transition={{ duration: 1, delay: hrCelebDelay }}
                />
              ))}

              {/* "+1 득점" 텍스트 떠오르는 애니메이션 */}
              <motion.text
                x="150"
                y="220"
                textAnchor="middle"
                fontSize="16"
                fontWeight="bold"
                fill="#F44336"
                initial={{ opacity: 0, y: 232 }}
                animate={{ opacity: [0, 1, 1, 0], y: [232, 200, 190, 180] }}
                transition={{ duration: 1.5, delay: hrCelebDelay }}
              >
                +1 득점!
              </motion.text>

              {/* "HOME RUN!" 배너 (중앙) */}
              <motion.rect
                x="85"
                y="120"
                width="130"
                height="36"
                rx="18"
                fill="#F44336"
                stroke="#FFD700"
                strokeWidth="2"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{
                  duration: 0.5,
                  delay: hrCelebDelay + 0.2,
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                }}
                style={{ transformOrigin: '150px 138px' }}
              />
              <motion.text
                x="150"
                y="143"
                textAnchor="middle"
                fontSize="16"
                fontWeight="bold"
                fill="white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: hrCelebDelay + 0.4 }}
              >
                HOME RUN!
              </motion.text>

              {/* 색종이 (confetti) 떨어지는 효과 */}
              {confettiParticles.map((c, i) => (
                <motion.rect
                  key={`conf-${i}`}
                  x={c.x}
                  y={-10}
                  width={c.size}
                  height={c.size * 0.6}
                  rx="1"
                  fill={c.color}
                  initial={{ opacity: 0, y: -10, rotate: c.rotation }}
                  animate={{
                    opacity: [0, 1, 1, 0.5],
                    y: [-10, 270],
                    rotate: c.rotation + 720,
                  }}
                  transition={{
                    duration: 2,
                    delay: hrCelebDelay + 0.3 + c.delay,
                    ease: 'easeIn',
                  }}
                />
              ))}
            </g>
          )}
        </svg>

        {/* 결과 텍스트 */}
        <AnimatePresence mode="wait">
          {config && (
            <motion.div
              key={`result-${animKey}`}
              className="text-center py-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: isHomerun ? hrCelebDelay + 0.5 : 0.3 }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-white text-sm font-bold"
                style={{
                  backgroundColor: config.color,
                  boxShadow: isHomerun ? '0 0 20px rgba(244, 67, 54, 0.5)' : 'none',
                }}
              >
                {config.emoji} {config.label}!
                {isHomerun && ' 득점!'}
                {!isHomerun &&
                  ` → 주자 ${config.runnerStops}루 도착`}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {!activeHit && (
          <p className="text-center text-xs text-gray-400 py-2">
            위 버튼을 눌러 시뮬레이션을 확인하세요!
          </p>
        )}
      </div>
    </div>
  );
}

type OutType = 'strikeout' | 'flyout' | 'forceout' | 'tagout';

const outConfig: Record<OutType, { label: string; icon: string; color: string; desc: string }> = {
  strikeout: { label: '삼진', icon: 'K', color: '#F44336', desc: '스트라이크 3개' },
  flyout: { label: '플라이', icon: '🧤', color: '#2196F3', desc: '뜬공을 직접 캐치' },
  forceout: { label: '포스', icon: '⚡', color: '#FF9800', desc: '주자보다 공이 먼저 도착' },
  tagout: { label: '태그', icon: '🏷️', color: '#9C27B0', desc: '공으로 주자 터치' },
};

function StrikeoutAnim({ animKey }: { animKey: number }) {
  return (
    <g key={`ko-${animKey}`}>
      <circle cx="60" cy="100" r="8" fill="#F44336" opacity="0.8" />
      <text x="60" y="103" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">P</text>
      <text x="60" y="120" textAnchor="middle" fontSize="8" fill="#666">투수</text>
      <circle cx="230" cy="105" r="6" fill="#ddd" stroke="#999" strokeWidth="1" />
      <line x1="230" y1="111" x2="230" y2="135" stroke="#ccc" strokeWidth="3" strokeLinecap="round" />
      <line x1="230" y1="135" x2="223" y2="155" stroke="#ccc" strokeWidth="3" strokeLinecap="round" />
      <line x1="230" y1="135" x2="237" y2="155" stroke="#ccc" strokeWidth="3" strokeLinecap="round" />
      <line x1="222" y1="120" x2="210" y2="108" stroke="#8D6E63" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="190" y="110" width="40" height="35" fill="rgba(244,67,54,0.1)" stroke="#F44336" strokeWidth="1.5" strokeDasharray="4,2" rx="2" />
      <circle cx="210" cy="175" r="10" fill="#5D4037" opacity="0.6" />
      <text x="210" y="178" textAnchor="middle" fontSize="7" fill="white">C</text>
      {[0, 1, 2].map((i) => (
        <g key={`pitch-${i}`}>
          <motion.circle
            r="6"
            fill="white"
            stroke="#F44336"
            strokeWidth="1.5"
            initial={{ cx: 70, cy: 100, opacity: 0 }}
            animate={{ cx: 210, cy: 128, opacity: [0, 1, 1, 0.3] }}
            transition={{ duration: 0.5, delay: i * 0.8, ease: 'easeIn' }}
          />
          <motion.text
            x={130 + i * 25}
            y="70"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#F44336"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.8 + 0.4 }}
          >
            K
          </motion.text>
        </g>
      ))}
      <motion.text
        x="150"
        y="200"
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
        fill="#F44336"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.6 }}
      >
        삼진 아웃!
      </motion.text>
    </g>
  );
}

function FlyoutAnim({ animKey }: { animKey: number }) {
  return (
    <g key={`fly-${animKey}`}>
      <circle cx="150" cy="190" r="7" fill="#555" />
      <text x="150" y="193" textAnchor="middle" fontSize="7" fill="white">B</text>
      <text x="150" y="210" textAnchor="middle" fontSize="8" fill="#666">타자</text>
      <circle cx="150" cy="45" r="9" fill="#2196F3" opacity="0.8" />
      <text x="150" y="48" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">CF</text>
      {/* 타구 궤적 점선 */}
      <motion.line
        x1="150" y1="185" x2="150" y2="50"
        stroke="#2196F3"
        strokeWidth="2"
        strokeDasharray="5,3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.5 }}
      />
      {/* 공 날아감 */}
      <motion.circle
        r="5"
        fill="white"
        stroke="#333"
        strokeWidth="1.5"
        initial={{ cx: 150, cy: 185 }}
        animate={{ cx: 150, cy: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      {/* 캐치 이펙트 */}
      <motion.circle
        cx="150"
        cy="45"
        r="14"
        fill="#2196F3"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />
      {/* 결과 */}
      <motion.text
        x="150"
        y="130"
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
        fill="#2196F3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.0 }}
      >
        플라이 아웃!
      </motion.text>
    </g>
  );
}

function ForceoutAnim({ animKey }: { animKey: number }) {
  return (
    <g key={`force-${animKey}`}>
      <rect x="195" y="105" width="14" height="14" fill="white" stroke="#666" strokeWidth="2" rx="2" />
      <text x="202" y="135" textAnchor="middle" fontSize="9" fill="#666" fontWeight="bold">1B</text>
      <circle cx="80" cy="85" r="9" fill="#FF9800" opacity="0.8" />
      <text x="80" y="88" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">SS</text>
      {/* 주자 달리기 */}
      <motion.circle
        r="8"
        fill="#555"
        initial={{ cx: 100, cy: 190 }}
        animate={{ cx: 175, cy: 120 }}
        transition={{ duration: 1.5, ease: 'linear' }}
      />
      <motion.text
        fontSize="10"
        textAnchor="middle"
        dominantBaseline="central"
        initial={{ x: 100, y: 190 }}
        animate={{ x: 175, y: 120 }}
        transition={{ duration: 1.5, ease: 'linear' }}
      >
        🏃
      </motion.text>
      {/* 송구 궤적 */}
      <motion.line
        x1="80" y1="85"
        x2="202" y2="112"
        stroke="#FF9800"
        strokeWidth="2"
        strokeDasharray="5,3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      />
      {/* 공 송구 */}
      <motion.circle
        r="5"
        fill="white"
        stroke="#FF9800"
        strokeWidth="1.5"
        initial={{ cx: 80, cy: 85, opacity: 0 }}
        animate={{ cx: 202, cy: 112, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
      />
      {/* 1루 하이라이트 */}
      <motion.rect
        x="192" y="102" width="20" height="20" rx="3"
        fill="#FF9800"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 0.5, delay: 1.0 }}
      />
      <motion.text
        x="202" y="90"
        textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FF9800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      >
        공이 먼저!
      </motion.text>
      <motion.text
        x="150" y="200"
        textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FF9800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        포스 아웃!
      </motion.text>
    </g>
  );
}

function TagoutAnim({ animKey }: { animKey: number }) {
  return (
    <g key={`tag-${animKey}`}>
      <rect x="143" y="58" width="14" height="14" fill="white" stroke="#666" strokeWidth="2" rx="2" transform="rotate(45 150 65)" />
      <text x="150" y="50" textAnchor="middle" fontSize="9" fill="#666" fontWeight="bold">2B</text>
      {/* 야수 이동 */}
      <motion.circle
        r="9" fill="#9C27B0" opacity={0.8}
        initial={{ cx: 120, cy: 85 }}
        animate={{ cx: 150, cy: 70 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.text
        fontSize="8" fill="white" fontWeight="bold" textAnchor="middle"
        initial={{ x: 120, y: 88 }}
        animate={{ x: 150, y: 73 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        SS
      </motion.text>
      {/* 주자 도루 시도 */}
      <motion.circle
        r="8" fill="#555"
        initial={{ cx: 230, cy: 140 }}
        animate={{ cx: 160, cy: 80 }}
        transition={{ duration: 1.0, ease: 'linear' }}
      />
      <motion.text
        fontSize="10" textAnchor="middle" dominantBaseline="central"
        initial={{ x: 230, y: 140 }}
        animate={{ x: 160, y: 80 }}
        transition={{ duration: 1.0, ease: 'linear' }}
      >
        🏃
      </motion.text>
      {/* 터치 이펙트 */}
      <motion.circle
        cx="155" cy="75" r="16" fill="#9C27B0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 0.5, delay: 1.0 }}
      />
      <motion.text
        x="150" y="160"
        textAnchor="middle" fontSize="11" fontWeight="bold" fill="#9C27B0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        주자를 글러브로 터치!
      </motion.text>
      <motion.text
        x="150" y="195"
        textAnchor="middle" fontSize="16" fontWeight="bold" fill="#9C27B0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        태그 아웃!
      </motion.text>
    </g>
  );
}

function OutTypesDiagram() {
  const [activeOut, setActiveOut] = useState<OutType | null>(null);
  const [outAnimKey, setOutAnimKey] = useState(0);

  const playOut = (type: OutType) => {
    setActiveOut(type);
    setOutAnimKey((k) => k + 1);
  };

  return (
    <div className="w-full max-w-sm mx-auto my-4 space-y-3">
      {/* 버튼 */}
      <div className="grid grid-cols-4 gap-2">
        {(Object.entries(outConfig) as [OutType, typeof outConfig[OutType]][]).map(
          ([key, val]) => (
            <button
              key={key}
              onClick={() => playOut(key)}
              className="py-2 px-1 rounded-xl text-white text-xs font-bold transition-all active:scale-95"
              style={{
                backgroundColor: activeOut === key ? val.color : `${val.color}80`,
                boxShadow: activeOut === key ? `0 4px 14px ${val.color}50` : 'none',
              }}
            >
              {val.icon} {val.label}
            </button>
          )
        )}
      </div>

      {/* 애니메이션 필드 */}
      <div className="relative bg-gradient-to-b from-green-50 to-amber-50 rounded-2xl p-2 border border-gray-200">
        <svg viewBox="0 0 300 220" className="w-full">
          <rect x="0" y="0" width="300" height="220" fill="#4CAF50" opacity="0.08" rx="12" />
          <ellipse cx="150" cy="160" rx="100" ry="50" fill="#8D6E63" opacity="0.1" />

          {activeOut === 'strikeout' && <StrikeoutAnim animKey={outAnimKey} />}
          {activeOut === 'flyout' && <FlyoutAnim animKey={outAnimKey} />}
          {activeOut === 'forceout' && <ForceoutAnim animKey={outAnimKey} />}
          {activeOut === 'tagout' && <TagoutAnim animKey={outAnimKey} />}

          {!activeOut && (
            <text x="150" y="115" textAnchor="middle" fontSize="11" fill="#aaa">
              위 버튼을 눌러 아웃 시뮬레이션을 보세요!
            </text>
          )}
        </svg>

        <AnimatePresence mode="wait">
          {activeOut && (
            <motion.div
              key={`out-result-${outAnimKey}`}
              className="text-center py-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.8 }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-white text-sm font-bold"
                style={{ backgroundColor: outConfig[activeOut].color }}
              >
                {outConfig[activeOut].icon} {outConfig[activeOut].desc}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function PostseasonDiagram() {
  return (
    <div className="w-full max-w-sm mx-auto my-4">
      <svg viewBox="0 0 300 240" className="w-full">
        {/* 와일드카드 */}
        <rect x="10" y="10" width="80" height="36" rx="8" fill="#9E9E9E" opacity="0.9" />
        <text x="50" y="25" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">5위</text>
        <text x="50" y="37" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.8)">와일드카드</text>
        <rect x="10" y="54" width="80" height="36" rx="8" fill="#9E9E9E" opacity="0.9" />
        <text x="50" y="69" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">4위</text>
        <text x="50" y="81" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.8)">1승 어드밴티지</text>

        {/* 화살표 1 */}
        <line x1="90" y1="50" x2="110" y2="50" stroke="#e91e63" strokeWidth="2" markerEnd="url(#arrow2)" />

        {/* 준플레이오프 */}
        <rect x="110" y="30" width="80" height="36" rx="8" fill="#FF9800" opacity="0.9" />
        <text x="150" y="45" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">준플레이오프</text>
        <text x="150" y="57" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.8)">5전 3선승</text>

        <rect x="110" y="76" width="80" height="36" rx="8" fill="#FF9800" opacity="0.9" />
        <text x="150" y="91" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">3위</text>
        <text x="150" y="103" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.8)">vs 승자</text>

        {/* 화살표 2 */}
        <line x1="190" y1="70" x2="210" y2="100" stroke="#e91e63" strokeWidth="2" markerEnd="url(#arrow2)" />

        {/* 플레이오프 */}
        <rect x="110" y="122" width="80" height="36" rx="8" fill="#2196F3" opacity="0.9" />
        <text x="150" y="137" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">2위</text>
        <text x="150" y="149" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.8)">vs 준플 승자</text>

        <rect x="210" y="96" width="80" height="36" rx="8" fill="#2196F3" opacity="0.9" />
        <text x="250" y="111" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">플레이오프</text>
        <text x="250" y="123" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.8)">5전 3선승</text>

        {/* 화살표 3 */}
        <line x1="250" y1="132" x2="250" y2="150" stroke="#e91e63" strokeWidth="2" markerEnd="url(#arrow2)" />

        {/* 한국시리즈 */}
        <rect x="110" y="168" width="80" height="36" rx="8" fill="#F44336" opacity="0.9" />
        <text x="150" y="183" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">1위</text>
        <text x="150" y="195" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.8)">KS 직행</text>

        <rect x="210" y="155" width="80" height="36" rx="8" fill="#F44336" opacity="0.9" />
        <text x="250" y="170" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">한국시리즈</text>
        <text x="250" y="182" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.8)">7전 4선승</text>

        {/* 화살표 4 */}
        <line x1="190" y1="186" x2="210" y2="173" stroke="#e91e63" strokeWidth="2" markerEnd="url(#arrow2)" />

        {/* 우승! */}
        <rect x="215" y="200" width="70" height="32" rx="10" fill="#FFD700" stroke="#FFA000" strokeWidth="2" />
        <text x="250" y="220" textAnchor="middle" fontSize="10" fill="#333" fontWeight="bold">우승!</text>
        <line x1="250" y1="191" x2="250" y2="200" stroke="#e91e63" strokeWidth="2" markerEnd="url(#arrow2)" />

        <defs>
          <marker id="arrow2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#e91e63" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

function ScoreboardExample() {
  return (
    <div className="my-4 overflow-x-auto">
      <table className="w-full text-center text-sm border-collapse rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="py-2 px-2 text-left">팀</th>
            {[1,2,3,4,5,6,7,8,9].map(i => (
              <th key={i} className="py-2 px-1.5 font-mono w-7">{i}</th>
            ))}
            <th className="py-2 px-2 font-bold bg-gray-700">R</th>
            <th className="py-2 px-2 bg-gray-700">H</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-50">
            <td className="py-2 px-2 text-left font-bold text-blue-700">원정</td>
            {[0,1,0,0,2,0,0,1,0].map((v,i) => (
              <td key={i} className={`py-2 px-1.5 font-mono ${v > 0 ? 'text-blue-600 font-bold' : 'text-gray-400'}`}>{v}</td>
            ))}
            <td className="py-2 px-2 font-bold text-blue-700 bg-blue-100">4</td>
            <td className="py-2 px-2 text-gray-600 bg-blue-100">8</td>
          </tr>
          <tr className="bg-red-50">
            <td className="py-2 px-2 text-left font-bold text-red-700">홈</td>
            {[2,0,0,1,0,0,3,0,'X'].map((v,i) => (
              <td key={i} className={`py-2 px-1.5 font-mono ${(typeof v === 'number' && v > 0) ? 'text-red-600 font-bold' : 'text-gray-400'}`}>{v}</td>
            ))}
            <td className="py-2 px-2 font-bold text-red-700 bg-red-100">6</td>
            <td className="py-2 px-2 text-gray-600 bg-red-100">11</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-2 text-xs text-gray-500 space-y-0.5">
        <p><strong>R</strong> = 총 득점 (Runs), <strong>H</strong> = 총 안타 (Hits)</p>
        <p><strong>X</strong> = 9회말 공격 불필요 (홈팀이 이기고 있어서 공격 안 함)</p>
      </div>
    </div>
  );
}

function BallCountDiagram() {
  return (
    <div className="flex items-center justify-center gap-6 my-4 p-4 bg-gray-900 rounded-xl">
      <div className="text-center">
        <div className="flex gap-1.5 mb-1">
          <div className="w-5 h-5 rounded-full bg-yellow-400" />
          <div className="w-5 h-5 rounded-full bg-yellow-400" />
          <div className="w-5 h-5 rounded-full border-2 border-yellow-400/40" />
          <div className="w-5 h-5 rounded-full border-2 border-yellow-400/40" />
        </div>
        <span className="text-xs text-yellow-300 font-bold">B (볼)</span>
      </div>
      <div className="text-center">
        <div className="flex gap-1.5 mb-1">
          <div className="w-5 h-5 rounded-full bg-red-500" />
          <div className="w-5 h-5 rounded-full border-2 border-red-500/40" />
          <div className="w-5 h-5 rounded-full border-2 border-red-500/40" />
        </div>
        <span className="text-xs text-red-400 font-bold">S (스트라이크)</span>
      </div>
      <div className="text-center">
        <div className="flex gap-1.5 mb-1">
          <div className="w-5 h-5 rounded-full bg-white" />
          <div className="w-5 h-5 rounded-full border-2 border-white/40" />
          <div className="w-5 h-5 rounded-full border-2 border-white/40" />
        </div>
        <span className="text-xs text-gray-300 font-bold">O (아웃)</span>
      </div>
    </div>
  );
}

/* ─── 룰 데이터 ─── */

interface Rule {
  title: string;
  emoji: string;
  description: string;
  details: string[];
  visual?: React.ReactNode;
  tip?: string;
}

const baseballRules: Rule[] = [
  {
    title: '야구 기본 룰',
    emoji: '⚾',
    description: '9명이 9이닝 동안 공격과 수비를 번갈아 하며 득점을 겨루는 스포츠',
    details: [
      '공격팀: 타자가 공을 쳐서 1루→2루→3루→홈 순서로 돌아오면 1점!',
      '수비팀: 투수가 공을 던지고 야수들이 공을 잡아 아웃시킴',
      '3아웃이 되면 공수 교대 (공격 ↔ 수비)',
      '1이닝 = 초(원정팀 공격) + 말(홈팀 공격)',
      '9이닝 후 더 많은 점수를 낸 팀이 승리',
      '동점일 경우 연장전 진행 (최대 12이닝)',
    ],
    visual: <BaseballDiamondDiagram />,
    tip: '타자가 홈→1루→2루→3루→홈 순서(반시계 방향)로 돌아야 해요!',
  },
  {
    title: '스트라이크 & 볼 카운트',
    emoji: '🎯',
    description: '투수가 던진 공이 스트라이크 존을 통과하면 스트라이크!',
    details: [
      '스트라이크 존: 타자의 어깨~무릎 높이 & 홈플레이트 위 공간',
      '스트라이크 3개 → 삼진 아웃! (K)',
      '볼 4개 → 타자가 1루로 진루 (볼넷 / 포볼)',
      '파울볼 = 스트라이크 카운트 +1 (단, 2S 이후 파울은 카운트 안 됨)',
      '타자가 빈 스윙을 해도 스트라이크 (헛스윙)',
    ],
    visual: (
      <>
        <StrikeZoneDiagram />
        <BallCountDiagram />
      </>
    ),
    tip: '전광판에 B-S-O 표시가 있어요. B=볼, S=스트라이크, O=아웃!',
  },
  {
    title: '안타 & 홈런',
    emoji: '💥',
    description: '타자가 공을 쳐서 야수가 잡기 전에 베이스에 도착하면 안타!',
    details: [
      '1루타(싱글): 1루까지 안전하게 도착',
      '2루타(더블): 2루까지 도착 - 보통 외야 갈라진 타구',
      '3루타(트리플): 3루까지 도착 - 상당히 희귀!',
      '홈런(HR): 외야 담장 밖으로 넘기면 자동 득점!',
      '만루홈런(그랜드슬램): 주자 만루에서 홈런 → 한방에 4점!',
      '인필드 안타: 내야에서 친 공인데 야수가 처리 못한 경우',
    ],
    visual: <HitTypesDiagram />,
    tip: '홈런이 나오면 다같이 일어서서 환호해요! 응원가도 나와요!',
  },
  {
    title: '아웃 당하는 방법',
    emoji: '❌',
    description: '3아웃이 되면 공격 종료! 아웃 종류를 알아보자',
    details: [
      '삼진 (Strikeout/K): 스트라이크 3개 - 가장 기본적인 아웃',
      '플라이 아웃: 타구가 땅에 닿기 전 야수가 잡으면 아웃',
      '포스 아웃: 타자/주자보다 공이 베이스에 먼저 도착',
      '태그 아웃: 베이스 밖에 있는 주자를 공으로 터치',
      '병살 (더블플레이): 한 타구로 2명 동시 아웃! 수비팀 최고의 무기',
      '삼중살 (트리플플레이): 한 타구로 3명 아웃 - 극히 드문 장면!',
    ],
    visual: <OutTypesDiagram />,
    tip: '삼진 아웃은 "K"라고 표시해요. 역삼진(보고 삼진)은 거꾸로 "Ꝅ"!',
  },
  {
    title: '포지션 (수비 위치)',
    emoji: '👥',
    description: '야구장에는 9명의 수비수가 각자 맡은 자리에서 뛰어요',
    details: [
      '투수 (P): 마운드에서 공을 던지는 게임의 핵심! 에이스라 불리는 1선발이 가장 중요',
      '포수 (C): 투수 뒤에서 공을 받으며 작전을 지시하는 그라운드 감독',
      '1루수 (1B): 1루 베이스를 지키며 내야 송구를 받아 아웃 처리',
      '2루수 (2B): 2루 부근 수비, 병살 중계 플레이의 핵심',
      '3루수 (3B): 강한 타구를 맨몸으로 받아내는 뜨거운 코너',
      '유격수 (SS): 2루-3루 사이, 수비 범위 넓은 핵심 포지션',
      '좌익수 (LF) / 중견수 (CF) / 우익수 (RF): 외야를 3등분해서 수비',
      '지명타자 (DH): 수비 없이 타격만 전담 (KBO/AL 규칙)',
    ],
    visual: <PositionsDiagram />,
    tip: '포지션 번호: 투수(1) 포수(2) 1루(3) 2루(4) 3루(5) 유격(6) 좌익(7) 중견(8) 우익(9)',
  },
  {
    title: '전광판 & 스코어보드 보는 법',
    emoji: '📺',
    description: '야구장 전광판에 표시되는 정보를 읽어보자!',
    details: [
      '스코어보드: 이닝별 득점, 총 득점(R), 안타(H), 에러(E) 표시',
      'B-S-O 카운트: 현재 볼-스트라이크-아웃 카운트',
      '주자 표시: 다이아몬드 모양에 주자 위치 표시',
      '타순: 현재 타석의 타자 이름, 타율, 등번호',
      '투수 정보: 현재 투수의 투구 수, 방어율',
      '"X" 표시: 홈팀이 리드 중이면 9회말 공격 없이 경기 종료',
    ],
    visual: <ScoreboardExample />,
    tip: '경기 시작 전에 전광판 위치를 확인해두면 경기가 더 재밌어요!',
  },
  {
    title: '응원 문화 즐기기',
    emoji: '📣',
    description: 'KBO는 세계에서 가장 열정적인 응원 문화를 자랑해요!',
    details: [
      '응원가: 각 선수마다 전용 응원가가 있어요 - 외우면 100배 재밌음!',
      '치어리더: 이닝 사이사이 신나는 퍼포먼스를 펼쳐요',
      '응원 도구: 막대풍선, 응원 타올, 유니폼, 모자 등',
      '치맥(치킨+맥주): 야구장의 국룰 조합! 배달 주문도 가능',
      '7회 럭키세븐: 7회에 팀 응원가를 다같이 부르는 시간',
      '승리 후 세리머니: 불꽃놀이, 승리 요정 투표 등 다양한 이벤트',
    ],
    tip: '이 앱의 "노래방" 메뉴에서 응원가를 미리 연습할 수 있어요!',
  },
  {
    title: '재미있는 야구 용어',
    emoji: '💬',
    description: '야구장에서 자주 듣는 용어들을 알아보자!',
    details: [
      '만루: 1·2·3루에 모두 주자가 있는 긴장감 넘치는 상황!',
      '그랜드슬램: 만루 상태에서 홈런 → 한방에 4점!',
      '병살(겜끝병살): 한 번에 2명 아웃 - 분위기 반전의 순간',
      '끝내기: 9회말(또는 연장)에서 결승점을 올리는 극적인 장면',
      '노히트노런: 투수가 안타 0개 허용 (역대급 기록!)',
      '퍼펙트게임: 한 명의 출루도 허용하지 않음 (전설적 기록)',
      '보크: 투수의 부정 동작 - 주자 자동 진루',
      '인필드플라이: 내야 뜬공 시 타자 자동 아웃 (주자 보호 규정)',
    ],
    tip: '"겜끝병살"은 실제 야구 팬들이 자주 쓰는 인터넷 밈이에요!',
  },
  {
    title: '피치클락 & ABS (2025~)',
    emoji: '🤖',
    description: 'KBO에 도입된 최신 룰! 경기 속도 향상 + AI 스트라이크 존',
    details: [
      '피치클락: 투수는 15초(주자 없을 때) / 20초(주자 있을 때) 이내에 투구해야 함',
      '타자도 8초 전까지 타석에 준비 완료해야 함 - 위반 시 자동 스트라이크!',
      '투수 위반 시 자동 볼 1개 추가, 타자 위반 시 자동 스트라이크 1개 추가',
      'ABS (Automated Ball-Strike System): AI가 스트라이크/볼을 판정',
      'ABS는 트래킹 카메라로 공의 궤적을 실시간 추적하여 정확한 존 판정',
      '심판의 오심 논란이 크게 줄어듦! 하지만 기계 판정에 대한 논쟁도 존재',
      '챌린지 제도: 팀당 경기 중 일정 횟수 ABS 판정에 이의 신청 가능',
      '견제 제한: 투수는 한 타석에 견제/스텝오프 합산 2회까지만 가능',
    ],
    tip: '피치클락 덕분에 경기 시간이 약 30분 단축! 3시간 → 2시간 30분 정도',
  },
  {
    title: 'KBO 라이벌 & 더비 매치',
    emoji: '🔥',
    description: '라이벌 팀끼리 만나면 경기가 10배 더 뜨거워요!',
    details: [
      '잠실 더비 (LG vs 두산): 같은 잠실구장을 홈으로 쓰는 두 팀! 서울 최고의 라이벌전',
      '낙동강 더비 (롯데 vs NC): 부산 vs 창원, 경남 지역 자존심 대결!',
      '클래식 매치 (롯데 vs 삼성): KBO 원년(1982)부터 팀명을 한 번도 안 바꾼 유일한 두 팀의 대결!',
      '영호남 더비 (기아 vs 삼성): 광주 vs 대구, 전통의 지역 감정 대결! 역사가 가장 오래된 라이벌리',
      '수도권 더비 (SSG vs KT): 인천 vs 수원, 경기도 신흥 라이벌',
      '한화 vs 두산: "곰이언츠" 밈으로 유명한 전통 라이벌 (이글스 vs 베어스)',
      '더비 경기에는 팬들이 더 많이 몰리고, 응원도 더욱 뜨거워요!',
      '직관 초보라면 더비 매치부터 시작하는 걸 강력 추천!',
    ],
    tip: '같은 팀이라도 라이벌전은 분위기가 완전 달라요! 야구장 가기 전 라이벌 일정을 꼭 확인하세요!',
  },
  {
    title: '포스트시즌 (가을 야구)',
    emoji: '🏆',
    description: '정규시즌 상위 5개 팀이 우승을 놓고 벌이는 플레이오프!',
    details: [
      '와일드카드 (4위 vs 5위): 단판 승부! 4위팀에 1승 어드밴티지',
      '준플레이오프 (3위 vs 와일드카드 승자): 5전 3선승제',
      '플레이오프 (2위 vs 준플 승자): 5전 3선승제',
      '한국시리즈 (1위 vs 플옵 승자): 7전 4선승제 - 최종 우승 결정!',
      '홈 어드밴티지: 상위 시드팀이 더 많은 홈 경기를 가짐',
      '가을 야구 = 정규시즌 5위 안에 드는 것! 팬들의 최소 목표',
    ],
    visual: <PostseasonDiagram />,
    tip: '6위 이하는 가을 야구 못 해요... "내년을 기약하자" 가 됩니다 😢',
  },
  {
    title: 'KBO 순위 결정 방식',
    emoji: '📊',
    description: '정규시즌 144경기! 승률로 순위를 결정해요',
    details: [
      '승률 = 승리 수 ÷ (승리 + 패배) × 100%',
      '무승부는 승률 계산에 포함하지 않음',
      '승률이 같으면: ① 상대 전적 → ② 최근 경기 성적 → ③ 다득점 순',
      '1위: 한국시리즈 직행! (가장 유리한 위치)',
      '2위~5위: 와일드카드/플레이오프부터 시작',
      '6위 이하: 시즌 종료... 내년을 기약 😢',
      '매직넘버: "이 수만큼 이기면 1위 확정" - 시즌 막바지 긴장감!',
    ],
    tip: '시즌 초반에는 게임차(GB)를 보고, 후반에는 매직넘버에 주목!',
  },
];

/* ─── 메인 컴포넌트 ─── */

export default function BaseballRules() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleRule = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          ⚾ 야구 완전정복 가이드
        </h2>
        <p className="text-gray-600">
          야구가 처음이라면 꼭 읽어보세요! 시각적으로 쉽게 이해할 수 있어요
        </p>
      </div>

      {/* YouTube 영상 */}
      <div className="mb-6">
        <Card className="p-4 bg-white">
          <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <span className="inline-block w-6 h-6 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">▶</span>
            영상으로 먼저 빠르게 이해하기
          </p>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/i5fvsBGUz6Q"
              title="야구룰 영상"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </Card>
      </div>

      {baseballRules.map((rule, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <Card className="cursor-pointer hover:shadow-2xl transition-shadow !p-5">
            <div onClick={() => toggleRule(index)}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{rule.emoji}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {rule.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-0.5">
                      {rule.description}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 ml-2"
                >
                  {expandedIndex === index ? (
                    <ChevronUp className="text-pink-500" size={22} />
                  ) : (
                    <ChevronDown className="text-pink-500" size={22} />
                  )}
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t-2 border-pink-100"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* 시각 자료 */}
                    {rule.visual && (
                      <div className="mb-4">
                        {rule.visual}
                      </div>
                    )}

                    {/* 상세 내용 */}
                    <ul className="space-y-2.5">
                      {rule.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-pink-500 mt-0.5 shrink-0 text-lg leading-none">•</span>
                          <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* 팁 */}
                    {rule.tip && (
                      <div className="mt-4 p-3 bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl">
                        <p className="text-sm text-amber-800">
                          <span className="font-bold">💡 TIP:</span> {rule.tip}
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>
      ))}

      <Card className="bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="text-center space-y-3">
          <div className="text-4xl">🎉</div>
          <h3 className="text-xl font-bold text-gray-800">
            이제 야구장 갈 준비 완료!
          </h3>
          <p className="text-gray-600">
            직접 보면 훨씬 더 재밌어요! 응원가 따라 부르면서 즐겨보세요
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {['치맥 준비', '응원가 연습', '유니폼 착용', '직관 가자!'].map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-pink-600 border border-pink-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
