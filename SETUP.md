# 🚀 빠른 시작 가이드

## ✅ 설치 완료!

KBO-TI 프로젝트가 성공적으로 생성되었습니다! 🎉

## 📍 현재 상태

- ✅ Next.js 14 프로젝트 초기화 완료
- ✅ TypeScript + Tailwind CSS 설정 완료
- ✅ OpenAI API 연동 구현
- ✅ 20개 질문 데이터 작성 (20대 여성 타겟)
- ✅ 메인, 질문, 결과 페이지 UI 완성
- ✅ 파스텔 톤 디자인 + 애니메이션 적용
- ✅ KBO 10개 구단 데이터 구축

## 🎯 다음 단계

### 1. 개발 서버 확인
서버가 실행 중입니다! 브라우저를 열어주세요:
```
http://localhost:3000
```

### 2. 테스트해보기
1. 메인 페이지에서 "시작하기 💖" 버튼 클릭
2. 20개의 밸런스 게임 질문에 답하기
3. AI가 분석한 결과 확인하기

## 🔑 OpenAI API 키 설정 완료

`.env.example` 파일에 API 키가 설정되어 있습니다.
프로덕션 배포 시에는 환경 변수를 안전하게 관리하세요!

## 📱 주요 페이지

### 1. 메인 페이지 (`/`)
- 서비스 소개
- 야구공 애니메이션
- 시작하기 버튼

### 2. 질문 페이지 (`/quiz`)
- 20개의 밸런스 게임
- 프로그레스 바
- 이전/다음 네비게이션
- AI 분석 로딩 화면

### 3. 결과 페이지 (`/result`)
- 매칭된 팀 정보
- 궁합도 표시
- AI 메시지
- 팀 상세 정보 (구장, 유니폼, 응원가)
- 공유하기 기능

## 🎨 커스터마이징 가이드

### 질문 수정하기
파일: `data/questions.ts`
```typescript
export const questions: Question[] = [
  {
    id: 1,
    question: "너만의 질문을 추가해보세요!",
    optionA: "선택지 A",
    optionB: "선택지 B",
    category: 'personality',
    emoji: "😊"
  },
  // ... 더 많은 질문
];
```

### 팀 정보 수정하기
파일: `data/teams.ts`
```typescript
export const kboTeams: KBOTeam[] = [
  {
    id: 'team-id',
    name: '팀 이름',
    // ... 팀 정보
  }
];
```

### 색상 변경하기
파일: `app/globals.css`
```css
:root {
  --pastel-pink: #ffc2e2;
  --pastel-mint: #b4f8c8;
  /* 원하는 색상으로 변경 */
}
```

## 🔧 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📦 설치된 패키지

- `next` - React 프레임워크
- `react` & `react-dom` - React 라이브러리
- `typescript` - TypeScript
- `tailwindcss` - CSS 프레임워크
- `framer-motion` - 애니메이션 라이브러리
- `openai` - OpenAI API 클라이언트
- `lucide-react` - 아이콘
- `clsx` & `tailwind-merge` - 유틸리티

## 🌟 프로젝트 구조

```
sportsgoodapp/
├── app/                    # Next.js App Router
│   ├── api/match/         # OpenAI API 라우트
│   ├── quiz/              # 질문 페이지
│   ├── result/            # 결과 페이지
│   └── page.tsx           # 메인 페이지
├── components/            # 재사용 가능한 컴포넌트
│   ├── BaseballAnimation.tsx
│   ├── Button.tsx
│   └── Card.tsx
├── data/                  # 정적 데이터
│   ├── questions.ts       # 20개 질문
│   └── teams.ts           # 10개 구단
├── types/                 # TypeScript 타입
└── lib/                   # 유틸리티 함수
```

## 🚀 배포하기

### Vercel 배포 (추천)
1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com)에서 임포트
3. 환경 변수 설정:
   - `OPENAI_API_KEY`: OpenAI API 키

### 환경 변수 설정
Vercel 대시보드에서:
1. Settings → Environment Variables
2. `OPENAI_API_KEY` 추가
3. 값 입력 후 저장

## 💡 개발 팁

### 1. Hot Reload
파일을 저장하면 자동으로 브라우저가 업데이트됩니다.

### 2. TypeScript
타입 오류는 실시간으로 IDE에 표시됩니다.

### 3. Tailwind CSS
클래스명 자동완성을 위해 Tailwind CSS IntelliSense 확장 프로그램 설치를 권장합니다.

## 🐛 문제 해결

### API 에러
- `.env.example` 파일의 API 키가 유효한지 확인
- OpenAI 계정에 크레딧이 있는지 확인

### 빌드 에러
```bash
rm -rf .next
npm run dev
```

### 포트 충돌
포트 3000이 이미 사용 중이면:
```bash
npm run dev -- -p 3001
```

## 📞 도움이 필요하신가요?

- README.md 파일을 참고하세요
- 각 컴포넌트에는 주석이 달려있습니다
- TypeScript 타입 정의를 확인하세요

## 🎉 즐거운 개발 되세요!

이제 로컬에서 테스트해보고, 원하는대로 커스터마이징해보세요!
질문이나 이슈가 있으면 언제든 물어보세요 💕

---

Made with 💕 for KBO Newbies ⚾✨
