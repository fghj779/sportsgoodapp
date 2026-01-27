/**
 * 애플리케이션 전역 상수
 */

// 질문 ID 상수
export const QUESTION_IDS = {
  COLOR_PREFERENCE: 10,    // 색깔 선호도 질문
  WARDROBE_STYLE: 15,      // 옷장 스타일 질문
} as const;

// Rate Limiting 설정
export const RATE_LIMIT = {
  MAX_REQUESTS: 5,          // 최대 요청 횟수
  WINDOW_MS: 60 * 1000,     // 1분
} as const;

// API 설정
export const API_CONFIG = {
  GEMINI_MODEL: 'gemini-1.5-flash',  // 빠르고 저렴한 모델
  MAX_TOKENS: 500,
  TEMPERATURE: 0.8,
  TIMEOUT_MS: 30000,        // 30초 타임아웃
} as const;

// 캐시 설정
export const CACHE_CONFIG = {
  MATCH_RESULT_TTL: 60 * 60 * 24,  // 24시간
} as const;
