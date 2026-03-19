import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../../../components/Container";
import Layout from "../../../../components/Layout";
import MotionSection from "../../../../components/MotionSection";
import { useAnalytics } from "../../../../hooks/useAnalytics";
import rabbitSitting from "../../../../assets/rabbit_sitting.png";
import rabbitStanding from "../../../../assets/rabbit_standing.png";

type LightState = "red" | "green";

const ROUND_SECONDS = 30;
const BEST_PROGRESS_KEY = "rgl_best_progress";
const WIN_PROGRESS = 100;

const randomBetween = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getInitialBestProgress = (): number => {
  if (typeof window === "undefined") return 0;
  const value = Number.parseInt(
    window.localStorage.getItem(BEST_PROGRESS_KEY) ?? "0",
    10,
  );
  return Number.isNaN(value) ? 0 : value;
};

export const RedLightGreenLight: React.FC = () => {
  const navigate = useNavigate();
  const { track } = useAnalytics();
  const [light, setLight] = useState<LightState>("red");
  const [progress, setProgress] = useState(0);
  const [bestProgress, setBestProgress] = useState(getInitialBestProgress);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isStepping, setIsStepping] = useState(false);
  const [status, setStatus] = useState(
    "Tap MOVE only when the light is green.",
  );
  const progressRef = useRef(0);
  const stepTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    track("game_opened", {
      game_name: "red_light_green_light",
      source_path: "/maze",
    });
  }, [track]);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  const persistBestProgress = useCallback((value: number) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(BEST_PROGRESS_KEY, String(value));
  }, []);

  useEffect(() => {
    return () => {
      if (stepTimeoutRef.current !== null) {
        window.clearTimeout(stepTimeoutRef.current);
      }
    };
  }, []);

  const finishRound = useCallback(
    (reason: string, outcome: "win" | "timeout" | "red_light_move") => {
      if (stepTimeoutRef.current !== null) {
        window.clearTimeout(stepTimeoutRef.current);
        stepTimeoutRef.current = null;
      }
      setIsStepping(false);
      setIsPlaying(false);
      setIsGameOver(true);
      setStatus(reason);
      track("game_round_completed", {
        game_name: "red_light_green_light",
        outcome,
        final_progress: progressRef.current,
        seconds_remaining: timeLeft,
      });
      setBestProgress((prev) => {
        const nextBest = Math.max(prev, progressRef.current);
        if (nextBest !== prev) persistBestProgress(nextBest);
        return nextBest;
      });
    },
    [persistBestProgress, timeLeft, track],
  );

  const startGame = () => {
    setProgress(0);
    progressRef.current = 0;
    setTimeLeft(ROUND_SECONDS);
    setLight("green");
    setIsGameOver(false);
    setIsStepping(false);
    setIsPlaying(true);
    setStatus("Green light! Move forward.");
    track("game_round_started", {
      game_name: "red_light_green_light",
    });
  };

  useEffect(() => {
    if (!isPlaying || isGameOver) return;

    const timer = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          finishRound("Time's up.", "timeout");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isPlaying, isGameOver, finishRound]);

  useEffect(() => {
    if (!isPlaying || isGameOver) return;

    const delay =
      light === "green" ? randomBetween(700, 1450) : randomBetween(900, 1900);
    const timeout = window.setTimeout(() => {
      setLight((prev) => (prev === "green" ? "red" : "green"));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isPlaying, isGameOver, light]);

  const moveForward = () => {
    if (!isPlaying || isGameOver) return;

    if (light === "green") {
      if (stepTimeoutRef.current !== null) {
        window.clearTimeout(stepTimeoutRef.current);
      }
      setIsStepping(true);
      const step = randomBetween(8, 14);
      const nextProgress = Math.min(WIN_PROGRESS, progressRef.current + step);
      setProgress(nextProgress);
      progressRef.current = nextProgress;
      stepTimeoutRef.current = window.setTimeout(() => {
        setIsStepping(false);
      }, 180);
      if (nextProgress >= WIN_PROGRESS) {
        finishRound("You crossed the finish line.", "win");
      } else {
        setStatus("Good move.");
      }
      return;
    }

    finishRound("Red light! You moved too soon.", "red_light_move");
  };

  const lightBadgeClass =
    light === "green"
      ? "bg-emerald-500/20 text-emerald-300"
      : "bg-red-500/20 text-red-300";

  return (
    <Layout title="red_light_green_light">
      <Container opacity={95}>
        <MotionSection delay={0.2}>
          <section
            className="w-full max-w-2xl mx-auto text-center"
            aria-labelledby="rgl-title"
          >
            <h1
              id="rgl-title"
              className="text-white text-2xl sm:text-3xl font-semibold"
            >
              Red Light x Green Light
            </h1>
            <p className="text-gray-300 text-sm sm:text-base mt-2">
              Help the rabbit reach the finish line!
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm">
              <div className="rounded-md border border-white/20 bg-black/40 py-2">
                <p className="text-gray-400">Progress</p>
                <p className="text-pink-400 text-lg font-semibold">
                  {progress}%
                </p>
              </div>
              <div
                className={`rounded-md border border-white/20 py-2 ${lightBadgeClass}`}
              >
                <p className="text-gray-300">Light</p>
                <p className="text-lg font-semibold uppercase">{light}</p>
              </div>
              <div className="rounded-md border border-white/20 bg-black/40 py-2">
                <p className="text-gray-400">Time</p>
                <p className="text-white text-lg font-semibold">{timeLeft}s</p>
              </div>
            </div>

            <div className="mt-3 text-xs sm:text-sm text-gray-300">
              Best progress:{" "}
              <span className="text-pink-400 font-semibold">
                {bestProgress}%
              </span>
            </div>

            <div className="relative mt-4 w-full h-[48vw] min-h-[220px] max-h-[300px] rounded-xl border border-white/25 bg-black/50 overflow-hidden">
              <div
                className={`absolute inset-0 transition-colors duration-300 ${
                  light === "green" ? "bg-emerald-500/10" : "bg-red-500/10"
                }`}
              />
              <div className="absolute top-3 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-gray-200 bg-black/60 px-3 py-1 rounded-full border border-white/20">
                {status}
              </div>
              <div className="absolute top-1/2 left-1 -translate-y-1/2 -rotate-90 origin-center text-md tracking-[0.12em] text-gray-300">
                START
              </div>
              <div className="absolute top-1/2 right-1 -translate-y-1/2 rotate-90 origin-center text-md tracking-[0.12em] text-pink-300">
                FINISH
              </div>
              <div className="absolute inset-y-0 left-3 border-l border-dashed border-white/30" />
              <div className="absolute inset-y-0 right-3 border-l-2 border-dashed border-pink-400/70" />
              <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 border-t border-white/15" />
              <button
                type="button"
                onClick={moveForward}
                aria-label="Move rabbit"
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 p-0 bg-transparent active:scale-95 transition-[left,transform] duration-200"
                style={{
                  left: `${4 + progress * 0.92}%`,
                }}
              >
                <img
                  src={isStepping ? rabbitSitting : rabbitStanding}
                  alt={isStepping ? "Rabbit sitting" : "Rabbit standing"}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain select-none pointer-events-none brightness-0 invert"
                  draggable={false}
                />
              </button>
            </div>

            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={moveForward}
                disabled={!isPlaying || isGameOver}
                className="w-full sm:w-auto sm:min-w-[210px] px-6 py-3 rounded-md border border-pink-500/70 text-pink-300 bg-black/60 hover:bg-black/80 active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
              >
                MOVE
              </button>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <button onClick={startGame} className="button-89">
                {isPlaying ? "Restart" : isGameOver ? "Play Again" : "Start"}
              </button>
              <button
                className="button-89"
                onClick={() => {
                  track("game_exit_clicked", {
                    game_name: "red_light_green_light",
                    destination: "/",
                  });
                  navigate("/");
                }}
              >
                Go Home
              </button>
            </div>
          </section>
        </MotionSection>
      </Container>
    </Layout>
  );
};

export default RedLightGreenLight;
