const serviceLinks = [
  "Financial Due Diligence",
  "Red Flag Due Diligence",
  "Integrity Intelligence",
  "Investigations & Dispute Intelligence",
  "Asset Tracing & Recovery",
  "Fast Track Due Diligence",
  "Post-Closure Risk Monitoring",
];

const companyLinks = [
  { label: "About", id: "about" },
  { label: "Case Studies", id: "case-studies" },
  { label: "Free Tools", id: "tools" },
  { label: "Book a Consultation", id: "contact" },
  { label: "Contact", id: "contact" },
];

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t-2 border-[#E8E6E0]">
      <div className="max-w-[1500px] mx-auto px-10 lg:px-20 pt-20 pb-12">
        <div className="grid lg:grid-cols-4 gap-14 lg:gap-10 pb-20 border-b border-[#E8E6E0]">
          <div className="lg:col-span-1">
            <button
              onClick={() => scrollTo("top")}
              className="tracking-[0.2em] text-[17px] text-[#0C1D35] mb-5 block hover:opacity-60 transition-opacity"
              style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 500 }}
            >
              FINACQUIS
            </button>
            <p className="text-[#6B7280] leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}>
              Independent Intelligence.
              <br />
              Informed Decisions.
            </p>

            <div className="space-y-2">
              <a
                href="mailto:info@finacquis.com"
                className="block text-[#3D4A5C] hover:text-[#0C1D35] transition-colors"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
              >
                info@finacquis.com
              </a>
              <p className="text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}>
                Mumbai, India
              </p>
              <p className="text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}>
                Dubai, UAE
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <p className="text-[#6B7280] text-[12px] tracking-[0.2em] mb-7" style={{ fontFamily: "Inter, sans-serif" }}>
              SERVICES
            </p>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-[#3D4A5C] hover:text-[#0C1D35] transition-colors text-left"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <p className="text-[#6B7280] text-[12px] tracking-[0.2em] mb-7" style={{ fontFamily: "Inter, sans-serif" }}>
              COMPANY
            </p>
            <ul className="space-y-4">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-[#3D4A5C] hover:text-[#0C1D35] transition-colors text-left"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <p className="text-[#6B7280] text-[12px] tracking-[0.2em] mb-7" style={{ fontFamily: "Inter, sans-serif" }}>
              GET STARTED
            </p>
            <p className="text-[#3D4A5C] leading-relaxed mb-7" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}>
              Every engagement begins with a confidential conversation.
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3.5 bg-[#E8B53C] text-[#0C1D35] text-[12px] tracking-widest hover:bg-[#D4A030] transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
            >
              BOOK A CONSULTATION
            </button>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px" }}>
            © 2026 Finacquis Venture. All rights reserved.
          </p>
          <p className="text-[#9CA3AF] text-right" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px" }}>
            Private & Confidential. All engagements subject to formal terms and NDA.
          </p>
        </div>
      </div>
    </footer>
  );
}
