import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
