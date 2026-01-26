# 🚀 Cloudflare Pages 배포 가이드 (간편 버전)

## ⚡ 가장 쉬운 방법: Cloudflare Dashboard 사용

CLI보다 **웹 대시보드가 훨씬 쉽고 안정적입니다!**

---

## 📝 5분 만에 배포하기

### 1단계: Cloudflare Dashboard 접속
```
https://dash.cloudflare.com
→ Workers & Pages
→ Create application
→ Pages 탭
→ Connect to Git
```

### 2단계: GitHub 저장소 연결
```
GitHub 계정 연결 (처음 한 번만)
→ "fghj779/sportsgoodapp" 선택
→ Begin setup 클릭
```

### 3단계: 빌드 설정
```
Project name: kboapp4women (또는 원하는 이름)
Production branch: main

Build settings:
  Framework preset: Next.js 선택
  
  Build command:
  npx @cloudflare/next-on-pages
  
  Build output directory:
  .vercel/output/static
  
  Root Directory: / (기본값)
  
  Node version: 18 (or 20)
```

### 4단계: 환경 변수 설정 🔑
```
Environment variables 섹션에서 Add variable 클릭:

Variable name: OPENAI_API_KEY
Value: [당신의 OpenAI API 키를 여기에 입력]

Environment:
☑️ Production
☐ Preview (선택사항)
```

**당신의 API 키**: 
`.env.local` 파일에 있는 API 키를 복사해서 붙여넣으세요.

### 5단계: 배포!
```
Save and Deploy 버튼 클릭
→ 빌드 로그 확인 (2-3분 소요)
→ 성공하면 URL 확인
```

---

## 🎯 예상 결과

### 성공 시:
```
✅ Build successful
✅ Deployment complete

🌐 Your site is live at:
https://kboapp4women.pages.dev
또는
https://[random].kboapp4women.pages.dev
```

### 실패 시 확인사항:
```
❌ Build command 확인
   → npx @cloudflare/next-on-pages

❌ Output directory 확인
   → .vercel/output/static

❌ Environment variables 확인
   → OPENAI_API_KEY 설정됨

❌ Node version 확인
   → 18 이상
```

---

## 🔧 트러블슈팅

### Q: "No Project Settings found" 에러
**A**: 정상입니다. GitHub 연동 시 자동으로 해결됩니다.

### Q: Build 실패
**A**: 빌드 로그에서 에러 메시지 확인:
- Vercel 관련 에러 → 무시하고 Cloudflare 설정대로 진행
- 환경 변수 에러 → OPENAI_API_KEY 확인
- 타임아웃 → Retry deployment

### Q: SSL 에러 (ERR_SSL_VERSION_OR_CIPHER_MISMATCH)
**A**: 
1. 빌드가 실제로 성공했는지 확인
2. 5-10분 후 다시 시도 (SSL 인증서 발급 시간)
3. Cloudflare Dashboard에서 Deployment 상태 확인

---

## 💡 자동 배포 설정

GitHub에 Push하면 자동으로 Cloudflare Pages에 배포됩니다!

```
git push origin main
→ Cloudflare가 자동으로 감지
→ 자동 빌드 & 배포
→ 완료!
```

---

## 🎨 커스텀 도메인 설정 (선택사항)

1. **Cloudflare Dashboard**
   - Pages 프로젝트 선택
   - Custom domains 탭
   - Set up a custom domain

2. **도메인 연결**
   - 도메인 입력 (예: kboti.com)
   - DNS 레코드 자동 설정
   - SSL 자동 발급

---

## 📊 Dashboard에서 확인할 것들

### Deployments 탭:
- 빌드 히스토리
- 빌드 로그
- 배포 상태

### Settings 탭:
- Build settings
- Environment variables
- Custom domains

### Analytics 탭:
- 방문자 통계
- 성능 지표

---

## ✅ 체크리스트

배포 전 확인:
- [ ] GitHub에 최신 코드 푸시됨
- [ ] Cloudflare 계정 생성
- [ ] GitHub 저장소 연결
- [ ] 빌드 설정 올바름
- [ ] 환경 변수 OPENAI_API_KEY 설정
- [ ] Deploy 버튼 클릭

배포 후 확인:
- [ ] 빌드 성공
- [ ] URL 접속 가능
- [ ] 메인 페이지 로드
- [ ] 퀴즈 기능 작동
- [ ] AI 매칭 결과 표시

---

## 🚀 지금 바로 시작!

**1분이면 시작할 수 있습니다:**

```
https://dash.cloudflare.com
→ Workers & Pages
→ Create
→ Connect to Git
→ 위 설정대로 진행!
```

---

Made with 💕 for KBO Newbies ⚾✨
