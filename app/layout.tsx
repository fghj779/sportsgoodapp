import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";
import { CookieConsentProvider } from "@/components/CookieConsent";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KBO-TI 💖 내 운명의 야구팀 찾기",
  description: "20대 여성을 위한 트렌디한 KBO 팀 매칭 서비스! 나와 찰떡인 야구팀을 찾아보세요 ⚾✨",
  keywords: ["KBO", "야구", "팀 매칭", "MBTI", "20대 여성", "야구 입문"],
  openGraph: {
    title: "KBO-TI 💖 내 운명의 야구팀 찾기",
    description: "20개의 질문으로 찾는 나의 찰떡 야구팀! AI가 너의 성향을 분석해서 딱 맞는 KBO 팀을 추천해줄게!",
    url: "https://kbo-ti.vercel.app",
    siteName: "KBO-TI",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KBO-TI 💖 내 운명의 야구팀 찾기",
    description: "20개의 질문으로 찾는 나의 찰떡 야구팀! ⚾✨",
  },
  other: {
    "google-adsense-account": "ca-pub-3426882453514090",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${notoSansKR.variable} antialiased`} suppressHydrationWarning>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3426882453514090"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <CookieConsentProvider>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">
              {children}
            </main>
            <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 py-6 px-4">
              <div className="max-w-4xl mx-auto text-center space-y-3">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <Link href="/privacy" className="hover:text-pink-500 transition-colors">
                    개인정보처리방침
                  </Link>
                  <span>|</span>
                  <Link href="/terms" className="hover:text-pink-500 transition-colors">
                    이용약관
                  </Link>
                  <span>|</span>
                  <Link href="/contact" className="hover:text-pink-500 transition-colors">
                    제휴문의
                  </Link>
                </div>
                <p className="text-xs text-gray-400">
                  © 2026 KBO 신입팬 스타터팩. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
