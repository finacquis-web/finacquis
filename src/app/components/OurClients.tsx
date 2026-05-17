import { SectionHeader, FadeIn, Stagger, StaggerItem } from "./AnimateIn";

const clients = [
  {
    type: "Private Equity Funds",
    description:
      "Pre-investment, portfolio monitoring, and dispute intelligence for fund managers across growth, buyout, and credit strategies.",
  },
  {
    type: "Venture Capital Firms",
    description:
      "Founder and promoter integrity assessments, governance reviews, and post-investment risk monitoring.",
  },
  {
    type: "Family Offices",
    description:
      "Discrete, independent intelligence for direct investments, co-investments, and partnership decisions.",
  },
  {
    type: "High Net Worth Individuals",
    description:
      "Background intelligence before private lending, business partnerships, or significant personal investments.",
  },
  {
    type: "Legal Counsel & Law Firms",
    description:
      "Independent factual intelligence and investigation support for dispute resolution, litigation strategy, and recovery.",
  },
  {
    type: "Corporates & Conglomerates",
    description:
      "Third-party due diligence, vendor intelligence, and pre-acquisition risk assessment.",
  },
  {
    type: "NBFCs & Lending Institutions",
    description:
      "Borrower background assessment, promoter integrity checks, and credit risk intelligence.",
  },
  {
    type: "Startups & Growth Companies",
    description:
      "Investor readiness assessment and pre-fundraising due diligence review.",
  },
];

export function OurClients() {
  return (
    <section className="py-28 lg:py-36 bg-white border-t border-[#E8E6E0]">
      <div className="max-w-[1500px] mx-auto px-10 lg:px-20">
        <SectionHeader label="OUR CLIENTS" />

        <FadeIn className="mb-16">
          <h2
            className="text-[#0C1D35] max-w-2xl leading-snug"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.4rem, 4vw, 4rem)",
              fontWeight: 400,
            }}
          >
            Built for decision-makers who cannot afford to be wrong.
          </h2>
        </FadeIn>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8E6E0]">
          {clients.map((client, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white p-10 hover:bg-[#FDFDF9] transition-colors duration-200 group border-t-2 border-transparent hover:border-[#E8B53C] h-full">
                <div
                  className="text-[#E8B53C] mb-5"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 400 }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-[#0C1D35] mb-5 leading-snug"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.45rem",
                    fontWeight: 500,
                  }}
                >
                  {client.type}
                </h3>
                <p
                  className="text-[#3D4A5C] leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "17px" }}
                >
                  {client.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
