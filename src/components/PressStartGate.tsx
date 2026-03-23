import React from "react";
import { motion } from "framer-motion";

interface PressStartGateProps {
  onEnter: () => void;
}

const PressStartGate: React.FC<PressStartGateProps> = ({ onEnter }) => {
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
