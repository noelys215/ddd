import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import evilEyeVideo from "../assets/videos/evil_eye_2.mp4";
import Noise from "./Noise";

interface PressStartGateProps {
  onEnter: () => void;
}

const PressStartGate: React.FC<PressStartGateProps> = ({ onEnter }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = 0.52;
  }, []);

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        filter: "blur(12px)",
        scale: 1.015,
      }}
      transition={{
        duration: 0.88,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="start-gate-overlay"
      aria-label="Start gate"
    >
      <video
        ref={videoRef}
        className="start-gate-video"
        src={evilEyeVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="start-gate-static-overlay" aria-hidden="true">
        <Noise opacity={0.13} speed={0.04} scale={1.3} color="#ffffff" />
      </div>
      <div className="start-gate-video-scrim" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 1.03 }}
        transition={{
          duration: 0.7,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="start-gate-shell"
      >
        <p className="start-gate-system-line uppercase">
          [ POST-HUMAN PORTFOLIO ]
        </p>
        <button
          type="button"
          onClick={onEnter}
          className="start-gate-trigger font-custom uppercase"
          aria-label="Press Start"
        >
          PRESS START
        </button>
        <p className="start-gate-hint">[ CLICK OR PRESS ENTER ]</p>
      </motion.div>
    </motion.section>
  );
};

export default PressStartGate;
