'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ScheduledGame } from '@/types';
import { kboTeams } from '@/data/teams';
import { generateBunjangUrl } from '@/lib/bunjang';
import { X, Tv, ShoppingBag, ArrowRight } from 'lucide-react';

interface RedirectTooltipProps {
  game: ScheduledGame | null;
  onClose: () => void;
  onGoToStream?: () => void;
}

export default function RedirectTooltip({ game, onClose, onGoToStream }: RedirectTooltipProps) {
  if (!game) return null;

  const homeTeam = kboTeams.find((t) => t.id === game.homeTeam);
  const awayTeam = kboTeams.find((t) => t.id === game.awayTeam);

  if (!homeTeam || !awayTeam) return null;

  const bunjangUrl = generateBunjangUrl({
    type: 'team',
    teamId: homeTeam.id,
    teamName: homeTeam.name,
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 헤더 */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">경기 정보</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>

          {/* 매치업 */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-center">
              <span className="text-4xl">{awayTeam.logo}</span>
              <p className="text-sm font-semibold text-gray-800 mt-1">
                {awayTeam.name.split(' ')[0]}
              </p>
            </div>
            <span className="text-2xl font-bold text-gray-400">VS</span>
            <div className="text-center">
              <span className="text-4xl">{homeTeam.logo}</span>
              <p className="text-sm font-semibold text-gray-800 mt-1">
                {homeTeam.name.split(' ')[0]}
              </p>
            </div>
          </div>

          {/* 경기 이동 전 번개장터 안내 */}
          <a
            href={bunjangUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border-2 border-orange-200 hover:border-orange-400 transition-all mb-4 group"
          >
            <div className="flex items-center gap-3">
              <ShoppingBag size={24} className="text-orange-500" />
              <div className="flex-1">
                <p className="font-semibold text-gray-800">응원 준비 완료?</p>
                <p className="text-sm text-gray-600">
                  {homeTeam.name} 굿즈 구매하기
                </p>
              </div>
              <ArrowRight
                size={20}
                className="text-orange-500 group-hover:translate-x-1 transition-transform"
              />
            </div>
          </a>

          {/* 중계 보기 버튼 */}
          <button
            onClick={() => {
              onGoToStream?.();
              onClose();
            }}
            className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all"
          >
            <Tv size={20} />
            <span>중계 보러가기</span>
          </button>

          <p className="text-center text-xs text-gray-500 mt-3">
            * TVING, 네이버 스포츠 등에서 시청 가능
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
