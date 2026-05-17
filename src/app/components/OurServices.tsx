import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader, FadeIn } from "./AnimateIn";

interface Service {
  id: number;
  name: string;
  positioning?: string;
  description: string;
  items: { label: string; points: string[] }[];
  delivered: string;
  pricing?: string;
  note?: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Financial Due Diligence",
    positioning: "Pre-Investment · PE, VC & Family Offices",
    description:
      "Our flagship engagement. A full-scope financial, legal, and commercial due diligence review built to institutional standards — delivering the complete picture before capital is committed.",
    items: [
      {
        label: "What we assess",
        points: [
          "Quality of Earnings analysis and EBITDA normalisation",
          "Net debt schedule and working capital assessment",
          "Revenue sustainability and client concentration risk",
          "Related party transaction analysis and conflict mapping",
          "Legal and regulatory compliance review",
          "Forward projections and assumption validation",
          "Risk rating dashboard with overall deal verdict",
          "Deal recommendations and conditions precedent",
        ],
      },
    ],
    delivered: "15–21 business days",
    pricing: "On request — scope dependent",
  },
  {
    id: 2,
    name: "Red Flag Due Diligence",
    positioning: "For Individuals & Companies",
    description:
      "A focused, time-efficient risk assessment designed to surface material concerns on any individual or corporate entity before a significant decision.",
    items: [
      {
        label: "What we cover",
        points: [
          "Corporate records, filings, and compliance status",
          "Litigation, regulatory, and enforcement history",
          "Promoter and director background assessment",
          "Financial health and credit indicator review",
          "News, reputational, social media and market intelligence",
          "Related party and undisclosed connection mapping",
        ],
      },
      {
        label: "Used by",
        points: ["Investors, corporates, legal counsel, and HNIs before partnerships, transactions, or appointments."],
      },
    ],
    delivered: "Scope and timeline agreed at engagement",
  },
  {
    id: 3,
    name: "Integrity Intelligence",
    positioning: undefined,
    description:
      "A deeper investigative assessment of promoter background, governance conduct, and hidden relationship structures — going beyond what formal records reveal.",
    items: [
      {
        label: "What we assess",
        points: [
          "Promoter background, affiliations, and influence networks",
          "Ownership, control, and related-party linkages",
          "Governance practices and key decision dynamics",
          "Litigation, regulatory, and conduct indicators",
          "Operating conduct and market perception across the business ecosystem",
          "Triangulated validation across multiple independent and ground-level sources",
        ],
      },
    ],
    delivered: "Scope and timeline agreed at engagement",
    note: "Focused on surfacing decision-relevant insights early — before they surface on their own.",
  },
  {
    id: 4,
    name: "Investigations & Dispute Intelligence",
    positioning: undefined,
    description:
      "Independent intelligence and factual assessment for situations where ownership, intent, or behaviour is unclear, contested, or potentially misrepresented.",
    items: [
      {
        label: "Used where",
        points: [
          "Facts versus stated narrative need to be established",
          "Relationship mapping and control linkages are unclear",
          "Inconsistencies and risk indicators need to be independently verified",
          "Independent inputs are required to support legal strategy or dispute resolution proceedings",
        ],
      },
    ],
    delivered: "Scope and timeline agreed at engagement",
    note: "Discreet, independent, and conflict-free. Focused on establishing what is actually true.",
  },
  {
    id: 5,
    name: "Asset Tracing & Recovery",
    positioning: undefined,
    description:
      "Intelligence support for situations where asset visibility, ownership structures, or recovery pathways are unclear or obscured.",
    items: [
      {
        label: "What we do",
        points: [
          "Identify asset exposure across direct and indirect holdings",
          "Map promoter and guarantor-linked entities and affiliations",
          "Highlight patterns indicating diversion or restructuring of assets",
          "Assess relevant jurisdictions and pathways for recovery action",
        ],
      },
    ],
    delivered: "Scope and timeline agreed at engagement",
    note: "Focused on delivering actionable visibility beyond disclosed asset positions.",
  },
  {
    id: 6,
    name: "Fast Track Due Diligence",
    positioning: "For Time-Sensitive Transactions",
    description:
      "A compressed-timeline due diligence engagement for situations where standard timelines are not viable. Institutional-grade rigour delivered at deal speed.",
    items: [
      {
        label: "We prioritise",
        points: [
          "Material financial and legal risk identification",
          "Promoter and governance integrity assessment",
          "Key red flags and deal-critical findings",
          "Clear verdict and recommended conditions",
        ],
      },
    ],
    delivered: "48–72 hours",
    note: "No reduction in analytical standards. Only a compressed delivery framework.",
  },
  {
    id: 7,
    name: "Post-Closure Risk Monitoring",
    positioning: undefined,
    description:
      "Ongoing intelligence and monitoring for investors who understand that due diligence does not end at transaction close.",
    items: [
      {
        label: "What we monitor",
        points: [
          "Financial performance and compliance status",
          "Management conduct and governance changes",
          "Director appointments, resignations, and ownership structure shifts",
          "Litigation, regulatory, and enforcement events",
          "Early warning signals and emerging risk indicators",
        ],
      },
    ],
    delivered: "Monthly intelligence brief per portfolio company",
    pricing: "Monthly retainer",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.07}>
      <div className={`border-b border-[#E8E6E0] transition-colors ${open ? "bg-[#FDFDF9]" : "bg-white hover:bg-[#FDFDF9]"}`}>
        <button
          className="w-full flex items-start justify-between py-9 px-2 text-left group"
          onClick={() => setOpen(!open)}
        >
          <div className="flex-1 pr-8">
            <div className="flex items-start gap-8">
              <span
                className="text-[#E8B53C] mt-1 shrink-0"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", fontWeight: 400 }}
              >
                {String(service.id).padStart(2, "0")}
              </span>
              <div>
                <p
                  className="text-[#0C1D35] group-hover:text-[#0C1D35]/80 transition-colors"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  {service.name.toUpperCase()}
                </p>
                {service.positioning && (
                  <p
                    className="text-[#6B7280] mt-2"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
                  >
                    {service.positioning}
                  </p>
                )}
              </div>
            </div>
          </div>
          <ChevronDown
            size={20}
            className={`text-[#0C1D35]/50 shrink-0 mt-2 transition-transform duration-300 ${open ? "rotate-180 text-[#E8B53C]" : ""}`}
          />
        </button>

        {open && (
          <div className="pl-[88px] pr-6 pb-12 grid md:grid-cols-2 gap-12">
            <div>
              <p
                className="text-[#3D4A5C] leading-relaxed mb-8"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "17px" }}
              >
                {service.description}
              </p>
              {service.note && (
                <p
                  className="text-[#0C1D35] leading-relaxed border-l-2 border-[#E8B53C] pl-5"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", fontStyle: "italic" }}
                >
                  {service.note}
                </p>
              )}
            </div>
            <div>
              {service.items.map((item, idx) => (
                <div key={idx} className="mb-7">
                  <p
                    className="text-[#6B7280] mb-4"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", letterSpacing: "0.15em" }}
                  >
                    {item.label.toUpperCase()}
                  </p>
                  <ul className="space-y-3">
                    {item.points.map((pt, i) => (
                      <li
                        key={i}
                        className="text-[#3D4A5C] flex items-start gap-3"
                        style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}
                      >
                        <span className="text-[#E8B53C] mt-1.5 shrink-0 text-[10px]">▪</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="mt-7 pt-6 border-t border-[#E8E6E0] flex flex-col gap-3">
                <div className="flex gap-6 items-baseline">
                  <span
                    className="text-[#6B7280] shrink-0"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", letterSpacing: "0.12em" }}
                  >
                    DELIVERED
                  </span>
                  <span
                    className="text-[#0C1D35]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}
                  >
                    {service.delivered}
                  </span>
                </div>
                {service.pricing && (
                  <div className="flex gap-6 items-baseline">
                    <span
                      className="text-[#6B7280] shrink-0"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", letterSpacing: "0.12em" }}
                    >
                      PRICING
                    </span>
                    <span
                      className="text-[#0C1D35]"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}
                    >
                      {service.pricing}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </FadeIn>
  );
}

export function OurServices() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-28 lg:py-36 bg-white border-t border-[#E8E6E0]">
      <div className="max-w-[1500px] mx-auto px-10 lg:px-20">
        <SectionHeader label="OUR SERVICES" />

        <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <h2
            className="text-[#0C1D35] max-w-2xl leading-snug"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.4rem, 4vw, 4rem)",
              fontWeight: 400,
            }}
          >
            Seven capabilities. One mandate — protect your capital and your decisions.
          </h2>
          <button
            onClick={() => scrollTo("contact")}
            className="shrink-0 px-8 py-4 bg-[#E8B53C] text-[#0C1D35] text-[12px] tracking-widest hover:bg-[#D4A030] transition-colors self-start lg:self-auto"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
          >
            REQUEST AN ENGAGEMENT
          </button>
        </FadeIn>

        <div className="border-t border-[#E8E6E0]">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
