import React, { useCallback } from "react";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Zoom from "react-medium-image-zoom";
import { useLocation } from "react-router-dom";
import "react-medium-image-zoom/dist/styles.css";
import { useAnalytics } from "../hooks/useAnalytics";

interface SliderProps {
  array: { src: string; alt: string }[];
  options?: EmblaOptionsType;
  width?: string; // Optional width for the image
  height?: string; // Optional height for the image
  analyticsLabel?: string;
}

export const Slider: React.FC<SliderProps> = ({
  array,
  width = "100%",
  analyticsLabel,
}) => {
  const location = useLocation();
  const { track } = useAnalytics();
  const analyticsContext = analyticsLabel || location.pathname;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Fade(),
  ]);

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

  return (
    <div className="slider-container w-full mx-auto relative">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3 md:gap-4">
        <button
          className="embla__prev text-[#ff2a8a] opacity-70 hover:opacity-100 transform-gpu motion-safe:hover:scale-105 transition-[opacity,transform] duration-300 ease-out text-2xl sm:text-3xl md:text-4xl font-bold leading-none"
          onClick={scrollPrev}
          aria-label="Previous slide"
          style={{
            textShadow: "0 0 6px rgba(255,42,138,0.4), 0 0 2px rgba(0,0,0,0.9)",
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
              <div className="embla__slide relative" key={item.src}>
                <Zoom>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-contain rounded-lg"
                    style={{ width: width, margin: "auto" }}
                    onClick={() =>
                      track("carousel_image_opened", {
                        image_index: index,
                        image_alt: item.alt,
                        context: analyticsContext,
                      })
                    }
                  />
                </Zoom>
              </div>
            ))}
          </div>
        </div>
        <button
          className="embla__next text-[#ff2a8a] opacity-70 hover:opacity-100 transform-gpu motion-safe:hover:scale-105 transition-[opacity,transform] duration-300 ease-out text-2xl sm:text-3xl md:text-4xl font-bold leading-none"
          onClick={scrollNext}
          aria-label="Next slide"
          style={{
            textShadow: "0 0 6px rgba(255,42,138,0.4), 0 0 2px rgba(0,0,0,0.9)",
          }}
        >
          <span aria-hidden="true" className="inline-flex items-center gap-1">
            <span className="text-[#ff2a8a]">⟡</span>
            <span className="text-[#ff2a8a]">▷</span>
          </span>
        </button>
      </div>
    </div>
  );
};
