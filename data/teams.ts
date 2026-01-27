import { KBOTeam } from '@/types';

export const kboTeams: KBOTeam[] = [
  // 🐻 두산 베어스 - 먹산
  {
    id: 'doosan',
    name: '두산 베어스',
    englishName: 'Doosan Bears',
    color: '#131F3E',
    colorScheme: 'cool',
    mascot: '베어스 🐻',
    logo: '🐻',
    teamPhoto: '/teamphoto/doosan.png',  // 누끼 제거된 팀 사진
    stadium: '서울 잠실야구장',
    homeCity: '서울 (1루)',
    cheerSongUrl: 'https://www.youtube.com/watch?v=MvwELezoZy4',
    uniformStyle: '네이비 & 화이트 & 핑크',
    fashion: '깔끔하고 단단한 느낌. 유니폼 핏이 좋기로 유명함',
    meme: '🍔 야구보다 먹방? 아니, 먹으면서 이긴다! 압도적인 여성 팬 비율과 잠실 맛집 탐방러! 미라클(좀비) DNA로 끝까지 물고 늘어진다!',
    description: '5회 클리닝 타임에도 푸드트럭 줄이 안 줄어듦. "야구는 거들 뿐, 우린 먹으러 왔다." 하지만 지고 있으면 눈빛이 변하는 승부사들.',
    vibe: '화려하진 않아도 기본기가 탄탄함. 지고 있어도 역전할 것 같은 믿음(미라클). 잠실구장 매출의 70%는 두산 팬이 책임진다.',
    keywords: ['먹산', '허슬두', '미라클', '얼빠생성소', '통삼겹', '여자팬많음'],
    starPlayers: [
      { name: '양의지', position: '포수', description: '곰의 탈을 쓴 여우. 앉아만 있어도 투수 평자점(ERA)이 내려가는 마법사. 먹방 지분 1위.' },
      { name: '곽빈', position: '투수', description: '국가대표 우완 에이스. 긁히는 날엔 아무도 못 건드림.' },
      { name: '김택연', position: '투수', description: '"형들 비켜봐요." 19세에 마무리 접수한 돌직구 괴물.' }
    ],
    legends: [
      { name: '박철순', position: '투수', description: '불사조, 영구결번 21.' },
      { name: '김동주', position: '내야수', description: '두목곰, 잠실 장외 홈런의 전설.' },
      { name: '허경민', position: '내야수', description: '(팬들의 아픈 손가락..) 영원했던 3루수.' }
    ],
    history: {
      founded: '1982년 (OB 베어스)',
      championships: 6,
      recentAchievements: ['2015-2021 7년 연속 KS 진출 (왕조)', '2016 한국시리즈 우승'],
      majorEvents: ['1982 원년 우승', '1995 통합 우승', '2015 미라클 두산']
    },
    // 신규 정보
    officialWebsite: 'https://www.doosanbears.com/',
    ticketUrl: 'https://www.doosanbears.com/ticket/reserve',
    ticketPlatform: '공식 홈페이지 + 인터파크 티켓',
    transportation: {
      subway: {
        line: '2호선/9호선',
        station: '종합운동장역',
        exit: '5번/6번 출구',
        walkTime: '도보 3분'
      },
      parking: '주차 가능 (유료, 경기 당일 혼잡)'
    },
    seatPrices: {
      premium: '35,000원',
      table: '30,000원',
      infield: '14,000원',
      outfield: '8,000원'
    },
    personality: {
      keywords: ['역전', '끈기', '미라클', '여성팬'],
      tip: '💡 지고 있어도 끝까지 보는 재미! 9회말 역전극 DNA',
      bestFor: '드라마틱한 전개를 좋아하는 사람'
    }
  },

  // 🐯 KIA 타이거즈
  {
    id: 'kia',
    name: 'KIA 타이거즈',
    englishName: 'KIA Tigers',
    color: '#EA0029',
    colorScheme: 'warm',
    mascot: '호랑이 🐯',
    logo: '🐯',
    teamPhoto: '/teamphoto/kia.png',
    stadium: '광주-기아 챔피언스필드',
    homeCity: '광주',
    cheerSongUrl: 'https://www.youtube.com/watch?v=dudVNSG9foc',
    uniformStyle: '블러디 레드 & 미드나잇 블랙',
    fashion: '호랑이의 맹렬함과 검빨 유니폼의 위압감',
    meme: '🐯 아따, 우승 DNA는 못 속인당께! 챔피언스필드는 거대한 노래방! 떼창의 전율! 압도적 1강! 호랑이의 발톱을 확인해봐!',
    description: '2024 우승 후 팬들의 자부심이 하늘을 찌름. 챔필 매진은 기본, 원정석까지 점령하는 화력.',
    vibe: '"우승 아니면 실패." 자부심이 하늘을 찌르는 2024 챔피언의 위엄. 라인업 송의 웅장함에 전율.',
    keywords: ['최다우승', '남행열차', '김도영보유국', '삐끼삐끼', '챔필', '광주'],
    starPlayers: [
      { name: '김도영', position: '내야수', description: '제2의 이종범. 타석에 서면 기대감 MAX. 유니폼 품절남.' },
      { name: '양현종', position: '투수', description: '대투수. 기아 타이거즈 그 자체.' },
      { name: '정해영', position: '투수', description: '타이거즈의 뒷문을 책임지는 최연소 세이브왕.' }
    ],
    legends: [
      { name: '선동열', position: '투수', description: '무등산 폭격기, 국보급 투수.' },
      { name: '이종범', position: '외야수', description: '바람의 아들, 야구 천재.' },
      { name: '김성한', position: '내야수', description: '오리궁뎅이 타법.' }
    ],
    history: {
      founded: '1982년 (해태 타이거즈)',
      championships: 12,
      recentAchievements: ['2024 한국시리즈 우승', '2017 한국시리즈 우승'],
      majorEvents: ['최다 우승 (12회)', '1980년대 황금기 5연패', '2024 우승']
    },
    // 신규 정보
    officialWebsite: 'https://www.tigers.co.kr/',
    ticketUrl: 'https://ticketlink.co.kr/',
    ticketPlatform: '티켓링크',
    transportation: {
      train: {
        station: '광주역 / 광주송정역',
        note: '지하철 없음 / 버스·택시'
      },
      parking: '주차 가능 (매우 넓음)'
    },
    seatPrices: {
      premium: '32,000원',
      table: '27,000원',
      infield: '13,000원',
      outfield: '7,000원'
    },
    personality: {
      keywords: ['전통', '우승', '자부심', '챔피언'],
      tip: '💡 최다 우승팀의 자부심! 분위기 최고, 응원 문화 끝판왕',
      bestFor: '승리의 짜릿함과 전통을 중시하는 사람'
    }
  },

  // 🦅 한화 이글스
  {
    id: 'hanwha',
    name: '한화 이글스',
    englishName: 'Hanwha Eagles',
    color: '#FF6600',
    colorScheme: 'warm',
    mascot: '독수리 🦅',
    logo: '🦅',
    teamPhoto: '/teamphoto/hanwha.png',
    stadium: '대전 한화생명 이글스파크',
    homeCity: '대전',
    cheerSongUrl: 'https://www.youtube.com/watch?v=ucNR9zLqmDs',
    uniformStyle: '다이너마이트 오렌지',
    fashion: '폭발적인 화력. 강렬한 오렌지, 멀리서도 눈에 확 띔',
    meme: '💣 보살은 죽었다. 이제는 슈퍼팀이다! 류현진-강백호-노시환! 꿈의 라인업! 새 구장에서 펼쳐지는 오렌지빛 축제!',
    description: '2026년 스토브리그 승자. 강백호 영입으로 "우승 아니면 실패"라는 비장함 감돎. 성심당 빵 봉투 들고 야구장 가는 게 국룰.',
    vibe: '보살 팬은 옛말. 이제는 "성적"을 내놓으라 외치는 성난 독수리들. 2026년 가장 핫한 팀.',
    keywords: ['대전신구장', '강백호영입', '슈퍼팀', '나는행복합니다', '성심당', '대전'],
    starPlayers: [
      { name: '강백호', position: '내야수/지명', description: '[NEW] 2026 FA 최대어, 대전의 새로운 아이돌.' },
      { name: '류현진', position: '투수', description: '코리안 몬스터. 등판일은 대전 휴일 선포급.' },
      { name: '노시환', position: '내야수', description: '한화의 4번 타자. 거포 본능.' }
    ],
    legends: [
      { name: '송진우', position: '투수', description: '회장님, 통산 최다승/최다이닝.' },
      { name: '정민철', position: '투수', description: '이글스의 영구결번 에이스.' },
      { name: '장종훈', position: '내야수', description: '연습생 신화.' }
    ],
    history: {
      founded: '1986년 (빙그레 이글스)',
      championships: 1,
      recentAchievements: ['1999 우승 이후 27년째 도전 중', '2025 신구장 개장'],
      majorEvents: ['1999 한국시리즈 우승', 'V2를 향한 27년의 기다림', '2026 우승 도전']
    },
    // 신규 정보
    officialWebsite: 'https://www.hanwhaeagles.co.kr/',
    ticketUrl: 'https://ticketlink.co.kr/',
    ticketPlatform: '티켓링크',
    transportation: {
      subway: {
        line: '대전 1호선',
        station: '중구청역',
        exit: '1번 출구',
        walkTime: '도보 20분 이상 (버스 권장)'
      },
      parking: '주차 가능 (신구장 넓음)'
    },
    seatPrices: {
      premium: '30,000원',
      table: '25,000원',
      infield: '12,000원',
      outfield: '7,000원'
    },
    personality: {
      keywords: ['의리', '인내', '슈퍼팀', '신구장'],
      tip: '💡 27년 기다린 의리파! 2026년 우승 가능성 최고',
      bestFor: '끝까지 함께하는 의리와 믿음을 중시하는 사람'
    }
  },

  // 🦁 삼성 라이온즈
  {
    id: 'samsung',
    name: '삼성 라이온즈',
    englishName: 'Samsung Lions',
    color: '#074CA1',
    colorScheme: 'cool',
    mascot: '사자 🦁',
    logo: '🦁',
    teamPhoto: '/teamphoto/samsung.png',
    stadium: '대구 삼성 라이온즈파크',
    homeCity: '대구',
    cheerSongUrl: 'https://www.youtube.com/watch?v=euO5P5XtXF0',
    uniformStyle: '로얄 블루 & 실버',
    fashion: '전통의 명가다운 품격과 차가운 승부사 기질',
    meme: '👑 클래식은 영원하다, 왕조의 품격! 엘도라도가 울려 퍼지면 게임 끝! 대구의 더위보다 뜨거운 라팍의 열기!',
    description: '"왕조 부활"이라는 단어는 금기어(말하면 부정 탐). 젊은 사자(Young Lions)들의 패기가 넘침. 스케치북 응원의 원조.',
    vibe: '흥분하지 않는 귀족. 하지만 "약팀" 취급받으면 참지 않음. 푸른 피가 흐르는 대구의 심장.',
    keywords: ['왕조', '엘도라도', '으쌰라으쌰', '푸른피', '라팍', '대구'],
    starPlayers: [
      { name: '구자욱', position: '외야수', description: '삼성의 심장. 잘생겼는데 야구도 잘함. 캡틴 구.' },
      { name: '원태인', position: '투수', description: '대구의 아들. 푸른 피의 에이스.' },
      { name: '김영웅', position: '내야수', description: '난세의 영웅. 거포 유격수/3루수 자원.' }
    ],
    legends: [
      { name: '이승엽', position: '내야수', description: '국민타자, 라이온 킹.' },
      { name: '양준혁', position: '외야수', description: '위풍당당, 만세 타법.' },
      { name: '오승환', position: '투수', description: '끝판대장, 돌부처.' }
    ],
    history: {
      founded: '1982년 (원년)',
      championships: 8,
      recentAchievements: ['2011-2014 통합 4연패 왕조', '2014 한국시리즈 우승'],
      majorEvents: ['2002-2006 5연패', 'KBO 최초 통산 3000승', '8회 우승']
    },
    // 신규 정보
    officialWebsite: 'https://www.samsunglions.com/',
    ticketUrl: 'https://ticketlink.co.kr/',
    ticketPlatform: '티켓링크',
    transportation: {
      subway: {
        line: '대구 2호선',
        station: '대공원역',
        exit: '4번/5번 출구',
        walkTime: '도보 1분 (역 바로 앞)'
      },
      parking: '주차 가능'
    },
    seatPrices: {
      premium: '28,000원',
      infield: '12,000원',
      outfield: '7,000원'
    },
    personality: {
      keywords: ['전통', '명문', '왕조', '자존심'],
      tip: '💡 8회 우승 명문의 품격! 엘도라도의 영광',
      bestFor: '전통과 근본을 중시하는 사람'
    }
  },

  // 🌟 LG 트윈스
  {
    id: 'lg',
    name: 'LG 트윈스',
    englishName: 'LG Twins',
    color: '#C30452',
    colorScheme: 'warm',
    mascot: '트윈스 ⚾',
    logo: '⚾',
    teamPhoto: '/teamphoto/lg.png',
    stadium: '서울 잠실야구장',
    homeCity: '서울 (3루)',
    cheerSongUrl: 'https://www.youtube.com/watch?v=xr6wPZxyhxI',
    uniformStyle: '핀스트라이프 & 블랙',
    fashion: '도시적이고 세련된 서울깍쟁이 느낌. 줄무늬 유니폼의 원조',
    meme: '🏙️ 서울의 자존심, 세련된 무적 LG! 유광잠바 입고 가을 야구 접수한다! 잠실을 지배하는 압도적인 데시벨!',
    description: '2025 우승으로 "디펜딩 챔피언"의 여유가 생김. 팬들의 목소리가 KBO에서 가장 큼. 공격적인 응원 스타일.',
    vibe: '신바람이 불면 아무도 못 말린다. 서울의 진정한 주인. 선수들과 팬들이 어깨동무하고 "서울의 찬가" 부름.',
    keywords: ['서울의주인', '무적LG', '유광잠바', '신바람야구', '핀스트라이프', '서울'],
    starPlayers: [
      { name: '김현수', position: '외야수', description: '타격 기계. 맹구. 캡틴의 품격.' },
      { name: '홍창기', position: '외야수', description: '출루 머신. 눈 야구의 신.' },
      { name: '박해민', position: '외야수', description: '수비 요정. 잠실 바닥을 지배하는 람보르미니.' }
    ],
    legends: [
      { name: '이병규', position: '외야수', description: '적토마, 라뱅.' },
      { name: '박용택', position: '외야수', description: '팬 사랑 1위, 영구결번 33.' },
      { name: '김용수', position: '투수', description: '노송.' }
    ],
    history: {
      founded: '1982년 (MBC 청룡)',
      championships: 4,
      recentAchievements: ['2025 한국시리즈 우승', '2023 한국시리즈 우승'],
      majorEvents: ['1990 한국시리즈 우승', '1994 한국시리즈 우승', '2025 디펜딩 챔피언']
    },
    // 신규 정보
    officialWebsite: 'https://www.lgtwins.com/',
    ticketUrl: 'https://ticketlink.co.kr/',
    ticketPlatform: '티켓링크',
    transportation: {
      subway: {
        line: '2호선/9호선',
        station: '종합운동장역',
        exit: '5번/6번 출구',
        walkTime: '도보 3분'
      },
      parking: '주차 가능 (유료, 경기 당일 혼잡)'
    },
    seatPrices: {
      premium: '35,000원',
      table: '30,000원',
      infield: '14,000원',
      outfield: '8,000원'
    },
    personality: {
      keywords: ['힙', '트렌디', '서울', '인싸'],
      tip: '💡 서울의 인싸 야구! 2025 우승팀의 위엄',
      bestFor: '트렌디하고 세련된 것을 좋아하는 사람'
    }
  },

  // ☄️ 키움 히어로즈
  {
    id: 'kiwoom',
    name: '키움 히어로즈',
    englishName: 'Kiwoom Heroes',
    color: '#820024',
    colorScheme: 'warm',
    mascot: '히어로 🦸',
    logo: '🦸‍♂️',
    teamPhoto: '/teamphoto/kiwoom.png',
    stadium: '고척 스카이돔',
    homeCity: '서울 (고척)',
    cheerSongUrl: 'https://www.youtube.com/watch?v=4YNAvO63mVA',
    uniformStyle: '버건디 & 실버',
    fashion: '고급스러운 와인빛, 도전정신',
    meme: '💎 MLB 사관학교! 원석을 보석으로! 우리 애(김혜성) 다저스 갔다! 젊은 영웅들의 성장 드라마 맛집!',
    description: '주축 선수가 떠나도(MLB/FA) 끊임없이 새 얼굴이 등장하는 "화수분". 팬들은 육아일기 쓰는 심정으로 응원함. 고척돔이라 쾌적함 1위.',
    vibe: '네이밍 스폰서 구단의 반란. 돈이 없지 실력이 없냐? 돔구장 효과로 응원 소리가 천장 치고 울려서 인원수 대비 엄청 시끄러움.',
    keywords: ['돔구장', '화수분', 'MLB사관학교', '김혜성LAD', '영웅군단', '서울'],
    starPlayers: [
      { name: '송성문', position: '내야수', description: '가을의 사나이. 히어로즈의 새로운 심장.' },
      { name: '이주형', position: '외야수', description: '"포스트 이정후". 천재적인 타격 재능.' },
      { name: '김건희', position: '투수/타자', description: '투타 겸업의 로망을 실현하는 유망주.' }
    ],
    legends: [
      { name: '김하성', position: 'MLB 진출', description: 'SD 골드글러브 내야수, 어썸 킴.' },
      { name: '이정후', position: 'MLB 진출', description: 'SF 바람의 손자.' },
      { name: '김혜성', position: 'MLB 진출', description: '[NEW] LAD 다저스 2026 입단.' }
    ],
    history: {
      founded: '2008년',
      championships: 0,
      recentAchievements: ['준우승 3회 (준우승 맛집)', '항상 언더독이지만 상위권 위협'],
      majorEvents: ['2018 정규시즌 우승', '2019 한국시리즈 준우승', 'MLB 수출 기업']
    },
    // 신규 정보
    officialWebsite: 'https://www.heroesbaseball.co.kr/',
    ticketUrl: 'https://www.interpark.com/',
    ticketPlatform: '인터파크 티켓',
    transportation: {
      subway: {
        line: '1호선',
        station: '구일역',
        exit: '2번 출구',
        walkTime: '도보 5분'
      },
      parking: '주차 가능 (돔구장 지하주차장)'
    },
    seatPrices: {
      premium: '30,000원',
      box: '25,000원',
      infield: '12,000원',
      outfield: '7,000원'
    },
    personality: {
      keywords: ['유망주', 'MLB', '성장', '미래'],
      tip: '💡 MLB 사관학교! 유망주 크는 맛 최고',
      bestFor: '성장형 콘텐츠와 미래 가능성을 좋아하는 사람'
    }
  },

  // ⚓ 롯데 자이언츠
  {
    id: 'lotte',
    name: '롯데 자이언츠',
    englishName: 'Lotte Giants',
    color: '#002955',
    colorScheme: 'cool',
    mascot: '자이언츠 🏔️',
    logo: '⚾',
    teamPhoto: '/teamphoto/lotte.png',
    stadium: '부산 사직야구장',
    homeCity: '부산',
    cheerSongUrl: 'https://www.youtube.com/watch?v=n5FY9EBaGWs',
    uniformStyle: '네이비 & 샴페인 골드',
    fashion: '항구 도시의 자존심. 클래식한 디자인, 동백 유니폼(빨강)이 인기',
    meme: '🌊 마! 살아있네! 부산의 낭만 야구! 사직 노래방 오픈! 봉다리 쓰고 미쳐보자! 성적? 상관없다! 우린 기세로 산다!',
    description: '지구상에서 가장 열정적인 팬덤. 이기면 부산 축제, 지면... (말잇못). 최근 윤동희 등 얼짱 선수들 덕에 여성 팬 급증.',
    vibe: '"봄데(봄에만 잘함)"는 잊어라. 팬들의 함성은 메이저리그급. 부산 갈매기 떼창 소리 위성에서도 들림.',
    keywords: ['부산갈매기', '마!', '봉다리', '윤동희얼빠', '사직', '부산'],
    starPlayers: [
      { name: '윤동희', position: '외야수', description: '사직 아이돌. 야구 실력 + 외모 겸비.' },
      { name: '전준우', position: '외야수/지명', description: '월드 스타. 롯데의 영원한 캡틴.' },
      { name: '박세웅', position: '투수', description: '안경 에이스. 비 오면 더 잘 던지는 레인맨.' }
    ],
    legends: [
      { name: '최동원', position: '투수', description: '무쇠팔, 부산의 영웅.' },
      { name: '이대호', position: '내야수', description: '조선의 4번 타자.' },
      { name: '손아섭', position: '외야수', description: '자이언츠의 악바리 (현 NC).' }
    ],
    history: {
      founded: '1982년 (원년)',
      championships: 2,
      recentAchievements: ['1992년 마지막 우승', '응답하라 1992...'],
      majorEvents: ['1984 한국시리즈 우승', '1992 한국시리즈 우승', '최고의 팬심']
    },
    // 신규 정보
    officialWebsite: 'https://www.giantsclub.com/',
    ticketUrl: 'https://www.giantsclub.com/',
    ticketPlatform: '자체 예매 시스템',
    transportation: {
      subway: {
        line: '부산 3호선',
        station: '종합운동장역',
        exit: '9번 출구',
        walkTime: '도보 10분'
      },
      parking: '주차 가능 (유료)'
    },
    seatPrices: {
      premium: '27,000원',
      infield: '12,000원',
      outfield: '6,000원'
    },
    personality: {
      keywords: ['낭만', '열정', '부산', '팬심'],
      tip: '💡 부산의 심장! 사직 노래방 분위기 최고',
      bestFor: '열정적이고 낭만적인 야구를 좋아하는 사람'
    }
  },

  // 🛸 SSG 랜더스
  {
    id: 'ssg',
    name: 'SSG 랜더스',
    englishName: 'SSG Landers',
    color: '#CE0E2D',
    colorScheme: 'warm',
    mascot: '랜더스 🦁',
    logo: '🦁',
    teamPhoto: '/teamphoto/ssg.png',
    stadium: '인천 SSG 랜더스필드',
    homeCity: '인천',
    cheerSongUrl: 'https://www.youtube.com/watch?v=E39BlC99Tck',
    uniformStyle: '카리스마틱 레드 & 화이트',
    fashion: '열정과 깔끔함. 스타벅스 콜라보 유니폼 인기',
    meme: '🚀 세상에 없던 야구! 인천 상륙 작전! 홈런 공장장 최정과 함께라면 두렵지 않아! 야구장에서 스벅 마시며 홈런 쇼 관람!',
    description: '스포테인먼트(스포츠+엔터)의 끝판왕. 이마트/노브랜드 버프. 홈런으로 시작해서 홈런으로 끝나는 상남자 야구.',
    vibe: '인천 야구의 자존심. 맛있는 거 먹으러 야구장 간다. 연안부두 떼창은 인천 아재들의 눈물 버튼.',
    keywords: ['최정랜더스', '홈런군단', '스타벅스', '연안부두', '이마트', '인천'],
    starPlayers: [
      { name: '최정', position: '내야수', description: '리빙 레전드. KBO 통산 홈런 1위. 동상 건립 추진 중.' },
      { name: '김광현', position: '투수', description: '영원한 에이스. 미소 천사.' },
      { name: '박성한', position: '내야수', description: '랜더스의 소금. 공수주 완벽한 유격수.' }
    ],
    legends: [
      { name: '박경완', position: '포수', description: '포수 조련사.' },
      { name: '김강민', position: '외야수', description: '짐승 수비 (은퇴).' },
      { name: '추신수', position: '외야수', description: '메이저리거의 귀환 (2024 은퇴).' }
    ],
    history: {
      founded: '2000년 (SK) → 2021년 (SSG)',
      championships: 5,
      recentAchievements: ['2022 와이어 투 와이어 통합 우승', '2021 정규시즌 우승'],
      majorEvents: ['2007, 2008, 2010, 2018, 2022 우승 (총 5번 우승)', '2007-2012 6년 연속 한국시리즈', '단기 임팩트 GOAT인 왕조']
    },
    // 신규 정보
    officialWebsite: 'https://www.ssglanders.com/',
    ticketUrl: 'https://ticketlink.co.kr/',
    ticketPlatform: '티켓링크',
    transportation: {
      subway: {
        line: '인천 1호선',
        station: '문학경기장역',
        exit: '1번 출구',
        walkTime: '도보 10~15분'
      },
      parking: '주차 가능 (넓음)'
    },
    seatPrices: {
      premium: '32,000원',
      table: '28,000원',
      infield: '13,000원',
      outfield: '7,000원'
    },
    personality: {
      keywords: ['럭셔리', '홈런', '스타벅스', '부자구단'],
      tip: '💡 홈런 군단! 스타벅스 마시며 시원한 장타',
      bestFor: '화끈한 공격야구와 럭셔리함을 좋아하는 사람'
    }
  },

  // 🦕 NC 다이노스
  {
    id: 'nc',
    name: 'NC 다이노스',
    englishName: 'NC Dinos',
    color: '#315288',
    colorScheme: 'cool',
    mascot: '공룡 🦕',
    logo: '🦕',
    teamPhoto: '/teamphoto/nc.png',
    stadium: '창원 NC파크',
    homeCity: '창원',
    cheerSongUrl: 'https://www.youtube.com/watch?v=-k1QchhdvAc',
    uniformStyle: '마린 블루 & 골드',
    fashion: '바다의 푸른빛과 황금의 영광. 세련된 폰트와 디자인',
    meme: '⚔️ 집행검을 들어라! 거침없이 가자! 데이터 야구의 정수, 스마트한 공룡 군단! 마산 아재의 열정과 최신식 파크의 조화!',
    description: '게임 회사 구단답게 이벤트가 화려함. 팬덤은 조용하지만 화나면 무서움(마산 아재). 뷰가 제일 좋은 야구장 보유.',
    vibe: '정의, 명예, 존중(Justice, Honor, Respect). 근데 팬들은 "단디 해라!" 하나면 통함. IT 기업 구단답게 데이터를 중시함.',
    keywords: ['집행검', '단디쎄리', '마산아재', '창원NC파크', 'IT야구', '창원'],
    starPlayers: [
      { name: '박건우', position: '외야수', description: '안타 제조기. 창원 아이돌. 꾸준함의 대명사.' },
      { name: '김주원', position: '내야수', description: '스위치 히터 유격수. 국대 주전.' },
      { name: '김형준', position: '포수', description: '공룡 군단의 안방마님. 한 방 있는 포수.' }
    ],
    legends: [
      { name: '나성범', position: '외야수', description: '창단 프랜차이즈 (현 KIA).' },
      { name: '에릭 테임즈', position: '내야수', description: 'KBO 폭격기, 신.' },
      { name: '양의지', position: '포수', description: '우승 청부사 (현 두산).' }
    ],
    history: {
      founded: '2011년 (9구단)',
      championships: 1,
      recentAchievements: ['2020 통합 우승 (집행검 들어올림)', '2019 준우승'],
      majorEvents: ['2015년 첫 포스트시즌', '2020 정규시즌 우승', '2020 한국시리즈 우승']
    },
    // 신규 정보
    officialWebsite: 'https://www.ncdinos.com/',
    ticketUrl: 'https://www.ncdinos.com/',
    ticketPlatform: '자체 예매 시스템',
    transportation: {
      train: {
        station: '마산역',
        note: '지하철 없음 / 버스·택시'
      },
      bus: {
        station: '마산고속터미널',
        note: '버스·택시'
      },
      parking: '주차 가능 (최신 시설)'
    },
    seatPrices: {
      premium: '29,000원',
      infield: '12,000원',
      outfield: '6,000원'
    },
    personality: {
      keywords: ['세련됨', '데이터', '신생팀', 'IT'],
      tip: '💡 최신 시설의 세련된 야구! 데이터 기반 스마트함',
      bestFor: '세련되고 새로운 것을 좋아하는 사람'
    }
  },

  // 🧙‍♂️ kt wiz
  {
    id: 'kt',
    name: 'KT 위즈',
    englishName: 'KT Wiz',
    color: '#000000',
    colorScheme: 'neutral',
    mascot: '마법사 🧙',
    logo: '🧙‍♂️',
    teamPhoto: '/teamphoto/kt.png',
    stadium: '수원 KT 위즈파크',
    homeCity: '수원',
    cheerSongUrl: 'https://www.youtube.com/watch?v=TiZOu5M3Zdk',
    uniformStyle: '블랙 & 빅토리 레드',
    fashion: '강인함과 마법의 신비로움. 검정색 간지, 마법사 로고',
    meme: '🔮 마법 같은 역전승! 수원 거포 군단! 봄에는 꼴찌, 가을에는 우승? 롤러코스터! 수원 화성처럼 단단한 마법사들의 요새!',
    description: '강백호 이적(한화) 후 "팀 KT"로 똘똘 뭉침. 여름만 되면 승률이 급상승하는 "여름성" 기질.',
    vibe: '10구단의 반란. 마법은 끝나지 않았다. 야구장 앞 진미통닭과 보영만두가 본체라는 설이 있음.',
    keywords: ['여름성', '마법사', '워터페스티벌', '진미통닭', '수원', '롤러코스터'],
    starPlayers: [
      { name: '고영표', position: '투수', description: '체인지업 마스터. 퀄리티 스타트 제조기.' },
      { name: '박영현', position: '투수', description: '돌직구 마무리. 9회 삭제 마법사.' },
      { name: '배정대', position: '외야수', description: '끝내기의 사나이. 위기에 강함.' }
    ],
    legends: [
      { name: '유한준', position: '외야수', description: '소리 없이 강한 남자.' },
      { name: '박경수', position: '내야수', description: '수원 거포, 2루수 수비 장인.' },
      { name: '황재균', position: '내야수', description: '창단 첫 우승의 주역.' }
    ],
    history: {
      founded: '2013년 (10구단, 막내)',
      championships: 1,
      recentAchievements: ['2021 통합 우승', '2024 정규시즌 2위'],
      majorEvents: ['2015년 첫 포스트시즌', '2021 한국시리즈 우승', '신생팀의 기적']
    },
    // 신규 정보
    officialWebsite: 'https://www.ktwiz.co.kr/',
    ticketUrl: 'https://ticketlink.co.kr/',
    ticketPlatform: '티켓링크',
    transportation: {
      subway: {
        line: '1호선',
        station: '화서역 / 수원역',
        exit: '',
        walkTime: '지하철 후 버스 환승 필수'
      },
      parking: '주차 가능'
    },
    seatPrices: {
      premium: '30,000원',
      infield: '12,000원',
      outfield: '7,000원'
    },
    personality: {
      keywords: ['마법', '역전', '언더독', '여름성'],
      tip: '💡 마법 같은 역전극! 롤러코스터 즐기기',
      bestFor: '드라마틱한 반전과 언더독을 응원하는 사람'
    }
  }
];
