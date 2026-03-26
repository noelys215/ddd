import { Rabbit } from "@phosphor-icons/react";
import React, { useState, useEffect } from "react";
import "../WhackAMole.css";
import { useNavigate } from "react-router-dom";
import { useAnalytics } from "../../../../../hooks/useAnalytics";
import { calculateNewSpeed, getRandomPosition } from "../logic/whackAMoleLogic";

const GRID_SIZE = 9;
const STARTING_SPEED = 1000;
const GAME_DURATION = 60;
const START_COUNTDOWN = 3;
type GamePhase = "idle" | "countdown" | "playing" | "gameover";

const WhackAMoleGame: React.FC = () => {
  const navigate = useNavigate();
  const { track } = useAnalytics();
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [rabbitPosition, setRabbitPosition] = useState<number>(-1);
  const [speed, setSpeed] = useState(STARTING_SPEED);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [countdown, setCountdown] = useState(START_COUNTDOWN);
  const [gamePhase, setGamePhase] = useState<GamePhase>("idle");
  const isPlaying = gamePhase === "playing";
  const isGameOver = gamePhase === "gameover";

  useEffect(() => {
    track("game_opened", {
      game_name: "whack_a_mole",
      source_path: "/mole",
    });
  }, [track]);

  useEffect(() => {
    if (!isPlaying) return;

    const rabbitInterval = setInterval(() => {
      moveRabbit();
    }, speed);

    return () => clearInterval(rabbitInterval);
  }, [isPlaying, speed]);

  useEffect(() => {
    if (gamePhase !== "countdown") return;

    if (countdown === 0) {
      setGamePhase("playing");
      setRabbitPosition(getRandomPosition(GRID_SIZE));
      return;
    }

    const countdownInterval = window.setTimeout(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => window.clearTimeout(countdownInterval);
  }, [countdown, gamePhase]);

  useEffect(() => {
    if (!isPlaying) return;

    if (timeLeft > 0) {
      const timerInterval = window.setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => window.clearInterval(timerInterval);
    }

    setGamePhase("gameover");
    setRabbitPosition(-1);
    setBestScore((prevBestScore) => Math.max(prevBestScore, score));
    track("game_round_completed", {
      game_name: "whack_a_mole",
      outcome: "timeout",
      final_score: score,
    });
  }, [isPlaying, score, timeLeft, track]);

  const moveRabbit = () => {
    const newPosition = getRandomPosition(GRID_SIZE);
    setRabbitPosition(newPosition);
  };

  const handleRabbitClick = () => {
    if (!isPlaying) return;

    setScore((prevScore) => {
      const nextScore = prevScore + 1;
      setBestScore((prevBestScore) => Math.max(prevBestScore, nextScore));
      return nextScore;
    });
    setSpeed((prevSpeed) => calculateNewSpeed(prevSpeed));
    setRabbitPosition(-1);
  };

  const handleMissClick = () => {
    if (!isPlaying) return;

    setScore((prevScore) => Math.max(0, prevScore - 1));
  };

  const startGame = () => {
    track(
      gamePhase === "idle" ? "game_round_started" : "game_round_restarted",
      {
        game_name: "whack_a_mole",
      },
    );
    setScore(0);
    setSpeed(STARTING_SPEED);
    setRabbitPosition(-1);
    setTimeLeft(GAME_DURATION);
    setCountdown(START_COUNTDOWN);
    setGamePhase("countdown");
  };

  const statusMessage =
    gamePhase === "countdown"
      ? `Summoning sequence: ${countdown}`
      : isPlaying
        ? "Strike when the rabbit breaches the tunnel."
        : isGameOver
          ? "Round complete. Reinitialize when ready."
          : "Press start to arm the grid.";

  const overlayLabel =
    gamePhase === "countdown"
      ? "Calibrating"
      : isGameOver
        ? "Round Over"
        : "Awaiting Signal";

  const overlayValue =
    gamePhase === "countdown" ? countdown : isGameOver ? "END" : "READY";

  const primaryButtonLabel =
    gamePhase === "countdown"
      ? `Starting in ${countdown}`
      : isPlaying
        ? "Restart Game"
        : isGameOver
          ? "Play Again"
          : "Start Game";

  return (
    <div className="w-full max-w-[430px] mx-auto flex flex-col items-center text-center">
      <div className="w-full mb-5 rounded-xl border border-white/15 bg-[linear-gradient(180deg,rgba(255,42,138,0.06),rgba(8,8,8,0.92))] p-4 shadow-[0_0_24px_rgba(255,42,138,0.08)]">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-md border border-white/15 bg-black/50 px-3 py-2">
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/45">
              Score
            </p>
            <p className="text-lg text-pink-400 high-score">{score}</p>
          </div>
          <div className="rounded-md border border-white/15 bg-black/50 px-3 py-2">
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/45">
              Time Left
            </p>
            <p
              className={`text-lg text-pink-400 high-score ${
                isGameOver ? "v-shake" : ""
              }`}
            >
              {timeLeft}
            </p>
          </div>
        </div>

        <div className="mt-3 rounded-md border border-pink-500/20 bg-black/40 px-3 py-2">
          <p className="text-[10px] uppercase tracking-[0.32em] text-pink-200/55">
            Best Signal
          </p>
          <p className="text-sm text-white/80 high-score">{bestScore}</p>
        </div>

        <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-pink-100/65">
          {statusMessage}
        </p>
      </div>

      <div className="relative w-full mb-4">
        <div
          className={`cybersigil-board grid grid-cols-3 gap-3 w-full aspect-square ${
            !isPlaying ? "pointer-events-none opacity-75" : ""
          }`}
        >
          {Array.from({ length: GRID_SIZE }, (_, index) => (
            <div
              key={index}
              onClick={rabbitPosition !== index ? handleMissClick : undefined}
              className={`cybersigil-tunnel ${
                rabbitPosition === index ? "is-active" : ""
              }`}
            >
              <div aria-hidden="true" className="cybersigil-tunnel__core" />
              {rabbitPosition === index && (
                <div onClick={handleRabbitClick} className="cybersigil-rabbit">
                  <Rabbit
                    weight="fill"
                    className="text-white w-12 h-12 shake"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="rounded-full border border-pink-500/45 bg-black/80 px-7 py-5 shadow-[0_0_30px_rgba(255,42,138,0.16)] backdrop-blur-sm">
              <p className="text-[10px] uppercase tracking-[0.34em] text-pink-100/55">
                {overlayLabel}
              </p>
              <p className="mt-2 text-2xl text-pink-300 high-score">
                {overlayValue}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center flex-wrap gap-4 mt-6">
        <button
          onClick={startGame}
          disabled={gamePhase === "countdown"}
          className="button-89 disabled:cursor-not-allowed disabled:opacity-45"
        >
          {primaryButtonLabel}
        </button>
        <button
          className="button-89"
          onClick={() => {
            track("game_exit_clicked", {
              game_name: "whack_a_mole",
              destination: "/",
            });
            navigate("/");
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default WhackAMoleGame;
