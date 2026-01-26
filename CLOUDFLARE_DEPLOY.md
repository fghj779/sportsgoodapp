# 🔥 Cloudflare Pages 배포 가이드

## ✅ Cloudflare 호환 설정 완료!

프로젝트가 Cloudflare Pages에서 작동하도록 변경되었습니다!

### 변경사항:
- ✅ Next.js 15.5.2로 다운그레이드
- ✅ `@cloudflare/next-on-pages` 설치
- ✅ Edge Runtime 설정
- ✅ Wrangler 설정 추가

---

## 🚀 Cloudflare Pages 배포 방법

### 방법 1: Cloudflare Dashboard (웹)

#### 1단계: Cloudflare Pages 접속
```
https://dash.cloudflare.com
→ Pages
→ "Create a project"
```

#### 2단계: GitHub 연동
```
"Connect to Git" 
→ GitHub 로그인
→ "fghj779/sportsgoodapp" 선택
```

#### 3단계: 빌드 설정
```
Project name: sportsgoodapp
Production branch: main

Build settings:
  Framework preset: Next.js
  Build command: npx @cloudflare/next-on-pages
  Build output directory: .vercel/output/static
```

#### 4단계: 환경 변수 설정 🔑
```
Environment variables:
  
  Variable name: OPENAI_API_KEY
  Value: [당신의 OpenAI API 키 입력]

  Production ✅
  Preview ✅
```

#### 5단계: 배포!
```
→ "Save and Deploy" 클릭
→ 빌드 시작 (약 2-3분 소요)
→ 완료 후 URL 확인
```

---

### 방법 2: Wrangler CLI

```bash
# 1. Wrangler 로그인
npx wrangler login

# 2. 빌드
npm run pages:build

# 3. 배포
npx wrangler pages deploy .vercel/output/static --project-name sportsgoodapp

# 4. 환경 변수 설정
npx wrangler pages secret put OPENAI_API_KEY --project-name sportsgoodapp
# API 키 입력 프롬프트에 당신의 OpenAI API 키 입력
```

---

## 🔧 로컬 테스트 (Cloudflare 환경)

```bash
# 1. Cloudflare Pages 빌드
npm run pages:build

# 2. Cloudflare Pages 로컬 서버 실행
npm run pages:dev

# 브라우저에서 http://localhost:8788 접속
```

---

## 📊 Cloudflare Pages 설정 요약

### package.json 스크립트:
```json
{
  "pages:build": "npx @cloudflare/next-on-pages",
  "pages:deploy": "npm run pages:build && wrangler pages deploy",
  "pages:dev": "npx wrangler pages dev .vercel/output/static"
}
```

### 빌드 명령어:
```
npx @cloudflare/next-on-pages
```

### 출력 디렉토리:
```
.vercel/output/static
```

---

## ⚠️ 중요 사항

### 1. 환경 변수 필수!
Cloudflare Dashboard에서 `OPENAI_API_KEY` 반드시 설정해야 합니다.

### 2. Edge Runtime
API Routes는 Edge Runtime으로 실행됩니다.
- Node.js 전용 패키지는 사용 불가
- OpenAI SDK는 Edge 호환됨 ✅

### 3. Next.js 버전
- Next.js 15.5.2 사용 (16.x는 아직 미지원)
- React 19 호환

---

## 🐛 트러블슈팅

### Q: 빌드 실패 - "not supported"
**A**: Edge Runtime 호환 확인
```typescript
export const runtime = 'edge'; // API Route에 추가됨
```

### Q: 환경 변수 에러
**A**: Cloudflare Dashboard 확인
```
Settings → Environment variables
→ OPENAI_API_KEY 추가
→ Redeploy
```

### Q: 404 에러
**A**: 빌드 출력 확인
```
Build output directory: .vercel/output/static
```

---

## 🎉 배포 완료 후

배포 URL 예시:
```
https://sportsgoodapp.pages.dev
또는
https://sportsgoodapp-[random].pages.dev
```

### 테스트:
1. ✅ 메인 페이지 로드
2. ✅ /quiz 페이지 접근
3. ✅ 20개 질문 답변
4. ✅ AI 매칭 결과 확인
5. ✅ /result 페이지 표시

---

## 💡 Cloudflare vs Vercel

이제 둘 다 지원합니다! 선택하세요:

| 항목 | Cloudflare Pages | Vercel |
|------|-----------------|--------|
| Next.js 지원 | ✅ 15.x | ✅ 16.x |
| Edge Runtime | ✅ 필수 | ✅ 선택 |
| 무료 플랜 | ✅ 넉넉함 | ✅ Hobby |
| 속도 | 매우 빠름 | 매우 빠름 |
| 설정 | 약간 복잡 | 쉬움 |

---

Made with 💕 for KBO Newbies ⚾✨
