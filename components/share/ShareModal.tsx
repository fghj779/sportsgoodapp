'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, MessageCircle, Link2, Check, Share2 } from 'lucide-react';
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
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);

  // 이미지 생성
  const generateImage = useCallback(async () => {
    if (!cardRef.current || imageDataUrl) return null;

    setIsGenerating(true);
    try {
      // 잠시 대기 (렌더링 완료)
      await new Promise(resolve => setTimeout(resolve, 200));

      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: '#fce7f3',
        useCORS: true,
        logging: false,
        windowWidth: 360,
        windowHeight: 500,
      });

      const dataUrl = canvas.toDataURL('image/png');
      setImageDataUrl(dataUrl);
      setIsGenerating(false);
      return dataUrl;
    } catch (error) {
      console.error('이미지 생성 실패:', error);
      setIsGenerating(false);
      return null;
    }
  }, [imageDataUrl]);

  // 모달 열릴 때 이미지 생성
  useEffect(() => {
    if (isOpen && !imageDataUrl) {
      generateImage();
    }
  }, [isOpen, imageDataUrl, generateImage]);

  // 모달 닫힐 때 초기화
  useEffect(() => {
    if (!isOpen) {
      setImageDataUrl(null);
      setIsGenerating(false);
    }
  }, [isOpen]);

  // 이미지 저장 (모바일: 새 탭에서 열기)
  const handleSaveImage = async () => {
    let dataUrl = imageDataUrl;
    if (!dataUrl) {
      dataUrl = await generateImage();
    }
    if (!dataUrl) {
      alert('이미지 생성에 실패했어요. 다시 시도해주세요.');
      return;
    }

    // 모바일 체크
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // 모바일: 새 탭에서 이미지 열기
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>KBO-TI 결과 저장</title>
            <style>
              body { margin: 0; padding: 20px; background: #f3f4f6; display: flex; flex-direction: column; align-items: center; font-family: -apple-system, sans-serif; }
              img { max-width: 100%; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
              p { color: #666; font-size: 14px; margin-top: 16px; text-align: center; }
            </style>
          </head>
          <body>
            <img src="${dataUrl}" alt="KBO-TI 결과" />
            <p>👆 이미지를 길게 눌러 저장하세요!</p>
          </body>
          </html>
        `);
        newWindow.document.close();
      }
    } else {
      // 데스크톱: 다운로드
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `KBO-TI_${team.name}_결과.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // 공유하기 (Web Share API)
  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareTitle = `나는 ${team.name} 팬! ⚾💖`;
    const shareText = `궁합도 ${compatibility}%! KBO-TI로 내 운명의 야구팀을 찾았어요!\n\n나도 테스트하기 👉`;

    // Web Share API 시도
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch (error: any) {
        if (error.name === 'AbortError') return;
        console.log('Web Share failed, trying fallback');
      }
    }

    // Fallback: 링크 복사
    handleCopyLink();
    alert('링크가 복사되었어요!\n원하는 앱에 붙여넣기 해주세요 📋');
  };

  // 카카오톡 공유
  const handleKakaoShare = () => {
    const shareUrl = window.location.href;
    const shareText = `나는 ${team.name} 팬! ⚾💖\n궁합도 ${compatibility}%!\n\nKBO-TI로 내 운명의 야구팀을 찾았어요!\n나도 테스트하기 👉 ${shareUrl}`;

    // 모바일 체크
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // 카카오톡 공유 URL 스킴 (텍스트 공유)
      const encodedText = encodeURIComponent(shareText);

      // 방법 1: 카카오톡 URL 스킴
      const kakaoUrl = `kakaotalk://msg/text?text=${encodedText}`;

      // 앱 열기 시도
      const startTime = Date.now();
      window.location.href = kakaoUrl;

      // 앱이 열리지 않으면 (2초 후) 링크 복사
      setTimeout(() => {
        if (Date.now() - startTime < 2500) {
          // 앱이 열렸으면 아무것도 안함
        }
      }, 2000);
    } else {
      // 데스크톱: 링크 복사
      navigator.clipboard.writeText(shareText).then(() => {
        alert('메시지가 복사되었어요!\n카카오톡에 붙여넣기 해주세요 💬');
      });
    }
  };

  // 링크 복사
  const handleCopyLink = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // iOS Safari fallback
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.style.top = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        alert('복사에 실패했어요. 직접 URL을 복사해주세요.');
      }
      document.body.removeChild(textArea);
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
            className="bg-white rounded-3xl p-5 max-w-sm w-full shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">결과 공유하기</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            {/* 미리보기 카드 */}
            <div className="flex justify-center mb-5 overflow-hidden rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 relative">
              {isGenerating && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="text-3xl mb-2"
                    >
                      ⚾
                    </motion.div>
                    <p className="text-xs text-gray-500">이미지 생성 중...</p>
                  </div>
                </div>
              )}
              <div className="transform scale-[0.75] origin-top -mb-20">
                <ShareableCard
                  ref={cardRef}
                  team={team}
                  compatibility={compatibility}
                  aiMessage={aiMessage}
                />
              </div>
            </div>

            {/* 공유 버튼들 */}
            <div className="space-y-3">
              {/* 이미지 저장 */}
              <button
                onClick={handleSaveImage}
                disabled={isGenerating}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50"
              >
                <Download size={20} />
                <span>이미지 저장하기</span>
              </button>

              {/* 공유하기 */}
              <button
                onClick={handleShare}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all"
              >
                <Share2 size={20} />
                <span>공유하기</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                {/* 카카오톡 */}
                <button
                  onClick={handleKakaoShare}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#FEE500] text-[#191919] rounded-xl font-semibold hover:bg-[#FDD800] transition-all"
                >
                  <MessageCircle size={18} />
                  <span>카카오톡</span>
                </button>

                {/* 링크 복사 */}
                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  {copied ? (
                    <>
                      <Check size={18} className="text-green-500" />
                      <span className="text-green-600">복사됨!</span>
                    </>
                  ) : (
                    <>
                      <Link2 size={18} />
                      <span>링크 복사</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 안내 */}
            <p className="text-center text-xs text-gray-400 mt-4">
              이미지를 저장한 후 SNS에 공유해보세요! 📸
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
