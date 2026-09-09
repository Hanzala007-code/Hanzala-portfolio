import React, { useState } from "react";
import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";
import { Layers, Sparkles } from "lucide-react";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Computer Vision", "Agentic AI", "Speech & NLP", "Data Engineering", "Reinforcement & ML"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
          <div className="section-tag">
            <Layers size={14} />
            <span>Systems & Architecture</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">AI Systems</span> & Deployments
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Production-grade machine learning pipelines, deep convolutional vision architectures, 
            local multi-agent orchestrators, and enterprise automation engines.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "48px"
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "9px 20px",
                  borderRadius: "var(--radius-full)",
                  background: isActive ? "linear-gradient(135deg, rgba(0,240,255,0.2), rgba(138,43,226,0.2))" : "rgba(255,255,255,0.04)",
                  border: isActive ? "1px solid var(--accent-cyan)" : "1px solid rgba(255,255,255,0.08)",
                  color: isActive ? "var(--accent-cyan)" : "var(--text-secondary)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "var(--transition)",
                  boxShadow: isActive ? "0 0 20px rgba(0,240,255,0.25)" : "none"
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid-3">
          {filteredProjects.map((project) => (
            <div key={project.id} style={{ display: "flex" }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
