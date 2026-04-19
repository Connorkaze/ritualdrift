export default function RitualDriftStore() {
  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{padding:40}}>
      <h1>RITUAL Drift Co</h1>
      <p>Your website is ready to deploy.</p>

      <nav style={{marginTop:20}}>
        <a href="#shop" onClick={scrollToSection("shop")} style={{marginRight:20}}>Shop</a>
        <a href="#gallery" onClick={scrollToSection("gallery")} style={{marginRight:20}}>Gallery</a>
        <a href="#contact" onClick={scrollToSection("contact")}>Contact</a>
      </nav>

      <section id="shop" style={{marginTop:80}}>
        <h2>Shop</h2>
        <p>Product placeholders will appear here.</p>
      </section>

      <section id="gallery" style={{marginTop:80}}>
        <h2>Gallery</h2>
        <p>Gallery images will appear here.</p>
      </section>

      <section id="contact" style={{marginTop:80}}>
        <h2>Contact</h2>
        <p>Instagram: @ritualdriftco</p>
      </section>
    </div>
  );
}
