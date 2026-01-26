# KBO-TI 💖 내 운명의 야구팀 찾기

> 2026 야구 뉴비를 위한 트렌디한 KBO 팀 매칭 서비스 ⚾✨

[![GitHub](https://img.shields.io/badge/GitHub-fghj779/sportsgoodapp-181717?style=for-the-badge&logo=github)](https://github.com/fghj779/sportsgoodapp)
![KBO-TI](https://img.shields.io/badge/KBO--TI-v1.1.0-FF69B4?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-5.2.0-412991?style=for-the-badge&logo=openai&logoColor=white)

20대 여성을 타겟으로 한 귀엽고 세련된 KBO 팀 매칭 웹 애플리케이션입니다.
20개의 밸런스 게임 질문으로 사용자의 성향을 분석하고, AI가 가장 잘 맞는 KBO 구단을 추천해줍니다!

## 🔗 링크

- **GitHub 저장소**: [https://github.com/fghj779/sportsgoodapp](https://github.com/fghj779/sportsgoodapp)
- **개발 서버**: http://localhost:3000 (로컬 실행 시)

## ✨ 주요 기능

### 🎀 KBO-TI 테스트
- 20개의 재미있는 밸런스 게임 질문
- 20대 여성이 공감할 수 있는 연애, 패션, 성격 관련 질문
- 실시간 진행도 표시

### 🤖 AI 팀 매칭
- OpenAI GPT-4o-mini를 활용한 정교한 분석
- 각 구단의 밈(Meme)과 문화를 반영한 재치있는 결과
- 75-99% 궁합도 계산

### 💕 트렌디한 디자인
- 파스텔 핑크, 민트, 블루 컬러 팔레트
- 부드러운 애니메이션 효과
- 모바일 최적화 반응형 디자인

### 📊 상세한 팀 정보
- 구단별 로고, 마스코트, 컬러
- 홈구장 정보
- 유니폼 스타일 (패션 관점)
- 응원가 유튜브 링크
- 팀 키워드 및 밈 설명

## 🛠️ 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom components with Shadcn/ui patterns
- **Animation**: Framer Motion
- **AI Integration**: OpenAI API
- **Icons**: Lucide React

## 📦 설치 방법

### 1. 저장소 클론
```bash
git clone https://github.com/fghj779/sportsgoodapp.git
cd sportsgoodapp
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
`.env.local` 파일을 생성하고 OpenAI API 키를 설정하세요:

```env
OPENAI_API_KEY=your-openai-api-key-here
```

OpenAI API 키는 [OpenAI Platform](https://platform.openai.com/api-keys)에서 발급받을 수 있습니다.

### 4. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요!

## 📁 프로젝트 구조

```
sportsgoodapp/
├── app/
│   ├── api/
│   │   └── match/
│   │       └── route.ts          # OpenAI API 연동
│   ├── quiz/
│   │   └── page.tsx              # 질문 페이지
│   ├── result/
│   │   └── page.tsx              # 결과 페이지
│   ├── globals.css               # 글로벌 스타일 (파스텔 컬러)
│   ├── layout.tsx                # 루트 레이아웃
│   └── page.tsx                  # 메인 페이지
├── components/
│   ├── BaseballAnimation.tsx     # 야구공 애니메이션
│   ├── Button.tsx                # 버튼 컴포넌트
│   └── Card.tsx                  # 카드 컴포넌트
├── data/
│   ├── questions.ts              # 20개 질문 데이터
│   └── teams.ts                  # KBO 10개 구단 데이터
├── lib/
│   └── utils.ts                  # 유틸리티 함수
├── types/
│   └── index.ts                  # TypeScript 타입 정의
└── package.json
```

## 🎨 디자인 가이드

### 컬러 팔레트
- **Primary Pink**: `#ffc2e2` (파스텔 핑크)
- **Mint**: `#b4f8c8` (파스텔 민트)
- **Blue**: `#a0d8f1` (파스텔 블루)
- **Lavender**: `#d5c6e0` (파스텔 라벤더)
- **Peach**: `#ffd3b6` (파스텔 피치)
- **Background**: `#fef5fb` (연한 핑크 배경)

### UI 특징
- 둥글둥글한 `border-radius` (rounded-2xl, rounded-3xl)
- 부드러운 그라데이션 배경
- 호버 시 scale 애니메이션
- 귀여운 이모지 활용

## 🏟️ 지원하는 KBO 구단

1. 🐻 **두산 베어스** - 역전의 명가
2. ⚾ **LG 트윈스** - 2023 우승팀
3. 🧙‍♂️ **KT 위즈** - 신생팀의 기적
4. 🦁 **SSG 랜더스** - 럭셔리 야구
5. 🦕 **NC 다이노스** - 공룡 파워
6. 🦸‍♂️ **키움 히어로즈** - 서울의 히어로
7. 🦁 **삼성 라이온즈** - 최다 우승 명가
8. ⚾ **롯데 자이언츠** - 부산의 자부심
9. 🦅 **한화 이글스** - 해탈의 경지
10. 🐯 **KIA 타이거즈** - 2024 우승팀

## 🚀 배포

### Vercel 배포
```bash
npm run build
```

Vercel에 배포 시 환경 변수 `OPENAI_API_KEY`를 설정하는 것을 잊지 마세요!

## 📱 주요 화면

### 1. 메인 페이지
- 서비스 소개
- 시작하기 버튼
- 야구공 애니메이션

### 2. 질문 페이지 (Quiz)
- 20개의 밸런스 게임 질문
- 프로그레스 바
- 부드러운 페이지 전환 애니메이션

### 3. 결과 페이지 (Result)
- 매칭된 팀 정보
- 궁합도 표시
- AI가 작성한 재치있는 설명
- 팀 상세 정보 (구장, 유니폼, 응원가)
- 공유하기 기능

## 🎯 타겟 사용자

- **연령대**: 20대 여성
- **특징**: 야구 입문자, 뉴비
- **니즈**: 어떤 팀을 응원할지 고민하는 사람
- **취향**: 트렌디하고 귀여운 디자인 선호

## 💡 개발 팁

### 질문 커스터마이징
`data/questions.ts` 파일에서 질문을 자유롭게 수정할 수 있습니다.

### 팀 정보 수정
`data/teams.ts` 파일에서 구단 정보를 업데이트할 수 있습니다.

### AI 프롬프트 조정
`app/api/match/route.ts`에서 OpenAI 프롬프트를 수정하여 더 정교한 매칭 로직을 구현할 수 있습니다.

## 🤝 기여하기

이 프로젝트는 KBO 야구 팬들을 위한 오픈소스 프로젝트입니다.
PR과 이슈는 언제나 환영합니다! 💕

## 📄 라이선스

MIT License

## 💌 만든 사람

Made with 💕 for KBO Newbies

---

⚾ **즐거운 야구 관람 되세요!** ✨
