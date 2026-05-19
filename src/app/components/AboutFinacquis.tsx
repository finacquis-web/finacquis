import { SectionHeader, FadeIn, Stagger, StaggerItem } from "./AnimateIn";

const values = [
  {
    title: "Independent",
    body: "No conflicts. No referrals. No dual mandates.\nOur findings reflect only what the evidence supports.",
  },
  {
    title: "Discreet",
    body: "Every engagement is confidential by default.\nWe do not discuss our clients or our work.",
  },
  {
    title: "Rigorous",
    body: "We triangulate. We validate. We investigate.\nWe do not accept stated positions without verification.",
  },
];

export function AboutFinacquis() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-white border-t border-[#E8E6E0]">
      <div className="max-w-[1500px] mx-auto px-10 lg:px-20">
        <SectionHeader label="ABOUT FINACQUIS" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <FadeIn>
            <h2
              className="text-[#0C1D35] leading-snug"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2.4rem, 4vw, 4rem)",
                fontWeight: 400,
              }}
            >
             Finacquis is an independent intelligence and due diligence firm.
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} className="space-y-6">
            {[
              "Finacquis Venture is an independent due diligence and intelligence firm serving investors, institutions, and corporates globally.",
              "We were built on a single conviction: the risks that most damage investments and reputations are rarely visible in structured analysis alone. They require independent investigation, network-led intelligence, and the willingness to look where formal records do not reach.",
              "We work with PE funds, venture capital firms, family offices, HNIs, legal counsel, and corporates across transactions, disputes, and ongoing risk situations.",
              "Our engagements are handled with institutional rigour, complete independence, and absolute discretion — from the first conversation to the final report.",
            ].map((para, i) => (
              <p
                key={i}
                className="text-[#3D4A5C] leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "17px" }}
              >
                {para}
              </p>
            ))}
          </FadeIn>
        </div>

        <Stagger className="grid sm:grid-cols-3 gap-px bg-[#E8E6E0]">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="bg-white p-10 lg:p-12 hover:bg-[#FFFDF5] transition-colors duration-200 border-t-2 border-transparent hover:border-[#E8B53C] h-full">
                <h3
                  className="text-[#0C1D35] mb-6"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.45rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {v.title}
                </h3>
                <div className="space-y-2">
                  {v.body.split("\n").map((line, i) => (
                    <p
                      key={i}
                      className="text-[#3D4A5C] leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "17px" }}
                    >
                      {line}
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
