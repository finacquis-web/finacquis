import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const ease = [0.16, 1, 0.3, 1];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const ringsY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // keeps existing smooth scrolling behaviour
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      window.history.pushState(null, "", `/#${id}`); // SEO-friendly URL
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-screen bg-white flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="#0C1D35"
                strokeWidth="0.4"
                opacity="0.04"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Parallax rings */}
        <motion.div
          className="absolute right-[-80px] top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ y: ringsY }}
        >
          <svg
            width="760"
            height="760"
            viewBox="0 0 760 760"
            fill="none"
            style={{ opacity: 0.055 }}
          >
            <circle
              cx="380"
              cy="380"
              r="379"
              stroke="#0C1D35"
              strokeWidth="1"
            />
            <circle
              cx="380"
              cy="380"
              r="280"
              stroke="#0C1D35"
              strokeWidth="1"
              strokeDasharray="6 10"
            />
            <circle
              cx="380"
              cy="380"
              r="180"
              stroke="#0C1D35"
              strokeWidth="1"
            />
            <circle
              cx="380"
              cy="380"
              r="80"
              stroke="#0C1D35"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="380"
              x2="760"
              y2="380"
              stroke="#0C1D35"
              strokeWidth="0.6"
            />
            <line
              x1="380"
              y1="0"
              x2="380"
              y2="760"
              stroke="#0C1D35"
              strokeWidth="0.6"
            />
            <line
              x1="111"
              y1="111"
              x2="649"
              y2="649"
              stroke="#0C1D35"
              strokeWidth="0.6"
            />
            <line
              x1="649"
              y1="111"
              x2="111"
              y2="649"
              stroke="#0C1D35"
              strokeWidth="0.6"
            />
          </svg>
        </motion.div>
      </div>

      {/* Hero content */}
      <motion.div
        className="relative max-w-[1500px] mx-auto px-10 lg:px-20 pt-36 pb-20 w-full"
        style={{ y: contentY }}
      >
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-12">
            <motion.div
              className="h-px bg-[#E8B53C]"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
            />

            <motion.p
              className="text-[13px] tracking-[0.3em] text-[#3D4A5C]"
              style={{ fontFamily: "Inter, sans-serif" }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.35 }}
            >
              INDEPENDENT INTELLIGENCE · DUE DILIGENCE
            </motion.p>
          </div>

          <motion.h1
            className="text-[#0C1D35] mb-10 leading-[1.08]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.45 }}
          >
            The most critical risks are rarely visible in formal records.
          </motion.h1>

          <motion.p
            className="text-[#3D4A5C] mb-14 max-w-3xl"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
              lineHeight: 1.8,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.7 }}
          >
            Finacquis is an independent intelligence and due diligence firm...
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.9 }}
          >
            <button
              onClick={() => scrollTo("contact")}
              className="px-10 py-4 bg-[#E8B53C] text-[#0C1D35] text-[13px] tracking-widest hover:bg-[#D4A030] transition-all duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
              }}
            >
              REQUEST AN ENGAGEMENT
            </button>

            <button
              onClick={() => scrollTo("services")}
              className="px-10 py-4 border border-[#0C1D35]/25 text-[#0C1D35] text-[13px] tracking-widest hover:border-[#0C1D35]/50 transition-all duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
              }}
            >
              EXPLORE OUR SERVICES
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Trust stats */}
      <motion.div
        className="relative max-w-[1500px] mx-auto px-10 lg:px-20 pb-20 w-full mt-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: 1.1 }}
      >
        <div className="border-t border-[#E8E6E0] pt-12 grid grid-cols-3 gap-8 max-w-2xl">
          {[
            { stat: "48hr", label: "Fast-Track Reviews Available" },
            { stat: "100%", label: "Independent & Conflict-Free" },
            { stat: "Global", label: "Cross-Border Intelligence Capability" },
          ].map((item, i) => (
            <motion.div
              key={item.stat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease,
                delay: 1.15 + i * 0.12,
              }}
            >
              <div
                className="text-[#E8B53C] mb-2"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                }}
              >
                {item.stat}
              </div>

              <div
                className="text-[#3D4A5C] leading-tight"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                }}
              >
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}