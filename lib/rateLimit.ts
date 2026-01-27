import { RATE_LIMIT } from './constants';

/**
 * 간단한 인메모리 Rate Limiter
 * 프로덕션에서는 Vercel KV나 Redis 사용 권장
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

export function rateLimit(identifier: string): { success: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  // 기존 엔트리가 없거나 윈도우가 만료됨
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT.WINDOW_MS,
    });
    return { success: true, remaining: RATE_LIMIT.MAX_REQUESTS - 1 };
  }

  // 요청 횟수 초과
  if (entry.count >= RATE_LIMIT.MAX_REQUESTS) {
    return { success: false, remaining: 0 };
  }

  // 요청 횟수 증가
  entry.count++;
  rateLimitMap.set(identifier, entry);

  return { success: true, remaining: RATE_LIMIT.MAX_REQUESTS - entry.count };
}

// 주기적으로 만료된 엔트리 정리 (메모리 누수 방지)
if (typeof window === 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitMap.entries()) {
      if (now > entry.resetAt) {
        rateLimitMap.delete(key);
      }
    }
  }, RATE_LIMIT.WINDOW_MS);
}
