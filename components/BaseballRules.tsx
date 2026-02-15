'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Card from './Card';
import { ChevronDown, ChevronUp } from 'lucide-react';

/* ─── 인라인 SVG 다이어그램 컴포넌트들 ─── */

function BaseballDiamondDiagram() {
  return (
    <div className="w-full max-w-xs mx-auto my-4">
      <svg viewBox="0 0 200 220" className="w-full">
        {/* 외야 잔디 */}
        <path d="M 100 30 L 20 120 L 100 210 L 180 120 Z" fill="#4CAF50" opacity="0.3" rx="10" />
        {/* 내야 다이아몬드 */}
        <path d="M 100 50 L 40 120 L 100 190 L 160 120 Z" fill="#8D6E63" opacity="0.4" />
        {/* 베이스 라인 */}
        <line x1="100" y1="50" x2="160" y2="120" stroke="white" strokeWidth="2" />
        <line x1="160" y1="120" x2="100" y2="190" stroke="white" strokeWidth="2" />
        <line x1="100" y1="190" x2="40" y2="120" stroke="white" strokeWidth="2" />
        <line x1="40" y1="120" x2="100" y2="50" stroke="white" strokeWidth="2" />

        {/* 2루 */}
        <rect x="94" y="44" width="12" height="12" fill="white" transform="rotate(45 100 50)" />
        <text x="100" y="38" textAnchor="middle" fontSize="11" fill="#333" fontWeight="bold">2루</text>

        {/* 1루 */}
        <rect x="154" y="114" width="12" height="12" fill="white" />
        <text x="175" y="108" textAnchor="middle" fontSize="11" fill="#333" fontWeight="bold">1루</text>

        {/* 3루 */}
        <rect x="34" y="114" width="12" height="12" fill="white" />
        <text x="25" y="108" textAnchor="middle" fontSize="11" fill="#333" fontWeight="bold">3루</text>

        {/* 홈플레이트 */}
        <path d="M 95 185 L 100 195 L 105 185 L 103 182 L 97 182 Z" fill="white" stroke="#555" strokeWidth="1" />
        <text x="100" y="210" textAnchor="middle" fontSize="11" fill="#333" fontWeight="bold">홈</text>

        {/* 투수 마운드 */}
        <circle cx="100" cy="120" r="6" fill="#8D6E63" stroke="white" strokeWidth="2" />
        <text x="100" y="140" textAnchor="middle" fontSize="10" fill="#555">투수</text>

        {/* 주루 방향 화살표 */}
        <path d="M 112 185 Q 165 145 158 115" fill="none" stroke="#e91e63" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrowhead)" />
        <path d="M 163 108 Q 140 55 108 48" fill="none" stroke="#e91e63" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrowhead)" />
        <path d="M 92 48 Q 55 60 38 108" fill="none" stroke="#e91e63" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrowhead)" />
        <path d="M 38 128 Q 55 175 92 188" fill="none" stroke="#e91e63" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrowhead)" />
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#e91e63" />
          </marker>
        </defs>
        <text x="100" y="165" textAnchor="middle" fontSize="9" fill="#e91e63" fontWeight="bold">반시계 방향 주루</text>
      </svg>
    </div>
  );
}

function StrikeZoneDiagram() {
  return (
    <div className="w-full max-w-[200px] mx-auto my-4">
      <svg viewBox="0 0 160 220" className="w-full">
        {/* 타자 실루엣 */}
        <circle cx="115" cy="45" r="14" fill="#ddd" stroke="#999" strokeWidth="1" />
        <line x1="115" y1="59" x2="115" y2="110" stroke="#ccc" strokeWidth="4" strokeLinecap="round" />
        <line x1="115" y1="110" x2="105" y2="155" stroke="#ccc" strokeWidth="4" strokeLinecap="round" />
        <line x1="115" y1="110" x2="125" y2="155" stroke="#ccc" strokeWidth="4" strokeLinecap="round" />
        {/* 배트 */}
        <line x1="100" y1="75" x2="65" y2="40" stroke="#8D6E63" strokeWidth="3" strokeLinecap="round" />

        {/* 스트라이크 존 */}
        <rect x="25" y="55" width="60" height="75" fill="rgba(244, 67, 54, 0.15)" stroke="#F44336" strokeWidth="2" strokeDasharray="6,3" rx="3" />

        {/* 존 내부 9분할 */}
        <line x1="45" y1="55" x2="45" y2="130" stroke="#F44336" strokeWidth="0.5" opacity="0.4" />
        <line x1="65" y1="55" x2="65" y2="130" stroke="#F44336" strokeWidth="0.5" opacity="0.4" />
        <line x1="25" y1="80" x2="85" y2="80" stroke="#F44336" strokeWidth="0.5" opacity="0.4" />
        <line x1="25" y1="105" x2="85" y2="105" stroke="#F44336" strokeWidth="0.5" opacity="0.4" />

        {/* 레이블 */}
        <text x="55" y="48" textAnchor="middle" fontSize="10" fill="#F44336" fontWeight="bold">어깨</text>
        <text x="55" y="146" textAnchor="middle" fontSize="10" fill="#F44336" fontWeight="bold">무릎</text>
        <text x="55" y="96" textAnchor="middle" fontSize="11" fill="#F44336" fontWeight="bold">스트라이크 존</text>

        {/* 홈플레이트 */}
        <path d="M 35 165 L 55 175 L 75 165 L 70 160 L 40 160 Z" fill="white" stroke="#555" strokeWidth="1.5" />
        <text x="55" y="190" textAnchor="middle" fontSize="10" fill="#555">홈플레이트</text>

        {/* 볼 표시 */}
        <text x="6" y="95" textAnchor="middle" fontSize="9" fill="#2196F3" fontWeight="bold">볼</text>
        <text x="55" y="210" textAnchor="middle" fontSize="9" fill="#2196F3" fontWeight="bold">존 바깥 = 볼</text>
      </svg>
    </div>
  );
}

function PositionsDiagram() {
  const positions = [
    { x: 100, y: 22, label: '중견수', sub: 'CF', color: '#4CAF50' },
    { x: 38, y: 42, label: '좌익수', sub: 'LF', color: '#4CAF50' },
    { x: 162, y: 42, label: '우익수', sub: 'RF', color: '#4CAF50' },
    { x: 60, y: 92, label: '유격수', sub: 'SS', color: '#FF9800' },
    { x: 88, y: 78, label: '2루수', sub: '2B', color: '#FF9800' },
    { x: 140, y: 92, label: '1루수', sub: '1B', color: '#FF9800' },
    { x: 45, y: 108, label: '3루수', sub: '3B', color: '#FF9800' },
    { x: 100, y: 118, label: '투수', sub: 'P', color: '#F44336' },
    { x: 100, y: 175, label: '포수', sub: 'C', color: '#9C27B0' },
  ];

  return (
    <div className="w-full max-w-xs mx-auto my-4">
      <svg viewBox="0 0 200 200" className="w-full">
        {/* 외야 잔디 */}
        <path d="M 10 60 Q 100 -20 190 60 L 190 100 Q 100 40 10 100 Z" fill="#4CAF50" opacity="0.2" />
        {/* 내야 */}
        <path d="M 10 100 Q 100 40 190 100 L 190 150 Q 100 90 10 150 Z" fill="#8D6E63" opacity="0.2" />

        {/* 포지션 마커 */}
        {positions.map((pos, i) => (
          <g key={i}>
            <circle cx={pos.x} cy={pos.y} r="16" fill={pos.color} opacity="0.9" />
            <text x={pos.x} y={pos.y - 2} textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">{pos.label}</text>
            <text x={pos.x} y={pos.y + 8} textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.8)">{pos.sub}</text>
          </g>
        ))}

        {/* 범례 */}
        <circle cx="20" cy="190" r="5" fill="#F44336" />
        <text x="30" y="193" fontSize="8" fill="#555">배터리</text>
        <circle cx="70" cy="190" r="5" fill="#FF9800" />
        <text x="80" y="193" fontSize="8" fill="#555">내야수</text>
        <circle cx="120" cy="190" r="5" fill="#4CAF50" />
        <text x="130" y="193" fontSize="8" fill="#555">외야수</text>
      </svg>
    </div>
  );
}

function HitTypesDiagram() {
  return (
    <div className="w-full max-w-xs mx-auto my-4">
      <svg viewBox="0 0 200 180" className="w-full">
        {/* 필드 */}
        <path d="M 100 160 L 20 80 Q 100 10 180 80 Z" fill="#4CAF50" opacity="0.2" />
        <path d="M 100 160 L 55 115 L 100 85 L 145 115 Z" fill="#8D6E63" opacity="0.25" />

        {/* 홈런 궤적 */}
        <path d="M 100 155 Q 60 80 45 30" fill="none" stroke="#F44336" strokeWidth="2.5" strokeDasharray="6,3" />
        <circle cx="45" cy="30" r="8" fill="#F44336" opacity="0.8" />
        <text x="45" y="33" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">HR</text>
        <text x="30" y="18" textAnchor="middle" fontSize="8" fill="#F44336" fontWeight="bold">홈런!</text>

        {/* 3루타 */}
        <path d="M 100 155 Q 75 100 35 65" fill="none" stroke="#FF9800" strokeWidth="2" strokeDasharray="4,3" />
        <circle cx="35" cy="65" r="6" fill="#FF9800" opacity="0.8" />
        <text x="20" y="60" textAnchor="end" fontSize="8" fill="#FF9800" fontWeight="bold">3루타</text>

        {/* 2루타 */}
        <path d="M 100 155 Q 110 110 130 80" fill="none" stroke="#2196F3" strokeWidth="2" strokeDasharray="4,3" />
        <circle cx="130" cy="80" r="6" fill="#2196F3" opacity="0.8" />
        <text x="148" y="78" fontSize="8" fill="#2196F3" fontWeight="bold">2루타</text>

        {/* 1루타 */}
        <path d="M 100 155 Q 120 130 155 115" fill="none" stroke="#4CAF50" strokeWidth="2" strokeDasharray="4,3" />
        <circle cx="155" cy="115" r="6" fill="#4CAF50" opacity="0.8" />
        <text x="170" y="113" fontSize="8" fill="#4CAF50" fontWeight="bold">1루타</text>

        {/* 홈 */}
        <path d="M 96 155 L 100 162 L 104 155 L 102 152 L 98 152 Z" fill="white" stroke="#555" strokeWidth="1" />
        <text x="100" y="175" textAnchor="middle" fontSize="9" fill="#555" fontWeight="bold">타석</text>
      </svg>
    </div>
  );
}

function OutTypesDiagram() {
  return (
    <div className="grid grid-cols-2 gap-3 my-4">
      {[
        { icon: 'K', title: '삼진 아웃', desc: '스트라이크 3개', color: '#F44336' },
        { icon: '🧤', title: '플라이 아웃', desc: '뜬공을 직접 캐치', color: '#2196F3' },
        { icon: '⚡', title: '포스 아웃', desc: '주자보다 공이 먼저 도착', color: '#FF9800' },
        { icon: '🏷️', title: '태그 아웃', desc: '공으로 주자 터치', color: '#9C27B0' },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2 p-3 rounded-xl" style={{ backgroundColor: `${item.color}10`, border: `1.5px solid ${item.color}30` }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold shrink-0" style={{ backgroundColor: item.color }}>
            {item.icon}
          </div>
          <div>
            <div className="text-sm font-bold text-gray-800">{item.title}</div>
            <div className="text-xs text-gray-500">{item.desc}</div>
          </div>
        </div>
      ))}
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
