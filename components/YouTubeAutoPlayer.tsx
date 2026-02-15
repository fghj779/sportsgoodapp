'use client';

import { useEffect, useRef, useCallback } from 'react';

interface YouTubeAutoPlayerProps {
  videoUrl: string;
  teamColor?: string;
}

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: Record<string, (event: { target: YTPlayer }) => void>;
        }
      ) => YTPlayer;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  setVolume: (volume: number) => void;
  destroy: () => void;
}

function extractVideoId(url: string): string {
  const match = url.match(/(?:v=|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : '';
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

    window.onYouTubeIframeAPIReady = () => {
      apiReady = true;
      readyCallbacks.forEach((cb) => cb());
      readyCallbacks.length = 0;
    };
  }
}

export default function YouTubeAutoPlayer({ videoUrl, teamColor = '#ec4899' }: YouTubeAutoPlayerProps) {
  const playerRef = useRef<YTPlayer | null>(null);
  const containerIdRef = useRef(`yt-player-${Math.random().toString(36).slice(2, 9)}`);

  const videoId = extractVideoId(videoUrl);

  const initPlayer = useCallback(() => {
    if (!videoId) return;

    // 기존 플레이어가 있으면 제거
    if (playerRef.current) {
      try { playerRef.current.destroy(); } catch {}
      playerRef.current = null;
    }

    playerRef.current = new window.YT.Player(containerIdRef.current, {
      videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
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
  }, [videoId]);

  useEffect(() => {
    loadYouTubeAPI(() => {
      initPlayer();
    });

    return () => {
      if (playerRef.current) {
        try { playerRef.current.destroy(); } catch {}
        playerRef.current = null;
      }
    };
  }, [initPlayer]);

  if (!videoId) return null;

  return (
    <div className="space-y-3">
      <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-black">
        <div id={containerIdRef.current} className="w-full h-full" />
      </div>
    </div>
  );
}
