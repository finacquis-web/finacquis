import { SectionHeader, FadeIn, Stagger, StaggerItem } from "./AnimateIn";

const pillars = [
  {
    number: "01",
    title: "Independence",
    points: [
      "We work exclusively for the engaging party.",
      "No referral relationships with target companies.",
      "No dual mandates.",
      "Our only obligation is to the accuracy of what we find.",
    ],
  },
  {
    number: "02",
    title: "Depth Beyond Formal Records",
    points: [
      "We go where structured analysis cannot.",
      "Network intelligence, ground-level validation, and triangulated sourcing across independent channels.",
      "Not just database searches.",
    ],
  },
  {
    number: "03",
    title: "Discretion as Standard",
    points: [
      "Every engagement operates under strict confidentiality.",
      "Our work is never disclosed.",
      "Our clients' identities are never shared.",
    ],
  },
  {
    number: "04",
    title: "Actionable Conclusions",
    points: [
      "We do not deliver data.",
      "We deliver decisions-ready intelligence — with clear findings, risk ratings, and specific recommendations on what to do next.",
    ],
  },
];

export function WhyFinacquis() {
  return (
    <section className="py-28 lg:py-36 bg-white border-t border-[#E8E6E0]">
      <div className="max-w-[1500px] mx-auto px-10 lg:px-20">
        <SectionHeader label="WHY US" />

        <FadeIn className="mb-20">
          <h2
            className="text-[#0C1D35] max-w-2xl leading-snug"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.4rem, 4vw, 4rem)",
              fontWeight: 400,
            }}
          >
            Independent. Rigorous. Conflict-Free.
          </h2>
        </FadeIn>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8E6E0]">
          {pillars.map((p) => (
            <StaggerItem key={p.number}>
              <div className="bg-white p-10 lg:p-12 hover:bg-[#FDFDF9] transition-colors duration-200 border-t-2 border-transparent hover:border-[#E8B53C] h-full">
                <div
                  className="text-[#E8B53C] mb-8"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 400 }}
                >
                  {p.number}
                </div>
                <h3
                  className="text-[#0C1D35] mb-7 leading-snug"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.45rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {p.title}
                </h3>
                <div className="space-y-3">
                  {p.points.map((pt, i) => (
                    <p
                      key={i}
                      className="text-[#3D4A5C] leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "17px" }}
                    >
                      {pt}
                    </p>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
