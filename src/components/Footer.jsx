import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowUp, Cpu, Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        background: "rgba(6, 8, 12, 0.95)",
        padding: "50px 0 30px",
        position: "relative",
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "36px"
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "0.9rem",
                letterSpacing: "-0.03em",
                color: "#ffffff"
              }}
            >
              HM
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.05rem", color: "#ffffff" }}>
                Hanzala Malik
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>
                Data Science & AI/ML Engineer
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "16px" }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--text-secondary)", transition: "var(--transition)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--text-secondary)", transition: "var(--transition)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              <Linkedin size={20} />
            </a>
            <button
              onClick={scrollToTop}
              title="Return to Top"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "var(--text-primary)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "var(--transition)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-cyan)";
                e.currentTarget.style.color = "var(--accent-cyan)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.04)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--text-muted)"
          }}
        >
          <div>
            © {new Date().getFullYear()} Hanzala Malik. Engineered with React & Neural Design Tokens.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="status-dot" style={{ width: "6px", height: "6px" }}></span>
            <span>SYSTEM STATE: OPTIMAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
