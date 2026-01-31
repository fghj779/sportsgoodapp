'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-6"
          >
            <ArrowLeft size={20} />
            홈으로 돌아가기
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-purple-500" size={32} />
            <h1 className="text-3xl font-bold text-gray-800">개인정보처리방침</h1>
          </div>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">최종 수정일: 2025년 1월 31일</p>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. 개요</h2>
              <p>
                KBO-TI (이하 &quot;서비스&quot;)는 사용자의 개인정보를 중요시하며, 개인정보보호법 등 관련 법령을 준수합니다.
                본 개인정보처리방침은 서비스 이용 시 수집되는 정보와 그 활용 방법에 대해 설명합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. 수집하는 정보</h2>

              <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">2.1 퀴즈 응답 데이터</h3>
              <p>
                서비스는 KBO 팀 매칭을 위해 사용자가 입력한 20개의 밸런스 게임 응답을 수집합니다.
                이 데이터는 팀 매칭 결과 생성을 위해 일시적으로 처리되며, 서버에 영구 저장되지 않습니다.
              </p>

              <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">2.2 제휴문의 정보</h3>
              <p>
                제휴문의 시 입력하신 이메일 주소와 문의 내용은 Formspree 서비스를 통해 처리됩니다.
                이 정보는 제휴문의 답변 목적으로만 사용됩니다.
              </p>

              <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">2.3 기술적 정보</h3>
              <p>
                서비스 남용 방지를 위해 API 요청 시 IP 주소를 일시적으로 수집합니다.
                이 정보는 요청 제한(Rate Limiting) 목적으로만 사용되며, 메모리에서 일정 시간 후 자동 삭제됩니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. 제3자 서비스</h2>

              <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">3.1 OpenAI API</h3>
              <p>
                팀 매칭 결과 생성을 위해 OpenAI의 GPT 모델을 사용합니다.
                사용자의 퀴즈 응답은 OpenAI API로 전송되어 처리됩니다.
                OpenAI의 개인정보처리방침은{' '}
                <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                  여기
                </a>
                에서 확인할 수 있습니다.
              </p>

              <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">3.2 YouTube 임베드</h3>
              <p>
                서비스는 야구 룰 설명 및 응원가 제공을 위해 YouTube 동영상을 임베드합니다.
                YouTube 임베드 사용 시 Google의 개인정보처리방침이 적용됩니다.
                자세한 내용은{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                  Google 개인정보처리방침
                </a>
                을 참조하세요.
              </p>

              <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">3.3 Google AdSense</h3>
              <p>
                서비스는 Google AdSense를 통해 광고를 게재할 수 있습니다.
                Google은 사용자의 관심사에 기반한 광고를 제공하기 위해 쿠키를 사용할 수 있습니다.
                사용자는{' '}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                  Google 광고 설정
                </a>
                에서 개인 맞춤 광고를 비활성화할 수 있습니다.
                Google의 데이터 사용에 관한 자세한 내용은{' '}
                <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                  Google 파트너 사이트의 데이터 사용 방식
                </a>
                을 참조하세요.
              </p>

              <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">3.4 Formspree</h3>
              <p>
                제휴문의 양식은 Formspree를 통해 처리됩니다.
                Formspree의 개인정보처리방침은{' '}
                <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                  여기
                </a>
                에서 확인할 수 있습니다.
              </p>

              <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">3.5 제휴 링크 (번개장터)</h3>
              <p>
                서비스는 KBO 굿즈 구매를 위한 번개장터 링크를 제공합니다.
                이는 제휴 링크로, 해당 링크를 통한 구매 시 서비스 운영에 도움이 될 수 있습니다.
                번개장터 이용 시 번개장터의 개인정보처리방침이 적용됩니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. 쿠키 및 추적 기술</h2>
              <p>
                본 서비스는 자체적으로 쿠키를 사용하지 않습니다.
                다만, Google AdSense 및 YouTube 임베드를 통해 제3자 쿠키가 설정될 수 있습니다.
                브라우저 설정에서 쿠키를 관리하거나 비활성화할 수 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">5. 데이터 보안</h2>
              <p>
                서비스는 HTTPS를 통해 모든 데이터를 암호화하여 전송합니다.
                사용자 데이터는 서버에 영구 저장되지 않으며, 세션 종료 시 삭제됩니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">6. 아동 개인정보 보호</h2>
              <p>
                서비스는 만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다.
                만 14세 미만 이용자는 법정대리인의 동의를 받아 서비스를 이용해야 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">7. 이용자의 권리</h2>
              <p>이용자는 다음과 같은 권리를 가집니다:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>개인정보 열람 요청</li>
                <li>개인정보 정정 요청</li>
                <li>개인정보 삭제 요청</li>
                <li>개인정보 처리정지 요청</li>
              </ul>
              <p className="mt-2">
                위 권리 행사를 원하시면 제휴문의를 통해 연락해 주세요.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">8. 개인정보처리방침 변경</h2>
              <p>
                본 개인정보처리방침은 법령 또는 서비스 정책 변경에 따라 수정될 수 있습니다.
                변경 시 본 페이지에 공지하며, 중요한 변경사항은 서비스 내 공지를 통해 알립니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">9. 문의처</h2>
              <p>
                개인정보 관련 문의사항은 홈페이지의 제휴문의를 통해 연락해 주세요.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
