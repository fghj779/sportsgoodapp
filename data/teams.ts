import { KBOTeam } from '@/types';

// 2026년 KBO '야잘알' 가이드 (맛집 리스트 포함 Final Ver.)
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
      description: '로봇 곰. 귀여움보단 강인함. 두산 야구의 "단단함"을 상징.',
      imageUrl: '/mascot/doosan-cheolwoong.png'
    },
    logo: '🐻',
    stadium: '서울 잠실야구장',
    homeCity: '서울',
    food: {
      bestMenu: '김치말이국수',
      restaurant: '잠실통빱',
      location: '1루 2층 / 3루 2층 (내야)'
    },
    cheerSongUrl: 'https://www.youtube.com/watch?v=MvwELezoZy4',
    uniformStyle: '네이비 & 화이트 & 핑크',
    fashion: '깔끔한 아디다스 핏. 핑크 유니폼은 여심 저격 필수템.',
    meme: '🍔 **"먹산" 이즈 사이언스.** 5회말 끝나면 관중석보다 햄버거집 줄이 더 김. 하지만 "미라클"이 발동되면 좀비처럼 살아남.',
    description: '전통적으로 **압도적인 여성 팬 비율**을 자랑함. 아이돌 대포카메라 부대가 야구장에 있는 진풍경. 팬덤 충성도가 매우 높고 응원가가 찰짐.',
    vibe: '지고 있어도 "어차피 뒤집겠지(미라클)"라고 생각하는 근자감. 박찬호 영입으로 이번 시즌 기대감 뿜뿜! 잠실의 터줏대감.',
    keywords: ['먹산', '미라클두산', '여초팬덤', '얼빠생성소', '허슬두', '잠실주인'],
    starPlayers: [
      { name: '양의지', position: '포수', description: '곰의 탈을 쓴 여우. 전력의 50%.' },
      { name: '곽빈', position: '투수', description: '베어스 에이스. 긁히는 날은 메이저급.' },
      { name: '김택연', position: '투수', description: '차기 마무리 황제. 돌직구.' }
    ],
    legends: [
      { name: '박철순', position: '투수', number: 21, description: '[영구결번] 불사조. 베어스의 영원한 상징.' },
      { name: '김영신', position: '포수', number: 54, description: '[영구결번] OB 베어스의 아픈 손가락. KBO 최초 영구결번.' },
      { name: '김동주', position: '내야수', number: 18, description: '[잠정결번] 두목곰. 잠실 장외 홈런의 전설.' }
    ],
    history: {
      founded: '1982년 (OB 베어스)',
      championships: 6,
      recentAchievements: ['2015-2021 7년 연속 한국시리즈 진출(왕조)', '2019 통합 우승'],
      majorEvents: ['1982 원년 우승', '1995 통합 우승', '2015 미라클 우승']
    },
    ticketPlatform: '인터파크 티켓',
    personality: {
      keywords: ['끈기', '역전', '먹방', '여성팬'],
      tip: '💡 김치말이국수 먹으면서 보는 역전승이 제일 맛있음.',
      bestFor: '세련된 응원 문화와 드라마틱한 승부를 즐기는 사람'
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
      description: 'KBO 마스코트계의 인싸. 춤신춤왕.',
      imageUrl: '/mascot/kia-hogurl.png'
    },
    logo: '🐯',
    stadium: '광주-기아 챔피언스필드',
    homeCity: '광주',
    food: {
      bestMenu: 'BK버거 (광주제일햄버고)',
      restaurant: '광주제일햄버고',
      location: '3루 내야 끝'
    },
    cheerSongUrl: 'https://www.youtube.com/watch?v=dudVNSG9foc',
    uniformStyle: '검빨(블랙&레드) 진리의 조합',
    fashion: 'IAB 스튜디오 콜라보로 굿즈 품절 대란. 힙하고 강렬함.',
    meme: '🎤 **"챔필은 야구장이 아니라 노래방."** "남행열차" 나오면 상대팀 기가 죽음. 우승 DNA는 과학이다.',
    description: '**호남 지역 압도적 인기 원탑.** 전국구 인기 구단. 야구 못하면 광주 전체 분위기가 다운됨. 해태 왕조의 후예라는 자부심이 하늘을 찌름.',
    vibe: '"우승 아니면 의미 없다." 1등 아니면 화가 나는 12회 우승 명문가의 위엄.',
    keywords: ['최다우승V12', '남행열차', '호남의자존심', '김도영보유국', '검빨', '제2의해태왕조'],
    starPlayers: [
      { name: '김도영', position: '내야수', description: '제2의 이종범. KBO의 아이콘. 40-40 클럽.' },
      { name: '양현종', position: '투수', description: '대투수. 타이거즈 그 자체.' },
      { name: '정해영', position: '투수', description: '타이거즈의 뒷문을 책임지는 수호신.' }
    ],
    legends: [
      { name: '선동열', position: '투수', number: 18, description: '[영구결번] 국보급 투수. 무등산 폭격기.' },
      { name: '이종범', position: '내야수', number: 7, description: '[영구결번] 바람의 아들. 야구 천재.' },
      { name: '김성한', position: '내야수', number: 11, description: '[레전드] 오리궁뎅이 타법. 해태 왕조의 주역.' }
    ],
    history: {
      founded: '1982년 (해태)',
      championships: 12,
      recentAchievements: ['2024 한국시리즈 우승', '2017 통합 우승'],
      majorEvents: ['KBO 통산 최다 우승(12회)', '80-90년대 해태 왕조']
    },
    ticketPlatform: '티켓링크',
    personality: {
      keywords: ['전통', '우승', '자부심', '압도적'],
      tip: '💡 야구장 노래방을 즐기고 싶다면, 그리고 "이기는 야구"를 보고 싶다면.',
      bestFor: '승부욕이 강하고 전통의 강호를 응원하고 싶은 사람'
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
      description: 'KBO 귀여움 원탑. 알에서 깨어난 아기 독수리.',
      imageUrl: '/mascot/hanwha-soori.png'
    },
    logo: '🦅',
    stadium: '대전 한화생명 볼파크',
    homeCity: '대전',
    food: {
      bestMenu: '농심가락 떡볶이',
      restaurant: '농심가락',
      location: '3루 내야 (구장 이전 후에도 입점)'
    },
    cheerSongUrl: 'https://www.youtube.com/watch?v=ucNR9zLqmDs',
    uniformStyle: '다이너마이트 오렌지',
    fashion: '멀리서 봐도 한화 팬임. 오렌지색의 강렬함.',
    meme: '💣 **"보살 팬덤"은 옛말.** 이젠 성적 내놓으라고 호통치는 "성난 독수리". 2026 신구장 버프 + 강백호 영입 등 윈나우 탱킹 해제!',
    description: '오랜 암흑기를 견딘 의리의 팬덤. 2025년 신구장 개장 후 관중 동원력 폭발. 이제는 약팀 이미지를 벗고 강팀으로 도약 중.',
    vibe: '행복야구 끝, 이제는 승리야구. 대전 시민들의 한이 서린 응원은 화력이 장난 아님. 성심당 빵 봉투 필수.',
    keywords: ['신구장', '강백호영입', '류현진', '보살탈출', '슈퍼팀', '성심당'],
    starPlayers: [
      { name: '류현진', position: '투수', description: '코리안 몬스터. 등판일은 대전 휴일.' },
      { name: '강백호', position: '내야수', description: '[2026 FA] 우승 청부사로 온 천재 타자.' },
      { name: '노시환', position: '내야수', description: '한화의 4번 타자. 거포 본능.' }
    ],
    legends: [
      { name: '장종훈', position: '내야수', number: 35, description: '[영구결번] 연습생 신화. 레전드 홈런왕.' },
      { name: '정민철', position: '투수', number: 23, description: '[영구결번] 이글스의 영원한 에이스.' },
      { name: '송진우', position: '투수', number: 21, description: '[영구결번] 회장님. 통산 최다승/최다이닝.' },
      { name: '김태균', position: '내야수', number: 52, description: '[영구결번] 한화의 자존심. 별명왕.' }
    ],
    history: {
      founded: '1986년 (빙그레)',
      championships: 1,
      recentAchievements: ['2025 신구장 개장', '1999 우승 이후 27년 만의 도전'],
      majorEvents: ['1999 한국시리즈 우승', '2026 대권 도전']
    },
    ticketPlatform: '티켓링크',
    personality: {
      keywords: ['의리', '환골탈태', '신구장', '열정'],
      tip: '💡 떡볶이는 농심가락, 빵은 성심당. 이 공식만 기억할 것.',
      bestFor: '드라마틱한 성장 스토리와 의리를 중요시하는 사람'
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
      description: '아빠, 엄마, 아들, 딸 사자 가족. 세계관 최강.',
      imageUrl: '/mascot/samsung-bleo.png'
    },
    logo: '🦁',
    stadium: '대구 삼성 라이온즈파크',
    homeCity: '대구',
    food: {
      bestMenu: '해피치즈스마일 (떡볶이 등)',
      restaurant: '해피치즈스마일',
      location: '3루 내야'
    },
    cheerSongUrl: 'https://www.youtube.com/watch?v=euO5P5XtXF0',
    uniformStyle: '로얄 블루 & 실버',
    fashion: '삼성 왕조의 품격이 느껴지는 클래식한 블루.',
    meme: '👑 **"경북 최고 인기팀."** 엘도라도 떼창 나오면 상대 팀 기가 빨림. 여름성(여름에 강함) DNA 보유.',
    description: 'KBO 원년 명문. 2011-2014 통합 4연패 왕조의 기억. 그 4번타자인 최형우를 2026년시즌 앞두로 영입하면서, 최근 젊은 선수(Young Lions)들이 성장하며 제2의 왕조를 노림.',
    vibe: '점잖은 듯하지만 화나면 무서운 경상도 아재들. "최강삼성" 구호는 KBO에서 가장 웅장함.',
    keywords: ['왕조', '엘도라도', '푸른피', '대구의자존심', '라팍', '최강삼성'],
    starPlayers: [
      { name: '구자욱', position: '외야수', description: '삼성의 심장. 캡틴 구. 프랜차이즈 스타.' },
      { name: '원태인', position: '투수', description: '푸른 피의 에이스. 대구의 아들.' },
      { name: '김영웅', position: '내야수', description: '거포 유격수/3루수. 라팍의 영웅.' }
    ],
    legends: [
      { name: '이만수', position: '포수', number: 22, description: '[영구결번] 헐크. 프로야구 1호 안타/홈런의 주인공.' },
      { name: '양준혁', position: '외야수', number: 10, description: '[영구결번] 위풍당당. 만세 타법.' },
      { name: '이승엽', position: '내야수', number: 36, description: '[영구결번] 국민타자. 라이온 킹.' }
    ],
    history: {
      founded: '1982년 (원년)',
      championships: 8,
      recentAchievements: ['2011-2014 통합 4연패', '2024 준우승'],
      majorEvents: ['2002 첫 한국시리즈 우승', '통합 4연패 왕조']
    },
    ticketPlatform: '티켓링크',
    personality: {
      keywords: ['전통', '근본', '왕조', '자부심'],
      tip: '💡 8회말 엘도라도 떼창은 죽기 전에 꼭 들어봐야 함.',
      bestFor: '역사와 전통, 클래식한 강팀을 선호하는 사람'
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
      description: '승리의 요정 쌍둥이. 잠실의 아이돌.',
      imageUrl: '/mascot/lg-lucky-star.png'
    },
    logo: '👯',
    stadium: '서울 잠실야구장',
    homeCity: '서울',
    food: {
      bestMenu: '김치말이국수',
      restaurant: '잠실통빱',
      location: '1루 2층 / 3루 2층 (내야)'
    },
    cheerSongUrl: 'https://www.youtube.com/watch?v=xr6wPZxyhxI',
    uniformStyle: '핀스트라이프 & 유광잠바',
    fashion: '가을야구의 상징 "유광잠바". 서울 깍쟁이들의 세련된 룩.',
    meme: '🏙️ **"팬덤 연령대는 높지만 마음만은 청춘."** 구매력 최강. 유광잠바 입고 서울의 찬가 부르면 뽕 차오름.',
    description: '최근(2023, 2025) 우승을 차지한 강팀. 서울 찐팬들이 많음. 응원가 소리가 KBO에서 제일 큼(데시벨 깡패).',
    vibe: '신바람 야구. 잘할 때 분위기 타면 아무도 못 말림. 팬들의 자부심이 대단함.',
    keywords: ['서울의주인', '무적LG', '유광잠바', '신바람', '구매력최강', '우승팀'],
    starPlayers: [
      { name: '오스틴', position: '내야수', description: 'LG의 복덩이. 우승 청부사.' },
      { name: '홍창기', position: '외야수', description: '출루 기계. 1번 타자의 정석.' },
      { name: '박해민', position: '외야수', description: '수비 요정. 잠실을 지배하는 람보르미니.' }
    ],
    legends: [
      { name: '김용수', position: '투수', number: 41, description: '[영구결번] 노송. LG의 창단 멤버이자 전설.' },
      { name: '이병규', position: '외야수', number: 9, description: '[영구결번] 적토마. 라뱅. 타격의 달인.' },
      { name: '박용택', position: '외야수', number: 33, description: '[영구결번] 팬 사랑 1위. KBO 통산 최다 안타(전).' }
    ],
    history: {
      founded: '1982년 (MBC 청룡)',
      championships: 5,
      recentAchievements: ['2025 한국시리즈 우승', '2023 한국시리즈 우승'],
      majorEvents: ['1990, 1994 신바람 우승', '29년 만의 2023 우승']
    },
    ticketPlatform: '티켓링크',
    personality: {
      keywords: ['서울', '힙', '트렌디', '열정'],
      tip: '💡 서울의 중심에서 "무적 LG"를 외치며 먹는 김말국(김치말이국수)의 맛.',
      bestFor: '트렌디하고 열정적인 서울 도시 남자/여자의 야구'
    }
  },

  // ☄️ 키움 히어로즈
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
      imageUrl: '/mascot/kiwoom-teokdori.png'
    },
    logo: '🦸‍♂️',
    stadium: '고척 스카이돔',
    homeCity: '서울',
    food: {
      bestMenu: '크림새우',
      restaurant: '쉬림프쉐프',
      location: '1루 내야 2층'
    },
    cheerSongUrl: 'https://www.youtube.com/watch?v=4YNAvO63mVA',
    uniformStyle: '버건디 & 핑크 (Nike)',
    fashion: '나이키 유니폼 간지. 핑크 유니폼 입은 여고생 팬들이 많음.',
    meme: '💎 **"저점 매수의 기회."** 돈은 없지만 안목은 최고. 어린 선수들 키워서 MLB 보내는 맛에 삼. 팬들은 저녁 경기보다 아침 MLB 중계가 더 바쁨.',
    description: '팬덤 규모는 작지만 알짜배기. **두산과 함께 대표적인 여초 팬덤.** 모기업이 없어 선수를 잘 키워 파는 "화수분" 시스템. 항상 언더독이지만 상위권.',
    vibe: '젊고 빠름. 돔구장이라 여름에 시원하고 비 와도 경기함. 쾌적함 1티어.',
    keywords: ['MLB사관학교', '저점매수', '화수분', '돔구장', '여초팬덤', '나이키'],
    starPlayers: [
      { name: '이주형', position: '외야수', description: '포스트 이정후. 천재적인 타격 재능.' },
      { name: '김혜성', position: '내야수', description: '[MLB 진출] 다저스 간 우리 혜성이. 평화왕자의 후계자.' },
      { name: '송성문', position: '내야수', description: '가을만 되면 미쳐 날뛰는 가을 남자.' }
    ],
    legends: [
      { name: '박병호', position: '내야수', number: 52, description: '[영구결번 유력] 히어로즈의 영원한 4번 타자 (현 삼성/은퇴).' },
      { name: '강정호', position: '내야수', number: 16, description: '[레전드] 평화왕. KBO 야수 최초 메이저리거.' },
      { name: '이정후', position: '외야수', number: 51, description: '[레전드] 바람의 손자. 메이저리그 샌프란시스코의 별.' }
    ],
    history: {
      founded: '2008년',
      championships: 0,
      recentAchievements: ['2019/2022 준우승', 'MLB 선수 최다 배출'],
      majorEvents: ['2019 한국시리즈 준우승', '창단 첫 우승 도전 중']
    },
    ticketPlatform: '인터파크 티켓',
    personality: {
      keywords: ['성장', '미래', '유망주', '실리'],
      tip: '💡 크림새우는 줄 서서라도 꼭 먹어야 함. 고척돔의 명물.',
      bestFor: '유망주의 성장 스토리를 좋아하고 쾌적함을 중시하는 사람'
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
      description: '부산 갈매기. 뱃살 튀어나온 누리가 매력 포인트.',
      imageUrl: '/mascot/lotte-noori.png'
    },
    logo: '🐦',
    stadium: '부산 사직야구장',
    homeCity: '부산',
    food: {
      bestMenu: '막국수',
      restaurant: '주문진막국수',
      location: '구장 밖 정문 (입장 전 필수 코스)'
    },
    cheerSongUrl: 'https://www.youtube.com/watch?v=n5FY9EBaGWs',
    uniformStyle: '헤리티지 블루 & 짝짝이',
    fashion: '주황색 비닐봉다리 머리에 쓰는 게 진정한 패션.',
    meme: '🌊 **"부산 최고 인기팀."** 근데 우승을 너무 오래 못 함(1992년 이후 無). "봄데(봄에만 잘함)" 설레발은 과학. 이기면 부산 전체가 축제.',
    description: '세계에서 가장 열정적인 팬덤. 사직구장은 거대한 노래방이자 클럽. 성적 안 나오면 팬들이 감독보다 더 무섭게 변함.',
    vibe: '낭만 그 자체. "마!" 한마디로 정리 가능. 이대호 은퇴 후 새로운 구심점을 찾는 중.',
    keywords: ['부산갈매기', '마!', '봉다리', '우승기원', '낭만야구', '화력최강'],
    starPlayers: [
      { name: '윤동희', position: '외야수', description: '사직 아이돌. 롯데의 미래이자 현재.' },
      { name: '전준우', position: '외야수', description: '월드 스타. 롯데 원클럽맨 캡틴.' },
      { name: '박세웅', position: '투수', description: '안경 에이스. 비 오면 더 잘 던지는 레인맨.' }
    ],
    legends: [
      { name: '최동원', position: '투수', number: 11, description: '[영구결번] 불멸의 투수. 롯데의 혼.' },
      { name: '이대호', position: '내야수', number: 10, description: '[영구결번] 조선의 4번 타자. 거인의 자존심.' },
      { name: '염종석', position: '투수', number: 68, description: '[레전드] 1992 마지막 우승의 주역.' }
    ],
    history: {
      founded: '1982년 (원년)',
      championships: 2,
      recentAchievements: ['1992년 마지막 우승', '포스트시즌 진출이 목표'],
      majorEvents: ['1984 기적의 우승', '1992 우승']
    },
    ticketPlatform: '구단 자체 앱',
    personality: {
      keywords: ['낭만', '열정', '한', '부산'],
      tip: '💡 사직구장 앞 주문진막국수 한 그릇 하고 들어가서 "부산 갈매기" 떼창하기.',
      bestFor: '미친듯한 열정과 낭만을 즐기고 싶은 사람'
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
      description: '우주선 타고 온 카네코르소. 근육질 강아지.',
      imageUrl: '/mascot/ssg-landy.png'
    },
    logo: '🛸',
    stadium: '인천 SSG 랜더스필드',
    homeCity: '인천',
    food: {
      bestMenu: '물회',
      restaurant: '민영활어공장',
      location: '1루 1층 (야구장에서 물회를 먹는 신세계)'
    },
    cheerSongUrl: 'https://www.youtube.com/watch?v=E39BlC99Tck',
    uniformStyle: '레드 & 화이트',
    fashion: '스타벅스 유니폼이 젤 예쁨. 노브랜드 모자 쓰고 직관.',
    meme: '🚀 **"성적이 중요한 팬덤."** SK 왕조(2007-2012) 시절 눈높이가 높아짐. 못하면 가차 없음. 2021년 신세계 인수 후 마케팅/투자는 1위.',
    description: '2000년대 후반을 지배한 **SK 왕조**의 후예. 2018년 극적인 업셋 우승과 2022년 KBO 최초 와이어 투 와이어 우승의 저력. 2028-29년 청라 돔구장 이주 예정.',
    vibe: '세련된 스포테인먼트. 야구장에서 고기 구워 먹고 스벅 마시는 문화. 인천 아재들의 "연안부두" 타임은 눈물 버튼.',
    keywords: ['SK왕조계승', '와이어투와이어', '청라돔', '홈런공장', '스타벅스', '인천'],
    starPlayers: [
      { name: '최정', position: '내야수', description: 'KBO 통산 홈런 1위. SSG의 살아있는 심장(현역).' },
      { name: '김광현', position: '투수', description: '영원한 에이스. 대한민국 좌완의 자존심.' },
      { name: '박성한', position: '내야수', description: '랜더스의 소금. 완벽한 유격수.' }
    ],
    legends: [
      { name: '박경완', position: '포수', number: 26, description: '[영구결번] 포수 최초 20-20. SK 왕조의 안방마님.' },
      { name: '박정권', position: '내야수', number: 36, description: '[레전드] 가을 사나이. 가을만 되면 신이 되는 남자.' },
      { name: '김성근', position: '감독', number: 38, description: '[레전드] 야신. SK 왕조를 건설한 명장.' }
    ],
    history: {
      founded: '2000년(SK) -> 2021년(SSG)',
      championships: 5,
      recentAchievements: ['2022 와이어 투 와이어 통합 우승', '2018 업셋 우승'],
      majorEvents: ['2007-2012 SK 왕조 (6년 연속 코시 진출)', '2028 청라 돔 시대 준비']
    },
    ticketPlatform: '티켓링크',
    personality: {
      keywords: ['성적', '화끈함', '홈런', '미래지향'],
      tip: '💡 야구장에서 물회에 소주 한잔? 랜더스필드에선 가능.',
      bestFor: '화끈한 공격 야구와 최신식 관람 문화를 즐기는 사람'
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
      description: '단디 해라! 쎄리 라! 이름부터 경상도. 근육질 공룡.',
      imageUrl: '/mascot/nc-dino.png'
    },
    logo: '🦕',
    stadium: '창원 NC파크',
    homeCity: '창원',
    food: {
      bestMenu: '알통떡강정',
      restaurant: '알통치킨',
      location: '1층 내야'
    },
    cheerSongUrl: 'https://www.youtube.com/watch?v=-k1QchhdvAc',
    uniformStyle: '마린 블루 & 골드',
    fashion: '골드 포인트가 들어간 유니폼이 고급짐.',
    meme: '⚔️ **"2020 코로나 우승의 추억."** 집행검 들어 올리는 세리머니는 전설. IT 기업 구단이라 데이터 야구에 능함. 구장이 메이저급으로 좋음.',
    description: '역사는 짧지만 임팩트는 강함. **양의지, 나성범, 테임즈** 등 거쳐 간 레전드들이 화려함. 창원 NC파크는 KBO 최고의 뷰와 시설을 자랑.',
    vibe: '아기자기하고 가족적인 분위기 + 마산 아재들의 화끈함이 공존. 쾌적한 야구 관람의 끝판왕.',
    keywords: ['집행검', '데이터야구', '최신식구장', '테임즈', '엔팍', '창원'],
    starPlayers: [
      { name: '박건우', position: '외야수', description: '꾸준함의 대명사. 엔팍의 아이돌.' },
      { name: '김주원', position: '내야수', description: '국가대표 유격수. 스위치 히터.' },
      { name: '데이비슨', position: '내야수', description: '테임즈의 향수를 불러일으키는 거포 외인.' }
    ],
    legends: [
      { name: '나성범', position: '외야수', number: 47, description: '[레전드] 창단 프랜차이즈 스타 (현 KIA).' },
      { name: '에릭 테임즈', position: '내야수', number: 47, description: '[레전드] KBO 생태계 파괴자. 40-40 클럽의 신.' },
      { name: '양의지', position: '포수', number: 25, description: '[레전드] 2020 우승의 주역 (집행검 군주).' },
      { name: '이호준', position: '내야수', number: 27, description: '[레전드] NC의 맏형이자 인생 멘토.' }
    ],
    history: {
      founded: '2011년 (9구단)',
      championships: 1,
      recentAchievements: ['2020 통합 우승', '2023 포스트시즌 돌풍'],
      majorEvents: ['2020 첫 우승(집행검)', '창원 NC파크 개장']
    },
    ticketPlatform: '구단 자체 앱',
    personality: {
      keywords: ['세련됨', '시설', '데이터', '추억'],
      tip: '💡 최신식 구장에서 쾌적하게 알통떡강정 먹으며 야구 보기.',
      bestFor: '쾌적한 환경과 데이터 기반의 스마트한 야구를 좋아하는 사람'
    }
  },

  // 🧙♂️ KT 위즈
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
      imageUrl: '/mascot/kt-vicddory.png'
    },
    logo: '🧙‍♂️',
    stadium: '수원 KT 위즈파크',
    homeCity: '수원',
    food: {
      bestMenu: '만두 & 쫄면',
      restaurant: '보영만두',
      location: '3루 내야 (수원의 명물)'
    },
    cheerSongUrl: 'https://www.youtube.com/watch?v=TiZOu5M3Zdk',
    uniformStyle: '올 블랙 (간지)',
    fashion: '뉴발란스 스폰서. 올 블랙 유니폼은 일상복으로 입어도 될 만큼 시크함.',
    meme: '🔮 **"여름성 2."** 여름만 되면 마법같이 치고 올라감. 2021년 우승으로 막내 구단 티 벗음. 야구장 앞 진미통닭/보영만두가 본체.',
    description: '가장 늦게 생긴 막내지만 형들 다 이기고 다님. 탄탄한 선발 야구. 2026년 김현수(LG->KT) 영입 등 베테랑 수집가.',
    vibe: '끈끈함. 화려한 스타 플레이어보다는 팀워크로 승부함. 워터 페스티벌 등 이벤트 맛집.',
    keywords: ['마법사', '언더독', '여름성', '통닭', '수원', '강철매직'],
    starPlayers: [
      { name: '고영표', position: '투수', description: '국가대표 잠수함. 퀄리티 스타트 제조기.' },
      { name: '박영현', position: '투수', description: 'KBO 최고의 마무리. 돌직구 마법사.' },
      { name: '안현민', position: '외야수', description: 'KT의 고릴라.' }
    ],
    legends: [
      { name: '박경수', position: '내야수', number: 6, description: '[준영구결번] 수원 거포. 2021 우승 캡틴. KT의 정신적 지주.' },
      { name: '강백호', position: '내야수', number: 50, description: '[레전드] 창단 첫 우승 주역. KT의 천재 타자 (현 한화).' },
      { name: '유한준', position: '외야수', number: 61, description: '[레전드] 소리 없이 강한 남자.' }
    ],
    history: {
      founded: '2013년 (10구단)',
      championships: 1,
      recentAchievements: ['2021 통합 우승', '4년 연속 포스트시즌'],
      majorEvents: ['2021 창단 첫 우승', '마법 같은 역전극']
    },
    ticketPlatform: '티켓링크',
    personality: {
      keywords: ['팀워크', '이벤트', '먹거리', '반전'],
      tip: '💡 보영만두의 군만두+쫄면 조합은 진리. 진미통닭도 잊지 말 것.',
      bestFor: '팀워크 중심의 야구와 다양한 이벤트를 즐기는 사람'
    }
  }
];
