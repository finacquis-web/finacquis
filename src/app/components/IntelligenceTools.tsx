import { useState } from "react";
import { X, ArrowRight, ArrowLeft } from "lucide-react";
import { SectionHeader, FadeIn, Stagger, StaggerItem } from "./AnimateIn";

const ddrCategories = [
  {
    label: "Corporate Documentation",
    questions: [
      "Certificate of Incorporation and MOA/AOA are current and filed.",
      "Statutory registers (members, directors, charges) are maintained and up to date.",
      "Board and shareholder resolutions for key decisions are documented.",
      "All RoC filings are current with no outstanding compliance defaults.",
    ],
  },
  {
    label: "Financial Statement Readiness",
    questions: [
      "Audited financial statements are available for the last 3 years.",
      "Management accounts or interim financials are prepared and reconciled.",
      "A detailed revenue breakdown by client, product, and geography is available.",
      "Related party transactions are fully documented and disclosed.",
    ],
  },
  {
    label: "Legal & Compliance",
    questions: [
      "All business licences and regulatory approvals are valid and current.",
      "There are no material pending or threatened litigation matters.",
      "Tax filings (direct and indirect) are current with no outstanding demands.",
      "Employment contracts, ESOP schemes, and HR records are in order.",
    ],
  },
  {
    label: "Contracts & Agreements",
    questions: [
      "Customer and supplier contracts are documented with clear terms.",
      "There are no change-of-control clauses that could affect the transaction.",
      "IP ownership (trademarks, patents, technology) is registered in the company's name.",
      "Lease agreements and property documents are in order.",
    ],
  },
  {
    label: "Shareholder & Governance Structure",
    questions: [
      "Shareholding structure and cap table are documented and accurate.",
      "Founders and key personnel have signed non-competes and IP assignment agreements.",
      "There are no undisclosed pledges, liens, or encumbrances on equity or assets.",
      "Board composition and governance practices meet investor expectations.",
    ],
  },
];

const scorecardCategories = [
  {
    label: "Financial Health & Quality of Earnings",
    questions: [
      "Our revenue is recurring and not concentrated in one or two clients.",
      "Our EBITDA margins are stable and defensible.",
      "Our working capital position is healthy and predictable.",
    ],
  },
  {
    label: "Legal & Regulatory Compliance",
    questions: [
      "We have no material pending litigation or regulatory proceedings.",
      "All tax and statutory filings are current and compliant.",
      "All licences and approvals required to operate are in place.",
    ],
  },
  {
    label: "Governance & Management Credibility",
    questions: [
      "Our board and senior management have verifiable track records.",
      "Related party transactions are minimal and fully disclosed.",
      "We have formal governance processes and documented decision-making.",
    ],
  },
  {
    label: "Market Position & Traction",
    questions: [
      "We have a clearly differentiated value proposition in our market.",
      "Customer retention and satisfaction metrics support our growth story.",
      "Our pipeline and revenue visibility support our financial projections.",
    ],
  },
  {
    label: "Documentation & Disclosure Readiness",
    questions: [
      "Our financial and legal documentation is investor-ready today.",
      "We can produce a complete data room within two weeks.",
      "All material information has been disclosed — there are no skeletons in the closet.",
    ],
  },
];

type DDRAnswer = "yes" | "partial" | "no" | null;

function ScoreRing({ score }: { score: number }) {
  const radius = 70;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (score / 100) * circ;
  const label = score >= 80 ? "Strong" : score >= 60 ? "Moderate" : score >= 40 ? "Developing" : "Needs Work";

  return (
    <div className="flex flex-col items-center">
      <svg width="180" height="180" viewBox="0 0 180 180">
        <circle cx="90" cy="90" r={radius} fill="none" stroke="#E8E6E0" strokeWidth="6" />
        <circle
          cx="90" cy="90" r={radius} fill="none"
          stroke="#E8B53C" strokeWidth="6" strokeLinecap="square"
          strokeDasharray={circ} strokeDashoffset={offset}
          transform="rotate(-90 90 90)"
          style={{ transition: "stroke-dashoffset 0.8s ease" }}
        />
        <text x="90" y="82" textAnchor="middle" fill="#0C1D35" fontSize="34" fontFamily="Cormorant Garamond, serif">{score}</text>
        <text x="90" y="102" textAnchor="middle" fill="#6B7280" fontSize="12" fontFamily="Inter, sans-serif">/ 100</text>
        <text x="90" y="120" textAnchor="middle" fill="#E8B53C" fontSize="12" fontFamily="Inter, sans-serif" letterSpacing="2">{label.toUpperCase()}</text>
      </svg>
    </div>
  );
}

function DDRModal({ onClose }: { onClose: () => void }) {
  const allQuestions = ddrCategories.flatMap((c, ci) =>
    c.questions.map((q, qi) => ({ category: c.label, question: q, id: ci * 4 + qi }))
  );
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, DDRAnswer>>({});
  const [done, setDone] = useState(false);

  const current = allQuestions[step];
  const total = allQuestions.length;
  const progress = (step / total) * 100;

  const answer = (val: DDRAnswer) => {
    const newAnswers = { ...answers, [current.id]: val };
    setAnswers(newAnswers);
    if (step < total - 1) setStep(step + 1);
    else setDone(true);
  };

  const gaps = allQuestions.filter((q) => answers[q.id] === "no" || answers[q.id] === "partial");
  const score = Math.round(
    (allQuestions.reduce((sum, q) => {
      const a = answers[q.id];
      return sum + (a === "yes" ? 2 : a === "partial" ? 1 : 0);
    }, 0) / (total * 2)) * 100
  );

  return (
    <div className="fixed inset-0 z-50 bg-[#0C1D35]/50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-10 py-7 border-b border-[#E8E6E0]">
          <div>
            <p className="text-[#0C1D35]/40 text-[11px] tracking-[0.2em] mb-1" style={{ fontFamily: "Inter, sans-serif" }}>DUE DILIGENCE READINESS</p>
            <h3 className="text-[#0C1D35]" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 500 }}>
              {done ? "Your Readiness Assessment" : "Checklist"}
            </h3>
          </div>
          <button onClick={onClose} className="text-[#0C1D35]/40 hover:text-[#0C1D35] transition-colors"><X size={20} /></button>
        </div>

        {!done ? (
          <div className="px-10 py-10">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[#0C1D35]/40 text-[12px]" style={{ fontFamily: "Inter, sans-serif" }}>{current.category.toUpperCase()}</p>
              <p className="text-[#0C1D35]/40 text-[12px]" style={{ fontFamily: "Inter, sans-serif" }}>{step + 1} / {total}</p>
            </div>
            <div className="h-[2px] bg-[#E8E6E0] mb-10">
              <div className="h-[2px] bg-[#E8B53C] transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-[#0C1D35] mb-10 leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem" }}>{current.question}</p>
            <div className="flex flex-col gap-3">
              {(["yes", "partial", "no"] as DDRAnswer[]).map((val) => (
                <button key={val} onClick={() => answer(val)}
                  className="w-full text-left px-7 py-5 border border-[#E8E6E0] hover:border-[#E8B53C] hover:bg-[#FFFDF5] transition-all duration-150 flex items-center justify-between group">
                  <span className="text-[#0C1D35]" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}>
                    {val === "yes" ? "Yes — in place" : val === "partial" ? "Partial — needs work" : "No — not in place"}
                  </span>
                  <ArrowRight size={16} className="text-[#0C1D35]/20 group-hover:text-[#E8B53C] transition-colors" />
                </button>
              ))}
            </div>
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="mt-7 flex items-center gap-2 text-[#0C1D35]/40 hover:text-[#0C1D35] text-[13px] transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                <ArrowLeft size={14} /> Previous
              </button>
            )}
          </div>
        ) : (
          <div className="px-10 py-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 mb-10 pb-10 border-b border-[#E8E6E0]">
              <ScoreRing score={score} />
              <div>
                <p className="text-[#6B7280] mb-3" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}>Overall readiness score</p>
                <p className="text-[#0C1D35] leading-snug" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.25rem" }}>
                  {score >= 80 ? "Your company appears well-prepared for professional due diligence."
                    : score >= 60 ? "Your company has a reasonable foundation, with specific gaps to address."
                      : "Several critical areas require attention before an investor process."}
                </p>
              </div>
            </div>
            {gaps.length > 0 && (
              <>
                <p className="text-[#0C1D35]/40 text-[11px] tracking-[0.18em] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>IDENTIFIED GAPS</p>
                <div className="space-y-3 mb-10">
                  {gaps.map((g, i) => (
                    <div key={i} className="flex items-start gap-4 py-4 border-b border-[#E8E6E0] last:border-0">
                      <span className={`mt-0.5 px-2 py-0.5 text-[11px] shrink-0 ${answers[g.id] === "partial" ? "bg-amber-50 text-amber-700 border border-amber-200" : "bg-red-50 text-red-700 border border-red-200"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                        {answers[g.id] === "partial" ? "PARTIAL" : "GAP"}
                      </span>
                      <p className="text-[#3D4A5C]" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}>{g.question}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
            <div className="bg-[#FFFDF5] border border-[#E8E6E0] p-7 mb-7">
              <p className="text-[#0C1D35] mb-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 500 }}>Next Step</p>
              <p className="text-[#3D4A5C] leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}>
                A Finacquis Investment Readiness Assessment can systematically address each gap above and prepare your company for a rigorous investor due diligence process.
              </p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => { setStep(0); setAnswers({}); setDone(false); }} className="px-6 py-3 border border-[#E8E6E0] text-[#6B7280] hover:border-[#0C1D35]/30 transition-colors" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px" }}>Retake</button>
              <button
                onClick={() => {
                  onClose(); // close popup
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 100); // wait for modal to close
                }}
                className="px-6 py-3 bg-[#E8B53C] text-[#0C1D35] hover:bg-[#D4A030] transition-colors"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Book a Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ScorecardModal({ onClose }: { onClose: () => void }) {
  const allQuestions = scorecardCategories.flatMap((c, ci) =>
    c.questions.map((q, qi) => ({ category: c.label, question: q, id: ci * 3 + qi }))
  );
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [done, setDone] = useState(false);

  const current = allQuestions[step];
  const total = allQuestions.length;
  const progress = (step / total) * 100;

  const selectScore = (val: number) => {
    const newAnswers = { ...answers, [current.id]: val };
    setAnswers(newAnswers);
    if (step < total - 1) setStep(step + 1);
    else setDone(true);
  };

  const totalScore = Math.round((Object.values(answers).reduce((a, b) => a + b, 0) / (total * 5)) * 100);
  const categoryScores = scorecardCategories.map((cat, ci) => {
    const qs = cat.questions.map((_, qi) => ci * 3 + qi);
    const catScore = qs.reduce((sum, id) => sum + (answers[id] || 0), 0);
    return { label: cat.label, score: Math.round((catScore / (cat.questions.length * 5)) * 100) };
  });

  const ratingLabels = ["Very Low", "Low", "Moderate", "Strong", "Excellent"];

  return (
    <div className="fixed inset-0 z-50 bg-[#0C1D35]/50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-10 py-7 border-b border-[#E8E6E0]">
          <div>
            <p className="text-[#0C1D35]/40 text-[11px] tracking-[0.2em] mb-1" style={{ fontFamily: "Inter, sans-serif" }}>INVESTMENT READINESS</p>
            <h3 className="text-[#0C1D35]" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 500 }}>
              {done ? "Your Scorecard" : "Scorecard"}
            </h3>
          </div>
          <button onClick={onClose} className="text-[#0C1D35]/40 hover:text-[#0C1D35] transition-colors"><X size={20} /></button>
        </div>

        {!done ? (
          <div className="px-10 py-10">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[#0C1D35]/40 text-[12px]" style={{ fontFamily: "Inter, sans-serif" }}>{current.category.toUpperCase()}</p>
              <p className="text-[#0C1D35]/40 text-[12px]" style={{ fontFamily: "Inter, sans-serif" }}>{step + 1} / {total}</p>
            </div>
            <div className="h-[2px] bg-[#E8E6E0] mb-10">
              <div className="h-[2px] bg-[#E8B53C] transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-[#0C1D35] mb-10 leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem" }}>{current.question}</p>
            <div className="flex flex-col gap-3">
              {[1, 2, 3, 4, 5].map((val) => (
                <button key={val} onClick={() => selectScore(val)}
                  className="w-full text-left px-7 py-5 border border-[#E8E6E0] hover:border-[#E8B53C] hover:bg-[#FFFDF5] transition-all duration-150 flex items-center justify-between group">
                  <div className="flex items-center gap-5">
                    <span className="text-[#E8B53C] w-6 text-center" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem" }}>{val}</span>
                    <span className="text-[#0C1D35]" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}>{ratingLabels[val - 1]}</span>
                  </div>
                  <ArrowRight size={16} className="text-[#0C1D35]/20 group-hover:text-[#E8B53C] transition-colors" />
                </button>
              ))}
            </div>
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="mt-7 flex items-center gap-2 text-[#0C1D35]/40 hover:text-[#0C1D35] text-[13px] transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                <ArrowLeft size={14} /> Previous
              </button>
            )}
          </div>
        ) : (
          <div className="px-10 py-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 mb-10 pb-10 border-b border-[#E8E6E0]">
              <ScoreRing score={totalScore} />
              <div>
                <p className="text-[#6B7280] mb-3" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}>Overall investment readiness</p>
                <p className="text-[#0C1D35] leading-snug" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.25rem" }}>
                  {totalScore >= 75 ? "Your company appears well-positioned for an institutional investor process."
                    : totalScore >= 50 ? "Your company shows promise with targeted areas to strengthen before fundraising."
                      : "Significant groundwork is recommended before approaching institutional investors."}
                </p>
              </div>
            </div>
            <p className="text-[#0C1D35]/40 text-[11px] tracking-[0.18em] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>CATEGORY BREAKDOWN</p>
            <div className="space-y-5 mb-10">
              {categoryScores.map((cat, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[#0C1D35]" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px" }}>{cat.label}</p>
                    <p className="text-[#0C1D35]" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem" }}>{cat.score}</p>
                  </div>
                  <div className="h-[2px] bg-[#E8E6E0]">
                    <div className="h-[2px] bg-[#E8B53C] transition-all duration-500" style={{ width: `${cat.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#FFFDF5] border border-[#E8E6E0] p-7 mb-7">
              <p className="text-[#0C1D35] mb-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", fontWeight: 500 }}>Next Step</p>
              <p className="text-[#3D4A5C] leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}>
                A Finacquis Investment Readiness Assessment provides a structured path to close identified gaps and prepare your company for a rigorous investor process.
              </p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => { setStep(0); setAnswers({}); setDone(false); }} className="px-6 py-3 border border-[#E8E6E0] text-[#6B7280] hover:border-[#0C1D35]/30 transition-colors" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px" }}>Retake</button>
              <button
                onClick={() => {
                  onClose(); // close popup
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 100); // wait for modal to close
                }}
                className="px-6 py-3 bg-[#E8B53C] text-[#0C1D35] hover:bg-[#D4A030] transition-colors"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Book a Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function IntelligenceTools() {
  const [showDDR, setShowDDR] = useState(false);
  const [showScorecard, setShowScorecard] = useState(false);

  return (
    <section id="tools" className="py-28 lg:py-36 bg-white border-t border-[#E8E6E0]">
      <div className="max-w-[1500px] mx-auto px-10 lg:px-20">
        <SectionHeader label="INTELLIGENCE TOOLS" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <FadeIn>
            <h2
              className="text-[#0C1D35] leading-snug"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2.4rem, 4vw, 4rem)",
                fontWeight: 400,
              }}
            >
              Two free tools to know where you stand right now.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="self-end">
            <p
              className="text-[#3D4A5C] leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "18px" }}
            >
              Use our diagnostic tools to get an instant, honest assessment of your position — before an investor,
              counterparty, or opponent does it first.
            </p>
          </FadeIn>
        </div>

        <Stagger className="grid md:grid-cols-2 gap-px bg-[#E8E6E0]">
          {/* Tool 1 */}
          <StaggerItem>
            <div className="bg-white p-12 lg:p-14 border-t-2 border-[#E8B53C] h-full flex flex-col">
              <p className="text-[#E8B53C] text-[11px] tracking-[0.2em] mb-8" style={{ fontFamily: "Inter, sans-serif" }}>TOOL 01</p>
              <h3 className="text-[#0C1D35] mb-6 leading-snug" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.7rem", fontWeight: 500 }}>
                Due Diligence Readiness Checklist
              </h3>
              <p className="text-[#3D4A5C] mb-8 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "17px" }}>
                Are you prepared for investor due diligence? Answer 20 questions and get an instant personalised checklist of gaps.
              </p>
              <p className="text-[#6B7280] text-[12px] tracking-[0.12em] mb-4" style={{ fontFamily: "Inter, sans-serif" }}>WHAT IT COVERS</p>
              <ul className="space-y-3 mb-10 flex-1">
                {["Corporate documentation and filing completeness", "Financial statement readiness", "Legal and compliance status", "Contract and agreement review", "Shareholder and governance structure"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#3D4A5C]" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}>
                    <span className="text-[#E8B53C] mt-1.5 text-[10px] shrink-0">▪</span>{item}
                  </li>
                ))}
              </ul>
              <button onClick={() => setShowDDR(true)} className="w-full py-4 bg-[#E8B53C] text-[#0C1D35] text-[13px] tracking-widest hover:bg-[#D4A030] transition-colors" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                GENERATE MY CHECKLIST
              </button>
            </div>
          </StaggerItem>

          {/* Tool 2 */}
          <StaggerItem>
            <div className="bg-white p-12 lg:p-14 border-t-2 border-[#E8B53C] h-full flex flex-col">
              <p className="text-[#E8B53C] text-[11px] tracking-[0.2em] mb-8" style={{ fontFamily: "Inter, sans-serif" }}>TOOL 02</p>
              <h3 className="text-[#0C1D35] mb-6 leading-snug" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.7rem", fontWeight: 500 }}>
                Investment Readiness Scorecard
              </h3>
              <p className="text-[#3D4A5C] mb-8 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "17px" }}>
                Rate your company across five critical dimensions and receive an overall readiness score with a full category breakdown.
              </p>
              <p className="text-[#6B7280] text-[12px] tracking-[0.12em] mb-4" style={{ fontFamily: "Inter, sans-serif" }}>WHAT IT COVERS</p>
              <ul className="space-y-3 mb-10 flex-1">
                {["Financial health and quality of earnings", "Legal and regulatory compliance", "Governance and management credibility", "Market position and traction", "Documentation and disclosure readiness"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#3D4A5C]" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}>
                    <span className="text-[#E8B53C] mt-1.5 text-[10px] shrink-0">▪</span>{item}
                  </li>
                ))}
              </ul>
              <button onClick={() => setShowScorecard(true)} className="w-full py-4 bg-[#E8B53C] text-[#0C1D35] text-[13px] tracking-widest hover:bg-[#D4A030] transition-colors" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                GET MY SCORE
              </button>
            </div>
          </StaggerItem>
        </Stagger>
      </div>

      {showDDR && <DDRModal onClose={() => setShowDDR(false)} />}
      {showScorecard && <ScorecardModal onClose={() => setShowScorecard(false)} />}
    </section>
  );
}
