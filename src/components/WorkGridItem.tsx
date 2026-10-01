import React from "react";
import { Link } from "react-router-dom";
import { useAnalytics } from "../hooks/useAnalytics";
import { MediaAsset } from "./MediaAsset";
import type { MediaItem } from "./media";

interface WorkGridItemProps {
  title: string;
  description: string;
  media?: MediaItem;
  link: string;
  stack: string;
  evidence: string;
}

export const WorkGridItem: React.FC<WorkGridItemProps> = ({
  title,
  description,
  media,
  link,
  stack,
  evidence,
}) => {
  const { track } = useAnalytics();

  return (
    <li className="min-w-0">
      <Link
        to={link}
        onClick={() =>
          track("work_card_opened", {
            work_title: title,
            destination_type: "internal",
            destination: link,
          })
        }
        aria-label={`Explore ${title} case study`}
        className="group grid min-w-0 items-center gap-6 rounded-lg border border-white/10 bg-white/[0.015] p-4 transition-colors hover:border-pink-500/45 hover:bg-pink-500/[0.025] sm:p-6 md:grid-cols-2 md:gap-8"
      >
        {media && (
          <figure className="min-w-0 overflow-hidden rounded-md border border-white/10 bg-black">
            <MediaAsset
              media={media}
              className="aspect-video w-full object-cover"
              loading="lazy"
              preload="metadata"
            />
          </figure>
        )}
        <div className="min-w-0">
          <h2 className="text-xl font-semibold leading-snug text-white md:text-2xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-300">
            {description}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/60">{stack}</p>
          <p className="mt-4 border-l border-pink-500/50 pl-3 text-sm leading-relaxed text-white/80">
            {evidence}
          </p>
          <span className="mt-6 inline-flex min-h-11 items-center !text-pink-400 underline-offset-4 group-hover:underline">
            Explore case study ↗
          </span>
        </div>
      </Link>
    </li>
  );
};
