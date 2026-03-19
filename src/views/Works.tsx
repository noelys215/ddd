import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import MotionSection from "../components/MotionSection";
import { WorkGridItem } from "../components/WorkGridItem";
import CybersigilFrame from "../components/CybersigilFrame";
import { useAnalytics } from "../hooks/useAnalytics";

// Images
import modWorldwideThumb from "../assets/works/modworldwide/MOD_THUMB.png";

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
          <header className="mb-5">
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

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-white/20" />

            <span
              aria-hidden="true"
              className="text-pink-500 text-xl"
              style={{ textShadow: "0 0 6px rgba(255,42,138,0.35)" }}
            >
              †
            </span>

            <h2 className="text-white text-lg md:text-xl tracking-wide whitespace-nowrap">
              Client Work
            </h2>

            <span
              aria-hidden="true"
              className="text-pink-500 text-xl"
              style={{ textShadow: "0 0 6px rgba(255,42,138,0.35)" }}
            >
              †
            </span>

            <div className="flex-1 h-px bg-white/20" />
          </div>

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
              imageUrl={modWorldwideThumb}
              link="/works/modworldwide"
            />
          </div>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-white/20" />

            <span
              aria-hidden="true"
              className="text-pink-500 text-lg"
              style={{ textShadow: "0 0 6px rgba(255,42,138,0.35)" }}
            >
              ✛
            </span>

            <h2 className="text-white text-lg md:text-xl tracking-wide whitespace-nowrap">
              Personal Work
            </h2>

            <span
              aria-hidden="true"
              className="text-pink-500 text-lg"
              style={{ textShadow: "0 0 6px rgba(255,42,138,0.35)" }}
            >
              ✛
            </span>

            <div className="flex-1 h-px bg-white/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="list">
            <WorkGridItem
              title="Arbiter"
              description="A full-stack collaborative decision platform for group watch sessions."
              imageUrl={modWorldwideThumb}
              link="/works/arbiter"
            />

            {/* <WorkGridItem
              title="LiftLab"
              description="A companion app for the Stronger by Science weightlifting program."
              imageUrl={liftLabThumb}
              link="/works/liftlab"
            />
            <WorkGridItem
              title="Ro-Sham-Bo"
              description="A fun little rock-paper-scissor-spock game."
              imageUrl={roshamboThumb}
              href="https://spock-game.vercel.app/"
            />

            <WorkGridItem
              title="Percentage Calculator"
              description="Employee Coupon Percentage Calculator."
              imageUrl={calcThumb}
              href="https://coupon-henna.vercel.app/"
            />

            <WorkGridItem
              title="Gloria Fútbol"
              description="Soccer/futbol app with live scores, charts and tables."
              imageUrl={gloriaThumb}
              link="/works/gloria"
            /> */}
          </div>
        </CybersigilFrame>
      </MotionSection>
    </Layout>
  );
};
