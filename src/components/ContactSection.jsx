import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail, Phone, MapPin, Send, Check, Copy, Linkedin, Github, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {}
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 60px" }}>
          <div className="section-tag">
            <Mail size={14} />
            <span>Initiate Transmission</span>
          </div>
          <h2 className="section-title">
            Let’s Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Available for full-time AI/ML Engineering positions, high-impact consulting, 
            and cutting-edge computer vision & speech pipelines.
          </p>
        </div>

        <div className="grid-2" style={{ maxWidth: "1050px", margin: "0 auto", alignItems: "stretch" }}>
          {/* Coordinates Card */}
          <div
            className="glass-panel"
            style={{
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div className="status-pill" style={{ marginBottom: "20px" }}>
                <span className="status-dot"></span>
                <span>Open for Global Opportunities & Roles</span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  marginBottom: "12px",
                  color: "var(--text-primary)"
                }}
              >
                Hanzala Malik
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.98rem", marginBottom: "32px", lineHeight: 1.6 }}>
                Based in Islamabad, Pakistan. Translating complex research algorithms and deep learning models directly into working commercial architectures.
              </p>

              {/* Direct Info List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Email */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "var(--radius-md)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Mail size={18} color="var(--accent-cyan)" />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.88rem", color: "#f8fafc" }}>
                      {personalInfo.email}
                    </span>
                  </div>
                  <button
                    onClick={copyEmail}
                    title="Copy Email"
                    style={{
                      background: "transparent",
                      border: "none",
                      color: copiedEmail ? "var(--accent-emerald)" : "var(--text-muted)",
                      cursor: "pointer"
                    }}
                  >
                    {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>

                {/* Phone */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "var(--radius-md)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Phone size={18} color="var(--accent-emerald)" />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.88rem", color: "#f8fafc" }}>
                      {personalInfo.phone}
                    </span>
                  </div>
                  <button
                    onClick={copyPhone}
                    title="Copy Phone"
                    style={{
                      background: "transparent",
                      border: "none",
                      color: copiedPhone ? "var(--accent-emerald)" : "var(--text-muted)",
                      cursor: "pointer"
                    }}
                  >
                    {copiedPhone ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>

                {/* Location */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "14px 18px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "var(--radius-md)"
                  }}
                >
                  <MapPin size={18} color="#bf77f6" />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.88rem", color: "#f8fafc" }}>
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, padding: "10px" }}
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, padding: "10px" }}
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div
            className="glass-panel"
            style={{
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            {sent ? (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "40px 20px"
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "rgba(0, 245, 160, 0.15)",
                    border: "1px solid var(--accent-emerald)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px"
                  }}
                >
                  <Check size={32} color="var(--accent-emerald)" />
                </div>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", marginBottom: "10px" }}>
                  Message Received!
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", maxWidth: "340px", marginBottom: "24px" }}>
                  Thank you for reaching out. Hanzala will review your transmission and get back to you shortly.
                </p>
                <button onClick={() => setSent(false)} className="btn btn-secondary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, marginBottom: "6px" }}>
                    Send a Direct Transmission
                  </h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                    Have an AI project or career opportunity? Let’s talk.
                  </p>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "8px"
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "var(--radius-md)",
                      color: "#fff",
                      fontFamily: "var(--font-main)",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "8px"
                    }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "var(--radius-md)",
                      color: "#fff",
                      fontFamily: "var(--font-main)",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "8px"
                    }}
                  >
                    Project / Role Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your AI system, vision task, or job requirements..."
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "var(--radius-md)",
                      color: "#fff",
                      fontFamily: "var(--font-main)",
                      fontSize: "0.95rem",
                      outline: "none",
                      resize: "none"
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-glow" style={{ width: "100%", marginTop: "6px" }}>
                  <Send size={16} />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
