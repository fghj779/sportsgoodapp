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
    cheerSongUrl: 'https://www.youtube.com/watch?v=MvwELezoZy4',
    uniformStyle: '네이비 & 화이트 & 핑크',
    fashion: '깔끔하고 단단한 느낌. 유니폼 핏이 좋기로 유명함',
    meme: '🍔 야구보다 먹방? 아니, 먹으면서 이긴다! 미라클 DNA로 끝까지 물고 늘어진다!',
    description: '5회 클리닝 타임에도 푸드트럭 줄이 안 줄어듦. "야구는 거들 뿐, 우린 먹으러 왔다."',
    vibe: '화려하진 않아도 기본기가 탄탄함. 지고 있어도 역전할 것 같은 믿음(미라클).',
    keywords: ['먹산', '허슬두', '미라클', '김치말이국수', '통삼겹', '여자팬많음'],
    starPlayers: [
      { name: '양의지', position: '포수', description: '곰의 탈을 쓴 여우. 앉아만 있어도 투수 ERA가 내려가는 마법사.' },
      { name: '곽빈', position: '투수', description: '국가대표 우완 에이스. 긁히는 날엔 아무도 못 건드림.' },
      { name: '김택연', position: '투수', description: '"형들 비켜봐요." 19세에 마무리 접수한 돌직구 괴물.' }
    ],
    legends: [
      { name: '박철순', position: '투수', description: '불사조, 영구결번 21.' },
      { name: '김동주', position: '내야수', description: '두목곰, 잠실 장외 홈런의 전설.' },
      { name: '김현수', position: '외야수', description: '타격 기계. 두산 육상부의 신화 (현 KT).' }
    ],
    history: {
      founded: '1982년 (OB 베어스)',
      championships: 6,
      recentAchievements: ['2015-2021 7년 연속 KS 진출', '2016 한국시리즈 우승'],
      majorEvents: ['1982 원년 우승', '1995 통합 우승', '2015 미라클 두산']
    },
    ticketPlatform: '인터파크 티켓',
    transportation: {
      subway: { line: '2호선/9호선', station: '종합운동장역', exit: '5번/6번 출구', walkTime: '도보 3분' },
      parking: '주차 가능 (유료, 경기 당일 매우 혼잡)'
    },
    foods: [
      { name: '김치말이국수', description: '잠실 명물. 여름철 직관 필수템. 살얼음 육수가 일품.' },
      { name: '잠실원샷', description: '컵치킨+맥주/콜라 일체형. 한 손에 들고 응원 가능.' },
      { name: '통삼겹 바베큐', description: '야구장에서 즐기는 삼겹살 파티.' }
    ],
    seatPrices: { premium: '35,000원', table: '30,000원', infield: '14,000원', outfield: '8,000원' },
    personality: { keywords: ['역전', '끈기', '미라클', '여성팬'], tip: '💡 먹산의 위엄! 김치말이국수 필수', bestFor: '드라마틱한 전개를 좋아하는 사람' }
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
      description: 'KBO 마스코트계의 인싸. 춤신춤왕.',
      imageUrl: '/mascot/kia.png'
    },
    logo: '🐯',
    stadium: '광주-기아 챔피언스필드',
    homeCity: '광주',
    cheerSongUrl: 'https://www.youtube.com/watch?v=dudVNSG9foc',
    uniformStyle: '블러디 레드 & 미드나잇 블랙',
    fashion: '호랑이의 맹렬함과 검빨 유니폼의 위압감',
    meme: '🐯 아따, 우승 DNA는 못 속인당께! 챔피언스필드는 거대한 노래방! 떼창의 전율!',
    description: '2024 우승 후 팬들의 자부심이 하늘을 찌름. 챔필 매진은 기본.',
    vibe: '"우승 아니면 실패." 자부심이 하늘을 찌르는 챔피언의 위엄.',
    keywords: ['최다우승', '남행열차', '크림새우', '김도영보유국', '챔필', '광주'],
    starPlayers: [
      { name: '김도영', position: '내야수', description: '제2의 이종범. 타석에 서면 기대감 MAX.' },
      { name: '양현종', position: '투수', description: '대투수. 기아 타이거즈 그 자체.' },
      { name: '김선빈', position: '내야수', description: '작은 거인. 타이거즈의 영원한 꼬꼬마 키스톤.' }
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
      majorEvents: ['최다 우승 (12회)', '1980년대 황금기', '2024 통합 우승']
    },
    ticketPlatform: '티켓링크',
    transportation: {
      ktx: { station: '광주송정역/광주역', distance: '택시/버스 이동', transport: '버스 10-20분 소요' },
      parking: '주차 가능 (넓음)'
    },
    foods: [
      { name: '크림새우', description: '챔필 스테이션 매장 인기 메뉴. 웨이팅 필수.' },
      { name: '광주 기아 샌드', description: '직관 기념품 겸 간식으로 인기 만점.' }
    ],
    seatPrices: { premium: '32,000원', table: '27,000원', infield: '13,000원', outfield: '7,000원' },
    personality: { keywords: ['전통', '우승', '자부심', '챔피언'], tip: '💡 크림새우 오픈런 필수!', bestFor: '승리의 짜릿함과 전통을 중시하는 사람' }
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
      description: 'KBO 귀여움 원탑. 알에서 깨어난 아기 독수리.',
      imageUrl: '/mascot/hanwha.png'
    },
    logo: '🦅',
    stadium: '대전 베이스볼 드림파크',
    homeCity: '대전',
    cheerSongUrl: 'https://www.youtube.com/watch?v=ucNR9zLqmDs',
    uniformStyle: '다이너마이트 오렌지',
    fashion: '폭발적인 화력. 강렬한 오렌지, 멀리서도 눈에 확 띔',
    meme: '💣 보살은 죽었다. 이제는 슈퍼팀이다! 강백호-류현진-문동주! 꿈의 라인업!',
    description: '강백호 영입으로 "우승 아니면 실패"라는 비장함 감돎. 성심당 빵 봉투 들고 야구장 가는 게 국룰.',
    vibe: '보살 팬은 옛말. 이제는 "성적"을 내놓으라 외치는 성난 독수리들.',
    keywords: ['대전신구장', '강백호영입', '농심가락', '성심당', '대전'],
    starPlayers: [
      { name: '문동주', position: '투수', description: '대전의 왕자. 160km를 꽂아넣는 대한민국 에이스.' },
      { name: '강백호', position: '내야수', description: '[FA] 이글스의 새로운 해결사. 우승 청부사.' },
      { name: '노시환', position: '내야수', description: '한화의 4번 타자. 거포 본능.' },
      { name: '류현진', position: '투수', description: '코리안 몬스터. 등판일은 대전 휴일 선포급.' }
    ],
    legends: [
      { name: '송진우', position: '투수', description: '회장님, 통산 최다승/최다이닝.' },
      { name: '정민철', position: '투수', description: '이글스의 영구결번 에이스.' },
      { name: '장종훈', position: '내야수', description: '연습생 신화.' }
    ],
    history: {
      founded: '1986년 (빙그레 이글스)',
      championships: 1,
      recentAchievements: ['1999 우승 이후 도전 중', '2025 신구장 개장'],
      majorEvents: ['1999 한국시리즈 우승', 'V2를 향한 기다림']
    },
    ticketPlatform: '티켓링크',
    transportation: {
      subway: { line: '대전 1호선', station: '중구청역', exit: '1번 출구', walkTime: '도보 20분 이상 (버스 환승 권장)' },
      parking: '주차 가능 (신구장 시설)'
    },
    foods: [
      { name: '농심가락 떡볶이', description: '대전 구장 근본 메뉴. 열무국수와 조합 추천.' },
      { name: '이글스 브루어리', description: '구장에서 즐기는 시원한 수제맥주.' },
      { name: '성심당', description: '구장 내 입점은 아니지만(대전역), 모두가 들고 오는 필수템.' }
    ],
    seatPrices: { premium: '30,000원', table: '25,000원', infield: '12,000원', outfield: '7,000원' },
    personality: { keywords: ['의리', '슈퍼팀', '신구장', '떡볶이'], tip: '💡 농심가락 떡볶이+열무국수 국룰!', bestFor: '끝까지 함께하는 의리와 맛집을 중시하는 사람' }
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
      description: '아빠, 엄마, 아들, 딸 사자 가족. 세계관 최강.',
      imageUrl: '/mascot/samsung.png'
    },
    logo: '🦁',
    stadium: '대구 삼성 라이온즈파크',
    homeCity: '대구',
    cheerSongUrl: 'https://www.youtube.com/watch?v=euO5P5XtXF0',
    uniformStyle: '로얄 블루 & 실버',
    fashion: '전통의 명가다운 품격과 차가운 승부사 기질',
    meme: '👑 클래식은 영원하다! 대구의 더위보다 뜨거운 라팍의 열기! 해치스(떡볶이) 먹으러 야구장 간다!',
    description: '"왕조 부활". 신구 조화가 완벽함. 스케치북 응원의 원조.',
    vibe: '흥분하지 않는 귀족. 하지만 "약팀" 취급받으면 참지 않음.',
    keywords: ['왕조', '해피치즈스마일', '으쌰라으쌰', '푸른피', '라팍', '대구'],
    starPlayers: [
      { name: '구자욱', position: '외야수', description: '삼성의 심장. 캡틴 구.' },
      { name: '원태인', position: '투수', description: '대구의 아들. 푸른 피의 에이스.' },
      { name: '최형우', position: '외야수', description: '해결사. 삼성 왕조의 주역이 돌아왔다.' },
      { name: '김영웅', position: '내야수', description: '삼성의 미래. 30홈런 잠재력의 거포 유격수.' }
    ],
    legends: [
      { name: '이승엽', position: '내야수', description: '국민타자, 라이온 킹.' },
      { name: '양준혁', position: '외야수', description: '위풍당당, 만세 타법.' },
      { name: '오승환', position: '투수', description: '끝판대장, 돌부처.' }
    ],
    history: {
      founded: '1982년 (원년)',
      championships: 8,
      recentAchievements: ['2011-2014 통합 4연패', '2014 한국시리즈 우승'],
      majorEvents: ['2002-2006 5연패', 'KBO 최초 3000승', '8회 우승']
    },
    ticketPlatform: '티켓링크',
    transportation: {
      subway: { line: '대구 2호선', station: '대공원역', exit: '4번/5번 출구', walkTime: '도보 1분 (역 바로 앞)' },
      parking: '주차 가능'
    },
    foods: [
      { name: '해피치즈스마일', description: '라팍의 자랑. 떡볶이 맛집.' },
      { name: '대구 8번식당', description: '든든한 수육과 국밥 한 그릇.' }
    ],
    seatPrices: { premium: '28,000원', infield: '12,000원', outfield: '7,000원' },
    personality: { keywords: ['전통', '명문', '접근성최고', '해치스'], tip: '💡 지하철 내리자마자 라팍! 해치스 떡볶이 강추', bestFor: '전통과 쾌적한 접근성을 중시하는 사람' }
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
      description: '승리의 요정 쌍둥이. 잠실의 아이돌.',
      imageUrl: '/mascot/lg.png'
    },
    logo: '👯',
    stadium: '서울 잠실야구장',
    homeCity: '서울',
    cheerSongUrl: 'https://www.youtube.com/watch?v=xr6wPZxyhxI',
    uniformStyle: '핀스트라이프 & 블랙',
    fashion: '도시적이고 세련된 서울깍쟁이 느낌. 줄무늬 유니폼의 원조',
    meme: '🏙️ 서울의 자존심, 세련된 무적 LG! 김치말이국수 호로록하며 가을야구 본다!',
    description: '2025 우승으로 "디펜딩 챔피언"의 여유가 생김. 공격적인 응원 스타일.',
    vibe: '신바람이 불면 아무도 못 말린다. 서울의 진정한 주인.',
    keywords: ['서울의주인', '무적LG', '김치말이국수', '신바람야구', '핀스트라이프', '서울'],
    starPlayers: [
      { name: '홍창기', position: '외야수', description: '출루 머신. 눈 야구의 신.' },
      { name: '박해민', position: '외야수', description: '수비 요정. 잠실 바닥을 지배하는 람보르미니.' },
      { name: '오지환', position: '내야수', description: '무적 LG의 캡틴. 한국시리즈 MVP의 품격.' }
    ],
    legends: [
      { name: '이병규', position: '외야수', description: '적토마, 라뱅.' },
      { name: '박용택', position: '외야수', description: '팬 사랑 1위, 영구결번 33.' },
      { name: '김용수', position: '투수', description: '노송.' }
    ],
    history: {
      founded: '1982년 (MBC 청룡)',
      championships: 5,
      recentAchievements: ['2025 한국시리즈 우승', '2023 한국시리즈 우승'],
      majorEvents: ['1990, 1994 우승', '2025 디펜딩 챔피언']
    },
    ticketPlatform: '티켓링크',
    transportation: {
      subway: { line: '2호선/9호선', station: '종합운동장역', exit: '5번/6번 출구', walkTime: '도보 3분' },
      parking: '주차 가능 (유료, 경기 당일 혼잡)'
    },
    foods: [
      { name: '김치말이국수', description: '잠실 3루측 명물. 여름철 필수 메뉴.' },
      { name: '잠실원샷', description: '맥주와 치킨을 한 손에. 응원 필수템.' }
    ],
    seatPrices: { premium: '35,000원', table: '30,000원', infield: '14,000원', outfield: '8,000원' },
    personality: { keywords: ['힙', '트렌디', '서울', '김말국'], tip: '💡 3루에서 먹는 김치말이국수의 맛!', bestFor: '트렌디하고 세련된 것을 좋아하는 사람' }
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
      description: 'KBO 마스코트계의 레전드. 턱 챌린지의 원조.',
      imageUrl: '/mascot/kiwoom.png'
    },
    logo: '🦸‍♂️',
    stadium: '고척 스카이돔',
    homeCity: '서울',
    cheerSongUrl: 'https://www.youtube.com/watch?v=4YNAvO63mVA',
    uniformStyle: '버건디 & 실버',
    fashion: '고급스러운 와인빛, 도전정신',
    meme: '💎 MLB 사관학교! 크림새우 먹으러 돔구장 간다! 에어컨 빵빵한 고척돔이 최고!',
    description: '주축 선수가 떠나도(MLB/FA) 끊임없이 새 얼굴이 등장하는 "화수분". 고척돔이라 쾌적함 1위.',
    vibe: '네이밍 스폰서 구단의 반란. 돔구장 효과로 응원 소리가 큼.',
    keywords: ['돔구장', '크림새우', 'MLB사관학교', '영웅군단', '서울'],
    starPlayers: [
      { name: '안우진', position: '투수', description: 'KBO 최고의 구위. 그가 등판하면 상대는 절망.' },
      { name: '이주형', position: '외야수', description: '천재 타자. 포스트 이정후.' },
      { name: '김건희', position: '투수/타자', description: '투타 겸업의 로망을 실현하는 재능.' }
    ],
    legends: [
      { name: '강정호', position: '내야수', description: '평화왕. 유격수 거포.' },
      { name: '박병호', position: '내야수', description: '국민 거포. 히어로즈의 4번 타자.' },
      { name: '이정후', position: '외야수', description: '바람의 손자. 영웅 군단의 자랑.' }
    ],
    history: {
      founded: '2008년',
      championships: 0,
      recentAchievements: ['준우승 3회', '항상 언더독이지만 상위권 위협'],
      majorEvents: ['2018 정규시즌 우승', 'MLB 수출 기업']
    },
    ticketPlatform: '인터파크 티켓',
    transportation: {
      subway: { line: '1호선', station: '구일역', exit: '2번 출구', walkTime: '도보 5분 (돔구장 바로 보임)' },
      parking: '주차 가능 (지하주차장)'
    },
    foods: [
      { name: '크림새우', description: '고척돔 시그니처. 스테이션 매장에서 판매. 마라/크림 반반 추천.' },
      { name: '떡볶이', description: '쾌적한 실내에서 즐기는 분식.' }
    ],
    seatPrices: { premium: '30,000원', box: '25,000원', infield: '12,000원', outfield: '7,000원' },
    personality: { keywords: ['유망주', '쾌적함', '크림새우', '미래'], tip: '💡 여름엔 시원하고 비 오면 뽀송한 돔구장 + 크림새우', bestFor: '쾌적한 환경과 맛집을 선호하는 사람' }
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
      description: '부산 갈매기. 뱃살 튀어나온 누리가 매력 포인트.',
      imageUrl: '/mascot/lotte.png'
    },
    logo: '🐦',
    stadium: '부산 사직야구장',
    homeCity: '부산',
    cheerSongUrl: 'https://www.youtube.com/watch?v=n5FY9EBaGWs',
    uniformStyle: '네이비 & 샴페인 골드',
    fashion: '항구 도시의 자존심. 동백 유니폼(빨강)이 인기',
    meme: '🌊 마! 살아있네! 부산의 낭만 야구! 사직 노래방 오픈! 순대떡볶이 무봤나!',
    description: '지구상에서 가장 열정적인 팬덤. 이기면 부산 축제. 부산 갈매기 떼창은 전설.',
    vibe: '"봄데"는 잊어라. 팬들의 함성은 메이저리그급.',
    keywords: ['부산갈매기', '마!', '순대떡볶이', '윤동희얼빠', '사직', '부산'],
    starPlayers: [
      { name: '윤동희', position: '외야수', description: '사직 아이돌. 롯데의 현재이자 미래.' },
      { name: '박세웅', position: '투수', description: '안경 에이스. 롯데 마운드의 상수.' },
      { name: '전준우', position: '외야수/지명', description: '월드 스타. 낭만 야구의 중심.' }
    ],
    legends: [
      { name: '최동원', position: '투수', description: '무쇠팔, 부산의 영원한 영웅.' },
      { name: '이대호', position: '내야수', description: '조선의 4번 타자. 자이언츠의 상징.' },
      { name: '강민호', position: '포수', description: '롯데의 강민호~ (영원한 안방마님).' }
    ],
    history: {
      founded: '1982년 (원년)',
      championships: 2,
      recentAchievements: ['1992년 마지막 우승', '응답하라 1992'],
      majorEvents: ['1984, 1992 한국시리즈 우승', '최고의 팬심']
    },
    ticketPlatform: '자체 예매 시스템',
    transportation: {
      subway: { line: '부산 3호선', station: '종합운동장역', exit: '9번 출구', walkTime: '도보 10분' },
      ktx: { station: '부산역', distance: '경기장까지 3km', transport: '버스/택시 10분' },
      parking: '주차 가능'
    },
    foods: [
      { name: '직관 순대떡볶이', description: '부산 어묵과 순대의 조화. 사직 명물.' },
      { name: '33떡볶이', description: '부산 스타일의 진한 떡볶이 맛.' }
    ],
    seatPrices: { premium: '27,000원', infield: '12,000원', outfield: '6,000원' },
    personality: { keywords: ['낭만', '열정', '부산', '순대떡볶이'], tip: '💡 사직 노래방에서 순대떡볶이 먹으며 미친 응원', bestFor: '열정적이고 낭만적인 야구를 좋아하는 사람' }
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
      description: '우주선 타고 온 카네코르소. 근육질 강아지.',
      imageUrl: '/mascot/ssg.png'
    },
    logo: '🛸',
    stadium: '인천 SSG 랜더스필드',
    homeCity: '인천',
    cheerSongUrl: 'https://www.youtube.com/watch?v=E39BlC99Tck',
    uniformStyle: '카리스마틱 레드 & 화이트',
    fashion: '열정과 깔끔함. 스타벅스 콜라보 유니폼 인기',
    meme: '🚀 인천 상륙 작전! 물회랑 크림새우 먹으러 간다! 야구장에서 스벅 마시며 홈런 쇼 관람!',
    description: '스포테인먼트 끝판왕. 맛있는 거 먹으러 야구장 간다. 연안부두 떼창은 눈물 버튼.',
    vibe: '인천 야구의 자존심. 홈런으로 시작해서 홈런으로 끝나는 상남자 야구.',
    keywords: ['홈런군단', '스타벅스', '3대떡볶이', '크림새우', '연안부두', '인천'],
    starPlayers: [
      { name: '최정', position: '내야수', description: '리빙 레전드. KBO 통산 홈런 1위. 홈런 공장장.' },
      { name: '김광현', position: '투수', description: '영원한 에이스. 미소 천사.' },
      { name: '박성한', position: '내야수', description: '랜더스의 소금. 공수주 완벽한 유격수.' }
    ],
    legends: [
      { name: '박경완', position: '포수', description: '포수 조련사. 영구결번 26.' },
      { name: '박정권', position: '내야수', description: '가을 거지. 가을만 되면 신이 되는 사나이.' },
      { name: '김성근', position: '감독', description: '야구의 신(야신). 왕조의 창시자.' }
    ],
    history: {
      founded: '2000년 (SK) → 2021년 (SSG)',
      championships: 5,
      recentAchievements: ['2022 통합 우승', '2021 정규시즌 우승'],
      majorEvents: ['2007-2010 4연패', '2022 우승']
    },
    ticketPlatform: '티켓링크',
    transportation: {
      subway: { line: '인천 1호선', station: '문학경기장역', exit: '1번 출구', walkTime: '도보 10~15분 (패밀리길 이용)' },
      parking: '주차 가능 (넓음)'
    },
    foods: [
      { name: '크림새우', description: '원조의 품격. 줄 서서 먹는 랜더스필드 1등 메뉴.' },
      { name: '물회', description: '야구장에서 물회를? 더위 날리는 시원한 맛.' },
      { name: '스타벅스', description: '랜더스 전용 슬래머 음료 판매 (딜리버리 가능).' }
    ],
    seatPrices: { premium: '32,000원', table: '28,000원', infield: '13,000원', outfield: '7,000원' },
    personality: { keywords: ['럭셔리', '맛집', '스타벅스', '물회'], tip: '💡 크림새우+물회 조합! 스타벅스 딜리버리로 편하게', bestFor: '미식과 야구를 동시에 즐기는 럭셔리파' }
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
      description: '단디 해라! 쎄리 라! 이름부터 경상도. 근육질 공룡.',
      imageUrl: '/mascot/nc.png'
    },
    logo: '🦕',
    stadium: '창원 NC파크',
    homeCity: '창원',
    cheerSongUrl: 'https://www.youtube.com/watch?v=-k1QchhdvAc',
    uniformStyle: '마린 블루 & 골드',
    fashion: '바다의 푸른빛과 황금의 영광. 세련된 디자인',
    meme: '⚔️ 집행검을 들어라! 알통떡강정 먹으면서 단디 해라! 뷰가 제일 좋은 야구장!',
    description: '게임 회사 구단답게 이벤트가 화려함. 메이저리그급 최신식 구장 시설.',
    vibe: '정의, 명예, 존중. IT 기업 구단답게 데이터를 중시함.',
    keywords: ['집행검', '알통떡강정', '코코호도', '창원NC파크', 'IT야구', '창원'],
    starPlayers: [
      { name: '박민우', position: '내야수', description: 'NC의 심장. 1번 타자의 교과서.' },
      { name: '구창모', position: '투수', description: '건강하면 언터처블. 엔구행.' },
      { name: '김주원', position: '내야수', description: '공룡 군단의 차세대 리더. 스위치 히터.' }
    ],
    legends: [
      { name: '나성범', position: '외야수', description: '창단 프랜차이즈 스타. NC의 얼굴.' },
      { name: '테임즈', position: '내야수', description: 'KBO 역대 최고 외인 타자. 40-40.' },
      { name: '양의지', position: '포수', description: '집행검을 들어 올린 우승 포수 (현 두산).' }
    ],
    history: {
      founded: '2011년 (9구단)',
      championships: 1,
      recentAchievements: ['2020 통합 우승', '2019 준우승'],
      majorEvents: ['2020 첫 우승 (집행검)']
    },
    ticketPlatform: '구단 자체 앱',
    transportation: {
      ktx: { station: '마산역', distance: '버스/택시 이동', transport: '마산고속터미널/마산역에서 버스 이동' },
      parking: '주차 가능 (최신 시설)'
    },
    foods: [
      { name: '알통떡강정', description: 'NC파크 필수 먹거리. 바삭하고 달콤한 맛.' },
      { name: '코코호도', description: '간식으로 딱 좋은 호두과자.' }
    ],
    seatPrices: { premium: '29,000원', infield: '12,000원', outfield: '6,000원' },
    personality: { keywords: ['세련됨', '최신시설', '알통떡강정', 'IT'], tip: '💡 MLB급 구장 뷰 감상하며 떡강정 흡입', bestFor: '쾌적하고 세련된 관람 환경을 선호하는 사람' }
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
      description: '검은색 털뭉치 몬스터. 은근히 귀여움.',
      imageUrl: '/mascot/kt.png'
    },
    logo: '🧙‍♂️',
    stadium: '수원 KT 위즈파크',
    homeCity: '수원',
    cheerSongUrl: 'https://www.youtube.com/watch?v=TiZOu5M3Zdk',
    uniformStyle: '블랙 & 빅토리 레드',
    fashion: '강인함과 마법의 신비로움. 검정색 간지',
    meme: '🔮 마법 같은 역전승! 보영만두랑 진미통닭 먹으러 간다! 수원 화성처럼 단단한 요새!',
    description: '강백호 이적(한화) 후 "팀 KT"로 똘똘 뭉침. 타격 기계 김현수의 합류로 무게감 더함.',
    vibe: '10구단의 반란. 마법은 끝나지 않았다. 수원 맛집 집합소.',
    keywords: ['여름성', '보영만두', '진미통닭', '마법사', '수원', '롤러코스터'],
    starPlayers: [
      { name: '안현민', position: '외야수', description: 'KT의 새로운 거포. 시원한 스윙.' },
      { name: '고영표', position: '투수', description: '마법 같은 체인지업. 국가대표 잠수함.' },
      { name: '박영현', position: '투수', description: '수호신. 위즈 파크의 뒷문 단속반.' },
      { name: '김현수', position: '외야수', description: '[FA] 타격 기계가 수원에 떴다! 우승 청부사로 합류한 살아있는 전설.' }
    ],
    legends: [
      { name: '박경수', position: '내야수', description: '수원 거포. 창단 멤버이자 영원한 캡틴.' },
      { name: '유한준', position: '외야수', description: '무한준. 성실함의 대명사.' },
      { name: '강백호', position: '내야수', description: '천재 타자. KT 창단 첫 우승의 주역 (현 한화).' }
    ],
    history: {
      founded: '2013년 (10구단, 막내)',
      championships: 1,
      recentAchievements: ['2021 통합 우승', '2024 정규시즌 2위'],
      majorEvents: ['2015년 첫 포스트시즌', '2021 우승']
    },
    ticketPlatform: '티켓링크',
    transportation: {
      subway: { line: '1호선', station: '화서역/수원역', exit: '-', walkTime: '지하철 하차 후 버스 환승 필수' },
      parking: '주차 가능 (사전 예약 권장)'
    },
    foods: [
      { name: '보영만두', description: '수원 쫄면+군만두 최강 조합. 구장 내 입점.' },
      { name: '진미통닭', description: '수원 통닭거리의 맛을 그대로. 식어도 맛있는 치킨.' }
    ],
    seatPrices: { premium: '30,000원', infield: '12,000원', outfield: '7,000원' },
    personality: { keywords: ['마법', '맛집', '보영만두', '여름성'], tip: '💡 쫄면+군만두(보영만두) & 진미통닭 풀코스', bestFor: '먹거리가 풍성한 직관을 원하는 사람' }
  }
];
