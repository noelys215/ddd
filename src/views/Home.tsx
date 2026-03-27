import React, { useCallback, useEffect, useRef, useState } from "react";
import BioCard from "../components/BioCard";
import Layout from "../components/Layout";
import whomImage from "../assets/whom.jpeg";
import { useAnalytics } from "../hooks/useAnalytics";
import { AnimatePresence, motion } from "framer-motion";
import PressStartGate from "../components/PressStartGate";
import { useLocalEnvironment } from "../hooks/useLocalEnvironment";

const START_GATE_STORAGE_KEY = "portfolio_press_start_seen";
const START_GATE_EXIT_MS = 960;

type EntryPhase = "gate" | "transitioning" | "entered";

const getStartGateState = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.sessionStorage.getItem(START_GATE_STORAGE_KEY) === "1";
};

export const Home: React.FC = () => {
  const [phase, setPhase] = useState<EntryPhase>(() =>
    getStartGateState() ? "entered" : "gate",
  );
  const { track } = useAnalytics();
  const exitTimeoutRef = useRef<number | null>(null);
  const { city, weather, error } = useLocalEnvironment(phase === "entered");

  const locationMessage = city
    ? `Hi human in ${city}, nice to meet you!`
    : "Hi human, nice to meet you!";

  const enterSite = useCallback(
    (trigger: "pointer" | "keyboard") => {
      if (phase !== "gate") return;
      setPhase("transitioning");
      if (exitTimeoutRef.current !== null) {
        window.clearTimeout(exitTimeoutRef.current);
      }
      exitTimeoutRef.current = window.setTimeout(() => {
        setPhase("entered");
      }, START_GATE_EXIT_MS);

      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(START_GATE_STORAGE_KEY, "1");
      }
      track("start_gate_entered", {
        destination: "/",
        trigger,
      });
    },
    [phase, track],
  );

  useEffect(() => {
    return () => {
      if (exitTimeoutRef.current !== null) {
        window.clearTimeout(exitTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (phase === "entered") return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        enterSite("keyboard");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enterSite, phase]);

  const showStartGate = phase !== "entered";

  return (
    <Layout title="home">
      <section className="relative w-full max-w-5xl min-h-[68vh] md:min-h-[72vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.992, filter: "blur(8px)" }}
          animate={{
            opacity: phase === "entered" ? 1 : 0,
            y: phase === "entered" ? 0 : 22,
            scale: phase === "entered" ? 1 : 0.985,
            filter: phase === "entered" ? "blur(0px)" : "blur(10px)",
          }}
          transition={{
            duration: 0.82,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full flex justify-center"
        >
          <BioCard
            imageUrl={whomImage}
            name="Henry Betancourth"
            subtitle="Software Engineer"
            weather={weather}
            weatherError={error}
            githubUrl="https://github.com/noelys215"
            linkedinUrl="https://www.linkedin.com/in/henry-betancourth/"
            text={`${locationMessage} 
I'm a full-stack software engineer from Southern NJ who enjoys building clean, simple things that look cool and work even cooler.

JavaScript is my bread and butter (React and Next.js, oh yeah), but I'm language-flexible; give me a stack and I'll figure it out. I also enjoy backend work, with Spring Boot and AWS making regular appearances in my toolkit.

I'm always learning, always experimenting, and always trying to build something just a little bit better than the last thing.

So go ahead, click around and explore. There's plenty of nifty stuff here to geek out over.

[ Round and round the rabbits go—what happens next, only a click will show. ]`}
          />
        </motion.div>

        <AnimatePresence>
          {showStartGate && (
            <PressStartGate
              key="start-gate"
              onEnter={() => enterSite("pointer")}
            />
          )}
        </AnimatePresence>
      </section>
    </Layout>
  );
};
