"use client";
import React from "react";

interface IframePlayerProps {
  url: string;
}

export const IframePlayer: React.FC<IframePlayerProps> = ({ url }) => {
  let videoId: string | null = null;
  try {
    const parsedUrl = new URL(url);
    videoId = parsedUrl.searchParams.get("v");
  } catch {
    videoId = null;
  }

  if (!videoId) return <div>Invalid YouTube URL</div>;

  return (
    <div className="relative aspect-video">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
