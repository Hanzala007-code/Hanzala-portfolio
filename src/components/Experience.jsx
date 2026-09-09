import React from "react";
import { experiences } from "../data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, Layers, ArrowRight } from "lucide-react";

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

                  {/* If the experience contains full projects, render them with architecture breakdowns */}
                  {exp.projects && exp.projects.length > 0 ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "18px", marginBottom: "22px" }}>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "var(--accent-cyan)",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px"
                        }}
                      >
                        <Layers size={14} />
                        <span>Engineered Production Projects & Pipelines</span>
                      </div>

                      {exp.projects.map((proj, pIdx) => (
                        <div
                          key={pIdx}
                          style={{
                            background: "rgba(255, 255, 255, 0.025)",
                            border: "1px solid rgba(0, 240, 255, 0.18)",
                            borderRadius: "12px",
                            padding: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                            position: "relative"
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
                            <h4
                              style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "1.1rem",
                                fontWeight: 700,
                                color: "#ffffff"
                              }}
                            >
                              {proj.title}
                            </h4>
                            <span
                              className="badge badge-cyan"
                              style={{ fontSize: "0.72rem" }}
                            >
                              {proj.badge}
                            </span>
                          </div>

                          <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                            {proj.description}
                          </p>

                          {proj.architecture && (
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
                              <div
                                style={{
                                  fontFamily: "var(--font-mono)",
                                  fontSize: "0.7rem",
                                  color: "var(--text-muted)",
                                  letterSpacing: "0.04em",
                                  fontWeight: 600
                                }}
                              >
                                PIPELINE ARCHITECTURE & WORKFLOW:
                              </div>
                              {proj.architecture.map((step, sIdx) => (
                                <div
                                  key={sIdx}
                                  style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "8px",
                                    fontSize: "0.84rem",
                                    color: "#cbd5e1",
                                    lineHeight: 1.5
                                  }}
                                >
                                  <ArrowRight size={13} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: "4px" }} />
                                  <span>{step}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "6px" }}>
                            {proj.tech.map((t, tIdx) => (
                              <span
                                key={tIdx}
                                className="badge"
                                style={{
                                  fontSize: "0.7rem",
                                  background: "rgba(255, 255, 255, 0.04)",
                                  borderColor: "rgba(255, 255, 255, 0.08)"
                                }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Standard Highlights Bullet points */
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "22px" }}>
                      {exp.highlights.map((h, hIdx) => (
                        <div key={hIdx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "#cbd5e1" }}>
                          <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: "3px" }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Summary Tech stack */}
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
