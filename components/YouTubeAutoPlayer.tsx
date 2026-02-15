'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

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
  const [isMuted, setIsMuted] = useState(true);
  const [isReady, setIsReady] = useState(false);

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
          setIsReady(true);
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

  const handleToggleMute = () => {
    if (!playerRef.current) return;

    if (isMuted) {
      playerRef.current.unMute();
      playerRef.current.setVolume(80);
      playerRef.current.playVideo();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  if (!videoId) return null;

  return (
    <div className="space-y-3">
      <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-black">
        <div id={containerIdRef.current} className="w-full h-full" />
      </div>

      {/* 소리 켜기/끄기 버튼 */}
      {isReady && (
        <button
          onClick={handleToggleMute}
          className="w-full py-3 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          style={{
            backgroundColor: isMuted ? teamColor : '#6b7280',
          }}
        >
          {isMuted ? (
            <>
              <Volume2 size={20} />
              소리 켜기 🔊
            </>
          ) : (
            <>
              <VolumeX size={20} />
              음소거
            </>
          )}
        </button>
      )}
    </div>
  );
}
