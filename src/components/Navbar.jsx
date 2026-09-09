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
        {/* Brand Logo - Clean, Minimalist & Human */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            color: "var(--text-primary)",
            transition: "var(--transition)"
          }}
          className="brand-link"
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "0.95rem",
              letterSpacing: "-0.04em",
              color: "#ffffff",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
              position: "relative"
            }}
          >
            <span>HM</span>
            <span
              style={{
                position: "absolute",
                bottom: "6px",
                right: "6px",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "var(--accent-cyan)",
                boxShadow: "0 0 6px var(--accent-cyan)"
              }}
            />
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.08rem", letterSpacing: "-0.02em", color: "#ffffff" }}>
              Hanzala Malik
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.04em" }}>
              Data Science & AI
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
