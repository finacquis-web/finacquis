import { SectionHeader, FadeIn, Stagger, StaggerItem } from "./AnimateIn";

const useCases = [
  {
    number: "01",
    title: "Pre-Investment Situations",
    body: "Promoter credibility, governance integrity, and hidden risk assessment before capital is committed.",
    for: "For PE funds, VCs, and family offices who need the complete picture.",
  },
  {
    number: "02",
    title: "Post-Investment & Evolving Risk",
    body: "Assessing control dynamics, management conduct, and emerging risks within portfolio companies.",
    for: "Continuous intelligence for investors who need early warning.",
  },
  {
    number: "03",
    title: "Disputes & Investigations",
    body: "Establishing facts where ownership, intent, or behaviour is unclear or contested.",
    for: "Independent inputs that support legal strategy and dispute resolution.",
  },
  {
    number: "04",
    title: "Recovery & Asset Visibility",
    body: "Identifying asset exposure, related-party linkages, and avenues for recovery where assets are obscured or restructured.",
    for: "Beyond disclosed positions.",
  },
];

export function WhenClientsEngage() {
  return (
    <section className="py-28 lg:py-36 bg-white border-t border-[#E8E6E0]">
      <div className="max-w-[1500px] mx-auto px-10 lg:px-20">
        <SectionHeader label="WHEN CLIENTS ENGAGE US" />

        <FadeIn className="mb-16">
          <h2
            className="text-[#0C1D35] max-w-2xl leading-snug"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.4rem, 4vw, 4rem)",
              fontWeight: 400,
            }}
          >
            Four situations where independent intelligence changes outcomes.
          </h2>
        </FadeIn>

        <Stagger className="grid sm:grid-cols-2 gap-px bg-[#E8E6E0]">
          {useCases.map((item) => (
            <StaggerItem key={item.number}>
              <div className="bg-white p-12 lg:p-14 hover:bg-[#FDFDF9] transition-colors duration-200 group border-t-2 border-transparent hover:border-[#E8B53C] h-full">
                <div
                  className="text-[#E8B53C] mb-8"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 400 }}
                >
                  {item.number}
                </div>
                <h3
                  className="text-[#0C1D35] mb-5 leading-snug"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.7rem",
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#3D4A5C] mb-5 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "17px" }}
                >
                  {item.body}
                </p>
                <p
                  className="text-[#6B7280] leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}
                >
                  {item.for}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
