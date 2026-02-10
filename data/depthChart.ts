import { DepthChart } from '@/types';

// 2026 KBO 시즌 뎁스차트 (나무위키 기반)
export const depthCharts: DepthChart[] = [
  // LG 트윈스
  {
    teamId: 'lg',
    manager: '염경엽',
    best9: {
      catcher: ['박동원', '이주헌', '김준태'],
      firstBase: ['🇺🇸 오스틴 딘', '구본혁', '문보경'],
      secondBase: ['신민재', '구본혁', '천성호'],
      thirdBase: ['문보경', '구본혁', '천성호'],
      shortStop: ['오지환', '구본혁', '이영빈'],
      leftField: ['문성주', '이재원', '최원영'],
      centerField: ['박해민', '최원영', '김현종'],
      rightField: ['홍창기', '문성주', '최원영'],
      dh: ['이재원', '문성주']
    },
    rotation: [
      '🇺🇸 요니 치리노스',
      '🇺🇸 앤더스 톨허스트',
      '임찬규',
      '손주영',
      '송승기'
    ],
    bullpen: {
      closer: ['유영찬'],
      setup: ['김진성', '김영우', '장현식', '김강률', '함덕주'],
      middle: ['🇦🇺 라클란 웰스(AQ)', '이정용']
    }
  },

  // KT 위즈
  {
    teamId: 'kt',
    manager: '이강철',
    best9: {
      catcher: ['장성우', '조대현', '강현우'],
      firstBase: ['🇺🇸 샘 힐리어드', '문상철', '오윤석'],
      secondBase: ['김상수', '오윤석', '류현인'],
      thirdBase: ['허경민', '김건휘'],
      shortStop: ['권동진', '장준원', '오서진'],
      leftField: ['김민혁', '김현수', '장진혁'],
      centerField: ['최원준', '배정대', '정준영'],
      rightField: ['안현민'],
      dh: ['김현수', '장성우']
    },
    rotation: [
      '🇺🇸 맷 사우어',
      '🇺🇸 케일럽 보쉴리',
      '고영표',
      '소형준',
      '오원석'
    ],
    bullpen: {
      closer: ['박영현'],
      setup: ['손동현', '우규민', '김민수'],
      middle: ['🇯🇵 스기모토 코우키(AQ)', '주권']
    }
  },

  // SSG 랜더스
  {
    teamId: 'ssg',
    manager: '이숭용',
    best9: {
      catcher: ['조형우', '이지영'],
      firstBase: ['고명준', '오태곤', '전의산'],
      secondBase: ['정준재', '석정우'],
      thirdBase: ['최정', '안상현'],
      shortStop: ['박성한', '문상준'],
      leftField: ['🇻🇪 기예르모 에레디아', '김재환', '류효승'],
      centerField: ['최지훈', '김성욱'],
      rightField: ['한유섬', '오태곤'],
      dh: ['김재환', '최정', '한유섬']
    },
    rotation: [
      '🇺🇸 미치 화이트',
      '🇺🇸 앤서니 베니지아노',
      '김광현',
      '김건우',
      '🇯🇵 타케다 쇼타(AQ)'
    ],
    bullpen: {
      closer: ['조병현'],
      setup: ['김민', '이로운', '노경은', '문승원'],
      middle: ['김택형', '한두솔']
    }
  },

  // 두산 베어스
  {
    teamId: 'doosan',
    manager: '김원형',
    best9: {
      catcher: ['양의지', '김기연'],
      firstBase: ['양석환', '강승호', '홍성호'],
      secondBase: ['강승호', '이유찬', '박준순'],
      thirdBase: ['안재석', '임종성'],
      shortStop: ['박찬호', '이유찬', '박계범'],
      leftField: ['김민석', '김인태', '조수행'],
      centerField: ['정수빈', '조수행'],
      rightField: ['🇺🇸 다즈 카메론', '조수행'],
      dh: ['김동준', '홍성호']
    },
    rotation: [
      '🇺🇸 크리스 플렉센',
      '🇺🇸 잭 로그',
      '곽빈',
      '최승용',
      '최민석/이영하'
    ],
    bullpen: {
      closer: ['김택연'],
      setup: ['박신지', '박치국', '이병헌', '최지강'],
      middle: ['🇯🇵 타무라 이치로(AQ)', '이용찬']
    }
  },

  // KIA 타이거즈
  {
    teamId: 'kia',
    manager: '이범호',
    best9: {
      catcher: ['김태군', '한준수'],
      firstBase: ['오선우', '변우혁', '황대인'],
      secondBase: ['김선빈', '김규성', '윤도현'],
      thirdBase: ['김도영', '변우혁'],
      shortStop: ['🇦🇺 제리드 데일(AQ)', '김규성', '박민'],
      leftField: ['🇻🇪 해럴드 카스트로', '고종욱', '이창진'],
      centerField: ['김호령', '박정우'],
      rightField: ['나성범', '이창진'],
      dh: ['나성범', '김선빈']
    },
    rotation: [
      '🇺🇸 제임스 네일',
      '🇺🇸 아담 올러',
      '양현종',
      '이의리',
      '황동하'
    ],
    bullpen: {
      closer: ['정해영'],
      setup: ['전상현', '장현식', '성영탁', '곽도규'],
      middle: ['김범수', '홍건희']
    }
  },

  // NC 다이노스
  {
    teamId: 'nc',
    manager: '이호준',
    best9: {
      catcher: ['김형준', '안중열', '김정호'],
      firstBase: ['🇺🇸 맷 데이비슨', '오영수'],
      secondBase: ['박민우', '최정원'],
      thirdBase: ['김휘집', '서호철', '신재인'],
      shortStop: ['김주원', '김한별'],
      leftField: ['이우성'],
      centerField: ['천재환', '고준휘'],
      rightField: ['권희동', '오장한'],
      dh: ['박건우']
    },
    rotation: [
      '🇺🇸 라일리 톰슨',
      '🇨🇦 커티스 테일러',
      '구창모',
      '신민혁',
      '🇯🇵 토다 나츠키(AQ)'
    ],
    bullpen: {
      closer: ['류진욱'],
      setup: ['김영규', '김진호', '배재환', '전사민'],
      middle: ['하준영', '임지민']
    }
  },

  // 롯데 자이언츠
  {
    teamId: 'lotte',
    manager: '김태형',
    best9: {
      catcher: ['유강남', '손성빈', '정보근'],
      firstBase: ['나승엽', '고승민'],
      secondBase: ['고승민', '한태양', '박찬형'],
      thirdBase: ['한동희', '손호영'],
      shortStop: ['전민재', '이호준'],
      leftField: ['🇻🇪 빅터 레이예스', '김동혁'],
      centerField: ['손호영', '장두성'],
      rightField: ['윤동희'],
      dh: ['전준우']
    },
    rotation: [
      '🇩🇴 엘빈 로드리게스',
      '🇺🇸 제레미 비슬리',
      '박세웅',
      '나균안',
      '🇯🇵 쿄야마 마사야(AQ)'
    ],
    bullpen: {
      closer: ['김원중'],
      setup: ['정철원', '최준용', '윤성빈'],
      middle: ['정현수', '송재영']
    }
  },

  // 한화 이글스
  {
    teamId: 'hanwha',
    manager: '김경문',
    best9: {
      catcher: ['최재훈', '허인서'],
      firstBase: ['채은성', '김태연'],
      secondBase: ['하주석', '황영묵'],
      thirdBase: ['노시환', '박정현'],
      shortStop: ['심우준', '이도윤'],
      leftField: ['문현빈', '최인호'],
      centerField: ['이진영', '이원석'],
      rightField: ['강백호'],
      dh: ['🇻🇪 요나단 페라자', '강백호']
    },
    rotation: [
      '🇻🇪 윌켈 에르난데스',
      '🇺🇸 오웬 화이트',
      '류현진',
      '문동주',
      '🇹🇼 왕옌청(AQ)'
    ],
    bullpen: {
      closer: ['김서현'],
      setup: ['박상원', '주현상', '한승혁'],
      middle: ['윤산흠', '김종수']
    }
  },

  // 삼성 라이온즈
  {
    teamId: 'samsung',
    manager: '박진만',
    best9: {
      catcher: ['강민호', '박세혁'],
      firstBase: ['🇩🇴 르윈 디아즈'],
      secondBase: ['류지혁', '김재상', '심재훈'],
      thirdBase: ['김영웅'],
      shortStop: ['이재현'],
      leftField: ['구자욱', '김헌곤'],
      centerField: ['김지찬', '박승규'],
      rightField: ['김성윤', '이성규'],
      dh: ['최형우']
    },
    rotation: [
      '🇵🇦 아리엘 후라도',
      '🇺🇸 맷 매닝',
      '원태인',
      '최원태',
      '좌승현/양창섭'
    ],
    bullpen: {
      closer: ['경쟁 중'],
      setup: ['김무신', '최지광', '이승현'],
      middle: ['🇯🇵 미야지 유라(AQ)']
    }
  },

  // 키움 히어로즈
  {
    teamId: 'kiwoom',
    manager: '설종진',
    best9: {
      catcher: ['김건희', '김재현'],
      firstBase: ['🇺🇸 트렌턴 브룩스', '최주환'],
      secondBase: ['김태진', '안치홍', '서건창'],
      thirdBase: ['임지열', '여동욱'],
      shortStop: ['어준서', '오선진'],
      leftField: ['이형종', '임지열'],
      centerField: ['이주형'],
      rightField: ['박주홍', '주성원'],
      dh: ['최주환', '안치홍']
    },
    rotation: [
      '🇩🇴 라울 알칸타라',
      '🇺🇸 네이선 와일스',
      '🇯🇵 카나쿠보 유토(AQ)',
      '하영민',
      '정현우'
    ],
    bullpen: {
      closer: ['조영건'],
      setup: ['김재웅', '김성진', '오석주'],
      middle: ['원종현', '박윤성']
    }
  }
];
