'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsPage() {
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
            <FileText className="text-purple-500" size={32} />
            <h1 className="text-3xl font-bold text-gray-800">이용약관</h1>
          </div>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">최종 수정일: 2025년 1월 31일</p>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">제1조 (목적)</h2>
              <p>
                본 약관은 KBO-TI (이하 &quot;서비스&quot;)가 제공하는 KBO 팀 매칭 서비스의 이용조건 및 절차,
                이용자와 서비스 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">제2조 (정의)</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>&quot;서비스&quot;란 KBO-TI가 제공하는 KBO 팀 매칭, 팀 정보 제공, 응원가 노래방 등 모든 서비스를 의미합니다.</li>
                <li>&quot;이용자&quot;란 본 약관에 따라 서비스를 이용하는 자를 의미합니다.</li>
                <li>&quot;콘텐츠&quot;란 서비스에서 제공하는 텍스트, 이미지, 동영상, 퀴즈 등 모든 정보를 의미합니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">제3조 (약관의 효력 및 변경)</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>본 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.</li>
                <li>서비스는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지합니다.</li>
                <li>이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단할 수 있습니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">제4조 (서비스의 제공)</h2>
              <p>서비스는 다음과 같은 기능을 제공합니다:</p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>밸런스 게임 기반 KBO 팀 매칭 테스트</li>
                <li>KBO 10개 구단 정보 제공 (팀 역사, 선수 정보, 경기장 정보 등)</li>
                <li>응원가 노래방 기능</li>
                <li>야구 룰 가이드</li>
                <li>KBO 굿즈 쇼핑 링크 제공</li>
                <li>기타 서비스가 정하는 기능</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">제5조 (서비스 이용)</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>서비스는 별도의 회원가입 없이 이용할 수 있습니다.</li>
                <li>서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.</li>
                <li>다만, 시스템 점검, 서버 장애 등의 사유로 서비스가 일시 중단될 수 있습니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">제6조 (이용자의 의무)</h2>
              <p>이용자는 다음 행위를 하여서는 안 됩니다:</p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>서비스의 정상적인 운영을 방해하는 행위</li>
                <li>서비스를 이용하여 법령 또는 공서양속에 위배되는 행위</li>
                <li>타인의 명예를 훼손하거나 권리를 침해하는 행위</li>
                <li>서비스의 콘텐츠를 무단으로 복제, 배포, 수정하는 행위</li>
                <li>자동화된 수단(봇, 스크래퍼 등)을 이용한 서비스 접근</li>
                <li>기타 불법적이거나 부당한 행위</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">제7조 (지적재산권)</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>서비스가 제작한 콘텐츠(퀴즈 문항, UI 디자인 등)의 저작권은 서비스에 귀속됩니다.</li>
                <li>KBO 구단 로고, 선수 정보, 응원가 등은 각 권리자에게 저작권이 있습니다.</li>
                <li>YouTube 임베드 콘텐츠의 저작권은 해당 콘텐츠 제작자에게 있습니다.</li>
                <li>이용자는 서비스의 콘텐츠를 개인적인 용도로만 이용할 수 있으며, 상업적 이용은 금지됩니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">제8조 (AI 서비스 이용)</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>팀 매칭 결과는 AI(인공지능)를 통해 생성되며, 재미와 참고 목적으로만 제공됩니다.</li>
                <li>AI 생성 결과는 실제 사실과 다를 수 있으며, 서비스는 결과의 정확성을 보장하지 않습니다.</li>
                <li>팀 매칭 결과에 따른 의사결정은 이용자 본인의 책임입니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">제9조 (외부 링크)</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>서비스는 편의를 위해 외부 웹사이트 링크를 제공합니다 (번개장터, 공식 티켓 사이트 등).</li>
                <li>외부 웹사이트 이용 시 해당 사이트의 이용약관 및 개인정보처리방침이 적용됩니다.</li>
                <li>서비스는 외부 웹사이트의 콘텐츠 또는 서비스에 대해 책임지지 않습니다.</li>
                <li>일부 외부 링크는 제휴 링크로, 해당 링크를 통한 구매 시 서비스가 수수료를 받을 수 있습니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">제10조 (광고)</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>서비스는 운영을 위해 광고를 게재할 수 있습니다.</li>
                <li>광고주 및 광고 내용에 대한 책임은 광고주에게 있습니다.</li>
                <li>이용자가 광고를 통해 광고주와 거래하는 경우, 이는 이용자와 광고주 간의 거래입니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">제11조 (면책조항)</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>서비스는 천재지변, 시스템 장애 등 불가항력적 사유로 인한 서비스 중단에 대해 책임지지 않습니다.</li>
                <li>서비스는 이용자가 서비스를 통해 얻은 정보에 대한 신뢰성, 정확성에 대해 보증하지 않습니다.</li>
                <li>서비스는 이용자 간 또는 이용자와 제3자 간 분쟁에 대해 개입하지 않으며 책임지지 않습니다.</li>
                <li>무료로 제공되는 서비스의 특성상, 서비스 이용으로 인한 손해에 대해 법적 책임을 부담하지 않습니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">제12조 (서비스 변경 및 종료)</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>서비스는 운영상의 필요에 따라 서비스의 전부 또는 일부를 변경하거나 종료할 수 있습니다.</li>
                <li>서비스 종료 시 합리적인 기간 전에 공지합니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">제13조 (준거법 및 관할)</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>본 약관의 해석 및 서비스 이용에 관한 분쟁은 대한민국 법률에 따릅니다.</li>
                <li>서비스 이용과 관련하여 분쟁이 발생한 경우, 서비스 소재지 관할 법원을 관할 법원으로 합니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">부칙</h2>
              <p>본 약관은 2025년 1월 31일부터 시행됩니다.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
