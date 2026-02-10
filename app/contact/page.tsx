'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Mail, Send, CheckCircle } from 'lucide-react';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 허니팟 필드가 채워져 있으면 봇으로 간주 → 성공인 척
    if (formData._gotcha) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '', _gotcha: '' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mwvororw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `[KBO 신입팬 스타터팩] 제휴문의 - ${formData.name}`
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '', _gotcha: '' });
      } else {
        alert('제출에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('제출 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mb-4"
          >
            <ArrowLeft size={20} className="mr-1" />
            뒤로 가기
          </button>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
              <Mail className="text-purple-500" size={40} />
              제휴문의
            </h1>
            <p className="text-lg text-gray-600">
              비즈니스 제안이나 협업 문의를 보내주세요! 💌
            </p>
          </div>
        </motion.div>

        {/* 폼 */}
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-emerald-50">
              <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                문의가 전송되었습니다! ✨
              </h2>
              <p className="text-gray-600 mb-6">
                빠른 시일 내에 답변드리겠습니다.
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', message: '', _gotcha: '' });
                  }}
                  variant="secondary"
                >
                  새 문의 작성하기
                </Button>
                <Button
                  onClick={() => router.push('/')}
                >
                  홈으로 가기
                </Button>
              </div>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 허니팟 (봇 방지) */}
                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                {/* 이름 */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:outline-none transition-colors text-gray-800"
                    placeholder="이름을 입력해주세요"
                  />
                </div>

                {/* 이메일 */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:outline-none transition-colors text-gray-800"
                    placeholder="your@email.com"
                  />
                </div>

                {/* 메시지 */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:outline-none transition-colors text-gray-800 resize-none"
                    placeholder="제휴 제안이나 협업 문의 내용을 자세히 작성해주세요..."
                  />
                </div>

                {/* 제출 버튼 */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="inline-block mr-2"
                        >
                          ⚾
                        </motion.div>
                        전송 중...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        문의 보내기
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        )}

        {/* 안내 문구 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center"
        >
          <Card className="p-4 bg-gray-50">
            <p className="text-sm text-gray-600">
              📧 문의사항이 있으시면 언제든지 연락주세요!
            </p>
            <p className="text-xs text-gray-500 mt-1">
              보통 1-2일 내에 답변드립니다.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
