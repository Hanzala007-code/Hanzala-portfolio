import React from "react";
import { skillCategories } from "../data/portfolioData";
import { Brain, Cpu, Server, Database, Code, Award } from "lucide-react";

export default function SkillsMatrix() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Brain": return <Brain size={22} color="var(--accent-cyan)" />;
      case "Cpu": return <Cpu size={22} color="#bf77f6" />;
      case "Server": return <Server size={22} color="var(--accent-emerald)" />;
      case "Database": return <Database size={22} color="#ffb800" />;
      default: return <Code size={22} color="var(--accent-cyan)" />;
    }
  };

  return (
    <section id="skills" className="section" style={{ background: "rgba(8, 11, 17, 0.6)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 60px" }}>
          <div className="section-tag">
            <Award size={14} />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Mastery</span> & Tools
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            A rigorous full-stack AI engineering toolkit spanning deep learning architectures, 
            speech processing engines, and production backend deployment.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid-2">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: "32px",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Category Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {getIcon(cat.icon)}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text-primary)"
                  }}
                >
                  {cat.name}
                </h3>
              </div>

              {/* Skills List */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                {cat.skills.map((s, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                      borderRadius: "var(--radius-sm)",
                      padding: "10px 14px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "4px"
                    }}
                  >
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#f1f5f9" }}>
                      {s.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: s.level === "Expert" ? "var(--accent-cyan)" : s.level === "Advanced" ? "var(--accent-emerald)" : "#bf77f6"
                      }}
                    >
                      {s.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
