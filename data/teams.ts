import { KBOTeam } from '@/types';

export const kboTeams: KBOTeam[] = [
  // 🐻 두산 베어스
  {
    id: 'doosan',
    name: '두산 베어스',
    sponsor: 'Adidas',
    englishName: 'Doosan Bears',
    color: '#131F3E',
    colorScheme: 'cool',
    mascot: '베어스 🐻',
    mascotInfo: {
      name: '철웅이',
      description: '로봇 곰. 귀여움보단 강인함.',
      imageUrl: '/mascot/doosan.png'
    },
    logo: '🐻',
    stadium: '서울 잠실야구장',
    homeCity: '서울',
    foods: [
      { name: '김치말이국수', description: '잠실 명물. 여름철 직관 필수템' },
      { name: '잠실원샷', description: '컵치킨+맥주 일체형' },
      { name: '통삼겹', description: '야구장 삼겹살 파티' }
    ],
    cheerSongUrl: 'https://www.youtube.com/watch?v=MvwELezoZy4',
    uniformStyle: '네이비 & 화이트 & 핑크',
    fashion: '깔끔하고 단단한 느낌',
    meme: '🍔 먹으면서 이긴다! 미라클 DNA!',
    description: '5회 클리닝 타임에도 푸드트럭 줄이 안 줄어듦',
    vibe: '지고 있어도 역전할 것 같은 믿음',
    keywords: ['먹산', '허슬두', '미라클', '김치말이국수'],
    starPlayers: [
      { name: '양의지', position: '포수', description: '곰의 탈을 쓴 여우' },
      { name: '곽빈', position: '투수', description: '국가대표 우완 에이스' },
      { name: '김택연', position: '투수', description: '19세 마무리 괴물' }
    ],
    legends: [
      { name: '박철순', position: '투수', number: 21, description: '불사조, 영구결번 21' },
      { name: '김동주', position: '내야수', number: 18, description: '두목곰' }
    ],
    history: {
      founded: '1982년 (OB 베어스)',
      championships: 6,
      recentAchievements: ['2015-2021 7년 연속 KS 진출', '2016 우승'],
      majorEvents: ['1982 원년 우승', '2015 미라클 두산']
    },
    ticketPlatform: '인터파크 티켓',
    personality: {
      keywords: ['역전', '끈기', '미라클', '여성팬'],
      tip: '💡 먹산의 위엄! 김치말이국수 필수',
      bestFor: '드라마틱한 전개를 좋아하는 사람'
    }
  },

  // 🐯 KIA 타이거즈
  {
    id: 'kia',
    name: 'KIA 타이거즈',
    sponsor: 'IAB Studio',
    englishName: 'KIA Tigers',
    color: '#EA0029',
    colorScheme: 'warm',
    mascot: '호랑이 🐯',
    mascotInfo: {
      name: '호걸이',
      description: 'KBO 마스코트계의 인싸',
      imageUrl: '/mascot/kia.png'
    },
    logo: '🐯',
    stadium: '광주-기아 챔피언스필드',
    homeCity: '광주',
    foods: [
      { name: '크림새우', description: '챔필 스테이션 인기 메뉴' }
    ],
    cheerSongUrl: 'https://www.youtube.com/watch?v=dudVNSG9foc',
    uniformStyle: '블러디 레드 & 미드나잇 블랙',
    fashion: '호랑이의 맹렬함',
    meme: '🐯 우승 DNA는 못 속인당께!',
    description: '2024 우승 후 자부심 하늘을 찌름',
    vibe: '"우승 아니면 실패"',
    keywords: ['최다우승', '남행열차', '크림새우', '김도영'],
    starPlayers: [
      { name: '김도영', position: '내야수', description: '제2의 이종범' },
      { name: '양현종', position: '투수', description: '대투수' }
    ],
    legends: [
      { name: '선동열', position: '투수', number: 18, description: '무등산 폭격기' },
      { name: '이종범', position: '외야수', number: 7, description: '바람의 아들' }
    ],
    history: {
      founded: '1982년 (해태)',
      championships: 12,
      recentAchievements: ['2024 한국시리즈 우승'],
      majorEvents: ['최다 우승 12회', '2024 통합 우승']
    },
    ticketPlatform: '티켓링크',
    personality: {
      keywords: ['전통', '우승', '자부심'],
      tip: '💡 크림새우 오픈런 필수!',
      bestFor: '승리의 짜릿함을 중시하는 사람'
    }
  },

  // 🦅 한화 이글스
  {
    id: 'hanwha',
    name: '한화 이글스',
    sponsor: 'Spyder',
    englishName: 'Hanwha Eagles',
    color: '#FF6600',
    colorScheme: 'warm',
    mascot: '독수리 🦅',
    mascotInfo: {
      name: '수리',
      description: 'KBO 귀여움 원탑',
      imageUrl: '/mascot/hanwha.png'
    },
    logo: '🦅',
    stadium: '대전 베이스볼 드림파크',
    homeCity: '대전',
    foods: [
      { name: '농심가락 떡볶이', description: '대전 구장 근본 메뉴' },
      { name: '성심당 빵', description: '대전 필수템' }
    ],
    cheerSongUrl: 'https://www.youtube.com/watch?v=ucNR9zLqmDs',
    uniformStyle: '다이너마이트 오렌지',
    fashion: '폭발적인 화력',
    meme: '💣 보살은 죽었다. 이제는 슈퍼팀!',
    description: '강백호 영입으로 비장함 감돎',
    vibe: '"성적"을 내놓으라는 성난 독수리들',
    keywords: ['신구장', '강백호', '농심가락', '성심당'],
    starPlayers: [
      { name: '문동주', position: '투수', description: '대전의 왕자' },
      { name: '강백호', position: '내야수', description: '우승 청부사' },
      { name: '류현진', position: '투수', description: '코리안 몬스터' }
    ],
    legends: [
      { name: '송진우', position: '투수', number: 21, description: '회장님' },
      { name: '장종훈', position: '내야수', number: 35, description: '연습생 신화' }
    ],
    history: {
      founded: '1986년 (빙그레)',
      championships: 1,
      recentAchievements: ['1999 우승 이후 도전 중'],
      majorEvents: ['1999 한국시리즈 우승']
    },
    ticketPlatform: '티켓링크',
    personality: {
      keywords: ['의리', '슈퍼팀', '떡볶이'],
      tip: '💡 농심가락 떡볶이 국룰!',
      bestFor: '의리를 중시하는 사람'
    }
  },

  // 🦁 삼성 라이온즈
  {
    id: 'samsung',
    name: '삼성 라이온즈',
    sponsor: 'Under Armour',
    englishName: 'Samsung Lions',
    color: '#074CA1',
    colorScheme: 'cool',
    mascot: '사자 🦁',
    mascotInfo: {
      name: '블레오 패밀리',
      description: '사자 가족',
      imageUrl: '/mascot/samsung.png'
    },
    logo: '🦁',
    stadium: '대구 삼성 라이온즈파크',
    homeCity: '대구',
    foods: [
      { name: '해피치즈스마일', description: '라팍 떡볶이 맛집' }
    ],
    cheerSongUrl: 'https://www.youtube.com/watch?v=euO5P5XtXF0',
    uniformStyle: '로얄 블루 & 실버',
    fashion: '명가다운 품격',
    meme: '👑 클래식은 영원하다!',
    description: '"왕조 부활"',
    vibe: '흥분하지 않는 귀족',
    keywords: ['왕조', '해피치즈스마일', '푸른피', '라팍'],
    starPlayers: [
      { name: '구자욱', position: '외야수', description: '캡틴 구' },
      { name: '원태인', position: '투수', description: '대구의 아들' },
      { name: '최형우', position: '외야수', description: '해결사' }
    ],
    legends: [
      { name: '이승엽', position: '내야수', number: 36, description: '국민타자' },
      { name: '양준혁', position: '외야수', number: 10, description: '위풍당당' }
    ],
    history: {
      founded: '1982년 (원년)',
      championships: 8,
      recentAchievements: ['2011-2014 통합 4연패'],
      majorEvents: ['8회 우승', 'KBO 최초 3000승']
    },
    ticketPlatform: '티켓링크',
    personality: {
      keywords: ['전통', '명문', '해치스'],
      tip: '💡 지하철 내리자마자 라팍!',
      bestFor: '전통을 중시하는 사람'
    }
  },

  // 👯 LG 트윈스
  {
    id: 'lg',
    name: 'LG 트윈스',
    sponsor: 'Pro-Specs',
    englishName: 'LG Twins',
    color: '#C30452',
    colorScheme: 'warm',
    mascot: '트윈스 👯',
    mascotInfo: {
      name: '럭키/스타',
      description: '승리의 요정 쌍둥이',
      imageUrl: '/mascot/lg.png'
    },
    logo: '👯',
    stadium: '서울 잠실야구장',
    homeCity: '서울',
    foods: [
      { name: '김치말이국수', description: '잠실 3루측 명물' },
      { name: '잠실원샷', description: '맥주+치킨 한 손에' }
    ],
    cheerSongUrl: 'https://www.youtube.com/watch?v=xr6wPZxyhxI',
    uniformStyle: '핀스트라이프 & 블랙',
    fashion: '서울깍쟁이 느낌',
    meme: '🏙️ 세련된 무적 LG!',
    description: '2025 우승 디펜딩 챔피언',
    vibe: '신바람이 불면 못 말린다',
    keywords: ['서울의주인', '무적LG', '김말국', '신바람'],
    starPlayers: [
      { name: '홍창기', position: '외야수', description: '출루 머신' },
      { name: '박해민', position: '외야수', description: '수비 요정' },
      { name: '오지환', position: '내야수', description: 'MVP' }
    ],
    legends: [
      { name: '이병규', position: '외야수', number: 9, description: '적토마' },
      { name: '박용택', position: '외야수', number: 33, description: '팬 사랑 1위' }
    ],
    history: {
      founded: '1982년 (MBC 청룡)',
      championships: 5,
      recentAchievements: ['2025 한국시리즈 우승', '2023 우승'],
      majorEvents: ['2025 디펜딩 챔피언']
    },
    ticketPlatform: '티켓링크',
    personality: {
      keywords: ['힙', '트렌디', '김말국'],
      tip: '💡 3루에서 먹는 김치말이국수!',
      bestFor: '트렌디함을 좋아하는 사람'
    }
  },

  // 🦸 키움 히어로즈
  {
    id: 'kiwoom',
    name: '키움 히어로즈',
    sponsor: 'Nike',
    englishName: 'Kiwoom Heroes',
    color: '#820024',
    colorScheme: 'warm',
    mascot: '히어로 🦸',
    mascotInfo: {
      name: '턱돌이',
      description: '턱 챌린지의 원조',
      imageUrl: '/mascot/kiwoom.png'
    },
    logo: '🦸‍♂️',
    stadium: '고척 스카이돔',
    homeCity: '서울',
    foods: [
      { name: '크림새우', description: '고척돔 시그니처' }
    ],
    cheerSongUrl: 'https://www.youtube.com/watch?v=4YNAvO63mVA',
    uniformStyle: '버건디 & 실버',
    fashion: '고급스러운 와인빛',
    meme: '💎 MLB 사관학교!',
    description: '주축 선수가 떠나도 끊임없이 새 얼굴 등장',
    vibe: '돔구장 효과로 응원 소리가 큼',
    keywords: ['돔구장', '크림새우', 'MLB사관학교'],
    starPlayers: [
      { name: '안우진', position: '투수', description: 'KBO 최고 구위' },
      { name: '이주형', position: '외야수', description: '천재 타자' }
    ],
    legends: [
      { name: '강정호', position: '내야수', number: 16, description: '평화왕' },
      { name: '이정후', position: '외야수', number: 51, description: '바람의 손자' }
    ],
    history: {
      founded: '2008년',
      championships: 0,
      recentAchievements: ['준우승 3회'],
      majorEvents: ['2018 정규시즌 우승']
    },
    ticketPlatform: '인터파크 티켓',
    personality: {
      keywords: ['유망주', '쾌적함', '크림새우'],
      tip: '💡 여름엔 시원한 돔구장!',
      bestFor: '쾌적함을 선호하는 사람'
    }
  },

  // 🐦 롯데 자이언츠
  {
    id: 'lotte',
    name: '롯데 자이언츠',
    sponsor: 'Willbe Play',
    englishName: 'Lotte Giants',
    color: '#002955',
    colorScheme: 'cool',
    mascot: '갈매기 🐦',
    mascotInfo: {
      name: '누리/아라',
      description: '부산 갈매기',
      imageUrl: '/mascot/lotte.png'
    },
    logo: '🐦',
    stadium: '부산 사직야구장',
    homeCity: '부산',
    foods: [
      { name: '순대떡볶이', description: '사직 명물' }
    ],
    cheerSongUrl: 'https://www.youtube.com/watch?v=n5FY9EBaGWs',
    uniformStyle: '네이비 & 골드',
    fashion: '항구 도시의 자존심',
    meme: '🌊 마! 살아있네!',
    description: '지구상에서 가장 열정적인 팬덤',
    vibe: '팬들의 함성은 메이저리그급',
    keywords: ['부산갈매기', '마!', '순대떡볶이', '사직'],
    starPlayers: [
      { name: '윤동희', position: '외야수', description: '사직 아이돌' },
      { name: '박세웅', position: '투수', description: '안경 에이스' }
    ],
    legends: [
      { name: '최동원', position: '투수', number: 11, description: '무쇠팔' },
      { name: '이대호', position: '내야수', number: 10, description: '조선의 4번' }
    ],
    history: {
      founded: '1982년 (원년)',
      championships: 2,
      recentAchievements: ['1992년 마지막 우승'],
      majorEvents: ['1984, 1992 우승']
    },
    ticketPlatform: '구단 자체 앱',
    personality: {
      keywords: ['낭만', '열정', '순대떡볶이'],
      tip: '💡 사직 노래방에서 순대떡볶이!',
      bestFor: '열정적인 야구를 좋아하는 사람'
    }
  },

  // 🛸 SSG 랜더스
  {
    id: 'ssg',
    name: 'SSG 랜더스',
    sponsor: 'Dynafit',
    englishName: 'SSG Landers',
    color: '#CE0E2D',
    colorScheme: 'warm',
    mascot: '랜디 🛸',
    mascotInfo: {
      name: '랜디',
      description: '우주선 타고 온 카네코르소',
      imageUrl: '/mascot/ssg.png'
    },
    logo: '🛸',
    stadium: '인천 SSG 랜더스필드',
    homeCity: '인천',
    foods: [
      { name: '크림새우', description: '원조의 품격' },
      { name: '물회', description: '야구장에서 물회' },
      { name: '스타벅스', description: '슬래머 음료' }
    ],
    cheerSongUrl: 'https://www.youtube.com/watch?v=E39BlC99Tck',
    uniformStyle: '레드 & 화이트',
    fashion: '스타벅스 콜라보 유니폼 인기',
    meme: '🚀 인천 상륙 작전!',
    description: '스포테인먼트 끝판왕',
    vibe: '홈런으로 시작해서 홈런으로 끝',
    keywords: ['홈런군단', '스타벅스', '크림새우', '물회'],
    starPlayers: [
      { name: '최정', position: '내야수', description: 'KBO 홈런 1위' },
      { name: '김광현', position: '투수', description: '영원한 에이스' }
    ],
    legends: [
      { name: '박경완', position: '포수', number: 26, description: '포수 조련사' },
      { name: '박정권', position: '내야수', number: 36, description: '가을 거지' }
    ],
    history: {
      founded: '2000년(SK) → 2021년(SSG)',
      championships: 5,
      recentAchievements: ['2022 통합 우승'],
      majorEvents: ['2022 우승', '2007-2010 4연패']
    },
    ticketPlatform: '티켓링크',
    personality: {
      keywords: ['럭셔리', '맛집', '스타벅스'],
      tip: '💡 크림새우+물회 조합!',
      bestFor: '미식과 야구를 동시에 즐기는 사람'
    }
  },

  // 🦕 NC 다이노스
  {
    id: 'nc',
    name: 'NC 다이노스',
    sponsor: 'Reebok',
    englishName: 'NC Dinos',
    color: '#315288',
    colorScheme: 'cool',
    mascot: '공룡 🦕',
    mascotInfo: {
      name: '단디/쎄리',
      description: '근육질 공룡',
      imageUrl: '/mascot/nc.png'
    },
    logo: '🦕',
    stadium: '창원 NC파크',
    homeCity: '창원',
    foods: [
      { name: '알통떡강정', description: 'NC파크 필수 먹거리' },
      { name: '코코호도', description: '간식으로 딱' }
    ],
    cheerSongUrl: 'https://www.youtube.com/watch?v=-k1QchhdvAc',
    uniformStyle: '마린 블루 & 골드',
    fashion: '세련된 디자인',
    meme: '⚔️ 집행검을 들어라!',
    description: '게임 회사 구단답게 이벤트 화려',
    vibe: 'IT 기업답게 데이터 중시',
    keywords: ['집행검', '알통떡강정', 'IT야구'],
    starPlayers: [
      { name: '박민우', position: '내야수', description: 'NC의 심장' },
      { name: '구창모', position: '투수', description: '엔구행' }
    ],
    legends: [
      { name: '나성범', position: '외야수', number: 47, description: '창단 프랜차이즈 스타' },
      { name: '테임즈', position: '내야수', number: 47, description: 'KBO 최고 외인' }
    ],
    history: {
      founded: '2011년 (9구단)',
      championships: 1,
      recentAchievements: ['2020 통합 우승'],
      majorEvents: ['2020 첫 우승']
    },
    ticketPlatform: '구단 자체 앱',
    personality: {
      keywords: ['세련됨', '최신시설', '알통떡강정'],
      tip: '💡 MLB급 구장 뷰!',
      bestFor: '쾌적함을 선호하는 사람'
    }
  },

  // 🧙 KT 위즈
  {
    id: 'kt',
    name: 'KT 위즈',
    sponsor: 'New Balance',
    englishName: 'KT Wiz',
    color: '#000000',
    colorScheme: 'neutral',
    mascot: '마법사 🧙',
    mascotInfo: {
      name: '빅/또리',
      description: '검은색 털뭉치 몬스터',
      imageUrl: '/mascot/kt.png'
    },
    logo: '🧙‍♂️',
    stadium: '수원 KT 위즈파크',
    homeCity: '수원',
    foods: [
      { name: '보영만두', description: '쫄면+군만두 조합' },
      { name: '진미통닭', description: '식어도 맛있는 치킨' }
    ],
    cheerSongUrl: 'https://www.youtube.com/watch?v=TiZOu5M3Zdk',
    uniformStyle: '블랙 & 레드',
    fashion: '검정색 간지',
    meme: '🔮 마법 같은 역전승!',
    description: '강백호 이적 후 "팀 KT"로 똘똘 뭉침',
    vibe: '마법은 끝나지 않았다',
    keywords: ['여름성', '보영만두', '진미통닭', '마법사'],
    starPlayers: [
      { name: '안현민', position: '외야수', description: 'KT의 새 거포' },
      { name: '고영표', position: '투수', description: '국가대표 잠수함' },
      { name: '김현수', position: '외야수', description: '타격 기계' }
    ],
    legends: [
      { name: '박경수', position: '내야수', number: 6, description: '수원 거포' },
      { name: '강백호', position: '내야수', number: 50, description: '천재 타자' }
    ],
    history: {
      founded: '2013년 (10구단)',
      championships: 1,
      recentAchievements: ['2021 통합 우승'],
      majorEvents: ['2021 우승']
    },
    ticketPlatform: '티켓링크',
    personality: {
      keywords: ['마법', '맛집', '보영만두'],
      tip: '💡 보영만두+진미통닭 풀코스!',
      bestFor: '먹거리가 풍성한 직관을 원하는 사람'
    }
  }
];
