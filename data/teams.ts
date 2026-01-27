import { KBOTeam } from '@/types';

export const kboTeams: KBOTeam[] = [
  {
    id: 'lg',
    name: 'LG 트윈스',
    englishName: 'LG Twins',
    color: '#C30452',
    colorScheme: 'warm',
    mascot: '트윈스 ⚾',
    logo: '⚾',
    stadium: '서울 잠실야구장',
    homeCity: '서울',
    cheerSongUrl: 'https://www.youtube.com/watch?v=xr6wPZxyhxI',
    uniformStyle: '핀스트라이프 & 블랙',
    fashion: '도시적이고 세련된 서울깍쟁이 느낌. 줄무늬 유니폼의 원조',
    meme: '서울의 자존심, 세련된 야구! 유광잠바는 이제 패션이야',
    description: '2025 우승팀의 여유! 신바람 야구의 전설',
    vibe: '팬들의 목소리가 크고 열정적임. 신바람 야구가 불면 아무도 못 말림',
    keywords: ['서울의주인', '무적LG', '유광잠바', '신바람', '핀스트라이프', '2025우승'],
    starPlayers: [
      { name: '김현수', position: '외야수', description: '타격 기계, 맹구' },
      { name: '홍창기', position: '외야수', description: '출루 머신, 1루 베이스의 주인' },
      { name: '박해민', position: '외야수', description: '수비의 심장, 람보르미니' }
    ],
    legends: [
      { name: '이병규', position: '외야수', description: '라뱅, 적토마' },
      { name: '김용수', position: '투수', description: '노송, 영구결번 41' },
      { name: '박용택', position: '외야수', description: 'KBO 최다 안타, 팬사랑 1위' }
    ],
    history: {
      founded: '1982년 (MBC 청룡)',
      championships: 4,
      recentAchievements: ['2025 한국시리즈 우승', '2023 한국시리즈 우승'],
      majorEvents: ['1990 한국시리즈 우승', '1994 한국시리즈 우승', '2023 한국시리즈 우승', '2025 디펜딩 챔피언']
    }
  },
  {
    id: 'kia',
    name: 'KIA 타이거즈',
    englishName: 'KIA Tigers',
    color: '#EA0029',
    colorScheme: 'warm',
    mascot: '호랑이 🐯',
    logo: '🐯',
    stadium: '광주-기아 챔피언스필드',
    homeCity: '광주',
    cheerSongUrl: 'https://www.youtube.com/watch?v=dudVNSG9foc',
    uniformStyle: '블러디 레드 & 블랙',
    fashion: '호랑이의 맹렬함. 전통의 검빨 포스',
    meme: '압도하라! 호랑이의 기세로! 느그가 프로가? 우린 챔피언이다!',
    description: '광주의 열기, 빨간 맛에 중독될 준비 됐어?',
    vibe: '우승 아니면 실패. 자부심이 하늘을 찌르는 2024 챔피언의 위엄',
    keywords: ['최다우승', '호랑이', '남행열차', '김도영보유국', '2024우승', '광주'],
    starPlayers: [
      { name: '김도영', position: '내야수', description: 'KBO 생태계 파괴종, 제2의 이종범' },
      { name: '양현종', position: '투수', description: '살아있는 역사, 대투수' },
      { name: '정해영', position: '투수', description: '뒷문을 잠그는 최연소 세이브 기록 제조기' }
    ],
    legends: [
      { name: '선동열', position: '투수', description: '무등산 폭격기, 불멸의 에이스' },
      { name: '이종범', position: '외야수', description: '바람의 아들' },
      { name: '김성한', position: '내야수', description: '오리궁뎅이 타법의 시초, 전설의 유격수' }
    ],
    history: {
      founded: '1982년 (해태 타이거즈)',
      championships: 12,
      recentAchievements: ['2024 한국시리즈 우승', '2017 한국시리즈 우승'],
      majorEvents: ['1980년대 황금기 (5연패)', '2024 한국시리즈 우승', 'KBO 최다 우승 구단']
    }
  },
  {
    id: 'hanwha',
    name: '한화 이글스',
    englishName: 'Hanwha Eagles',
    color: '#FF6600',
    colorScheme: 'warm',
    mascot: '독수리 🦅',
    logo: '🦅',
    stadium: '대전 베이스볼 드림파크',
    homeCity: '대전',
    cheerSongUrl: 'https://www.youtube.com/watch?v=ucNR9zLqmDs',
    uniformStyle: '다이너마이트 오렌지',
    fashion: '강렬한 오렌지 컬러. 독수리의 날카로움. 폭발적인 화력',
    meme: '비상하라! 슈퍼 팀의 탄생! 강백호+노시환+류현진 = 우주 방위대',
    description: '새 집(신구장)에서 우승 파티 열자! 2026년 가장 핫한 팀',
    vibe: '보살 팬은 옛말. 이제는 성적을 내놓으라 외치는 성난 독수리들',
    keywords: ['신구장', '슈퍼팀', '강백호영입', '철벽수비', '우주방위대', '대전'],
    starPlayers: [
      { name: '강백호', position: '내야수/지명', description: '2026 FA 최대어, 대전의 새로운 아이돌' },
      { name: '류현진', position: '투수', description: '코리안 몬스터, 돌아온 에이스' },
      { name: '노시환', position: '내야수', description: '차세대 거포, 국가대표 4번 타자' }
    ],
    legends: [
      { name: '송진우', position: '투수', description: '회장님, 최다승/최다이닝' },
      { name: '정민철', position: '투수', description: '이글스의 영구결번 에이스' },
      { name: '장종훈', position: '내야수', description: '연습생 신화' }
    ],
    history: {
      founded: '1986년 (빙그레 이글스)',
      championships: 1,
      recentAchievements: ['2025 신구장 개장', '슈퍼팀 출범'],
      majorEvents: ['1999 한국시리즈 우승', 'V2를 향한 27년의 기다림', '2026 우승 도전']
    }
  },
  {
    id: 'samsung',
    name: '삼성 라이온즈',
    englishName: 'Samsung Lions',
    color: '#074CA1',
    colorScheme: 'cool',
    mascot: '사자 🦁',
    logo: '🦁',
    stadium: '대구 삼성 라이온즈파크',
    homeCity: '대구',
    cheerSongUrl: 'https://www.youtube.com/watch?v=euO5P5XtXF0',
    uniformStyle: '로얄 블루 & 화이트',
    fashion: '차갑고 이성적인 명문가의 색. 라이온 킹의 위엄',
    meme: '클래식은 영원하다, 왕조의 품격. 조용히 강하다',
    description: '푸른 피가 흐르는 대구의 심장! 전통의 명가',
    vibe: '흥분하지 않는 귀족. 하지만 약팀 취급받으면 참지 않음',
    keywords: ['왕조', '엘도라도', '라팍', '푸른피', '명문', '대구'],
    starPlayers: [
      { name: '구자욱', position: '외야수', description: '팀 그 자체, 라이온 킹' },
      { name: '원태인', position: '투수', description: '푸른 피의 에이스' },
      { name: '김영웅', position: '내야수', description: '이름처럼 난세의 영웅이 될 거포' }
    ],
    legends: [
      { name: '이승엽', position: '내야수', description: '국민타자, 아시아 홈런왕' },
      { name: '양준혁', position: '외야수', description: '만세 타법, 배트에 공을 맞히는 신' },
      { name: '오승환', position: '투수', description: '끝판대장, 돌부처' }
    ],
    history: {
      founded: '1982년',
      championships: 8,
      recentAchievements: ['2014 한국시리즈 우승', '2012-2014 3연패'],
      majorEvents: ['2002-2006 5연패', '2011-2014 4연패', '통산 최다 우승 (8회)']
    }
  },
  {
    id: 'kiwoom',
    name: '키움 히어로즈',
    englishName: 'Kiwoom Heroes',
    color: '#820024',
    colorScheme: 'warm',
    mascot: '히어로 🦸',
    logo: '🦸‍♂️',
    stadium: '고척 스카이돔',
    homeCity: '서울',
    cheerSongUrl: 'https://www.youtube.com/watch?v=4YNAvO63mVA',
    uniformStyle: '버건디 & 실버',
    fashion: '고급스러운 와인빛, 도전정신. 히어로 컨셉의 카리스마',
    meme: '미래를 보는 눈, MLB 사관학교! 우리 애(김혜성) 다저스 갔다!',
    description: '젊은 영웅들의 성장 드라마를 직관해!',
    vibe: '주축 선수가 떠나도 새로운 영웅이 솟아나는 화수분. 육아일기 쓰는 마음으로 응원',
    keywords: ['돔구장', '수출기업', 'MLB사관학교', '영웅군단', '실내구장', '서울'],
    starPlayers: [
      { name: '송성문', position: '내야수', description: '캡틴, 가을만 되면 미쳐 날뛰는 남자' },
      { name: '이주형', position: '외야수', description: '포스트 이정후, 천재적인 타격 재능' },
      { name: '김건희', position: '내야수/투수', description: '만화 야구, 투타 겸업 도전' }
    ],
    legends: [
      { name: '김하성', position: 'MLB 진출', description: 'SD 골드글러브 내야수' },
      { name: '이정후', position: 'MLB 진출', description: 'SF 바람의 손자' },
      { name: '김혜성', position: 'MLB 진출', description: 'LAD 다저스 2026 입단' }
    ],
    history: {
      founded: '2008년',
      championships: 0,
      recentAchievements: ['항상 언더독이지만 상위권 위협', '준우승 맛집'],
      majorEvents: ['2018 정규시즌 우승', '2019 한국시리즈 준우승', 'MLB 수출 기업']
    }
  },
  {
    id: 'lotte',
    name: '롯데 자이언츠',
    englishName: 'Lotte Giants',
    color: '#002955',
    colorScheme: 'cool',
    mascot: '자이언츠 🏔️',
    logo: '⚾',
    stadium: '부산 사직야구장',
    homeCity: '부산',
    cheerSongUrl: 'https://www.youtube.com/watch?v=n5FY9EBaGWs',
    uniformStyle: '네이비 & 샴페인 골드',
    fashion: '항구 도시의 자존심. 부산 감성 네이비. 바다를 닮은 시원한 블루',
    meme: '낭만 그 자체, 부산의 심장! 사직 노래방 갈 사람 구함',
    description: '파도처럼 밀려오는 기세, 마 함 해보입시더!',
    vibe: '지구상에서 가장 열정적인 팬덤. 이기면 부산 축제. 비주얼 구단',
    keywords: ['부산갈매기', '봉다리응원', '마', '기세', '사직', '낭만'],
    starPlayers: [
      { name: '윤동희', position: '외야수', description: '사직 아이돌, 야구 잘하고 잘생김' },
      { name: '나승엽', position: '내야수', description: '부드러운 스윙, 차세대 프랜차이즈' },
      { name: '박세웅', position: '투수', description: '안경 에이스, 롯데의 1선발' }
    ],
    legends: [
      { name: '최동원', position: '투수', description: '무쇠팔, 부산의 영원한 영웅' },
      { name: '이대호', position: '내야수', description: '조선의 4번 타자' },
      { name: '손아섭', position: '외야수', description: '자이언츠의 악바리' }
    ],
    history: {
      founded: '1982년',
      championships: 2,
      recentAchievements: ['1992 마지막 우승', '응답하라 1992...'],
      majorEvents: ['1984 한국시리즈 우승', '1992 한국시리즈 우승', '최고의 팬심']
    }
  },
  {
    id: 'doosan',
    name: '두산 베어스',
    englishName: 'Doosan Bears',
    color: '#131F3E',
    colorScheme: 'cool',
    mascot: '베어스 🐻',
    logo: '🐻',
    stadium: '서울 잠실야구장',
    homeCity: '서울',
    cheerSongUrl: 'https://www.youtube.com/watch?v=MvwELezoZy4',
    uniformStyle: '네이비 & 화이트',
    fashion: '깔끔하고 단단한 느낌. 단정하고 정통적인 명문가 스타일',
    meme: '끝날 때까지 끝난 게 아니다! 미라클 두산? 아니, 좀비 베어스!',
    description: '탄탄한 수비와 끈기의 야구를 원해?',
    vibe: '화려하진 않아도 기본기가 탄탄함. 지고 있어도 역전할 것 같은 믿음',
    keywords: ['미라클두산', '허슬두', '최강두산', '여자팬많음', '역전', '서울'],
    starPlayers: [
      { name: '양의지', position: '포수', description: '곰의 탈을 쓴 여우, 그라운드의 사령관' },
      { name: '곽빈', position: '투수', description: '국가대표 우완 에이스' },
      { name: '김택연', position: '투수', description: '신인왕 출신, 차기 마무리 대장' }
    ],
    legends: [
      { name: '박철순', position: '투수', description: '불사조' },
      { name: '김동주', position: '내야수', description: '두목곰' },
      { name: '허경민', position: '내야수', description: '영원한 3루수' }
    ],
    history: {
      founded: '1982년 (OB 베어스)',
      championships: 6,
      recentAchievements: ['2015-2021 7년 연속 한국시리즈 진출', '2016 한국시리즈 우승'],
      majorEvents: ['1982년 창단 우승', '1995년 통합 우승', '2015-2016 연속 우승']
    }
  },
  {
    id: 'ssg',
    name: 'SSG 랜더스',
    englishName: 'SSG Landers',
    color: '#CE0E2D',
    colorScheme: 'warm',
    mascot: '랜더스 🦁',
    logo: '🦁',
    stadium: '인천 SSG 랜더스필드',
    homeCity: '인천',
    cheerSongUrl: 'https://www.youtube.com/watch?v=E39BlC99Tck',
    uniformStyle: '카리스마틱 레드',
    fashion: '타오르는 열정. 럭셔리한 레드 컬러. 프리미엄 느낌의 세련된 디자인',
    meme: '상남자의 야구, 화끈한 홈런쇼! 야구장에서 스벅 마시며 홈런 볼래?',
    description: '인천 상륙 작전, 우승을 향해 쏘아라!',
    vibe: '홈런 1위 팀답게 시원시원함. 스포테인먼트(스포츠+엔터)의 선두주자',
    keywords: ['홈런군단', '연안부두', '이마트', '최정랜더스', '스벅', '인천'],
    starPlayers: [
      { name: '최정', position: '내야수', description: '리빙 레전드, 홈런 공장장' },
      { name: '김광현', position: '투수', description: '영원한 에이스, 미소 천사' },
      { name: '박성한', position: '내야수', description: '짠물 수비, 공격형 유격수' }
    ],
    legends: [
      { name: '박경완', position: '포수', description: '포수 조련사' },
      { name: '김강민', position: '외야수', description: '짐승 수비 (은퇴)' },
      { name: '추신수', position: '외야수', description: '메이저리거의 귀환 (2025 은퇴)' }
    ],
    history: {
      founded: '2000년 (SK 와이번스) → 2021년 SSG',
      championships: 5,
      recentAchievements: ['2022 통합 우승 (와이어 투 와이어)', '2021 정규시즌 우승'],
      majorEvents: ['2007-2010 4연패', '2018 한국시리즈 우승', '2022 한국시리즈 우승']
    }
  },
  {
    id: 'nc',
    name: 'NC 다이노스',
    englishName: 'NC Dinos',
    color: '#315288',
    colorScheme: 'cool',
    mascot: '공룡 🦕',
    logo: '🦕',
    stadium: '창원 NC파크',
    homeCity: '창원',
    cheerSongUrl: 'https://www.youtube.com/watch?v=-k1QchhdvAc',
    uniformStyle: '마린 블루 & 골드',
    fashion: '바다와 황금의 조화. 시원한 네이비 블루. 공룡 테마의 파워풀한 느낌',
    meme: '거침없이 가자! 공룡의 발걸음! 데이터 야구와 집행검의 만남!',
    description: '창원의 자존심, 강한 타구의 맛!',
    vibe: 'IT 기업 구단답게 데이터를 중시함. 팬덤은 조용하지만 강함. 집행검 세리머니의 원조',
    keywords: ['집행검', '엔씨소프트', '단디쎄리', '창원', 'IT야구', '데이터'],
    starPlayers: [
      { name: '박건우', position: '외야수', description: '잘생긴 안타 기계, 꾸준함의 대명사' },
      { name: '김주원', position: '내야수', description: '스위치 히터, 국가대표 유격수' },
      { name: '김형준', position: '포수', description: '공룡 군단의 안방마님' }
    ],
    legends: [
      { name: '나성범', position: '외야수', description: '창단 프랜차이즈 (현 KIA)' },
      { name: '에릭 테임즈', position: '내야수', description: 'KBO 역사상 최고의 외인 타자' },
      { name: '양의지', position: '포수', description: '우승 청부사 (현 두산)' }
    ],
    history: {
      founded: '2011년 (9구단)',
      championships: 1,
      recentAchievements: ['2020 통합 우승 (집행검 들어올림)', '2019 준우승'],
      majorEvents: ['2015년 첫 포스트시즌', '2020 정규시즌 우승', '2020 한국시리즈 우승']
    }
  },
  {
    id: 'kt',
    name: 'KT 위즈',
    englishName: 'KT Wiz',
    color: '#000000',
    colorScheme: 'neutral',
    mascot: '마법사 🧙',
    logo: '🧙‍♂️',
    stadium: '수원 KT 위즈파크',
    homeCity: '수원',
    cheerSongUrl: 'https://www.youtube.com/watch?v=TiZOu5M3Zdk',
    uniformStyle: '블랙 & 빅토리 레드',
    fashion: '강인함과 마법의 신비로움. 세련된 블랙 컬러로 시크함 폭발',
    meme: '마법 같은 역전승, 언더독의 반란! 롤러코스터 즐길 준비 됐어?',
    description: '수원의 마법사들, 끈기의 야구!',
    vibe: '강백호 이적 후 이 없는 잇몸으로 싸우는 비장함. 여름만 되면 귀신같이 잘해지는 여름성 팀',
    keywords: ['마법사', '여름성', '수원', '워터페스티벌', '롤러코스터', '끈기'],
    starPlayers: [
      { name: '고영표', position: '투수', description: '마구(체인지업)를 던지는 잠수함 에이스' },
      { name: '박영현', position: '투수', description: '돌직구 마무리, 차세대 국대 클로저' },
      { name: '배정대', position: '외야수', description: '끝내기의 사나이' }
    ],
    legends: [
      { name: '유한준', position: '외야수', description: '소리 없이 강한 형님' },
      { name: '박경수', position: '내야수', description: '수원 거포, 2루수의 전설' },
      { name: '황재균', position: '내야수', description: '첫 우승의 주역' }
    ],
    history: {
      founded: '2013년 (10구단, 막내)',
      championships: 1,
      recentAchievements: ['2021 통합 우승', '2024 정규시즌 2위'],
      majorEvents: ['2015년 첫 포스트시즌', '2021 한국시리즈 우승', '신생팀의 기적']
    }
  }
];
