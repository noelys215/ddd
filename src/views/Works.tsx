import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import MotionSection from "../components/MotionSection";
import { WorkGridItem } from "../components/WorkGridItem";
import CybersigilFrame from "../components/CybersigilFrame";
import SectionHeading from "../components/SectionHeading";
import { useAnalytics } from "../hooks/useAnalytics";
import type { MediaItem } from "../components/media";

import arbiterThumbMp4 from "../assets/works/arbiter/arbiter_home.mp4";
import arbiterThumbPoster from "../assets/works/arbiter/arbiter_home_poster.jpg";
import arbiterThumbWebm from "../assets/works/arbiter/arbiter_home.webm";
import modWorldwideThumbMp4 from "../assets/works/modworldwide/mod_thumb_animated.mp4";
import modWorldwideThumbPoster from "../assets/works/modworldwide/mod_thumb_animated_poster.jpg";
import modWorldwideThumbWebm from "../assets/works/modworldwide/mod_thumb_animated.webm";

const modWorldwideMedia: MediaItem = {
  kind: "video",
  alt: "Screenshot of MOD Worldwide",
  poster: modWorldwideThumbPoster,
  sources: [
    { src: modWorldwideThumbWebm, type: "video/webm" },
    { src: modWorldwideThumbMp4, type: "video/mp4" },
  ],
};
const arbiterThumbMedia: MediaItem = {
  kind: "video",
  alt: "Screenshot of Arbiter",
  poster: arbiterThumbPoster,
  sources: [
    { src: arbiterThumbWebm, type: "video/webm" },
    { src: arbiterThumbMp4, type: "video/mp4" },
  ],
};

export const Works: React.FC = () => {
  const { track } = useAnalytics();

  return (
    <Layout title="works">
      <MotionSection delay={0.1}>
        <CybersigilFrame
          className="rounded-md max-w-5xl w-full p-6 bg-black shadow-md mx-auto opacity-95"
          style={{ backgroundColor: "#101010" }}
          aria-labelledby="works-heading"
        >
          <nav aria-label="breadcrumb" className="mb-5 breadcrumb-font">
            <Link
              to="/"
              onClick={() => {
                track("breadcrumb_navigated", {
                  destination: "/",
                  context: "works",
                });
              }}
              className="text-pink-500 hover:underline cursor-pointer"
            >
              Home
            </Link>
            <span
              aria-hidden="true"
              className="mx-1 inline-block"
              style={{ color: "#ec4899" }}
            >
              /
            </span>
            <h1
              id="works-heading"
              className="inline-block text-white text-2xl font-medium"
            >
              Works
            </h1>
          </nav>

          <SectionHeading symbol="cross">Client Work</SectionHeading>

          <ul className="mb-8 space-y-6">
            <WorkGridItem
              title="MOD Worldwide"
              description="A modular publishing platform for an independent creative agency."
              stack="Next.js · React · TypeScript · Tailwind CSS"
              evidence="16 content-defined routes. 20+ reusable blocks. One publishing system."
              media={modWorldwideMedia}
              link="/works/modworldwide"
            />
          </ul>

          <SectionHeading symbol="plus">Personal Work</SectionHeading>

          <ul className="space-y-6">
            <WorkGridItem
              title="Arbiter"
              description="A realtime movie-night decision platform."
              stack="React · FastAPI · PostgreSQL · WebSockets"
              evidence="Server-owned state, synchronized voting, and 375 automated tests."
              media={arbiterThumbMedia}
              link="/works/arbiter"
            />
          </ul>
        </CybersigilFrame>
      </MotionSection>
    </Layout>
  );
};
