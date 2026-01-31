import { NextRequest, NextResponse } from 'next/server';
import { kboTeams } from '@/data/teams';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const teamId = searchParams.get('teamId');
  const compatibility = searchParams.get('compatibility') || '95';

  const team = kboTeams.find(t => t.id === teamId);
  if (!team) {
    return new NextResponse('Team not found', { status: 404 });
  }

  // SVG로 이미지 생성
  const svg = `
    <svg width="600" height="800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#fce7f3;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#f3e8ff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#dbeafe;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:1" />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="600" height="800" fill="url(#bgGradient)" rx="40"/>

      <!-- Card -->
      <rect x="40" y="40" width="520" height="720" fill="white" rx="30" filter="drop-shadow(0 4px 20px rgba(0,0,0,0.1))"/>

      <!-- Team color bar -->
      <rect x="40" y="40" width="520" height="8" fill="${team.color}" rx="4"/>

      <!-- Header -->
      <text x="300" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#9333ea" font-weight="600">KBO-TI 결과</text>

      <!-- Team logo (emoji as text) -->
      <text x="300" y="220" text-anchor="middle" font-size="120">${team.logo}</text>

      <!-- Team name -->
      <text x="300" y="300" text-anchor="middle" font-family="Arial, sans-serif" font-size="42" fill="#1f2937" font-weight="bold">${team.name}</text>
      <text x="300" y="340" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#6b7280">${team.englishName}</text>

      <!-- Compatibility section -->
      <rect x="80" y="380" width="440" height="160" fill="#fdf2f8" rx="20"/>

      <text x="300" y="430" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#6b7280">💖 궁합도 💖</text>
      <text x="300" y="500" text-anchor="middle" font-family="Arial, sans-serif" font-size="64" fill="#ec4899" font-weight="bold">${compatibility}%</text>

      <!-- Progress bar background -->
      <rect x="120" y="520" width="360" height="12" fill="#ffffff" rx="6"/>
      <!-- Progress bar fill -->
      <rect x="120" y="520" width="${3.6 * parseInt(compatibility)}" height="12" fill="url(#pinkGradient)" rx="6"/>

      <!-- Message -->
      <text x="300" y="620" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#4b5563">나와 찰떡인 야구팀을 찾았어요!</text>

      <!-- Footer -->
      <text x="300" y="700" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#9ca3af">kbo-ti.vercel.app</text>
      <text x="300" y="730" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#a855f7">나도 테스트하러 가기! ⚾</text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}
