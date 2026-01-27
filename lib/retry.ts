/**
 * 재시도 로직 (Exponential Backoff)
 */

interface RetryOptions {
  retries?: number;
  delay?: number;
  factor?: number;
  onRetry?: (attempt: number, error: Error) => void;
}

export async function retry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const {
    retries = 3,
    delay = 1000,
    factor = 2,
    onRetry,
  } = options;

  let lastError: Error;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;

      // 마지막 시도면 에러 throw
      if (attempt === retries) {
        throw lastError;
      }

      // 재시도 콜백
      if (onRetry) {
        onRetry(attempt + 1, lastError);
      }

      // Exponential Backoff
      const waitTime = delay * Math.pow(factor, attempt);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }

  throw lastError!;
}
