import React from "react";
import { experiences } from "../data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 60px" }}>
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Track Record</span>
          </div>
          <h2 className="section-title">
            Industry <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Delivering automated intelligence pipelines, enterprise invoice OCR systems, 
            and scalable LLM workflows in production environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: "850px", margin: "0 auto", position: "relative" }}>
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              bottom: "20px",
              left: "20px",
              width: "2px",
              background: "linear-gradient(180deg, var(--accent-cyan), var(--accent-violet), var(--accent-emerald))",
              opacity: 0.4
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {experiences.map((exp, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "28px",
                  position: "relative"
                }}
              >
                {/* Timeline Dot */}
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "var(--bg-primary)",
                    border: `2px solid ${i === 0 ? "var(--accent-cyan)" : i === 1 ? "var(--accent-violet)" : "var(--accent-emerald)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 15px ${i === 0 ? "rgba(0,240,255,0.4)" : "rgba(138,43,226,0.4)"}`,
                    flexShrink: 0,
                    zIndex: 2
                  }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    0{i + 1}
                  </span>
                </div>

                {/* Content Card */}
                <div className="glass-panel" style={{ flex: 1, padding: "30px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "12px" }}>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.35rem",
                          fontWeight: 700,
                          color: "var(--text-primary)"
                        }}
                      >
                        {exp.role}
                      </h3>
                      <div style={{ color: "var(--accent-cyan)", fontWeight: 600, fontSize: "1.05rem", marginTop: "2px" }}>
                        {exp.company}
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "var(--text-muted)", fontSize: "0.82rem", fontFamily: "var(--font-mono)" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "18px", fontStyle: "italic" }}>
                    "{exp.summary}"
                  </p>

                  {/* Highlights Bullet points */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "22px" }}>
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "#cbd5e1" }}>
                        <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: "3px" }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {exp.tech.map((t, tIdx) => (
                      <span key={tIdx} className="badge badge-cyan" style={{ fontSize: "0.72rem" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
