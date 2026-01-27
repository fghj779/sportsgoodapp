// 질문 ID 상수
export const QUESTION_IDS = {
  COLOR_PREFERENCE: 10,
  WARDROBE_STYLE: 15,
} as const;

// Rate Limiting 설정
export const RATE_LIMIT = {
  MAX_REQUESTS: 3,
  WINDOW_MS: 60 * 1000,
} as const;

// OpenAI API 설정
export const API_CONFIG = {
  MODEL: 'gpt-4o-mini',
  MAX_TOKENS: 300,
  TEMPERATURE: 0.8,
  TIMEOUT_MS: 30000,
} as const;

// 캐시 설정
export const CACHE_CONFIG = {
  MATCH_RESULT_TTL: 60 * 60 * 24,
} as const;
