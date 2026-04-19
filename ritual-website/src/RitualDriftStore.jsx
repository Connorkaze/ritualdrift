import React from "react";

export default function RitualDriftStore() {
  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "black", color: "white", padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: "12px" }}>RITUAL Drift Co</h1>
      <p style={{ color: "#bbb", marginBottom: "24px" }}>
        Your website is live.
      </p>

      <nav style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
        <a href="#shop" onClick={scrollToSection("shop")} style={{ color: "white" }}>Shop</a>
        <a href="#gallery" onClick={scrollToSection("gallery")} style={{ color: "white" }}>Gallery</a>
        <a href="#contact" onClick={scrollToSection("contact")} style={{ color: "white" }}>Contact</a>
      </nav>

      <section id="shop" style={{ marginTop: "80px" }}>
        <h2>Shop</h2>
        <p style={{ color: "#bbb" }}>Products coming soon.</p>
      </section>

      <section id="gallery" style={{ marginTop: "80px" }}>
        <h2>Gallery</h2>
        <p style={{ color: "#bbb" }}>Photos coming soon.</p>
      </section>

      <section id="contact" style={{ marginTop: "80px" }}>
        <h2>Contact</h2>
        <p style={{ color: "#bbb" }}>Instagram: @ritualdriftco</p>
      </section>
    </div>
  );
}
