'use client';

import { useEffect, useRef, useCallback } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  startTime?: number;
}

interface YTPlayer {
  playVideo: () => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  setVolume: (volume: number) => void;
  destroy: () => void;
}

let apiLoaded = false;
let apiReady = false;
const readyCallbacks: (() => void)[] = [];

function loadYouTubeAPI(callback: () => void) {
  if (apiReady) {
    callback();
    return;
  }
  readyCallbacks.push(callback);
  if (!apiLoaded) {
    apiLoaded = true;
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
    (window as Window).onYouTubeIframeAPIReady = () => {
      apiReady = true;
      readyCallbacks.forEach((cb) => cb());
      readyCallbacks.length = 0;
    };
  }
}

export default function YouTubeEmbed({ videoId, startTime = 0 }: YouTubeEmbedProps) {
  const playerRef = useRef<YTPlayer | null>(null);
  const containerIdRef = useRef(`yt-karaoke-${Math.random().toString(36).slice(2, 9)}`);

  const initPlayer = useCallback(() => {
    if (!videoId) return;
    if (playerRef.current) {
      try { playerRef.current.destroy(); } catch { /* noop */ }
      playerRef.current = null;
    }

    playerRef.current = new (window as Window).YT.Player(containerIdRef.current, {
      videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        start: startTime,
        controls: 1,
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
      },
      events: {
        onReady: (event: { target: YTPlayer }) => {
          event.target.unMute();
          event.target.setVolume(80);
          event.target.playVideo();
        },
      },
    });
  }, [videoId, startTime]);

  useEffect(() => {
    loadYouTubeAPI(() => {
      initPlayer();
    });
    return () => {
      if (playerRef.current) {
        try { playerRef.current.destroy(); } catch { /* noop */ }
        playerRef.current = null;
      }
    };
  }, [initPlayer]);

  return (
    <div className="space-y-3">
      <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
        <div id={containerIdRef.current} className="w-full h-full" />
      </div>
    </div>
  );
}
