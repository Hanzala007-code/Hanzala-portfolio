import React from "react";
import { Github, ExternalLink, Activity, Sparkles, CheckCircle2 } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div
      className="glass-panel"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "30px",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        borderTop: `2px solid ${project.accentColor || "var(--accent-cyan)"}`
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "150px",
          height: "150px",
          background: project.accentColor || "var(--accent-cyan)",
          opacity: 0.08,
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none"
        }}
      />

      <div>
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px", gap: "10px" }}>
          <span
            className="badge"
            style={{
              borderColor: `${project.accentColor}40`,
              color: project.accentColor,
              background: `${project.accentColor}10`
            }}
          >
            {project.badge}
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.35rem",
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: "14px",
            color: "var(--text-primary)"
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            marginBottom: "20px"
          }}
        >
          {project.description}
        </p>

        {/* Metrics List */}
        <div style={{ marginBottom: "22px" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
              marginBottom: "8px"
            }}
          >
            Key Highlights
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.82rem",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-main)"
                }}
              >
                <CheckCircle2 size={13} color={project.accentColor || "var(--accent-cyan)"} />
                <span>{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        {/* Tech Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
          {project.tags.map((t, idx) => (
            <span key={idx} className="badge" style={{ fontSize: "0.72rem" }}>
              {t}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            padding: "11px 18px",
            borderRadius: "var(--radius-md)",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            color: "var(--text-primary)",
            textDecoration: "none",
            fontSize: "0.88rem",
            fontWeight: 600,
            transition: "var(--transition)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = project.accentColor || "var(--accent-cyan)";
            e.currentTarget.style.color = project.accentColor || "var(--accent-cyan)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.09)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.color = "var(--text-primary)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
          }}
        >
          <Github size={16} />
          <span>View on GitHub</span>
          <ExternalLink size={13} style={{ opacity: 0.6 }} />
        </a>
      </div>
    </div>
  );
}
