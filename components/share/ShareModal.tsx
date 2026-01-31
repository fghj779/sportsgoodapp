'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Instagram, MessageCircle, Link2, Check } from 'lucide-react';
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

declare global {
  interface Window {
    Kakao?: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: object) => void;
      };
    };
  }
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
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [kakaoReady, setKakaoReady] = useState(false);

  // Kakao SDK 로드
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.Kakao) {
      const script = document.createElement('script');
      script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js';
      script.async = true;
      script.onload = () => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
          // Kakao JavaScript 키 (공개 키)
          window.Kakao.init('a1b2c3d4e5f6g7h8i9j0'); // 실제 키로 교체 필요
          setKakaoReady(true);
        }
      };
      document.head.appendChild(script);
    } else if (window.Kakao?.isInitialized()) {
      setKakaoReady(true);
    }
  }, []);

  // 이미지 생성
  const generateImage = async () => {
    if (!cardRef.current) return null;

    setIsGenerating(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
        logging: false,
      });
      const dataUrl = canvas.toDataURL('image/png');
      setGeneratedImage(dataUrl);
      return dataUrl;
    } catch (error) {
      console.error('이미지 생성 실패:', error);
      return null;
    } finally {
      setIsGenerating(false);
    }
  };

  // 이미지 다운로드
  const handleDownload = async () => {
    let imageUrl = generatedImage;
    if (!imageUrl) {
      imageUrl = await generateImage();
    }
    if (!imageUrl) return;

    const link = document.createElement('a');
    link.download = `KBO-TI_${team.name}_결과.png`;
    link.href = imageUrl;
    link.click();
  };

  // 인스타그램 공유 (이미지 다운로드 후 안내)
  const handleInstagramShare = async () => {
    await handleDownload();
    alert('이미지가 저장되었어요! 📸\n인스타그램 스토리에 공유해보세요!');
  };

  // 카카오톡 공유
  const handleKakaoShare = () => {
    if (!window.Kakao?.Share) {
      // Kakao SDK가 없으면 링크 복사로 대체
      handleCopyLink();
      alert('카카오톡 앱에서 링크를 붙여넣기 해주세요!');
      return;
    }

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `나는 ${team.name} 팬! ⚾💖`,
        description: `궁합도 ${compatibility}%! KBO-TI로 내 운명의 야구팀을 찾았어요!`,
        imageUrl: 'https://kbo-ti.vercel.app/og-image.png', // OG 이미지
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: '나도 테스트하기',
          link: {
            mobileWebUrl: typeof window !== 'undefined' ? window.location.origin : '',
            webUrl: typeof window !== 'undefined' ? window.location.origin : '',
          },
        },
      ],
    });
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
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // 모달 열릴 때 이미지 미리 생성
  useEffect(() => {
    if (isOpen && !generatedImage) {
      generateImage();
    }
  }, [isOpen]);

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
            <div className="flex justify-center mb-6 overflow-hidden rounded-2xl bg-gray-100">
              {isGenerating ? (
                <div className="w-[360px] h-[400px] flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="text-4xl"
                  >
                    ⚾
                  </motion.div>
                </div>
              ) : (
                <div className="scale-[0.85] origin-top">
                  <ShareableCard
                    ref={cardRef}
                    team={team}
                    compatibility={compatibility}
                    aiMessage={aiMessage}
                  />
                </div>
              )}
            </div>

            {/* 공유 버튼들 */}
            <div className="grid grid-cols-2 gap-3">
              {/* 이미지 저장 */}
              <button
                onClick={handleDownload}
                disabled={isGenerating}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50"
              >
                <Download size={20} />
                <span>이미지 저장</span>
              </button>

              {/* 인스타그램 */}
              <button
                onClick={handleInstagramShare}
                disabled={isGenerating}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:via-purple-600 hover:to-orange-600 transition-all disabled:opacity-50"
              >
                <Instagram size={20} />
                <span>인스타그램</span>
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
