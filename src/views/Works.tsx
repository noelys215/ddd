import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { track } = useAnalytics();

  return (
    <Layout title="works">
      <MotionSection delay={0.1}>
        <CybersigilFrame
          className="rounded-md max-w-5xl w-full p-6 bg-black shadow-md mx-auto opacity-95"
          style={{ backgroundColor: "#101010" }}
          aria-labelledby="works-heading"
        >
          <header className="mb-5 breadcrumb-font">
            <a
              onClick={() => {
                track("breadcrumb_navigated", {
                  destination: "/",
                  context: "works",
                });
                navigate("/");
              }}
              className="text-pink-500 hover:underline cursor-pointer"
            >
              Home
            </a>
            <span
              aria-hidden="true"
              className="mx-1 inline-block"
              style={{ color: "#ec4899" }}
            >
              /
            </span>
            <h1 className="inline-block text-white text-2xl font-medium">
              Works
            </h1>
          </header>

          <SectionHeading symbol="cross">Client Work</SectionHeading>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
            role="list"
          >
            {/* <WorkGridItem
              title="Atalanta A.C."
              description="A semi-modern athletic clothing e-commerce store."
              imageUrl={atalantaThumb}
              link="/works/atalanta"
            /> */}

            <WorkGridItem
              title="MOD Worldwide"
              description="Official MOD portfolio platform with JSON-driven pages and high-end motion."
              media={modWorldwideMedia}
              link="/works/modworldwide"
            />
          </div>

          <SectionHeading symbol="plus">Personal Work</SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="list">
            <WorkGridItem
              title="Arbiter"
              description="Real-time collaborative decision platform with dynamic card-based UI and session-based interactions for group watch experiences."
              media={arbiterThumbMedia}
              link="/works/arbiter"
            />
          </div>
        </CybersigilFrame>
      </MotionSection>
    </Layout>
  );
};
