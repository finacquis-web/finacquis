import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", id: "services" },
  { label: "Intelligence Suite", id: "approach" },
  { label: "Case Studies", id: "case-studies" },
  { label: "Tools", id: "tools" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-[3px] left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? "border-b border-[#E8E6E0] shadow-sm" : "border-b border-[#E8E6E0]"}`}>
      <div className="max-w-[1500px] mx-auto px-10 lg:px-20 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("top")}
          className="tracking-[0.2em] text-[17px] text-[#0C1D35] transition-opacity hover:opacity-60"
          style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 500 }}
        >
          FINACQUIS
        </button>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-[14px] tracking-wide text-[#0C1D35] transition-opacity hover:opacity-50"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden lg:block px-6 py-2.5 bg-[#E8B53C] text-[#0C1D35] text-[12px] tracking-widest hover:bg-[#D4A030] transition-all duration-200"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
        >
          BOOK A CONSULTATION
        </button>

        <button
          className="lg:hidden text-[#0C1D35] transition-opacity hover:opacity-60"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8E6E0]">
          <div className="max-w-[1500px] mx-auto px-10 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-[15px] tracking-wide text-[#0C1D35] text-left transition-opacity hover:opacity-50"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-2 w-full py-4 bg-[#E8B53C] text-[#0C1D35] text-[13px] tracking-widest"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
