'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';

interface CookieConsentContextType {
  consent: boolean | null;
  acceptCookies: () => void;
  declineCookies: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType>({
  consent: null,
  acceptCookies: () => {},
  declineCookies: () => {},
});

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<boolean | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent');
    if (stored === 'accepted') {
      setConsent(true);
    } else if (stored === 'declined') {
      setConsent(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setConsent(true);
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setConsent(false);
    setShowBanner(false);
  };

  return (
    <CookieConsentContext.Provider value={{ consent, acceptCookies, declineCookies }}>
      {children}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-md border-t-2 border-pink-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 text-sm text-gray-700">
              <p>
                이 웹사이트는 사용자 경험 향상과 광고 제공을 위해 쿠키를 사용합니다.
                자세한 내용은{' '}
                <Link href="/privacy" className="text-pink-500 underline hover:text-pink-600">
                  개인정보처리방침
                </Link>
                을 확인해주세요.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={declineCookies}
                className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                거부
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:from-pink-600 hover:to-purple-600 transition-colors shadow-md"
              >
                동의
              </button>
            </div>
          </div>
        </div>
      )}
    </CookieConsentContext.Provider>
  );
}
