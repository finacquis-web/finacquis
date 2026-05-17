import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader, FadeIn } from "./AnimateIn";

const cases = [
  {
    tag: "Red Flag Due Diligence",
    sector: "Real Estate Sector",
    title: "Investment decision reversed prior to term sheet.",
    situation:
      "A family office considering a significant co-investment alongside a promoter group with a strong public profile and no visible adverse history.",
    findings: [
      "Multiple litigation matters in personal capacity not reflected in corporate records",
      "Historical associations with entities subject to regulatory proceedings",
      "Asset ownership structures inconsistent with disclosed financial position",
      "Market-level feedback indicating payment delays with existing counterparties",
    ],
    implication: "Investment decision reversed prior to term sheet. Capital preserved.",
  },
  {
    tag: "Asset Tracing",
    sector: "Lending & Recovery",
    title: "Materially improved recovery position identified.",
    situation:
      "An NBFC seeking to understand actual asset exposure of a borrower following default. Disclosed assets insufficient to cover outstanding exposure.",
    findings: [
      "Significant asset holdings identified through family-linked and associate entities",
      "Property interests identified across multiple jurisdictions not reflected in disclosed schedules",
      "Patterns of pre-default asset restructuring identified across a 24-month period",
      "Recovery pathways identified and prioritised by jurisdictional viability",
    ],
    implication: "Materially improved recovery position identified. Legal strategy restructured accordingly.",
  },
];

function CaseStudyCard({ item }: { item: (typeof cases)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border border-[#E8E6E0] transition-all duration-200 ${open ? "border-[#E8B53C]/40" : "hover:border-[#0C1D35]/20"}`}>
      <button
        className="w-full text-left p-10 lg:p-14 flex items-start justify-between gap-10 group"
        onClick={() => setOpen(!open)}
      >
        <div className="flex-1">
          <div className="flex flex-wrap gap-3 mb-7">
            <span
              className="px-4 py-1.5 bg-[#E8B53C]/10 text-[#0C1D35] border border-[#E8B53C]/30"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", letterSpacing: "0.08em" }}
            >
              {item.tag.toUpperCase()}
            </span>
            <span
              className="px-4 py-1.5 border border-[#E8E6E0] text-[#6B7280]"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", letterSpacing: "0.08em" }}
            >
              {item.sector.toUpperCase()}
            </span>
          </div>
          <h3
            className="text-[#0C1D35] group-hover:text-[#0C1D35]/80 transition-colors"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.4rem, 2vw, 1.9rem)",
              fontWeight: 500,
            }}
          >
            {item.title}
          </h3>
        </div>
        <ChevronDown
          size={22}
          className={`text-[#0C1D35]/50 shrink-0 mt-2 transition-transform duration-300 ${open ? "rotate-180 text-[#E8B53C]" : ""}`}
        />
      </button>

      {open && (
        <div className="px-10 lg:px-14 pb-14 border-t border-[#E8E6E0] pt-10">
          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <p
                className="text-[#6B7280] mb-4"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", letterSpacing: "0.15em" }}
              >
                SITUATION
              </p>
              <p
                className="text-[#3D4A5C] leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "17px" }}
              >
                {item.situation}
              </p>

              <div className="mt-10 pt-8 border-t border-[#E8E6E0]">
                <p
                  className="text-[#6B7280] mb-3"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", letterSpacing: "0.15em" }}
                >
                  IMPLICATION
                </p>
                <p
                  className="text-[#0C1D35]"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.45rem",
                    fontStyle: "italic",
                  }}
                >
                  {item.implication}
                </p>
              </div>
            </div>

            <div>
              <p
                className="text-[#6B7280] mb-5"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", letterSpacing: "0.15em" }}
              >
                WHAT OUR ASSESSMENT INDICATED
              </p>
              <ul className="space-y-4">
                {item.findings.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-[#3D4A5C]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "17px" }}
                  >
                    <span className="text-[#E8B53C] mt-1.5 text-[10px] shrink-0">▪</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-28 lg:py-36 bg-white border-t border-[#E8E6E0]">
      <div className="max-w-[1500px] mx-auto px-10 lg:px-20">
        <SectionHeader label="ILLUSTRATIVE WORK" />

        <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <h2
            className="text-[#0C1D35] max-w-2xl leading-snug"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.4rem, 4vw, 4rem)",
              fontWeight: 400,
            }}
          >
            Intelligence that changed the outcome of the decision.
          </h2>
          <p
            className="text-[#6B7280] max-w-sm leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
          >
            All case studies are illustrative of prior work, presented in anonymized form. Client confidentiality is
            maintained in all circumstances.
          </p>
        </FadeIn>

        <div className="space-y-5">
          {cases.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.12}>
              <CaseStudyCard item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
