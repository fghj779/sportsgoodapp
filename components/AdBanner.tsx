'use client';

import { useEffect } from 'react';
import { useCookieConsent } from './CookieConsent';

interface AdBannerProps {
  adSlot: string;
  adFormat?: string;
  fullWidth?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdBanner({ adSlot, adFormat = 'auto', fullWidth = true, className = '' }: AdBannerProps) {
  const { consent } = useCookieConsent();

  useEffect(() => {
    if (consent) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // AdSense not loaded yet
      }
    }
  }, [consent]);

  if (!consent) return null;

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3426882453514090"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidth ? 'true' : 'false'}
      />
    </div>
  );
}
