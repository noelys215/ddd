import React, { CSSProperties, useEffect, useRef } from "react";
import { isVideoMedia, type MediaItem } from "./media";

interface MediaAssetProps {
  media: MediaItem;
  className?: string;
  style?: CSSProperties;
  active?: boolean;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "async" | "auto" | "sync";
  preload?: "none" | "metadata" | "auto";
}

export const MediaAsset: React.FC<MediaAssetProps> = ({
  media,
  className,
  style,
  active = true,
  loading = "lazy",
  fetchPriority = "auto",
  decoding = "async",
  preload = "metadata",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isVideoMedia(media)) return;

    const video = videoRef.current;
    if (!video) return;

    if (active) {
      const playPromise = video.play();
      void playPromise?.catch(() => undefined);
      return;
    }

    video.pause();
    video.currentTime = 0;
  }, [active, media]);

  if (isVideoMedia(media)) {
    return (
      <video
        ref={videoRef}
        className={className}
        style={style}
        muted
        loop
        playsInline
        autoPlay={active}
        preload={preload}
        poster={media.poster}
        aria-label={media.alt}
      >
        {media.sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
      </video>
    );
  }

  return (
    <img
      src={media.src}
      alt={media.alt}
      className={className}
      style={style}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
    />
  );
};
