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

import { useGlitch } from "react-powerglitch";
import Text from "./Text";
import { Link, useNavigate } from "react-router-dom";
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
  const glitch = useGlitch();
  const [time, setTime] = useState<string>("");
  const [shouldStartInitialScramble, setShouldStartInitialScramble] =
    useState(false);
  const [isInitialNameScrambleDone, setIsInitialNameScrambleDone] =
    useState(false);
  const navigate = useNavigate();
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
    playOnMount: true,
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
    if (!isInitialNameScrambleDone || !loopNamePart) return;

    replayLoopingNameScramble();
    const loopInterval = setInterval(() => {
      replayLoopingNameScramble();
    }, 3200);

    return () => clearInterval(loopInterval);
  }, [isInitialNameScrambleDone, loopNamePart, replayLoopingNameScramble]);

  // Previous full-name looping scramble implementation (kept for rollback)
  /*
  const { ref: scrambledNameRef, replay: replayScramble } = useScramble({
    text: name || "",
    speed: 0.8,
    tick: 1,
    step: 1,
    scramble: 4,
    seed: 2,
    overflow: true,
    overdrive: true,
  });
  */
  // Previous typewriter implementation (kept for quick rollback)
  // const staticPart = name?.slice(0, -3);
  // const typewriterPart = name?.slice(-3);

  const trackButtonClick = (buttonName: string) => {
    track("home_cta_clicked", {
      button_name: buttonName,
      location: "bio_card",
    });
  };

  return (
    <CybersigilFrame
      className="rounded-md max-w-4xl w-full p-6 md:p-12 bg-black mx-auto opacity-95"
      style={{ backgroundColor: "#101010" }}
    >
      <header className="flex items-center justify-between mb-4">
        {/* Name/Title and Subtitle on the left */}
        <div className="flex-1 min-w-0">
          {/* Name/Title */}
          {/* <h1 id="bio-card-title" className="text-white text-lg font-semibold"> */}
          <h1
            id="bio-card-title"
            className="text-white text-sm md:text-xl font-semibold"
          >
            {!shouldStartInitialScramble ? (
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
            {/*
              Previous typewriter implementation (kept for quick rollback)
              <span>{staticPart}</span>
              <span style={{ display: "inline-block" }}>
                <Typewriter
                  options={{
                    strings: typewriterPart,
                    autoStart: true,
                    loop: true,
                    cursor: "_",
                    delay: 250,
                    deleteSpeed: 250,
                  }}
                />
              </span>
            */}
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
          <nav aria-label="Social Links" className="flex space-x-4 mt-2">
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-white hover:text-pink-400"
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
                className="text-white hover:text-pink-400"
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
                className="text-white hover:text-pink-400"
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
        <figure className="relative ml-3 sm:ml-4 shrink-0 self-center">
          <img
            src={imageUrl}
            alt={`Photo of ${name}`}
            className="object-cover rounded-full border-2 border-gray-200 w-[clamp(80px,32vw,147px)] h-[clamp(80px,32vw,147px)]"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            ref={glitch.ref}
          />
        </figure>
      </header>

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
            <Rabbit
              size={40}
              weight="fill"
              // onClick={() => navigate('/novella/calling')}
              className="rotate"
            />
          </Link>
        </div>
      </div>

      {/* Text Component */}
      <section aria-labelledby="bio-text">
        {text && <Text text={text} />}
      </section>

      {/* Buttons (added Experience button) */}
      <footer className="flex justify-center space-x-4 mt-6">
        <button
          onClick={() => {
            trackButtonClick("Works");
            navigate("/works");
          }}
          aria-label="Navigate to Works"
          className="button-89"
        >
          Works
        </button>
        <button
          onClick={() => {
            trackButtonClick("Experience");
            navigate("/experience");
          }}
          aria-label="Navigate to Experience"
          className="button-89"
        >
          Experience
        </button>
      </footer>
    </CybersigilFrame>
  );
};

export default BioCard;
