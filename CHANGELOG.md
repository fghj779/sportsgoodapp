# 변경 이력 (Changelog)

## [1.1.0] - 2026-01-27

### ✨ 업데이트
- **OpenAI SDK 업그레이드**: `6.16.0` → `5.2.0`
  - 최신 OpenAI API v5.2.0으로 업데이트
  - JSON 모드 활성화로 더 안정적인 응답 파싱
  - 향상된 에러 처리

### 🔧 개선사항

#### API Route (`app/api/match/route.ts`)
- ✅ `response_format: { type: "json_object" }` 추가로 JSON 응답 보장
- ✅ 더 상세한 에러 처리 (401, 429 등)
- ✅ JSON 파싱 실패 시 안전한 폴백 처리
- ✅ 팀 ID를 명확하게 프롬프트에 명시
- ✅ 결과 유효성 검사 강화

#### Quiz Page (`app/quiz/page.tsx`)
- ✅ 더 사용자 친화적인 에러 메시지
- ✅ API 키, 할당량 등 구체적인 에러 안내
- ✅ 에러 타입별 맞춤형 메시지

### 🐛 버그 픽스
- AI 응답 파싱 실패 시 앱이 멈추는 문제 해결
- 잘못된 팀 ID 반환 시 기본값으로 폴백
- API 에러 발생 시 더 명확한 피드백 제공

### 🔐 보안
- API 키 관련 에러 메시지 개선
- 환경 변수 설정 안내 강화

---

## [1.0.0] - 2026-01-27

### 🎉 초기 릴리즈

#### 핵심 기능
- 20개의 밸런스 게임 질문
- OpenAI GPT-4o-mini를 활용한 AI 팀 매칭
- KBO 10개 구단 정보 제공
- 파스텔 톤의 트렌디한 UI/UX

#### 페이지
- 메인 페이지: 서비스 소개
- 질문 페이지: 20개 질문 + 프로그레스 바
- 결과 페이지: 팀 정보 + 궁합도 + 공유 기능

#### 기술 스택
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion
- OpenAI API
- Lucide React

---

## 업그레이드 가이드

### OpenAI 5.2.0로 업그레이드하려면:

```bash
npm uninstall openai
npm install openai@5.2.0
```

### 주요 변경사항
1. **JSON 모드**: `response_format: { type: "json_object" }` 추가
2. **에러 처리**: 더 상세한 HTTP 상태 코드 처리
3. **유효성 검사**: AI 응답의 필수 필드 확인

### 호환성
- ✅ Next.js 14+
- ✅ Node.js 18+
- ✅ OpenAI API v5.2.0+

---

Made with 💕 for KBO Newbies
