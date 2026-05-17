import { SectionHeader, FadeIn, Stagger, StaggerItem } from "./AnimateIn";

const gaps = [
  {
    number: "01",
    title: "Promoter Conduct & Reputation",
    body: "Behaviour and standing within the business ecosystem that formal records do not capture.",
  },
  {
    number: "02",
    title: "Undisclosed Relationships",
    body: "Hidden affiliations, influence structures, and connected-party exposures that sit beyond disclosed shareholding.",
  },
  {
    number: "03",
    title: "Gaps Between Reported and Operating Reality",
    body: "What management presents and what the business actually does are not always the same.",
  },
  {
    number: "04",
    title: "Early Warning Signals",
    body: "Patterns and indicators that precede formal risk events, visible only through independent, ground-level intelligence.",
  },
];

export function IntelligenceGap() {
  return (
    <section className="py-28 lg:py-36 bg-white border-t border-[#E8E6E0]">
      <div className="max-w-[1500px] mx-auto px-10 lg:px-20">
        <SectionHeader label="THE INTELLIGENCE GAP" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <FadeIn>
            <h2
              className="text-[#0C1D35] leading-[1.15]"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2.4rem, 4vw, 4rem)",
                fontWeight: 400,
              }}
            >
              Investment decisions are built on structured information. Critical risks live outside it.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="self-end">
            <p
              className="text-[#3D4A5C] leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "18px" }}
            >
              Financial analysis, management inputs, and formal records provide a foundation. But the risks that most
              frequently damage investments and reputations are rarely explicit.
            </p>
            <p
              className="text-[#3D4A5C] leading-relaxed mt-5"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "18px" }}
            >
              They sit in:
            </p>
          </FadeIn>
        </div>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8E6E0]">
          {gaps.map((gap) => (
            <StaggerItem key={gap.number}>
              <div className="bg-white p-10 hover:bg-[#FDFDF9] transition-colors duration-200 group border-t-2 border-transparent hover:border-[#E8B53C] h-full">
                <div
                  className="text-[#E8B53C] mb-8"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 400 }}
                >
                  {gap.number}
                </div>
                <h3
                  className="text-[#0C1D35] mb-5 leading-snug"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.55rem",
                    fontWeight: 500,
                  }}
                >
                  {gap.title}
                </h3>
                <p
                  className="text-[#3D4A5C] leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "17px" }}
                >
                  {gap.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-16 pt-12 border-t border-[#E8E6E0]">
          <p
            className="text-[#0C1D35]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            The most decision-critical risks are rarely explicit.
            <br />
            That is what Finacquis is built to find.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
