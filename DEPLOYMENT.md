# 🚀 배포 가이드

## ⚠️ 중요: Cloudflare Pages 호환성 문제

현재 프로젝트는 **Next.js 16 App Router**와 **Server-side API Routes**를 사용하고 있어,
**Cloudflare Pages에서 정상 작동하지 않습니다.**

### 발생한 에러
```
404 - This page can't be found
https://6cd3e9e9.sportsgoodapp.pages.dev/
```

### 원인
- Cloudflare Pages는 Next.js Server Components 완벽 지원 안 됨
- API Routes (`/api/match`) 실행 제한적
- Edge 런타임만 지원, Node.js 런타임 필요한 기능 제한

---

## ✅ 해결 방법: Vercel 배포 (권장)

### 왜 Vercel인가?
- ✅ Next.js 개발사(Vercel)가 만든 플랫폼
- ✅ App Router 완벽 지원
- ✅ API Routes 자동 처리
- ✅ 무료 Hobby 플랜 제공
- ✅ 자동 HTTPS, CDN, 글로벌 배포
- ✅ GitHub 자동 연동

---

## 📝 Vercel 배포 방법

### 방법 1: 웹 인터페이스 (가장 쉬움) 👍

1. **[Vercel](https://vercel.com) 접속**
   - https://vercel.com

2. **GitHub로 로그인**
   - "Sign up with GitHub" 클릭

3. **프로젝트 임포트**
   - "Add New..." → "Project" 클릭
   - `fghj779/sportsgoodapp` 저장소 선택
   - "Import" 클릭

4. **환경 변수 설정**
   ```
   Name: OPENAI_API_KEY
   Value: [당신의 OpenAI API 키]
   ```
   - ⚠️ 반드시 설정해야 합니다!

5. **Deploy 클릭!**
   - 약 1-2분 소요
   - 완료되면 `.vercel.app` 도메인 할당

### 예상 URL
```
https://sportsgoodapp.vercel.app
또는
https://sportsgoodapp-[random].vercel.app
```

---

### 방법 2: CLI로 배포

```bash
# 1. Vercel CLI 설치 (이미 완료)
npm install -g vercel

# 2. Vercel 로그인
vercel login

# 3. 프로젝트 배포
cd /Users/kangsanlee/sportsgoodapp
vercel

# 프롬프트에 따라 설정:
# - Set up and deploy? Yes
# - Which scope? [당신의 계정]
# - Link to existing project? No
# - Project name? sportsgoodapp
# - Directory? ./
# - Override settings? No

# 4. 환경 변수 추가
vercel env add OPENAI_API_KEY
# [당신의 OpenAI API 키 입력]

# 5. 프로덕션 배포
vercel --prod
```

---

## 🔧 배포 후 확인사항

### 1. 환경 변수 확인
Vercel 대시보드 → Settings → Environment Variables
- `OPENAI_API_KEY` 가 설정되어 있는지 확인

### 2. 빌드 로그 확인
- Deployments 탭에서 빌드 상태 확인
- 에러가 있다면 로그 확인

### 3. 기능 테스트
```
✅ 메인 페이지 로드
✅ /quiz 페이지 접근
✅ 20개 질문 답변
✅ AI 매칭 결과 확인
✅ /result 페이지 표시
```

---

## 🌐 커스텀 도메인 설정 (선택사항)

Vercel에서 무료로 커스텀 도메인 연결 가능:

1. **도메인 구매** (예: GoDaddy, Namecheap, Cloudflare Registrar)

2. **Vercel에서 도메인 추가**
   - Project Settings → Domains
   - 도메인 입력 (예: `kboti.com`)
   - DNS 레코드 추가 안내 따라하기

3. **자동 HTTPS 적용**
   - Vercel이 자동으로 SSL 인증서 발급

---

## 📊 Vercel vs Cloudflare Pages 비교

| 기능 | Vercel | Cloudflare Pages |
|------|--------|------------------|
| Next.js App Router | ✅ 완벽 지원 | ⚠️ 제한적 |
| API Routes | ✅ 완벽 지원 | ❌ 제한적 |
| OpenAI API 호출 | ✅ 가능 | ⚠️ 제한적 |
| 무료 플랜 | ✅ Hobby (충분함) | ✅ 무료 |
| 빌드 시간 | 빠름 | 빠름 |
| 자동 배포 | ✅ GitHub 연동 | ✅ GitHub 연동 |
| **추천도** | ⭐⭐⭐⭐⭐ | ⭐⭐ |

---

## 🐛 문제 해결

### Q: 배포 후 500 에러 발생
**A**: 환경 변수 확인
```bash
# Vercel 대시보드에서:
Settings → Environment Variables
→ OPENAI_API_KEY 확인
→ 없으면 추가 후 Redeploy
```

### Q: API 호출 실패
**A**: OpenAI API 키 확인
```bash
# 터미널에서 테스트:
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Q: 빌드 실패
**A**: 로그 확인
```bash
# Vercel CLI로 로그 확인:
vercel logs
```

---

## 📱 배포 체크리스트

배포 전:
- [ ] `.env.local` 파일에 API 키 있음 (로컬 테스트용)
- [ ] 로컬에서 `npm run build` 성공
- [ ] 로컬에서 모든 페이지 작동 확인

배포 시:
- [ ] Vercel 계정 생성
- [ ] GitHub 저장소 연결
- [ ] 환경 변수 `OPENAI_API_KEY` 설정
- [ ] Deploy 실행

배포 후:
- [ ] 배포 URL 접속 확인
- [ ] 메인 페이지 로드
- [ ] 퀴즈 기능 테스트
- [ ] AI 매칭 결과 확인
- [ ] 모바일에서 확인

---

## 🎉 배포 완료 후

1. **GitHub README 업데이트**
   ```markdown
   🌐 **Live Demo**: [https://sportsgoodapp.vercel.app](https://sportsgoodapp.vercel.app)
   ```

2. **소셜 미디어 공유**
   - 인스타그램, 트위터 등에 링크 공유
   - 친구들에게 테스트 요청

3. **피드백 수집**
   - GitHub Issues로 버그 리포트 받기
   - 사용자 경험 개선

---

## 💡 참고 자료

- [Vercel 공식 문서](https://vercel.com/docs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)
- [Vercel CLI 문서](https://vercel.com/docs/cli)

---

Made with 💕 for KBO Newbies ⚾✨
