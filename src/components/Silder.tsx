import React, { useCallback, useEffect, useState } from "react";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { useAnalytics } from "../hooks/useAnalytics";
import { MediaAsset } from "./MediaAsset";
import { getMediaSourceKey, isVideoMedia, type MediaItem } from "./media";

interface SliderProps {
  array: MediaItem[];
  options?: EmblaOptionsType;
  width?: string; // Optional width for the image
  height?: string; // Optional height for the image
  analyticsLabel?: string;
}

const getNormalizedIndex = (index: number, length: number) =>
  ((index % length) + length) % length;

const getSlideIndexesToLoad = (selectedIndex: number, length: number) => {
  if (length === 0) return [];
  if (length === 1) return [0];

  return Array.from(
    new Set(
      [selectedIndex - 1, selectedIndex, selectedIndex + 1].map((index) =>
        getNormalizedIndex(index, length),
      ),
    ),
  );
};

export const Slider: React.FC<SliderProps> = ({
  array,
  options,
  width = "100%",
  height,
  analyticsLabel,
}) => {
  const location = useLocation();
  const { track } = useAnalytics();
  const analyticsContext = analyticsLabel || location.pathname;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 4, ...options },
    [Fade()],
  );

  useEffect(() => {
    setSelectedIndex(0);
    setLightboxIndex(null);
  }, [array]);

  useEffect(() => {
    if (typeof window === "undefined" || array.length === 0) return;

    const preloadImage = (src: string) => {
      const image = new Image();
      image.src = src;
      void image.decode?.().catch(() => undefined);
    };

    array.slice(0, 2).forEach((item) => {
      if (!isVideoMedia(item)) {
        preloadImage(item.src);
      }
    });

    const preloadRemaining = () => {
      array.slice(2).forEach((item) => {
        if (!isVideoMedia(item)) {
          preloadImage(item.src);
        }
      });
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(preloadRemaining, {
        timeout: 1200,
      });

      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(preloadRemaining, 250);
    return () => globalThis.clearTimeout(timeoutId);
  }, [array]);

  useEffect(() => {
    if (!emblaApi) return;

    const syncSelectedSlide = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    syncSelectedSlide();
    emblaApi.on("select", syncSelectedSlide);
    emblaApi.on("reInit", syncSelectedSlide);

    return () => {
      emblaApi.off("select", syncSelectedSlide);
      emblaApi.off("reInit", syncSelectedSlide);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (
      lightboxIndex === null ||
      typeof window === "undefined" ||
      array.length < 2
    ) {
      return;
    }

    const indexesToPreload = getSlideIndexesToLoad(lightboxIndex, array.length);
    indexesToPreload.forEach((index) => {
      const item = array[index];
      if (isVideoMedia(item)) return;

      const image = new Image();
      image.src = item.src;
      void image.decode?.().catch(() => undefined);
    });
  }, [array, lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null || typeof document === "undefined") return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setLightboxIndex(null);
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        const nextIndex = getNormalizedIndex(lightboxIndex - 1, array.length);
        setLightboxIndex(nextIndex);
        emblaApi?.scrollTo(nextIndex);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        const nextIndex = getNormalizedIndex(lightboxIndex + 1, array.length);
        setLightboxIndex(nextIndex);
        emblaApi?.scrollTo(nextIndex);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [array.length, emblaApi, lightboxIndex]);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (array.length === 0) return 0;

      const nextIndex = getNormalizedIndex(index, array.length);
      emblaApi?.scrollTo(nextIndex);
      setSelectedIndex(nextIndex);
      return nextIndex;
    },
    [array.length, emblaApi],
  );

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    track("carousel_navigated", {
      direction: "previous",
      item_count: array.length,
      context: analyticsContext,
    });
  }, [analyticsContext, array.length, emblaApi, track]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    track("carousel_navigated", {
      direction: "next",
      item_count: array.length,
      context: analyticsContext,
    });
  }, [analyticsContext, array.length, emblaApi, track]);

  const openLightbox = useCallback(
    (index: number) => {
      const nextIndex = scrollToIndex(index);
      setLightboxIndex(nextIndex);
      track("carousel_image_opened", {
        image_index: nextIndex,
        image_alt: array[nextIndex]?.alt,
        context: analyticsContext,
      });
    },
    [analyticsContext, array, scrollToIndex, track],
  );

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const navigateLightbox = useCallback(
    (direction: -1 | 1) => {
      if (lightboxIndex === null || array.length === 0) return;

      const nextIndex = scrollToIndex(lightboxIndex + direction);
      setLightboxIndex(nextIndex);
      track("carousel_lightbox_navigated", {
        direction: direction < 0 ? "previous" : "next",
        image_index: nextIndex,
        image_alt: array[nextIndex]?.alt,
        context: analyticsContext,
      });
    },
    [analyticsContext, array, lightboxIndex, scrollToIndex, track],
  );

  const activeLightboxItem =
    lightboxIndex === null ? null : (array[lightboxIndex] ?? null);
  const activeLightboxPosition = lightboxIndex === null ? 0 : lightboxIndex + 1;

  return (
    <>
      <div className="slider-container w-full mx-auto relative">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3 md:gap-4">
          <button
            className="embla__prev text-[#ff2a8a] opacity-70 hover:opacity-100 transform-gpu motion-safe:hover:scale-105 transition-[opacity,transform] duration-300 ease-out text-2xl sm:text-3xl md:text-4xl font-bold leading-none"
            onClick={scrollPrev}
            aria-label="Previous slide"
            style={{
              textShadow:
                "0 0 6px rgba(255,42,138,0.4), 0 0 2px rgba(0,0,0,0.9)",
            }}
          >
            <span aria-hidden="true" className="inline-flex items-center gap-1">
              <span className="text-[#ff2a8a]">◁</span>
              <span className="text-[#ff2a8a]">⟡</span>
            </span>
          </button>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {array.map((item, index) => (
                <div
                  className="embla__slide relative"
                  key={getMediaSourceKey(item)}
                >
                  <button
                    type="button"
                    className="block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2a8a]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg"
                    onClick={() => openLightbox(index)}
                    aria-label={`Open ${isVideoMedia(item) ? "media" : "image"} ${index + 1} of ${array.length}: ${item.alt}`}
                  >
                    <MediaAsset
                      media={item}
                      className="w-full object-contain rounded-lg"
                      style={{ width, height, margin: "auto" }}
                      active={index === selectedIndex}
                      loading={
                        index === 0 || index === selectedIndex
                          ? "eager"
                          : "lazy"
                      }
                      fetchPriority={index === 0 ? "high" : "auto"}
                      decoding="async"
                      preload={
                        index === 0 || index === selectedIndex
                          ? "auto"
                          : "metadata"
                      }
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button
            className="embla__next text-[#ff2a8a] opacity-70 hover:opacity-100 transform-gpu motion-safe:hover:scale-105 transition-[opacity,transform] duration-300 ease-out text-2xl sm:text-3xl md:text-4xl font-bold leading-none"
            onClick={scrollNext}
            aria-label="Next slide"
            style={{
              textShadow:
                "0 0 6px rgba(255,42,138,0.4), 0 0 2px rgba(0,0,0,0.9)",
            }}
          >
            <span aria-hidden="true" className="inline-flex items-center gap-1">
              <span className="text-[#ff2a8a]">⟡</span>
              <span className="text-[#ff2a8a]">▷</span>
            </span>
          </button>
        </div>
      </div>
      {activeLightboxItem && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm"
              role="dialog"
              aria-modal="true"
              aria-label="Media gallery lightbox"
              onClick={closeLightbox}
            >
              <div className="relative flex h-full w-full items-center justify-center px-4 py-6 sm:px-8">
                <button
                  type="button"
                  className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/70 px-4 py-2 text-sm uppercase tracking-[0.2em] text-white/85 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2a8a]/80"
                  aria-label="Close lightbox"
                  onClick={closeLightbox}
                >
                  Close
                </button>

                {array.length > 1 ? (
                  <button
                    type="button"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/70 px-3 py-4 text-2xl text-[#ff2a8a] transition-all hover:scale-105 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2a8a]/80 sm:left-6"
                    aria-label="Previous image"
                    onClick={(event) => {
                      event.stopPropagation();
                      navigateLightbox(-1);
                    }}
                  >
                    ◁
                  </button>
                ) : null}

                <figure
                  className="flex max-h-full max-w-[min(92vw,1200px)] flex-col items-center gap-4"
                  onClick={(event) => event.stopPropagation()}
                >
                  <MediaAsset
                    media={activeLightboxItem}
                    className="max-h-[82vh] w-auto max-w-full rounded-lg object-contain shadow-[0_0_40px_rgba(0,0,0,0.4)]"
                    active
                    preload="auto"
                  />
                  <figcaption className="text-center text-sm text-white/72">
                    {activeLightboxItem.alt}
                    {array.length > 1
                      ? ` (${activeLightboxPosition}/${array.length})`
                      : ""}
                  </figcaption>
                </figure>

                {array.length > 1 ? (
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/70 px-3 py-4 text-2xl text-[#ff2a8a] transition-all hover:scale-105 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2a8a]/80 sm:right-6"
                    aria-label="Next image"
                    onClick={(event) => {
                      event.stopPropagation();
                      navigateLightbox(1);
                    }}
                  >
                    ▷
                  </button>
                ) : null}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
};
