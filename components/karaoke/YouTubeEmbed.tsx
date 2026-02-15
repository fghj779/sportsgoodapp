'use client';

interface YouTubeEmbedProps {
  videoId: string;
  startTime?: number;
}

export default function YouTubeEmbed({ videoId, startTime = 0 }: YouTubeEmbedProps) {
  const params = new URLSearchParams({
    start: startTime.toString(),
    modestbranding: '1',
    rel: '0',
    playsinline: '1',
  });

  return (
    <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?${params.toString()}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
