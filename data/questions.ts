import { Question } from '@/types';

export const questions: Question[] = [
  // Part 1. 기본 성향 (Basic Vibe)
  {
    id: 1,
    question: "내가 선호하는 팀의 선수단 구성은?",
    optionA: "🌱 무럭무럭 자라나는 '유망주 맛집' (성장캐 덕질)",
    optionB: "🦁 믿고 보는 '베테랑 군단' (노련미와 안정감)",
    optionC: "⚖️ 패기와 연륜이 딱 반반! '신구조화'가 완벽한 팀",
    optionD: "🤷 실력만 좋으면 나이는 상관없음",
    category: 'basic_vibe',
    emoji: "⚾"
  },
  {
    id: 2,
    question: "응원하고 싶은 팀의 연고지는?",
    optionA: "🏙️ 수도권/충청권 (접근성 좋거나 보살팬덤)",
    optionB: "🌊 영남권 (부산/대구/창원의 뜨거운 야구 열기)",
    optionC: "🐯 호남권 (전국구 인기와 맛의 고장)",
    optionD: "✈️ 지역 노상관 (팀만 내 스타일이면 지구 반대편도 OK)",
    category: 'basic_vibe',
    emoji: "🗺️"
  },
  {
    id: 3,
    question: "내가 야구장에 가는 주된 목적은?",
    optionA: "🍗 먹방 (야구장은 거들 뿐, 치맥과 떡볶이가 메인)",
    optionB: "🎤 응원 (스트레스 풀리게 소리 지르고 춤추러 감)",
    optionC: "📸 인생샷 (유니폼 입고 예쁜 사진 남기는 게 중요)",
    optionD: "⚾ 찐야구 (경기 내용 분석하고 집중해서 보는 감독 모드)",
    category: 'basic_vibe',
    emoji: "🏟️"
  },
  {
    id: 4,
    question: "팀 성적에 대한 나의 마인드는?",
    optionA: "🏆 무조건 우승! 이기는 게 제일 재밌어 (성적 지상주의)",
    optionB: "🍿 지더라도 꿀잼 경기! 화끈한 타격전이면 OK (도파민 중독)",
    optionC: "🥺 못해도 괜찮아, 내가 키운다... 언더독의 반란 (모성애 자극)",
    optionD: "✨ 성적보단 선수들 비주얼과 케미가 중요함",
    category: 'basic_vibe',
    emoji: "🎯"
  },

  // Part 2. 응원 & 문화 (Cheering & Culture)
  {
    id: 5,
    question: "내가 선호하는 유니폼 디자인 스타일은?",
    optionA: "🕶️ 클래식 & 근본 (깔끔하고 전통 있는 디자인)",
    optionB: "🎨 컬러풀 & 힙 (눈에 확 띄는 쨍한 색감)",
    optionC: "🧸 귀염뽀짝 & 콜라보 (캐릭터 그려진 귀여운 스타일)",
    optionD: "👔 심플 & 모던 (일상복으로 입어도 될 만큼 세련됨)",
    category: 'cheering_culture',
    emoji: "👕"
  },
  {
    id: 6,
    question: "경기 중 '견제 응원'이나 '상대 도발'에 대한 생각은?",
    optionA: "🔥 뭐 어때? 이것도 재미지! (강한 승부욕)",
    optionB: "🤫 매너 지켜! (상호 존중과 평화 선호)",
    optionC: "😂 웃기면 인정 (센스 있는 드립은 환영)",
    optionD: "🙅 관심 없음 (우리 팀 응원하기도 바쁨)",
    category: 'cheering_culture',
    emoji: "📣"
  },
  {
    id: 7,
    question: "선호하는 야구장 시설 환경은?",
    optionA: "🏟️ 최신식 돔구장 (비 와도 경기하고, 에어컨 빵빵 쾌적함)",
    optionB: "☀️ 탁 트인 야외 구장 (노을 지는 하늘 보며 감성 충전)",
    optionC: "🏚️ 레트로 감성 구장 (오래됐지만 정겹고 맛집 많은 곳)",
    optionD: "🎉 테마파크형 구장 (이벤트 많고 볼거리 많은 곳)",
    category: 'cheering_culture',
    emoji: "🏛️"
  },
  {
    id: 8,
    question: "득점 상황에서 나오는 노래(등장곡/응원가) 취향은?",
    optionA: "🎸 심장이 웅장해지는 락/오케스트라 스타일",
    optionB: "💃 저절로 춤이 나오는 신나는 EDM/댄스 스타일",
    optionC: "🎶 한 번 들으면 못 잊는 수능 금지곡(중독성) 스타일",
    optionD: "🗣️ 가사 없이 목청으로 제압하는 떼창 스타일",
    category: 'cheering_culture',
    emoji: "🎵"
  },
  {
    id: 9,
    question: "패배한 날, 나의 멘탈 상태는?",
    optionA: "🤬 감독 나와!! (분노 폭발형)",
    optionB: "🧘 내일은 이기겠지... (긍정 회로형)",
    optionC: "😭 우리 선수들 기죽지 마... (우쭈쭈형)",
    optionD: "😴 경기? 오늘 경기 있었나? (빠른 기억 삭제형)",
    category: 'cheering_culture',
    emoji: "😤"
  },

  // Part 3. 팬덤 & 덕질 (Fandom & Interaction)
  {
    id: 10,
    question: "유튜브 자컨(자체 콘텐츠)에서 보고 싶은 영상은?",
    optionA: "🤣 배꼽 잡는 선수들의 예능/게임 영상",
    optionB: "🎬 영화 같은 퀄리티의 경기 하이라이트/다큐",
    optionC: "👬 선수들끼리 꽁냥꽁냥 관계성/케미 돋는 영상",
    optionD: "🎤 선수들의 솔직한 인터뷰나 퇴근길 영상",
    category: 'fandom',
    emoji: "📺"
  },
  {
    id: 11,
    question: "'최애' 선수를 고를 때 가장 중요한 포인트는?",
    optionA: "👑 압도적 실력 (야구 잘하면 잘생겨 보임)",
    optionB: "✨ 아이돌 비주얼 (얼굴이 복지다)",
    optionC: "🤪 팬 서비스 & 예능감 (재밌고 팬한테 잘하는 선수)",
    optionD: "🛡️ 프랜차이즈 스타 (팀에 대한 충성심과 의리)",
    category: 'fandom',
    emoji: "⭐"
  },
  {
    id: 12,
    question: "팀의 마스코트는 어떤 스타일이 좋아?",
    optionA: "🐻 귀여운 동물 (인형으로 만들어도 사고 싶음)",
    optionB: "💪 강인한 캐릭터 (팀의 기세가 느껴짐)",
    optionC: "👽 킹받는 엽기/개그 캐릭터 (볼수록 매력 있음)",
    optionD: "🤷 마스코트보단 팀 로고(엠블럼) 간지가 중요",
    category: 'fandom',
    emoji: "🎭"
  },
  {
    id: 13,
    question: "티켓팅(예매) 난이도에 대한 허용치는?",
    optionA: "🎫 피켓팅 감수 (인기 많은 팀이 최고, 광클 자신 있음)",
    optionB: "🧘 널널한 게 최고 (가고 싶을 때 언제든 가는 팀)",
    optionC: "💸 돈으로 해결 (비싸도 테이블석/프리미엄석 선호)",
    optionD: "👀 가성비 중요 (외야석에서 자유롭게 보는 게 좋음)",
    category: 'fandom',
    emoji: "🎟️"
  },
  {
    id: 14,
    question: "팀 분위기(Vibe)는 어땠으면 좋겠어?",
    optionA: "🔥 군대 같은 규율과 카리스마",
    optionB: "🎉 매일이 축제 같은 자유분방함",
    optionC: "👨‍👩‍👧‍👦 가족같이 끈끈하고 따뜻한 분위기",
    optionD: "💼 할 일 딱딱 잘하는 프로페셔널 비즈니스",
    category: 'fandom',
    emoji: "🌈"
  },

  // Part 4. 야구 내적 취향 (In-Game Style)
  {
    id: 15,
    question: "가장 짜릿함을 느끼는 순간은?",
    optionA: "⚾ 쾅! 하고 넘어가는 시원한 홈런",
    optionB: "⚡ 훔치고 달리는 발 빠른 도루와 작전",
    optionC: "🧊 상대 타자를 꼼짝 못 하게 하는 삼진 쇼",
    optionD: "🛡️ 이걸 잡네? 미친 호수비",
    category: 'in_game_style',
    emoji: "💥"
  },
  {
    id: 16,
    question: "라이벌 팀과의 관계는?",
    optionA: "🥊 쟤네한텐 가위바위보도 지면 안 됨 (전통의 라이벌리 선호)",
    optionB: "🤝 좋은 게 좋은 거지 (평화주의자)",
    optionC: "🎢 어제의 적이 오늘의 동지 (그때그때 다름)",
    optionD: "🤴 라이벌? 우린 우리 길만 간다 (독보적 마이웨이)",
    category: 'in_game_style',
    emoji: "⚔️"
  },
  {
    id: 17,
    question: "선호하는 감독/코칭 스타일은?",
    optionA: "🕵️ 데이터 기반의 치밀한 지략가",
    optionB: "🦁 선수들을 휘어잡는 카리스마 리더",
    optionC: "👨‍🏫 믿고 기다려주는 덕장(아빠 리더십)",
    optionD: "🕺 같이 세리머니 해주는 형님 리더십",
    category: 'in_game_style',
    emoji: "👔"
  },
  {
    id: 18,
    question: "우천 취소(우취)가 됐을 때 나는?",
    optionA: "☔ 우취 세리머니 (비 맞으며 슬라이딩 구경하는 낭만)",
    optionB: "🏠 빠른 귀가 (집에서 뽀송하게 다른 팀 경기 봄)",
    optionC: "😡 극대노 (내 시간과 티켓비 물어내!)",
    optionD: "🍻 술파티 (야구장 근처 술집으로 장소 변경)",
    category: 'in_game_style',
    emoji: "🌧️"
  },
  {
    id: 19,
    question: "굿즈(MD) 살 때 내 지갑을 여는 건?",
    optionA: "👕 무조건 유니폼 & 마킹 (기본템이 근본)",
    optionB: "🧢 실용적인 모자나 후드티 (일코 가능)",
    optionC: "🧸 귀여운 인형, 키링, 스티커 (다꾸/가방꾸미기 용)",
    optionD: "🛍️ 한정판 콜라보 굿즈 (희소성 중요)",
    category: 'fandom',
    emoji: "🛒"
  },
  {
    id: 20,
    question: "마지막 질문! 나에게 야구란?",
    optionA: "🔥 내 일주일의 기분을 좌우하는 것",
    optionB: "🥳 친구들과 놀기 위한 가장 완벽한 핑계",
    optionC: "🏫 또 하나의 학교 (응원가 외우고 룰 배우는 재미)",
    optionD: "❤️ 짝사랑 (맨날 욕하면서도 다시 보게 되는 애증)",
    category: 'in_game_style',
    emoji: "💖"
  }
];
