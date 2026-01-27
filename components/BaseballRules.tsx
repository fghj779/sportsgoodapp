'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from './Card';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Rule {
  title: string;
  emoji: string;
  description: string;
  details: string[];
}

const baseballRules: Rule[] = [
  {
    title: '야구 기본 룰',
    emoji: '⚾',
    description: '9명이 9이닝 동안 공격과 수비를 번갈아 하며 득점을 겨루는 스포츠',
    details: [
      '공격팀: 타자가 공을 쳐서 베이스를 돌아 홈까지 오면 1점',
      '수비팀: 투수가 공을 던지고 야수들이 공을 잡아 아웃시킴',
      '3아웃이 되면 공수 교대',
      '9이닝 후 더 많은 점수를 낸 팀이 승리'
    ]
  },
  {
    title: '스트라이크 & 볼',
    emoji: '🎯',
    description: '투수가 던진 공이 스트라이크 존을 통과하면 스트라이크!',
    details: [
      '스트라이크 3개: 삼진 아웃!',
      '볼 4개: 타자가 1루로 진루 (볼넷)',
      '스트라이크 존: 타자의 어깨부터 무릎까지, 홈플레이트 위',
      '타자가 공을 쳤는데 파울이면 스트라이크 (단, 2스트라이크 후 파울은 카운트 안 됨)'
    ]
  },
  {
    title: '안타 & 홈런',
    emoji: '💥',
    description: '타자가 공을 쳐서 야수가 잡기 전에 베이스에 도착하면 안타!',
    details: [
      '1루타: 1루까지 안전하게 도착',
      '2루타: 2루까지 도착 (보통 외야 땅볼)',
      '3루타: 3루까지 도착 (외야 깊숙이)',
      '홈런: 담장 밖으로 넘기거나 한 바퀴 다 돌면 득점! 🎉'
    ]
  },
  {
    title: '아웃 당하는 방법',
    emoji: '❌',
    description: '3아웃이 되면 공격 종료!',
    details: [
      '삼진: 스트라이크 3개',
      '플라이 아웃: 친 공을 야수가 땅에 떨어지기 전에 잡음',
      '포스 아웃: 베이스에 주자보다 공이 먼저 도착',
      '태그 아웃: 베이스 밖 주자에게 공으로 터치'
    ]
  },
  {
    title: '포지션',
    emoji: '👥',
    description: '야구장의 9명 수비수들',
    details: [
      '투수 (P): 마운드에서 공을 던지는 핵심',
      '포수 (C): 투수 뒤에서 공을 받는 리더',
      '내야수: 1루수, 2루수, 3루수, 유격수',
      '외야수: 좌익수, 중견수, 우익수'
    ]
  },
  {
    title: '응원 문화',
    emoji: '📣',
    description: 'KBO는 응원이 정말 재밌어요!',
    details: [
      '응원가: 각 선수마다 전용 응원가가 있어요',
      '치어리더: 경기 내내 신나는 응원을 이끌어요',
      '응원 도구: 막대풍선, 응원 타올 등',
      '먹거리: 치맥(치킨+맥주)은 야구장 필수! 🍗🍺'
    ]
  },
  {
    title: '재미있는 용어',
    emoji: '💬',
    description: '야구장에서 자주 듣는 말들',
    details: [
      '만루: 1루, 2루, 3루에 모두 주자가 있는 상황',
      '만루홈런: 만루 상황에서 홈런 치면 4점! (그랜드슬램)',
      '병살: 한 번에 2명 아웃시키기',
      '끝내기: 9회말 또는 연장에서 이기는 득점',
      '노히트노런: 투수가 안타 하나도 안 맞음 (역대급 기록)'
    ]
  },
  {
    title: '포스트시즌 제도 (가을 야구)',
    emoji: '🏆',
    description: '정규시즌 상위 5개 팀이 우승을 놓고 벌이는 플레이오프!',
    details: [
      '와일드카드 (4위 vs 5위): 2판 1선승제! 4위팀은 1승만 해도 통과 (어드밴티지)',
      '준플레이오프 (2위 vs 3위): 3승 선취제! 5전 3선승',
      '플레이오프 (1위 vs 준플 승자): 3승 선취제! 5전 3선승',
      '한국시리즈 (최종): 4승 선취제! 7전 4선승 (홈-홈-원정-원정-홈-홈-홈)',
      '가을 야구는 긴장감 MAX! 한 경기 한 경기가 드라마 🎭'
    ]
  },
  {
    title: 'KBO 순위 결정 방식',
    emoji: '📊',
    description: '정규시즌은 144경기! 승률로 순위를 결정해요',
    details: [
      '승률 = 승리 수 ÷ (승리 + 패배) × 100',
      '무승부는 순위에 영향 없음 (승패만 계산)',
      '승률이 같으면: 상대 전적 → 다득점 순으로 결정',
      '1위팀은 플레이오프 직행! 나머지는 와일드카드부터 시작',
      '6위 이하는 시즌 종료 😢 내년을 기약...'
    ]
  }
];

export default function BaseballRules() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleRule = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          ⚾ 야구 기초 룰 가이드
        </h2>
        <p className="text-gray-600">
          야구가 처음이라면 꼭 읽어보세요! 😊
        </p>
      </div>

      {baseballRules.map((rule, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="cursor-pointer hover:shadow-2xl transition-shadow">
            <div onClick={() => toggleRule(index)}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{rule.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {rule.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {rule.description}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {expandedIndex === index ? (
                    <ChevronUp className="text-pink-500" size={24} />
                  ) : (
                    <ChevronDown className="text-pink-500" size={24} />
                  )}
                </motion.div>
              </div>

              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t-2 border-pink-100"
                >
                  <ul className="space-y-2">
                    {rule.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
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
            직접 보면 훨씬 더 재밌어요! 응원가 따라 부르면서 즐겨보세요 💕
          </p>
        </div>
      </Card>
    </div>
  );
}
