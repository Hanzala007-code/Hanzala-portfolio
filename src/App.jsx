import React from "react";
import NeuralBackground from "./components/NeuralBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import Experience from "./components/Experience";
import SkillsMatrix from "./components/SkillsMatrix";
import Terminal from "./components/Terminal";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Interactive Canvas Starfield / Synapse Constellation */}
      <NeuralBackground />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main>
        <Hero />
        <ProjectsSection />
        <Experience />
        <SkillsMatrix />
        <Terminal />
        <ContactSection />
      </main>

      {/* Futuristic Telemetry Footer */}
      <Footer />
    </div>
  );
}
