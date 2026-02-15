import { TeamDepthChart } from '@/types';

// 2026 KBO 리그 구단별 시즌 전망 및 뎁스차트
// 범례: 🇺🇸(미국), 🇩🇴(도미니카), 🇻🇪(베네수엘라), 🇨🇦(캐나다), 🇵🇦(파나마), 🇦🇺(호주), 🇹🇼(대만), 🇯🇵(일본/AQ)

export const depthCharts: Record<string, TeamDepthChart> = {
    // 1. LG 트윈스
    lg: {
        manager: '염경엽',
        notes: '김현수 이적, 이재원/이민호/김윤식 전역 복귀, 선발진 전원 잔류',
        lineup: {
            catcher: { starter: '박동원', backup: ['이주헌', '김준태'] },
            firstBase: { starter: '🇺🇸 오스틴 딘', backup: ['구본혁', '문보경'] },
            secondBase: { starter: '신민재', backup: ['구본혁', '천성호'] },
            thirdBase: { starter: '문보경', backup: ['구본혁', '천성호'] },
            shortStop: { starter: '오지환', backup: ['구본혁', '이영빈'] },
            leftField: { starter: '문성주', backup: ['이재원', '최원영'] },
            centerField: { starter: '박해민', backup: ['최원영', '김현종'] },
            rightField: { starter: '홍창기', backup: ['문성주', '최원영'] },
            designatedHitter: { starter: '이재원', backup: ['문성주'] },
        },
        rotation: ['🇺🇸 요니 치리노스', '🇺🇸 앤더스 톨허스트', '임찬규', '손주영', '송승기'],
        bullpen: {
            closer: '유영찬',
            setup: ['김진성', '김영우', '장현식', '김강률', '함덕주'],
            middle: ['🇦🇺 라클란 웰스 (AQ)', '이정용'],
        },
    },

    // 2. KT 위즈
    kt: {
        manager: '이강철',
        notes: '심우준(한화), 엄상백(한화), 박찬호(두산) 영입전 실패 후 내부 육성 집중. 오원석 트레이드 영입',
        lineup: {
            catcher: { starter: '장성우', backup: ['조대현', '강현우'] },
            firstBase: { starter: '🇺🇸 샘 힐리어드', backup: ['문상철', '오윤석'] },
            secondBase: { starter: '김상수', backup: ['오윤석', '류현인'] },
            thirdBase: { starter: '허경민', backup: ['김건휘'] },
            shortStop: { starter: '권동진', backup: ['장준원', '오서진'] },
            leftField: { starter: '김민혁', backup: ['김현수', '장진혁'] },
            centerField: { starter: '최원준', backup: ['배정대', '정준영'] },
            rightField: { starter: '안현민', backup: [] },
            designatedHitter: { starter: '김현수', backup: ['장성우'] },
        },
        rotation: ['🇺🇸 맷 사우어', '🇺🇸 케일럽 보쉴리', '고영표', '소형준', '오원석'],
        bullpen: {
            closer: '박영현',
            setup: ['손동현', '우규민', '김민수'],
            middle: ['🇯🇵 스기모토 코우키 (AQ)', '주권'],
        },
    },

    // 3. SSG 랜더스
    ssg: {
        manager: '이숭용',
        notes: '김재환(FA) 영입, 이지영 잔류, 조병현 마무리 안착',
        lineup: {
            catcher: { starter: '조형우', backup: ['이지영'] },
            firstBase: { starter: '고명준', backup: ['오태곤', '전의산'] },
            secondBase: { starter: '정준재', backup: ['석정우'] },
            thirdBase: { starter: '최정', backup: ['안상현'] },
            shortStop: { starter: '박성한', backup: ['문상준'] },
            leftField: { starter: '🇻🇪 기예르모 에레디아', backup: ['김재환', '류효승'] },
            centerField: { starter: '최지훈', backup: ['김성욱'] },
            rightField: { starter: '한유섬', backup: ['오태곤'] },
            designatedHitter: { starter: '김재환', backup: ['최정', '한유섬'] },
        },
        rotation: ['🇺🇸 미치 화이트', '🇺🇸 앤서니 베니지아노', '김광현', '김건우', '🇯🇵 타케다 쇼타 (AQ)'],
        bullpen: {
            closer: '조병현',
            setup: ['김민', '이로운', '노경은', '문승원'],
            middle: ['김택형', '한두솔'],
        },
    },

    // 4. 두산 베어스
    doosan: {
        manager: '김원형 (신임)',
        notes: '박찬호(FA) 영입, 플렉센 복귀, 이승엽 감독 경질',
        lineup: {
            catcher: { starter: '양의지', backup: ['김기연'] },
            firstBase: { starter: '양석환', backup: ['강승호', '홍성호'] },
            secondBase: { starter: '강승호', backup: ['이유찬', '박준순'] },
            thirdBase: { starter: '안재석', backup: ['임종성'] },
            shortStop: { starter: '박찬호', backup: ['이유찬', '박계범'] },
            leftField: { starter: '김민석', backup: ['김인태', '조수행'] },
            centerField: { starter: '정수빈', backup: ['조수행'] },
            rightField: { starter: '🇺🇸 다즈 카메론', backup: ['조수행'] },
            designatedHitter: { starter: '김동준', backup: ['홍성호'] },
        },
        rotation: ['🇺🇸 크리스 플렉센', '🇺🇸 잭 로그', '곽빈', '최승용', '최민석'],
        bullpen: {
            closer: '김택연',
            setup: ['박신지', '박치국', '이병헌', '최지강'],
            middle: ['🇯🇵 타무라 이치로 (AQ)', '이용찬'],
        },
    },

    // 5. KIA 타이거즈
    kia: {
        manager: '이범호',
        notes: '최형우(삼성), 박찬호(두산) 이적. 불펜 보강(김범수, 홍건희)',
        lineup: {
            catcher: { starter: '김태군', backup: ['한준수'] },
            firstBase: { starter: '오선우', backup: ['변우혁', '황대인'] },
            secondBase: { starter: '김선빈', backup: ['김규성', '윤도현'] },
            thirdBase: { starter: '김도영', backup: ['변우혁'] },
            shortStop: { starter: '🇦🇺 제리드 데일 (AQ)', backup: ['김규성', '박민'] },
            leftField: { starter: '🇻🇪 해럴드 카스트로', backup: ['고종욱', '이창진'] },
            centerField: { starter: '김호령', backup: ['박정우'] },
            rightField: { starter: '나성범', backup: ['이창진'] },
            designatedHitter: { starter: '나성범', backup: ['김선빈'] },
        },
        rotation: ['🇺🇸 제임스 네일', '🇺🇸 아담 올러', '양현종', '이의리', '황동하'],
        bullpen: {
            closer: '정해영',
            setup: ['전상현', '장현식', '성영탁', '곽도규'],
            middle: ['김범수', '홍건희'],
        },
    },

    // 6. NC 다이노스
    nc: {
        manager: '이호준',
        notes: '구창모 복귀, 토종 선발진 재건 목표. 외국인 타자 맷 데이비슨',
        lineup: {
            catcher: { starter: '김형준', backup: [] },
            firstBase: { starter: '🇺🇸 맷 데이비슨', backup: [] },
            secondBase: { starter: '박민우', backup: [] },
            thirdBase: { starter: '서호철', backup: [] },
            shortStop: { starter: '김주원', backup: [] },
            leftField: { starter: '권희동', backup: [] },
            centerField: { starter: '천재환', backup: [] },
            rightField: { starter: '박건우', backup: [] },
            designatedHitter: { starter: '🇺🇸 맷 데이비슨', backup: [] },
        },
        rotation: ['🇺🇸 라일리 톰슨', '🇨🇦 커티스 테일러', '구창모', '신민혁', '🇯🇵 토다 나츠키 (AQ)'],
        bullpen: {
            closer: '류진욱',
            setup: ['김영규', '김진호', '배재환', '전사민'],
            middle: ['하준영', '임지민'],
        },
    },

    // 7. 롯데 자이언츠
    lotte: {
        manager: '김태형',
        notes: '전준우 노쇠화 우려, 한동희 전역, 불펜 뎁스 문제',
        lineup: {
            catcher: { starter: '유강남', backup: ['손성빈', '정보근'] },
            firstBase: { starter: '나승엽', backup: ['고승민'] },
            secondBase: { starter: '고승민', backup: ['한태양', '박찬형'] },
            thirdBase: { starter: '한동희', backup: ['손호영'] },
            shortStop: { starter: '전민재', backup: ['이호준'] },
            leftField: { starter: '🇻🇪 빅터 레이예스', backup: ['김동혁'] },
            centerField: { starter: '손호영', backup: ['장두성'] },
            rightField: { starter: '윤동희', backup: [] },
            designatedHitter: { starter: '전준우', backup: [] },
        },
        rotation: ['🇩🇴 엘빈 로드리게스', '🇺🇸 제레미 비슬리', '박세웅', '나균안', '🇯🇵 쿄야마 마사야 (AQ)'],
        bullpen: {
            closer: '김원중',
            setup: ['정철원', '최준용', '윤성빈'],
            middle: ['정현수', '송재영'],
        },
    },

    // 8. 한화 이글스
    hanwha: {
        manager: '김경문',
        notes: '강백호, 심우준, 엄상백 영입(KT 출신 다수), 류현진 건재',
        lineup: {
            catcher: { starter: '최재훈', backup: ['허인서'] },
            firstBase: { starter: '채은성', backup: ['김태연'] },
            secondBase: { starter: '하주석', backup: ['황영묵'] },
            thirdBase: { starter: '노시환', backup: ['박정현'] },
            shortStop: { starter: '심우준', backup: ['이도윤'] },
            leftField: { starter: '문현빈', backup: ['최인호'] },
            centerField: { starter: '이진영', backup: ['이원석'] },
            rightField: { starter: '강백호', backup: [] },
            designatedHitter: { starter: '🇻🇪 요나단 페라자', backup: ['강백호'] },
        },
        rotation: ['🇻🇪 윌켈 에르난데스', '🇺🇸 오웬 화이트', '류현진', '문동주', '🇹🇼 왕옌청 (AQ)'],
        bullpen: {
            closer: '김서현',
            setup: ['박상원', '주현상', '한승혁'],
            middle: ['윤산흠', '김종수'],
        },
    },

    // 9. 삼성 라이온즈
    samsung: {
        manager: '박진만',
        notes: '최형우(FA) 10년 만에 복귀, 2루수 약점, 최원태 영입',
        lineup: {
            catcher: { starter: '강민호', backup: ['박세혁'] },
            firstBase: { starter: '🇩🇴 르윈 디아즈', backup: [] },
            secondBase: { starter: '류지혁', backup: ['김재상', '심재훈'] },
            thirdBase: { starter: '김영웅', backup: [] },
            shortStop: { starter: '이재현', backup: [] },
            leftField: { starter: '구자욱', backup: ['김헌곤'] },
            centerField: { starter: '김지찬', backup: ['박승규'] },
            rightField: { starter: '김성윤', backup: ['이성규'] },
            designatedHitter: { starter: '최형우', backup: [] },
        },
        rotation: ['🇵🇦 아리엘 후라도', '🇺🇸 맷 매닝', '원태인', '최원태', '좌승현'],
        bullpen: {
            closer: '미정 (경쟁)',
            setup: ['김무신', '최지광', '이승현'],
            middle: ['🇯🇵 미야지 유라 (AQ)'],
        },
    },

    // 10. 키움 히어로즈
    kiwoom: {
        manager: '설종진',
        notes: '송성문 MLB(샌디에이고) 진출, 최주환/안치홍/서건창 베테랑 수집. 안우진 복귀 대기',
        lineup: {
            catcher: { starter: '김건희', backup: ['김재현'] },
            firstBase: { starter: '🇺🇸 트렌턴 브룩스', backup: ['최주환'] },
            secondBase: { starter: '김태진', backup: ['안치홍', '서건창'] },
            thirdBase: { starter: '임지열', backup: ['여동욱'] },
            shortStop: { starter: '어준서', backup: ['오선진'] },
            leftField: { starter: '이형종', backup: ['임지열'] },
            centerField: { starter: '이주형', backup: [] },
            rightField: { starter: '박주홍', backup: ['주성원'] },
            designatedHitter: { starter: '최주환', backup: ['안치홍'] },
        },
        rotation: ['🇩🇴 라울 알칸타라', '🇺🇸 네이선 와일스', '🇯🇵 카나쿠보 유토 (AQ)', '하영민', '정현우'],
        bullpen: {
            closer: '조영건',
            setup: ['김재웅', '김성진', '오석주'],
            middle: ['원종현', '박윤성'],
        },
    },
};
