'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Link2, Check, Share2, Camera } from 'lucide-react';
import { KBOTeam } from '@/types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  team: KBOTeam;
  compatibility: number;
  aiMessage: string;
}

export default function ShareModal({
  isOpen,
  onClose,
  team,
  compatibility,
}: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `나는 ${team.name} 팬! ⚾💖\n궁합도 ${compatibility}%!\n\nKBO-TI로 내 운명의 야구팀 찾기\n${shareUrl}`;

  // 공유하기 (Web Share API)
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `나는 ${team.name} 팬!`,
          text: `궁합도 ${compatibility}%! KBO-TI로 내 운명의 야구팀을 찾았어요!`,
          url: shareUrl,
        });
      } catch (e) {
        // 사용자가 취소한 경우
      }
    } else {
      handleCopyLink();
    }
  };

  // 카카오톡
  const handleKakao = () => {
    const text = encodeURIComponent(shareText);
    window.open(`https://story.kakao.com/share?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  // 링크 복사
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const input = document.createElement('input');
      input.value = shareUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">결과 공유하기</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* 결과 미리보기 */}
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 mb-6 text-center">
              <div className="text-6xl mb-3">{team.logo}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{team.name}</h3>
              <div className="flex items-center justify-center gap-2 text-pink-500">
                <span>💖</span>
                <span className="text-xl font-bold">{compatibility}%</span>
                <span>💖</span>
              </div>
            </div>

            {/* 스크린샷 안내 */}
            <div className="bg-blue-50 rounded-xl p-4 mb-4 flex items-start gap-3">
              <Camera className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-sm text-blue-800 font-medium">이미지로 저장하려면</p>
                <p className="text-xs text-blue-600">이 모달을 닫고 화면을 스크린샷 해주세요!</p>
              </div>
            </div>

            {/* 공유 버튼들 */}
            <div className="space-y-3">
              <button
                onClick={handleShare}
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-bold text-lg"
              >
                <Share2 size={22} />
                공유하기
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleKakao}
                  className="flex items-center justify-center gap-2 py-3 bg-[#FEE500] text-[#191919] rounded-xl font-semibold"
                >
                  <MessageCircle size={20} />
                  카카오
                </button>

                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-center gap-2 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold"
                >
                  {copied ? (
                    <>
                      <Check size={20} className="text-green-500" />
                      <span className="text-green-600">복사됨!</span>
                    </>
                  ) : (
                    <>
                      <Link2 size={20} />
                      링크복사
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
