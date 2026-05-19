import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { SectionHeader, FadeIn } from "./AnimateIn";
import { Mail } from "lucide-react";
const enquiryOptions = [
  "Pre-Investment Due Diligence",
  "Red Flag Due Diligence",
  "Integrity Intelligence",
  "Investigations & Dispute Intelligence",
  "Asset Tracing & Recovery",
  "Fast Track Due Diligence",
  "Post-Closure Risk Monitoring",
  "Investment Readiness Assessment",
  "Not sure — need guidance",
];

export function StartConversation() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    enquiry: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full border-b-2 border-[#E8E6E0] bg-transparent py-4 text-[#0C1D35] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0C1D35] transition-colors";
  const labelClass = "block text-[#0C1D35] text-[13px] tracking-[0.15em] mb-2 font-medium";

  return (
    <section id="contact" className="py-28 lg:py-36 bg-white border-t border-[#E8E6E0]">
      <div className="max-w-[1500px] mx-auto px-10 lg:px-20">
        <SectionHeader label="START A CONVERSATION" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28">
          <FadeIn>
            <h2
              className="text-[#0C1D35] mb-8 leading-snug"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2.4rem, 4vw, 4rem)",
                fontWeight: 400,
              }}
            >
              Every engagement begins with a confidential conversation.
            </h2>
            <p
              className="text-[#3D4A5C] leading-relaxed mb-4"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "18px" }}
            >
              Tell us about your situation. We will tell you whether we can help, what it involves, and what it costs — before any commitment is made.
            </p>
            <p
              className="text-[#3D4A5C] leading-relaxed mb-12"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "18px" }}
            >
              All enquiries are treated with complete discretion.
            </p>

            <div className="space-y-5">
              {["Response within 4 business hours.", "All enquiries strictly confidential."].map((line, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#E8B53C] shrink-0" />
                  <p className="text-[#3D4A5C]" style={{ fontFamily: "Inter, sans-serif", fontSize: "17px" }}>
                    {line}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 pt-12 border-t border-[#E8E6E0]">
              <p
                className="text-[#6B7280] text-[13px] tracking-[0.15em] mb-5"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                PREFER EMAIL?
              </p>
              <a
                href="mailto:info@finacquis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-7 py-4 border border-[#E8E6E0] text-[#0C1D35] hover:border-[#E8B53C] hover:bg-[#FFFDF5] transition-all duration-200"
              >
                <Mail size={18} className="text-[#E8B53C]" />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}>
                  Reach out directly via email.
                </span>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ fontFamily: "Inter, sans-serif" }}>
                <div className="space-y-9">
                  {[
                    { id: "name", label: "FULL NAME", type: "text", placeholder: "Your full name", required: true },
                    { id: "organisation", label: "ORGANISATION / FIRM", type: "text", placeholder: "Your organisation", required: true },
                    { id: "email", label: "EMAIL ADDRESS", type: "email", placeholder: "Your email address", required: true },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className={labelClass} htmlFor={field.id}>{field.label}</label>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        required={field.required}
                        value={form[field.id as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className={`${inputClass} text-[17px]`}
                        style={{ fontFamily: "Inter, sans-serif" }}
                      />
                    </div>
                  ))}

                  <div>
                    <label className={labelClass} htmlFor="enquiry">NATURE OF ENQUIRY</label>
                    <select
                      id="enquiry"
                      name="enquiry"
                      required
                      value={form.enquiry}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer text-[17px]`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <option value="" disabled>Select enquiry type</option>
                      {enquiryOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="description">BRIEF DESCRIPTION OF SITUATION</label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Brief context about your situation or requirement"
                      className={`${inputClass} resize-none text-[17px]`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-12 w-full py-5 bg-[#E8B53C] text-[#0C1D35] text-[13px] tracking-widest hover:bg-[#D4A030] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                >
                  BOOK A CONSULTATION
                </button>
              </form>
            ) : (
              <div className="flex flex-col justify-center py-20">
                <div className="w-8 h-[2px] bg-[#E8B53C] mb-10" />
                <h3
                  className="text-[#0C1D35] mb-6"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 400 }}
                >
                  Thank you for reaching out.
                </h3>
                <p className="text-[#3D4A5C] leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "18px" }}>
                  We have received your enquiry and will respond within 4 business hours. All information shared with us
                  is held in strict confidence.
                </p>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
