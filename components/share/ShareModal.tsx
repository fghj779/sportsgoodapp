'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Link2, Check, Share2, Download } from 'lucide-react';
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
  const imageUrl = `/api/share-image?teamId=${team.id}&compatibility=${compatibility}`;

  // 이미지 저장
  const handleSaveImage = () => {
    // 새 탭에서 이미지 열기 (모바일에서 길게 눌러 저장 가능)
    window.open(imageUrl, '_blank');
  };

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
    window.open(`https://story.kakao.com/share?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  // 링크 복사
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
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
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">결과 공유하기</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* 이미지 미리보기 */}
            <div className="mb-4 rounded-2xl overflow-hidden border-2 border-pink-100">
              <img
                src={imageUrl}
                alt="공유 이미지"
                className="w-full"
              />
            </div>

            {/* 공유 버튼들 */}
            <div className="space-y-3">
              {/* 이미지 저장 */}
              <button
                onClick={handleSaveImage}
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold text-lg"
              >
                <Download size={22} />
                이미지 저장하기
              </button>

              {/* 공유하기 */}
              <button
                onClick={handleShare}
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-bold text-lg"
              >
                <Share2 size={22} />
                공유하기
              </button>

              <div className="grid grid-cols-2 gap-3">
                {/* 카카오 */}
                <button
                  onClick={handleKakao}
                  className="flex items-center justify-center gap-2 py-3 bg-[#FEE500] text-[#191919] rounded-xl font-semibold"
                >
                  <MessageCircle size={20} />
                  카카오
                </button>

                {/* 링크 복사 */}
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

            {/* 안내 */}
            <p className="text-center text-xs text-gray-400 mt-4">
              이미지 저장 → 새 탭에서 이미지 길게 눌러 저장!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
