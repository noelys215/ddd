import {
  GithubLogo,
  LinkedinLogo,
  // SmileyMelting,
  SmileySad,
  Sun,
  Cloud,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudFog,
  Rabbit,
  Envelope,
} from "@phosphor-icons/react";

import React, { useState, useEffect } from "react";

import { useReducedMotion } from "../hooks/useReducedMotion";
import { useGlitch } from "react-powerglitch";
import Text from "./Text";
import { Link } from "react-router-dom";
import { useScramble } from "use-scramble";
import CybersigilFrame from "./CybersigilFrame";
import { useAnalytics } from "../hooks/useAnalytics";
import type { WeatherData } from "../hooks/useLocalEnvironment";
// import Typewriter from "typewriter-effect";

interface BioCardProps {
  imageUrl?: string;
  name?: string;
  subtitle?: string;
  text?: string;
  weather?: WeatherData | null;
  weatherError?: string | null;
  linkedinUrl?: string;
  githubUrl?: string;
}

const BioCard: React.FC<BioCardProps> = ({
  imageUrl,
  name,
  subtitle,
  text,
  weather,
  weatherError,
  linkedinUrl,
  githubUrl,
}) => {
  const reducedMotion = useReducedMotion();
  const glitch = useGlitch({
    playMode: "manual",
    timing: { duration: 2000, iterations: Infinity },
    glitchTimeSpan: { start: 0.5, end: 0.7 },
  });
  const { startGlitch, stopGlitch } = glitch;

  useEffect(() => {
    if (reducedMotion) stopGlitch();
    else startGlitch();
    return stopGlitch;
  }, [reducedMotion, startGlitch, stopGlitch]);
  const [time, setTime] = useState<string>("");
  const [shouldStartInitialScramble, setShouldStartInitialScramble] =
    useState(false);
  const [isInitialNameScrambleDone, setIsInitialNameScrambleDone] =
    useState(false);
  const { track } = useAnalytics();
  const weatherDescription = weather
    ? weather.description
    : weatherError
      ? "weather unavailable..."
      : null;
  const weatherMain = weather?.main ?? null;

  const getWeatherIcon = (main: string) => {
    switch (main) {
      case "Thunderstorm":
        return (
          <CloudLightning size={24} weight="fill" className="ml-2 text-white" />
        );
      case "Drizzle":
      case "Rain":
        return (
          <CloudRain size={24} weight="fill" className="ml-2 text-white" />
        );
      case "Snow":
        return (
          <CloudSnow size={24} weight="fill" className="ml-2 text-white" />
        );
      case "Atmosphere": // mist, smoke, haze, etc.
        return <CloudFog size={24} weight="fill" className="ml-2 text-white" />;
      case "Clear":
        return <Sun size={24} weight="fill" className="ml-2" />;
      case "Clouds":
        return <Cloud size={24} weight="fill" className="ml-2 text-gray-400" />;
      default:
        return null;
    }
  };

  // Function to get current time in 24-hour format
  const getTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  // useEffect to update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const fullName = name || "";
  const loopNamePart = fullName.length > 4 ? fullName.slice(-3) : fullName;
  const staticNamePart = fullName.length > 4 ? fullName.slice(0, -3) : "";

  const { ref: fullNameScrambleRef } = useScramble({
    text: fullName,
    speed: 0.5,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 4,
    range: [8704, 8959],
    playOnMount: !reducedMotion,
    onAnimationEnd: () => setIsInitialNameScrambleDone(true),
  });

  const { ref: loopingNameScrambleRef, replay: replayLoopingNameScramble } =
    useScramble({
      text: loopNamePart,
      speed: 0.45,
      tick: 1,
      step: 1,
      scramble: 5,
      seed: 4,
      range: [8704, 8959],
      playOnMount: false,
      overdrive: true,
    });

  useEffect(() => {
    setIsInitialNameScrambleDone(false);
    setShouldStartInitialScramble(false);
    const startDelayTimeout = setTimeout(() => {
      setShouldStartInitialScramble(true);
    }, 850);

    return () => clearTimeout(startDelayTimeout);
  }, [fullName]);

  useEffect(() => {
    if (reducedMotion || !isInitialNameScrambleDone || !loopNamePart) return;

    replayLoopingNameScramble();
    const loopInterval = setInterval(() => {
      replayLoopingNameScramble();
    }, 3200);

    return () => clearInterval(loopInterval);
  }, [
    reducedMotion,
    isInitialNameScrambleDone,
    loopNamePart,
    replayLoopingNameScramble,
  ]);

  const trackButtonClick = (buttonName: string) => {
    track("home_cta_clicked", {
      button_name: buttonName,
      location: "bio_card",
    });
  };

  const portfolioLinks = (
    <>
      <Link
        to="/works"
        onClick={() => trackButtonClick("Works")}
        className="button-89 inline-flex items-center justify-center"
      >
        Works
      </Link>
      <Link
        to="/experience"
        onClick={() => trackButtonClick("Experience")}
        className="button-89 inline-flex items-center justify-center"
      >
        Experience
      </Link>
    </>
  );

  return (
    <CybersigilFrame
      className="rounded-md max-w-4xl w-full p-6 md:p-12 bg-black mx-auto opacity-95"
      style={{ backgroundColor: "#101010" }}
    >
      <header className="flex flex-col-reverse items-start justify-between gap-5 mb-4 sm:flex-row sm:items-center">
        {/* Name/Title and Subtitle on the left */}
        <div className="flex-1 min-w-0">
          {/* Name/Title */}
          <h1
            id="bio-card-title"
            aria-label={fullName}
            className="text-white text-sm md:text-xl font-semibold whitespace-nowrap"
          >
            {reducedMotion || !shouldStartInitialScramble ? (
              <span>{fullName}</span>
            ) : !isInitialNameScrambleDone ? (
              <span ref={fullNameScrambleRef} />
            ) : (
              <>
                <span>{staticNamePart}</span>
                <span
                  style={{ display: "inline-block" }}
                  ref={loopingNameScrambleRef}
                />
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-sm">{subtitle}</p>
          {/* 24-hour Clock and Weather */}
          <p className="text-gray-300 text-sm mt-1 flex flex-wrap items-center gap-1.5">
            <span>{time}</span>
            {weatherDescription && (
              <>
                <span className="hidden md:inline"> | </span>
                {/* Show pipe on medium screens and above */}
                <span className="flex items-center lowercase">
                  {/* Keeps description and icon inline */}
                  {weatherDescription}
                  {weatherMain && getWeatherIcon(weatherMain)}
                  {!weather && <SmileySad size={24} className="ml-1" />}
                  {/* Icon stays next to description */}
                </span>
              </>
            )}
          </p>

          {/* Social Links (now under subtitle) */}
          <nav aria-label="Social Links" className="flex gap-1 mt-2 -ml-2">
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded text-white hover:text-pink-400"
                onClick={() =>
                  track("home_social_clicked", {
                    destination: linkedinUrl,
                    social_platform: "linkedin",
                  })
                }
              >
                <LinkedinLogo size={24} weight="fill" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded text-white hover:text-pink-400"
                onClick={() =>
                  track("home_social_clicked", {
                    destination: githubUrl,
                    social_platform: "github",
                  })
                }
              >
                <GithubLogo size={24} weight="fill" />
              </a>
            )}
            {
              <a
                href="mailto:betanch@gmail.com?subject=A%20message%20from%20the%20digital%20void!&body=Hmm…%20what%20to%20write…%20oh!%20Hi%20Found%20your%20website,%20so%20now%20I’m%20here!"
                aria-label="Send Email"
                className="inline-flex h-11 w-11 items-center justify-center rounded text-white hover:text-pink-400"
                onClick={() =>
                  track("home_social_clicked", {
                    destination: "mailto:betanch@gmail.com",
                    social_platform: "email",
                  })
                }
              >
                <Envelope size={24} weight="duotone" />
              </a>
            }
          </nav>
        </div>

        {/* Image on the top right */}
        <figure className="relative shrink-0 sm:ml-4 sm:self-center">
          <img
            src={imageUrl}
            alt={`Photo of ${name}`}
            className="object-cover rounded-full border-2 border-gray-200 w-20 h-20 sm:w-[147px] sm:h-[147px]"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            ref={glitch.ref}
          />
        </figure>
      </header>

      <nav
        aria-label="Explore portfolio"
        className="mb-8 mt-6 flex flex-wrap justify-center gap-3 sm:hidden"
      >
        {portfolioLinks}
      </nav>

      {/* Horizontal Line - Rabbit */}
      <div className="relative mb-4">
        <hr className="border-gray-400 w-4/5 mx-auto" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 flex justify-center -mt-5">
          <Link
            to="/maze"
            aria-label="Play rabbit game"
            className="text-white hover:text-pink-400 transition-colors duration-200"
            onClick={() =>
              track("home_game_entry_clicked", {
                destination: "/maze",
                entry_point: "bio_rabbit",
              })
            }
          >
            <Rabbit size={40} weight="fill" className="rotate" />
          </Link>
        </div>
      </div>

      {/* Text Component */}
      <section aria-label="About Henry">{text && <Text text={text} />}</section>

      <nav
        aria-label="Explore portfolio"
        className="mt-6 hidden flex-wrap justify-center gap-4 sm:flex"
      >
        {portfolioLinks}
      </nav>
    </CybersigilFrame>
  );
};

export default BioCard;
