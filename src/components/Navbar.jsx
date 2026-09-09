import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { Terminal as TerminalIcon, Github, Linkedin, Menu, X, Cpu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Terminal", href: "#terminal" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "12px 0" : "20px 0",
        transition: "var(--transition)",
        background: scrolled ? "rgba(7, 9, 14, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "none"
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "var(--text-primary)"
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #00f0ff, #8a2be2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 15px rgba(0, 240, 255, 0.4)"
            }}
          >
            <Cpu size={22} color="#07090e" strokeWidth={2.5} />
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.15rem", letterSpacing: "-0.01em" }}>
              HANZALA<span style={{ color: "var(--accent-cyan)" }}>.AI</span>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.06em" }}>
              DATA SCIENCE & AI/ML
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: "none" }} className="desktop-nav">
          <ul style={{ display: "flex", alignItems: "center", gap: "28px", listStyle: "none" }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    transition: "var(--transition)",
                    position: "relative"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Group */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="status-pill" style={{ display: "none" }}>
            <span className="status-dot"></span>
            <span>Available for Hire</span>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-primary)",
              transition: "var(--transition)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-cyan)";
              e.currentTarget.style.color = "var(--accent-cyan)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
          >
            <Github size={18} />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-primary)",
              transition: "var(--transition)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#0077b5";
              e.currentTarget.style.color = "#0077b5";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
          >
            <Linkedin size={18} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-primary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center"
            }}
            className="mobile-toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(10, 13, 20, 0.98)",
            borderBottom: "1px solid rgba(0, 240, 255, 0.2)",
            padding: "24px",
            backdropFilter: "blur(20px)"
          }}
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "18px" }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    display: "block"
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (min-width: 820px) {
          .desktop-nav { display: block !important; }
          .status-pill { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
