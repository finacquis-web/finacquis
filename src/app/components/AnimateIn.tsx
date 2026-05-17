import { useRef } from "react";
import { motion, useInView } from "motion/react";

const ease = [0.16, 1, 0.3, 1]; // smooth ease-out-expo — the Apple curve

// Fade + slide up on scroll into view
export function FadeIn({
  children,
  delay = 0,
  y = 32,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Container that staggers its children
export function Stagger({
  children,
  className,
  stagger = 0.09,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger child
export function StaggerItem({
  children,
  className,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Section header animation — label line draws then text fades
export function SectionHeader({
  label,
  children,
  className,
}: {
  label: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className={`flex items-center gap-4 mb-8 ${className ?? ""}`}>
      <motion.div
        className="h-px bg-[#E8B53C]"
        initial={{ width: 0 }}
        animate={inView ? { width: 32 } : {}}
        transition={{ duration: 0.6, ease }}
      />
      <motion.p
        className="text-[#3D4A5C] text-[14px] tracking-[0.25em]"
        style={{ fontFamily: "Inter, sans-serif" }}
        initial={{ opacity: 0, x: -8 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease, delay: 0.15 }}
      >
        {label}
      </motion.p>
      {children}
    </div>
  );
}
