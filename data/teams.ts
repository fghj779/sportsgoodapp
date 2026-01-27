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
    stadium: '잠실야구장',
    cheerSongUrl: 'https://www.youtube.com/watch?v=Dkss8FsuYQk',
    uniformStyle: '레드 & 화이트 시크',
    fashion: '세련되고 모던한 레드 컬러. 도시적이고 힙한 느낌',
    meme: '잠실을 붉게 물들이는 열정! 압도적 팬덤 파워',
    description: '2023 우승! 뜨거운 열정과 트렌디함의 결합',
    vibe: '열정적이고 트렌디한 분위기. 젊고 활기찬 팬 문화',
    keywords: ['열정', '트렌디', '우승', '잠실', '레드', '인싸', '힙'],
    starPlayers: [
      { name: '오스틴', position: '외야수', description: '2023 MVP, 파워 히터' },
      { name: '문보경', position: '투수', description: '에이스 좌완' },
      { name: '박해민', position: '외야수', description: '리드오프 스피드스터' }
    ],
    legends: [
      { name: '이종범', position: '외야수', description: '전설의 리드오프, 일본 진출' },
      { name: '박용택', position: '외야수', description: '안타 제조기, 통산 2000안타' },
      { name: '양승관', position: '투수', description: '불펜의 전설' }
    ],
    history: {
      founded: '1982년',
      championships: 2,
      recentAchievements: ['2023 한국시리즈 우승', '2022 정규시즌 2위'],
      majorEvents: ['1990 한국시리즈 우승', '1994 한국시리즈 우승', '2023 한국시리즈 우승']
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
    cheerSongUrl: 'https://www.youtube.com/watch?v=yZxYs3Zo7Qs',
    uniformStyle: '레드 & 블랙 타이거',
    fashion: '정열의 레드 컬러. 호랑이의 강렬함',
    meme: '2024 우승! 광주의 자부심, 호랑이 군단',
    description: '우승 DNA와 불굴의 승부사 기질',
    vibe: '열정적이고 전통 있는 분위기. 광주 지역 자부심',
    keywords: ['우승', '호랑이', '광주', '레드', '열정', '강렬', '전통'],
    starPlayers: [
      { name: '김도영', position: '내야수', description: '2024 MVP, 천재 타자' },
      { name: '양현종', position: '투수', description: '에이스 좌완, 메이저리거' },
      { name: '소크라테스', position: '외야수', description: '파워 히터' }
    ],
    legends: [
      { name: '선동열', position: '투수', description: '불멸의 에이스, 국민투수' },
      { name: '이종범', position: '외야수', description: '안타 제조기' },
      { name: '김성한', position: '내야수', description: '전설의 유격수' }
    ],
    history: {
      founded: '1982년 (해태 타이거즈)',
      championships: 11,
      recentAchievements: ['2024 한국시리즈 우승', '2017 한국시리즈 우승'],
      majorEvents: ['1980년대 황금기 (5연패)', '2024 한국시리즈 우승']
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
    stadium: '잠실야구장',
    cheerSongUrl: 'https://www.youtube.com/watch?v=GqXlXm9WJQM',
    uniformStyle: '네이비 & 레드 클래식',
    fashion: '단정하고 정통적인 명문가 스타일. 네이비 블루 체크 패턴',
    meme: '역전의 명가! 9회말 두산의 전설',
    description: '명문 구단의 자부심과 역전 DNA',
    vibe: '차분하고 클래식한 분위기. 명문가의 품격',
    keywords: ['명문', '역전', '클래식', '전통', '잠실', '안정감', '프라이드'],
    starPlayers: [
      { name: '양의지', position: '포수', description: '베테랑 주장, 리더십' },
      { name: '김재환', position: '내야수', description: '중심 타자' },
      { name: '최원준', position: '투수', description: '에이스 우완' }
    ],
    legends: [
      { name: '김동주', position: '투수', description: '전설의 에이스' },
      { name: '박철순', position: '내야수', description: '미스터 베어스' },
      { name: '김재호', position: '외야수', description: '홈런왕' }
    ],
    history: {
      founded: '1982년 (OB 베어스)',
      championships: 6,
      recentAchievements: ['2019-2020 연속 준우승', '2016 한국시리즈 우승'],
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
    cheerSongUrl: 'https://www.youtube.com/watch?v=example-ssg',
    uniformStyle: '레드 & 화이트 럭셔리',
    fashion: '럭셔리한 레드 컬러. 프리미엄 느낌의 세련된 디자인',
    meme: '2022 우승! 돈맥이 철철 흐르는 부자 구단',
    description: '프리미엄 야구의 정수, 신흥 강호',
    vibe: '세련되고 럭셔리한 분위기. 프리미엄 야구',
    keywords: ['우승', '럭셔리', '프리미엄', '인천', '부자', '세련', '신흥'],
    starPlayers: [
      { name: '최정', position: '내야수', description: '국가대표 주장, 홈런왕' },
      { name: '김광현', position: '투수', description: '에이스, 메이저리거' },
      { name: '추신수', position: '외야수', description: '레전드 메이저리거' }
    ],
    legends: [
      { name: '박재홍', position: '내야수', description: 'SK 시절 전설' },
      { name: '김광현', position: '투수', description: '현역 레전드' },
      { name: '최정', position: '내야수', description: '현역 레전드' }
    ],
    history: {
      founded: '2000년 (SK 와이번스), 2021년 SSG 인수',
      championships: 5,
      recentAchievements: ['2022 한국시리즈 우승', '2021 정규시즌 우승'],
      majorEvents: ['2007-2010 4연패', '2018 한국시리즈 우승', '2022 한국시리즈 우승']
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
    cheerSongUrl: 'https://www.youtube.com/watch?v=example-kt',
    uniformStyle: '블랙 & 레드 모던',
    fashion: '세련된 블랙 컬러로 시크함 폭발. 마법사 컨셉의 판타지 무드',
    meme: '신생팀의 기적! 2021 한국시리즈 우승',
    description: '새로운 역사를 쓰는 마법사들',
    vibe: '쿨하고 모던한 분위기. 젊은 에너지',
    keywords: ['신생', '마법', '우승', '수원', '블랙', '쿨함', '모던'],
    starPlayers: [
      { name: '강백호', position: '외야수', description: '4번 타자, 파워 히터' },
      { name: '엄상백', position: '투수', description: '에이스 좌완' },
      { name: '김민혁', position: '내야수', description: '천재 유격수' }
    ],
    legends: [
      { name: '박경수', position: '투수', description: '창단 멤버, 에이스' },
      { name: '황재균', position: '내야수', description: '초대 주장' }
    ],
    history: {
      founded: '2013년',
      championships: 1,
      recentAchievements: ['2021 한국시리즈 우승', '2024 정규시즌 2위'],
      majorEvents: ['2015년 첫 포스트시즌', '2021 한국시리즈 우승']
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
    cheerSongUrl: 'https://www.youtube.com/watch?v=example-samsung',
    uniformStyle: '블루 & 화이트 킹',
    fashion: '정통 블루 컬러의 왕자 스타일. 라이온 킹의 위엄',
    meme: '한국시리즈 최다 우승(8회)! 대구의 자부심',
    description: '전통의 명가, 사자왕의 품격',
    vibe: '전통과 품격의 분위기. 명문가의 자부심',
    keywords: ['명가', '우승', '사자', '대구', '전통', '품격', '블루'],
    starPlayers: [
      { name: '구자욱', position: '외야수', description: '프랜차이즈 스타' },
      { name: '원태인', position: '투수', description: '에이스 우완' },
      { name: '김헌곤', position: '외야수', description: '리드오프' }
    ],
    legends: [
      { name: '이승엽', position: '내야수', description: '아시아 홈런왕' },
      { name: '양준혁', position: '외야수', description: '미스터 삼성' },
      { name: '진갑용', position: '투수', description: '전설의 에이스' }
    ],
    history: {
      founded: '1982년',
      championships: 8,
      recentAchievements: ['2014 한국시리즈 우승', '2012-2014 3연패'],
      majorEvents: ['2002-2006 5연패', '2011-2014 4연패', '통산 최다 우승']
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
    cheerSongUrl: 'https://www.youtube.com/watch?v=example-nc',
    uniformStyle: '네이비 블루 & 골드',
    fashion: '시원한 네이비 블루. 공룡 테마의 파워풀한 느낌',
    meme: '창원의 자부심! 열정적인 경상도 응원 문화',
    description: '공룡처럼 강력한 파워와 끈기',
    vibe: '열정적이고 파워풀한 분위기. 경상도 특유의 끈기',
    keywords: ['공룡', '파워', '창원', '경상도', '열정', '끈기', '블루'],
    starPlayers: [
      { name: '박민우', position: '내야수', description: '주장, 리더십' },
      { name: '손아섭', position: '투수', description: '에이스 좌완' },
      { name: '서호철', position: '외야수', description: '파워 히터' }
    ],
    legends: [
      { name: '이호준', position: '내야수', description: '초대 주장' },
      { name: '에릭 테임즈', position: '외야수', description: '전설의 용병' }
    ],
    history: {
      founded: '2011년',
      championships: 0,
      recentAchievements: ['2020 정규시즌 우승', '2019 준우승'],
      majorEvents: ['2015년 첫 포스트시즌', '2020 정규시즌 우승']
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
    cheerSongUrl: 'https://www.youtube.com/watch?v=example-kiwoom',
    uniformStyle: '버건디 & 골드 히어로',
    fashion: '고급스러운 버건디 컬러. 히어로 컨셉의 카리스마',
    meme: '고척돔의 히어로들! 실내 구장의 쾌적함',
    description: '영웅들의 도시, 서울의 프라이드',
    vibe: '카리스마 있고 고급스러운 분위기. 실내 구장의 쾌적함',
    keywords: ['히어로', '버건디', '고척', '실내', '서울', '카리스마', '고급'],
    starPlayers: [
      { name: '이정후', position: '외야수', description: '메이저리거, 프랜차이즈 스타' },
      { name: '송성문', position: '외야수', description: '중심 타자' },
      { name: '후라도', position: '투수', description: '에이스 외국인' }
    ],
    legends: [
      { name: '박병호', position: '내야수', description: '홈런왕' },
      { name: '이정후', position: '외야수', description: '현역 레전드' }
    ],
    history: {
      founded: '2008년 (넥센 히어로즈)',
      championships: 0,
      recentAchievements: ['2019 준우승', '2018 정규시즌 우승'],
      majorEvents: ['2018 정규시즌 우승', '2019 한국시리즈 준우승']
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
    stadium: '사직야구장',
    cheerSongUrl: 'https://www.youtube.com/watch?v=example-lotte',
    uniformStyle: '네이비 & 레드 클래식',
    fashion: '부산 감성 네이비. 바다를 닮은 시원한 블루',
    meme: '부산의 자부심! 우승은 못 해도 팬심은 1등',
    description: '영원한 부산의 심장, 최고의 팬심',
    vibe: '열정적이고 충성스러운 분위기. 부산 지역 자부심',
    keywords: ['부산', '팬심', '사직', '열정', '네이비', '바다', '애정'],
    starPlayers: [
      { name: '전준우', position: '외야수', description: '프랜차이즈 스타' },
      { name: '박세웅', position: '투수', description: '에이스 좌완' },
      { name: '나균안', position: '외야수', description: '리드오프' }
    ],
    legends: [
      { name: '최동원', position: '투수', description: '불멸의 에이스' },
      { name: '이대호', position: '내야수', description: '국민타자' },
      { name: '손민한', position: '외야수', description: '미스터 롯데' }
    ],
    history: {
      founded: '1982년',
      championships: 2,
      recentAchievements: ['2017 준우승', '1992 한국시리즈 우승'],
      majorEvents: ['1984 한국시리즈 우승', '1992 한국시리즈 우승', '최고의 팬심']
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
    stadium: '대전 한화생명 이글스파크',
    cheerSongUrl: 'https://www.youtube.com/watch?v=example-hanwha',
    uniformStyle: '오렌지 & 블랙 파워',
    fashion: '강렬한 오렌지 컬러. 독수리의 날카로움',
    meme: '해탈의 경지! 고통을 즐기는 팬들의 열정',
    description: '인내심의 끝은 승리. 기다림의 미학',
    vibe: '끈기 있고 인내심 강한 분위기. 해탈의 경지',
    keywords: ['해탈', '인내', '대전', '오렌지', '끈기', '열정', '독수리'],
    starPlayers: [
      { name: '노시환', position: '내야수', description: '천재 타자' },
      { name: '문동주', position: '투수', description: '에이스 우완' },
      { name: '채은성', position: '내야수', description: '주장' }
    ],
    legends: [
      { name: '송진우', position: '투수', description: '전설의 에이스' },
      { name: '김태균', position: '내야수', description: '홈런왕' },
      { name: '정민철', position: '내야수', description: '미스터 한화' }
    ],
    history: {
      founded: '1986년 (빙그레 이글스)',
      championships: 1,
      recentAchievements: ['1999 한국시리즈 우승', '2006-2007 준우승'],
      majorEvents: ['1999 한국시리즈 우승', '2000년대 초반 전성기']
    }
  }
];
