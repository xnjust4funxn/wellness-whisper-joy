import { useEffect, useState } from "react";
import { motion } from "motion/react";

const BREATH_PHASES = ["Breathe in", "Hold", "Breathe out", "Rest"];
const CYCLE_SECONDS = 12.8;

export function HeroMotion() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setPhase((p) => (p + 1) % BREATH_PHASES.length),
      (CYCLE_SECONDS * 1000) / BREATH_PHASES.length,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]" aria-hidden>
      <motion.div
        className="absolute rounded-full blur-3xl mix-blend-screen"
        style={{ width: 260, height: 260, left: "8%", top: "10%", background: "oklch(0.78 0.12 300 / 0.45)" }}
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full blur-3xl mix-blend-screen"
        style={{ width: 220, height: 220, right: "6%", bottom: "8%", background: "oklch(0.72 0.14 175 / 0.5)" }}
        animate={{ x: [0, -25, 15, 0], y: [0, 15, -15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute rounded-full blur-2xl mix-blend-screen"
        style={{ width: 160, height: 160, left: "38%", top: "42%", background: "oklch(0.86 0.09 25 / 0.4)" }}
        animate={{ x: [0, 15, -20, 0], y: [0, -10, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          className="glass-strong rounded-full grid place-items-center"
          style={{ width: 180, height: 180 }}
          animate={{ scale: [1, 1.18, 1.18, 1, 1] }}
          transition={{ duration: CYCLE_SECONDS, repeat: Infinity, ease: "easeInOut", times: [0, 0.31, 0.5, 0.81, 1] }}
        >
          <motion.span
            key={phase}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-medium text-foreground/85"
          >
            {BREATH_PHASES[phase]}
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}
