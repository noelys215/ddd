import React from "react";
import { useNavigate } from "react-router-dom";
import { useAnalytics } from "../hooks/useAnalytics";
import { MediaAsset } from "./MediaAsset";
import type { MediaItem } from "./media";

interface WorkGridItemProps {
  title: string;
  description: string;
  media?: MediaItem;
  link?: string;
  href?: string;
}

export const WorkGridItem: React.FC<WorkGridItemProps> = ({
  title,
  description,
  media,
  link,
  href,
}) => {
  const navigate = useNavigate();
  const { track } = useAnalytics();

  const handleNavigation = () => {
    if (link) {
      track("work_card_opened", {
        work_title: title,
        destination_type: "internal",
        destination: link,
      });
      navigate(link);
    }
  };

  return (
    <article
      className="p-6 bg-black rounded-lg"
      style={{ backgroundColor: "#101010" }}
      aria-labelledby={`${title}-title`}
      role="button"
      onClick={handleNavigation}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleNavigation()}
    >
      <a
        href={href || "#"}
        onClick={(e) => {
          if (href) {
            track("work_card_opened", {
              work_title: title,
              destination_type: "external",
              destination: href,
            });
          }
          if (!href) e.preventDefault();
        }}
        rel="noopener noreferrer"
        target={href ? "_blank" : "_self"}
        className="block text-center"
        aria-label={`Learn more about ${title}`}
      >
        <figure>
          {media ? (
            <MediaAsset
              media={media}
              className="object-cover w-full h-48 rounded-lg mb-4 transition-[filter] duration-500 ease-out hover:blur-[1px] focus-visible:blur-[1px]"
              loading="lazy"
              decoding="async"
              preload="metadata"
            />
          ) : null}
        </figure>

        <h2
          id={`${title}-title`}
          className="text-white text-lg font-semibold mb-2"
        >
          {title}
        </h2>

        <div className="relative mb-4">
          <hr className="border-gray-400 w-4/5 mx-auto" aria-hidden="true" />
        </div>

        <p className="text-gray-300 text-md">{description}</p>
      </a>
    </article>
  );
};
