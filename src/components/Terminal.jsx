import React, { useState, useRef, useEffect } from "react";
import { personalInfo, projects, skillCategories } from "../data/portfolioData";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, RefreshCw } from "lucide-react";
import confetti from "canvas-confetti";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "🚀 HANZALA-OS Neural Terminal v2.6.0 initialized." },
    { type: "system", text: "Connected to: National University of Computer & Emerging Sciences (FAST-NUCES)" },
    { type: "system", text: "Type 'help' or click any quick command chip below to begin exploration." }
  ]);

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdText) => {
    const raw = cmdText.trim();
    const cmd = raw.toLowerCase();

    if (!cmd) return;

    // Add user command to history
    const newHistory = [...history, { type: "user", text: `$ ${raw}` }];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `AVAILABLE COMMANDS:
• projects    - List all production ML, Vision & Automation systems
• skills      - Display technical proficiency matrix
• about       - Overview of Hanzala Malik's engineering focus
• experience  - Summary of industry roles (Cnergyico, Escaplix, etc.)
• contact     - Instant phone, email, and social coordinates
• hire        - Trigger hiring readiness protocol & confetti
• clear       - Reset the terminal screen`
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: `FEATURED PRODUCTION PROJECTS:
${projects.map((p, idx) => `[0${idx + 1}] ${p.title}\n     Category: ${p.category} | Metric: ${p.badge}\n     URL: ${p.github}`).join("\n\n")}`
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: `CORE TECHNICAL STACK:
• AI & Vision: ConvNeXt, ResNet, YOLOv8, Vision Transformers, CBAM, PyTorch
• Speech & Audio: Whisper/faster-Whisper ASR, pyannote diarization, Silero VAD, wav2vec2
• Multi-Agent & LLMs: Ollama (qwen2.5:3b), HabitatAgent topology, Prompt Systems
• Backend & Data: FastAPI, Uvicorn, REST, Webhooks, n8n, SQL, Pandas, NumPy`
        });
        break;

      case "about":
      case "bio":
        newHistory.push({
          type: "output",
          text: `${personalInfo.name} — ${personalInfo.role}
Degree: BS in Data Science (FAST NUCES, 2022 - 2026)
Location: ${personalInfo.location}

Philosophy: ${personalInfo.tagline}
${personalInfo.bio}`
        });
        break;

      case "experience":
        newHistory.push({
          type: "output",
          text: `PROFESSIONAL TIMELINE:
1. Cnergyico (Aug 2026 - Sept 2026) - AI Automation Engineer (Speech Diarization & ~300 Vendor Invoice OCR Engine)
2. Escaplix (Nov 2025 - Jun 2026) - AI Automation Engineer (n8n, OpenAI APIs, FastAPI Services)
3. CloudOps (Oct 2024 - Sept 2025) - AI-Based Outreach Automation (Scale Personalization)
4. NADRA Pakistan (Jul 2024 - Aug 2024) - Data Science Associate (Gov FAQ Chatbot Architecture)`
        });
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: `COMMUNICATION CHANNELS:
• Email:    ${personalInfo.email}
• Phone:    ${personalInfo.phone}
• GitHub:   ${personalInfo.github}
• LinkedIn: ${personalInfo.linkedin}`
        });
        break;

      case "hire":
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {}
        newHistory.push({
          type: "output",
          text: `🎉 INITIATING CONTACT PROTOCOL:
Hanzala Malik is currently available for High-Impact Data Science, AI/ML Engineering, and Computer Vision opportunities.
Shoot an email directly: ${personalInfo.email} or call ${personalInfo.phone}`
        });
        break;

      case "clear":
        setHistory([
          { type: "system", text: "Screen cleared. Type 'help' for command list." }
        ]);
        setInput("");
        return;

      default:
        newHistory.push({
          type: "error",
          text: `Command not recognized: '${raw}'. Type 'help' for the list of available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInput("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  const quickCommands = ["help", "projects", "skills", "experience", "contact", "hire", "clear"];

  return (
    <section id="terminal" className="section" style={{ background: "rgba(10, 13, 20, 0.5)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
          <div className="section-tag">
            <TerminalIcon size={14} />
            <span>Interactive Telemetry</span>
          </div>
          <h2 className="section-title">
            Interactive <span className="gradient-text">AI Shell</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Interact directly with the system. Query architecture specs, project repositories, or execute system queries.
          </p>
        </div>

        {/* Terminal Window */}
        <div
          className="glass-panel"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(0, 240, 255, 0.25)",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.85)"
          }}
        >
          {/* Title Bar */}
          <div
            style={{
              padding: "14px 20px",
              background: "rgba(18, 24, 38, 0.8)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
              <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }} />
              <span
                style={{
                  marginLeft: "12px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "var(--text-secondary)"
                }}
              >
                hanzala@neural-core:~/portfolio
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="badge badge-cyan" style={{ fontSize: "0.7rem" }}>
                SHELL: BASH
              </span>
            </div>
          </div>

          {/* Terminal Body */}
          <div
            style={{
              padding: "24px",
              minHeight: "320px",
              maxHeight: "440px",
              overflowY: "auto",
              fontFamily: "var(--font-mono)",
              fontSize: "0.88rem",
              background: "rgba(7, 9, 14, 0.92)",
              color: "#e2e8f0"
            }}
          >
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: "12px", whiteSpace: "pre-wrap" }}>
                {item.type === "system" && (
                  <span style={{ color: "var(--accent-cyan)" }}>{item.text}</span>
                )}
                {item.type === "user" && (
                  <span style={{ color: "var(--accent-emerald)", fontWeight: 600 }}>{item.text}</span>
                )}
                {item.type === "output" && (
                  <span style={{ color: "#cbd5e1" }}>{item.text}</span>
                )}
                {item.type === "error" && (
                  <span style={{ color: "#ff6b81" }}>{item.text}</span>
                )}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Quick Command Chips */}
          <div
            style={{
              padding: "10px 20px",
              background: "rgba(14, 20, 31, 0.95)",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap"
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>
              Quick Commands:
            </span>
            {quickCommands.map((q) => (
              <button
                key={q}
                onClick={() => handleCommand(q)}
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(0, 240, 255, 0.2)",
                  borderRadius: "var(--radius-full)",
                  padding: "4px 10px",
                  color: "var(--accent-cyan)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  cursor: "pointer",
                  transition: "var(--transition)"
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Command Input Bar */}
          <form
            onSubmit={onSubmit}
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(10, 14, 22, 0.98)",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "14px 20px"
            }}
          >
            <span style={{ color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", marginRight: "10px" }}>
              ❯
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a command (e.g. 'projects', 'skills', 'hire')..."
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#ffffff",
                fontFamily: "var(--font-mono)",
                fontSize: "0.92rem"
              }}
            />
            <button
              type="submit"
              aria-label="Send Command"
              style={{
                background: "rgba(0, 240, 255, 0.15)",
                border: "1px solid rgba(0, 240, 255, 0.3)",
                color: "var(--accent-cyan)",
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}
            >
              <CornerDownLeft size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
