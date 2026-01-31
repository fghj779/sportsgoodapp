'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Instagram, MessageCircle, Link2, Check, Share } from 'lucide-react';
import html2canvas from 'html2canvas';
import ShareableCard from './ShareableCard';
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
  aiMessage,
}: ShareModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);

  // 이미지 생성
  const generateImage = useCallback(async () => {
    if (!cardRef.current || imageBlob) return;

    setIsGenerating(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: '#fce7f3',
        useCORS: true,
        logging: false,
      });

      const dataUrl = canvas.toDataURL('image/png');
      setImageDataUrl(dataUrl);

      canvas.toBlob((blob) => {
        if (blob) setImageBlob(blob);
        setIsGenerating(false);
      }, 'image/png');
    } catch (error) {
      console.error('이미지 생성 실패:', error);
      setIsGenerating(false);
    }
  }, [imageBlob]);

  // 모달 열릴 때 이미지 생성
  useEffect(() => {
    if (isOpen && !imageBlob) {
      // 약간의 딜레이 후 생성 (렌더링 완료 대기)
      const timer = setTimeout(generateImage, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, imageBlob, generateImage]);

  // 모달 닫힐 때 상태 초기화
  useEffect(() => {
    if (!isOpen) {
      setImageBlob(null);
      setImageDataUrl(null);
      setIsGenerating(false);
    }
  }, [isOpen]);

  // 이미지 다운로드
  const handleDownload = async () => {
    if (!imageDataUrl) {
      alert('이미지를 생성 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    try {
      // Blob URL 생성 후 다운로드
      const link = document.createElement('a');
      link.href = imageDataUrl;
      link.download = `KBO-TI_${team.name}_결과.png`;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('다운로드 실패:', error);
      // 실패시 새 탭으로 열기
      const newTab = window.open();
      if (newTab && imageDataUrl) {
        newTab.document.write(`<img src="${imageDataUrl}" alt="KBO-TI 결과"/>`);
        alert('이미지가 새 탭에 열렸어요. 이미지를 길게 눌러 저장해주세요!');
      }
    }
  };

  // 네이티브 공유 (Instagram, 기타 앱 선택 가능)
  const handleNativeShare = async () => {
    if (!imageBlob) {
      alert('이미지를 생성 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    try {
      const file = new File([imageBlob], `KBO-TI_${team.name}_결과.png`, { type: 'image/png' });

      // Web Share API 지원 확인
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: `나는 ${team.name} 팬! ⚾`,
          text: `궁합도 ${compatibility}%! KBO-TI로 내 운명의 야구팀을 찾았어요!`,
        });
      } else {
        // Web Share API 미지원 시 다운로드
        handleDownload();
        alert('이미지가 저장되었어요!\n인스타그램 앱에서 스토리에 공유해주세요 📸');
      }
    } catch (error: any) {
      if (error.name !== 'AbortError') {
        console.error('공유 실패:', error);
        handleDownload();
      }
    }
  };

  // 카카오톡 공유
  const handleKakaoShare = () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = `나는 ${team.name} 팬! ⚾💖 궁합도 ${compatibility}%!\nKBO-TI로 내 운명의 야구팀을 찾았어요!`;

    // 카카오톡 공유 URL 스킴
    const kakaoShareUrl = `https://sharer.kakao.com/talk/friends/picker/link?app_key=javascript_key&request_url=${encodeURIComponent(shareUrl)}`;

    // 모바일에서 카카오톡 앱 열기 시도
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // 카카오톡 앱으로 텍스트 공유 (딥링크)
      const kakaoLink = `kakaolink://send?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`;

      // 앱 열기 시도
      window.location.href = kakaoLink;

      // 앱이 없으면 3초 후 웹 공유로 대체
      setTimeout(() => {
        // 링크 복사로 대체
        handleCopyLink();
      }, 2500);
    } else {
      // 데스크톱: 링크 복사
      handleCopyLink();
      alert('링크가 복사되었어요!\n카카오톡에 붙여넣기 해주세요 💬');
    }
  };

  // 링크 복사
  const handleCopyLink = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
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
            className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">결과 공유하기</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* 미리보기 카드 */}
            <div className="flex justify-center mb-6 overflow-hidden rounded-2xl bg-gray-100 relative">
              {isGenerating && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80 z-10">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="text-4xl mb-2"
                    >
                      ⚾
                    </motion.div>
                    <p className="text-sm text-gray-600">이미지 생성 중...</p>
                  </div>
                </div>
              )}
              <div className="transform scale-[0.8] origin-top">
                <ShareableCard
                  ref={cardRef}
                  team={team}
                  compatibility={compatibility}
                  aiMessage={aiMessage}
                />
              </div>
            </div>

            {/* 공유 버튼들 */}
            <div className="grid grid-cols-2 gap-3">
              {/* 이미지 저장 */}
              <button
                onClick={handleDownload}
                disabled={isGenerating || !imageDataUrl}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download size={20} />
                <span>이미지 저장</span>
              </button>

              {/* 공유하기 (Instagram 등) */}
              <button
                onClick={handleNativeShare}
                disabled={isGenerating || !imageBlob}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:via-purple-600 hover:to-orange-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Share size={20} />
                <span>공유하기</span>
              </button>

              {/* 카카오톡 */}
              <button
                onClick={handleKakaoShare}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-[#FEE500] text-[#191919] rounded-xl font-semibold hover:bg-[#FDD800] transition-all"
              >
                <MessageCircle size={20} />
                <span>카카오톡</span>
              </button>

              {/* 링크 복사 */}
              <button
                onClick={handleCopyLink}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
              >
                {copied ? (
                  <>
                    <Check size={20} className="text-green-500" />
                    <span className="text-green-500">복사됨!</span>
                  </>
                ) : (
                  <>
                    <Link2 size={20} />
                    <span>링크 복사</span>
                  </>
                )}
              </button>
            </div>

            {/* 안내 문구 */}
            <p className="text-center text-xs text-gray-400 mt-4">
              친구들에게 결과를 공유하고 함께 야구장 가요! ⚾
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
