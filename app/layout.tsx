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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
