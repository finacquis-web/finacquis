import { SectionHeader, FadeIn } from "./AnimateIn";

const steps = [
  {
    step: "01",
    title: "Scoping Call",
    body: "We understand your situation, objectives, and timeline. Engagement terms confirmed before any work begins.",
  },
  {
    step: "02",
    title: "Engagement Letter",
    body: "Scope, fee, timeline, and confidentiality terms confirmed in writing. No ambiguity. No surprises.",
  },
  {
    step: "03",
    title: "Intelligence Gathering",
    body: "Formal records, database searches, independent network inputs, and ground-level validation conducted simultaneously.",
  },
  {
    step: "04",
    title: "Analysis & Triangulation",
    body: "All intelligence triangulated and analysed. Every inconsistency investigated. Every assumption tested.",
  },
  {
    step: "05",
    title: "Report & Debrief",
    body: "Professional intelligence report delivered on time, followed by a debrief call to walk through findings and answer questions.",
  },
];

export function OurApproach() {
  return (
    <section id="approach" className="py-28 lg:py-36 bg-white border-t border-[#E8E6E0]">
      <div className="max-w-[1500px] mx-auto px-10 lg:px-20">
        <SectionHeader label="OUR APPROACH" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          <FadeIn>
            <h2
              className="text-[#0C1D35] leading-snug"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2.4rem, 4vw, 4rem)",
                fontWeight: 400,
              }}
            >
              Rigorous. Independent. Discreet.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="self-end space-y-5">
            <p
              className="text-[#3D4A5C] leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "18px" }}
            >
              Every Finacquis engagement follows an integrated methodology — combining formal record analysis with
              independent, ground-level intelligence gathering.
            </p>
            <p
              className="text-[#3D4A5C] leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "18px" }}
            >
              We do not rely on disclosed information alone. We triangulate across multiple independent sources to surface
              what structured analysis cannot reach.
            </p>
          </FadeIn>
        </div>

        <div className="border-t border-[#E8E6E0]">
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-[#E8E6E0] hover:bg-[#FDFDF9] transition-colors group">
                <div className="md:w-48 shrink-0 flex items-start">
                  <span
                    className="text-[#E8B53C]"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", fontWeight: 400 }}
                  >
                    {step.step}
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h3
                    className="text-[#0C1D35] mb-4"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.65rem",
                      fontWeight: 500,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[#3D4A5C] leading-relaxed max-w-2xl"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "17px" }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
