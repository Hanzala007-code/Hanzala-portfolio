import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowRight, Sparkles, Terminal as TerminalIcon, ShieldCheck, Download, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "130px",
        paddingBottom: "80px",
        position: "relative",
        zIndex: 10
      }}
    >
      <div className="container">
        <div style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center" }}>
          {/* Holographic Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 18px",
              background: "rgba(138, 43, 226, 0.12)",
              border: "1px solid rgba(138, 43, 226, 0.3)",
              borderRadius: "var(--radius-full)",
              marginBottom: "28px",
              boxShadow: "0 0 20px rgba(138, 43, 226, 0.2)"
            }}
          >
            <Sparkles size={16} color="#bf77f6" />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", color: "#d8b4fe", letterSpacing: "0.05em" }}>
              FAST NUCES DATA SCIENCE • 2026
            </span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.8rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "24px"
            }}
          >
            I Engineer <span className="gradient-text">Production AI</span> Systems, Not Just Coursework.
          </h1>

          {/* Bio text */}
          <p
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              maxWidth: "740px",
              margin: "0 auto 38px",
              fontWeight: 400
            }}
          >
            Hi, I’m <strong style={{ color: "var(--text-primary)" }}>Hanzala Malik</strong>. Data Science & AI/ML Engineer 
            specializing in high-accuracy <span style={{ color: "var(--accent-cyan)" }}>Computer Vision</span> (ConvNeXt, YOLOv8), 
            <span style={{ color: "var(--accent-violet)" }}> Multi-Agent Systems</span> (Ollama, Habitat), and 
            enterprise <span style={{ color: "var(--accent-emerald)" }}>Speech & NLP Automation</span> pipelines.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "64px"
            }}
          >
            <a href="#projects" className="btn btn-primary btn-glow">
              <span>Explore Live Systems</span>
              <ArrowRight size={18} />
            </a>

            <a href="#terminal" className="btn btn-secondary">
              <TerminalIcon size={18} color="var(--accent-cyan)" />
              <span>Launch AI Terminal</span>
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Code2 size={18} color="var(--accent-emerald)" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Telemetry Metrics Bar */}
          <div
            className="glass-panel"
            style={{
              padding: "24px 32px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "24px",
              textAlign: "center",
              border: "1px solid rgba(0, 240, 255, 0.18)",
              boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.7)"
            }}
          >
            {personalInfo.stats.map((stat, i) => (
              <div key={i} style={{ position: "relative" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.4rem",
                    fontWeight: 800,
                    color: i === 0 ? "var(--accent-cyan)" : i === 1 ? "var(--accent-emerald)" : i === 2 ? "#bf77f6" : "#ffb800",
                    lineHeight: 1.1,
                    marginBottom: "4px"
                  }}
                >
                  {stat.value}
                  <span style={{ fontSize: "1.4rem" }}>{stat.suffix}</span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em"
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
