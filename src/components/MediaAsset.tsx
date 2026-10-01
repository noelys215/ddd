import React, { CSSProperties, useEffect, useRef } from "react";
import { isVideoMedia, type MediaItem } from "./media";

import { useReducedMotion } from "../hooks/useReducedMotion";

interface MediaAssetProps {
  media: MediaItem;
  className?: string;
  style?: CSSProperties;
  active?: boolean;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "async" | "auto" | "sync";
  preload?: "none" | "metadata" | "auto";
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
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
  onLoad,
}) => {
  const reducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isVideoMedia(media)) return;

    const video = videoRef.current;
    if (!video) return;

    if (active && !reducedMotion) {
      const playPromise = video.play();
      void playPromise?.catch(() => undefined);
      return;
    }

    video.pause();
    video.currentTime = 0;
  }, [active, media, reducedMotion]);

  if (isVideoMedia(media)) {
    return (
      <video
        ref={videoRef}
        width={media.width}
        height={media.height}
        className={className}
        style={style}
        muted
        loop
        playsInline
        autoPlay={active && !reducedMotion}
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
      width={media.width}
      height={media.height}
      alt={media.alt}
      className={className}
      style={style}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
      onLoad={onLoad}
    />
  );
};
