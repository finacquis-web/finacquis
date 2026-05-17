import { useScroll, useSpring, motion } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-[#E8B53C] origin-left pointer-events-none"
      style={{ scaleX }}
    />
  );
}
