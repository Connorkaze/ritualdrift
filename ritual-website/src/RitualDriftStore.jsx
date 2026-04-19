import React, { useMemo, useState } from "react";
import placeholder from "./placeholder.jpg";

const SIZES = ["S", "M", "L", "XL"];

const PRODUCTS = [
  {
    id: "signature-tee",
    name: "Signature Tee",
    category: "Shirts",
    price: "$1",
    desc: "description unavailable",
    longDesc: "description unavailable",
    hasSizes: true,
    image: placeholder,
  },
  {
    id: "signature-hoodie",
    name: "Signature Hoodie",
    category: "Hoodies",
    price: "$1",
    desc: "description unavailable",
    longDesc: "description unavailable",
    hasSizes: true,
    image: placeholder,
  },
  {
    id: "pit-banner",
    name: "Pit Banner",
    category: "Banners",
    price: "$1",
    desc: "description unavailable",
    longDesc: "description unavailable",
    hasSizes: false,
    image: placeholder,
  },
  {
    id: "logo-sticker",
    name: "Logo Sticker",
    category: "Stickers",
    price: "$1",
    desc: "description unavailable",
    longDesc: "description unavailable",
    hasSizes: false,
    image: placeholder,
  },
  {
    id: "team-plate",
    name: "Team Plate",
    category: "License Plates",
    price: "$1",
    desc: "description unavailable",
    longDesc: "description unavailable",
    hasSizes: false,
    image: placeholder,
  },
];

const GALLERY = [placeholder, placeholder, placeholder, placeholder];

const baseStyles = {
  page: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  container: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "0 28px",
  },
  navWrap: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    backdropFilter: "blur(12px)",
    background: "rgba(0,0,0,0.7)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 0",
    gap: "16px",
  },
  brandTitle: {
    fontSize: "28px",
    fontWeight: 900,
    letterSpacing: "0.22em",
  },
  brandSub: {
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.35em",
    color: "rgba(255,255,255,0.58)",
    marginTop: "4px",
  },
  navLinks: {
    display: "flex",
    gap: "22px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  navLink: {
    color: "rgba(255,255,255,0.82)",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontSize: "12px",
    cursor: "pointer",
  },
  cartBtn: {
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "999px",
    background: "transparent",
    color: "#fff",
    padding: "10px 16px",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontSize: "11px",
    cursor: "pointer",
  },
  hero: {
    padding: "48px 0 84px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    background:
      "radial-gradient(circle at top, rgba(255,255,255,0.09), transparent 35%), linear-gradient(to bottom, rgba(255,255,255,0.03), transparent 32%)",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.02fr 0.98fr",
    gap: "34px",
    alignItems: "center",
  },
  badge: {
    display: "inline-block",
    border: "1px solid rgba(255,255,255,0.16)",
    borderRadius: "999px",
    padding: "12px 18px",
    textTransform: "uppercase",
    letterSpacing: "0.28em",
    fontSize: "11px",
    color: "rgba(255,255,255,0.78)",
    marginBottom: "18px",
  },
  heroTitle: {
    fontSize: "66px",
    lineHeight: 1,
    fontWeight: 900,
    margin: "0 0 18px",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
  heroText: {
    color: "rgba(255,255,255,0.72)",
    lineHeight: 1.8,
    fontSize: "18px",
    maxWidth: "580px",
    marginBottom: "24px",
  },
  buttonRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  primaryBtn: {
    background: "#fff",
    color: "#000",
    border: "none",
    borderRadius: "999px",
    padding: "14px 22px",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontWeight: 800,
    cursor: "pointer",
  },
  secondaryBtn: {
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "999px",
    padding: "14px 22px",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontWeight: 800,
    cursor: "pointer",
  },
  heroCard: {
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "28px",
    overflow: "hidden",
    background: "#0a0a0a",
    boxShadow: "0 18px 60px rgba(0,0,0,0.45)",
  },
  heroImage: {
    height: "540px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#000",
  },
  heroCardBody: {
    padding: "24px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
  },
  eyebrow: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.25em",
    color: "rgba(255,255,255,0.48)",
    marginBottom: "12px",
  },
  section: {
    padding: "84px 0",
  },
  mutedSection: {
    padding: "84px 0",
    background: "#050505",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  sectionTitle: {
    fontSize: "56px",
    lineHeight: 1.05,
    fontWeight: 900,
    margin: "0 0 18px",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
  sectionText: {
    color: "rgba(255,255,255,0.72)",
    lineHeight: 1.85,
    fontSize: "16px",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "22px",
    marginTop: "30px",
  },
  productCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "28px",
    overflow: "hidden",
    cursor: "pointer",
    color: "#fff",
    textAlign: "left",
    padding: 0,
  },
  productImage: {
    height: "260px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#000",
  },
  productBody: {
    padding: "22px",
  },
  productTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    alignItems: "start",
  },
  productName: {
    fontSize: "28px",
    fontWeight: 900,
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },
  productPrice: {
    fontSize: "18px",
    fontWeight: 900,
    whiteSpace: "nowrap",
  },
  productDesc: {
    marginTop: "12px",
    color: "rgba(255,255,255,0.66)",
    lineHeight: 1.6,
    fontSize: "14px",
  },
  viewBtn: {
    width: "100%",
    marginTop: "18px",
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "999px",
    padding: "12px 16px",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontWeight: 800,
    cursor: "pointer",
  },
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "1.12fr 0.88fr",
    gap: "30px",
    alignItems: "start",
  },
  aboutMeta: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    flexWrap: "wrap",
  },
  metaBadge: {
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "999px",
    padding: "8px 12px",
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.22em",
  },
  infoGrid: {
    display: "grid",
    gap: "16px",
  },
  infoCard: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "24px",
    padding: "22px",
    color: "rgba(255,255,255,0.78)",
    fontSize: "16px",
  },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "22px",
    marginTop: "26px",
  },
  galleryCard: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "24px",
    overflow: "hidden",
  },
  galleryImage: {
    height: "420px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#000",
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
  },
  formCard: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "28px",
    padding: "24px",
  },
  input: {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "14px",
    padding: "14px 16px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.45)",
    color: "#fff",
    fontSize: "14px",
  },
  textarea: {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    minHeight: "130px",
    marginBottom: "14px",
    padding: "14px 16px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.45)",
    color: "#fff",
    fontSize: "14px",
    resize: "vertical",
  },
  footer: {
    padding: "28px 0 42px",
  },
  footerNote: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "18px",
    padding: "14px 16px",
    fontSize: "13px",
    color: "rgba(255,255,255,0.62)",
    marginBottom: "18px",
  },
  paymentRow: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: "18px",
  },
  paymentPill: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "999px",
    padding: "8px 12px",
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  footerBottom: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    flexWrap: "wrap",
    color: "rgba(255,255,255,0.56)",
  },
  productPageWrap: {
    padding: "32px 0 80px",
  },
  backBtn: {
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "999px",
    padding: "12px 18px",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontWeight: 800,
    cursor: "pointer",
    marginBottom: "22px",
  },
  productPageGrid: {
    display: "grid",
    gridTemplateColumns: "1.05fr 0.95fr",
    gap: "30px",
    alignItems: "start",
  },
  productPageImage: {
    height: "680px",
    borderRadius: "28px",
    border: "1px solid rgba(255,255,255,0.1)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#000",
  },
  sizeRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "10px",
    maxWidth: "360px",
    marginTop: "12px",
  },
  sizeBtn: {
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.16)",
    background: "transparent",
    color: "#fff",
    padding: "12px 14px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontWeight: 800,
    cursor: "pointer",
  },
  sizeBtnActive: {
    background: "#fff",
    color: "#000",
  },
  checkoutRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    maxWidth: "480px",
    marginTop: "24px",
  },
};

function getResponsiveStyles() {
  if (typeof window === "undefined" || window.innerWidth >= 920) {
    return baseStyles;
  }

  return {
    ...baseStyles,
    container: { ...baseStyles.container, padding: "0 18px" },
    nav: { ...baseStyles.nav, flexDirection: "column", alignItems: "flex-start" },
    navLinks: { ...baseStyles.navLinks, gap: "14px" },
    heroGrid: { ...baseStyles.heroGrid, gridTemplateColumns: "1fr" },
    heroTitle: { ...baseStyles.heroTitle, fontSize: "44px" },
    heroImage: { ...baseStyles.heroImage, height: "360px" },
    sectionTitle: { ...baseStyles.sectionTitle, fontSize: "38px" },
    productsGrid: { ...baseStyles.productsGrid, gridTemplateColumns: "1fr" },
    aboutGrid: { ...baseStyles.aboutGrid, gridTemplateColumns: "1fr" },
    galleryGrid: { ...baseStyles.galleryGrid, gridTemplateColumns: "1fr 1fr" },
    contactGrid: { ...baseStyles.contactGrid, gridTemplateColumns: "1fr" },
    productPageGrid: { ...baseStyles.productPageGrid, gridTemplateColumns: "1fr" },
    productPageImage: { ...baseStyles.productPageImage, height: "420px" },
    checkoutRow: { ...baseStyles.checkoutRow, gridTemplateColumns: "1fr" },
  };
}

export default function RitualDriftStore() {
  const styles = getResponsiveStyles();
  const [activeProductId, setActiveProductId] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({});

  const activeProduct = useMemo(
    () => PRODUCTS.find((product) => product.id === activeProductId) || null,
    [activeProductId]
  );

  const scrollToSection = (id) => (event) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCheckout = (product) => {
    const selectedSize = selectedSizes[product.id];
    if (product.hasSizes && !selectedSize) {
      window.alert("Please select a size before checkout.");
    }
  };

  if (activeProduct) {
    const selectedSize = selectedSizes[activeProduct.id];

    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.productPageWrap}>
            <button style={styles.backBtn} onClick={() => setActiveProductId(null)}>
              Back to Shop
            </button>

            <div style={styles.productPageGrid}>
              <div
                style={{
                  ...styles.productPageImage,
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.14)), url(${activeProduct.image})`,
                }}
              />

              <div>
                <div style={styles.badge}>{activeProduct.category}</div>
                <h1 style={{ ...styles.sectionTitle, marginTop: 0 }}>{activeProduct.name}</h1>
                <div style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px" }}>
                  {activeProduct.price}
                </div>
                <p style={styles.sectionText}>{activeProduct.longDesc}</p>

                {activeProduct.hasSizes && (
                  <div style={{ marginTop: "24px" }}>
                    <div style={styles.eyebrow}>Select Size</div>
                    <div style={styles.sizeRow}>
                      {SIZES.map((size) => (
                        <button
                          key={size}
                          style={{
                            ...styles.sizeBtn,
                            ...(selectedSize === size ? styles.sizeBtnActive : {}),
                          }}
                          onClick={() =>
                            setSelectedSizes((prev) => ({ ...prev, [activeProduct.id]: size }))
                          }
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div style={styles.checkoutRow}>
                  <button style={styles.primaryBtn} onClick={() => handleCheckout(activeProduct)}>
                    PayPal Checkout
                  </button>
                  <button style={styles.secondaryBtn} onClick={() => handleCheckout(activeProduct)}>
                    Card Checkout
                  </button>
                </div>

                <div style={{ ...styles.footerNote, marginTop: "18px" }}>
                  Payment links are currently placeholder checkout URLs for PayPal and Stripe.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.navWrap}>
        <div style={styles.container}>
          <nav style={styles.nav}>
            <div>
              <div style={styles.brandTitle}>RITUAL</div>
              <div style={styles.brandSub}>Drift Co</div>
            </div>

            <div style={styles.navLinks}>
              <a href="#shop" onClick={scrollToSection("shop")} style={styles.navLink}>Shop</a>
              <a href="#about" onClick={scrollToSection("about")} style={styles.navLink}>About</a>
              <a href="#gallery" onClick={scrollToSection("gallery")} style={styles.navLink}>Gallery</a>
              <a href="#contact" onClick={scrollToSection("contact")} style={styles.navLink}>Contact</a>
            </div>

            <button style={styles.cartBtn}>Cart (0)</button>
          </nav>
        </div>
      </div>

      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroGrid}>
            <div>
              <div style={styles.badge}>Apparel & accessories</div>
              <h1 style={styles.heroTitle}>Built for the drift culture.</h1>
              <p style={styles.heroText}>
                RITUAL is a drift team and brand pushing style on and off track. Shop shirts,
                hoodies, banners, stickers, and plates made for drivers, crews, and supporters.
              </p>

              <div style={styles.buttonRow}>
                <button style={styles.primaryBtn} onClick={scrollToSection("shop")}>Shop Drops</button>
                <button style={styles.secondaryBtn} onClick={scrollToSection("gallery")}>View Team</button>
              </div>
            </div>

            <div style={styles.heroCard}>
              <div
                style={{
                  ...styles.heroImage,
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.14)), url(${placeholder})`,
                }}
              />
              <div style={styles.heroCardBody}>
                <div style={styles.eyebrow}>Featured Drop</div>
                <div style={{ fontSize: "28px", fontWeight: 900, textTransform: "uppercase" }}>
                  RITUAL Signature Hoodie
                </div>
                <p style={{ ...styles.sectionText, marginBottom: 0 }}>description unavailable</p>
                <div style={{ marginTop: "16px" }}>
                  <button style={styles.secondaryBtn} onClick={() => setActiveProductId("signature-hoodie")}>
                    View Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.eyebrow}>Store</div>
          <h2 style={styles.sectionTitle}>Current Products</h2>

          <div style={styles.productsGrid}>
            {PRODUCTS.map((product) => (
              <button key={product.id} style={styles.productCard} onClick={() => setActiveProductId(product.id)}>
                <div
                  style={{
                    ...styles.productImage,
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.12)), url(${product.image})`,
                  }}
                />
                <div style={styles.productBody}>
                  <div style={styles.productTop}>
                    <div>
                      <div style={styles.eyebrow}>{product.category}</div>
                      <h3 style={styles.productName}>{product.name}</h3>
                    </div>
                    <div style={styles.productPrice}>{product.price}</div>
                  </div>
                  <div style={styles.productDesc}>{product.desc}</div>
                  <button style={styles.viewBtn}>View Product</button>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="about" style={styles.mutedSection}>
        <div style={styles.container}>
          <div style={styles.aboutGrid}>
            <div>
              <div style={styles.aboutMeta}>
                <div style={styles.eyebrow}>About RITUAL</div>
                <div style={styles.metaBadge}>EST. 2025</div>
              </div>
              <h2 style={styles.sectionTitle}>More than merch.</h2>
              <p style={styles.sectionText}>
                Founded in 2025 and based out of <strong style={{ color: "#fff" }}>Tucson, Arizona</strong>,
                RITUAL is built around the local drift scene and the people behind it. We’re a
                community-focused streetwear brand driven by passion, style, and the culture behind
                the cars.
              </p>
            </div>

            <div style={styles.infoGrid}>
              {["Tucson-based brand", "Community focused", "Streetwear for the drift scene", "Founded in 2025"].map((item) => (
                <div key={item} style={styles.infoCard}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.eyebrow}>Visuals</div>
          <h2 style={styles.sectionTitle}>Drift team gallery</h2>
          <div style={styles.galleryGrid}>
            {GALLERY.map((image, index) => (
              <div key={index} style={styles.galleryCard}>
                <div
                  style={{
                    ...styles.galleryImage,
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.1)), url(${image})`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={styles.mutedSection}>
        <div style={styles.container}>
          <div style={styles.contactGrid}>
            <div>
              <div style={styles.eyebrow}>Contact / Booking</div>
              <h2 style={styles.sectionTitle}>Reach the team.</h2>
              <p style={styles.sectionText}>
                For collabs, team updates, and questions, set your socials and contact details here.
              </p>
            </div>

            <div style={styles.formCard}>
              <input style={styles.input} placeholder="Name" />
              <input style={styles.input} placeholder="Email" />
              <textarea style={styles.textarea} placeholder="Message" />
              <button style={styles.primaryBtn}>Send Inquiry</button>
            </div>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerNote}>
            Payment links are currently placeholder checkout URLs for PayPal and Stripe.
          </div>

          <div style={styles.paymentRow}>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              Accepted Payments:
            </span>
            <span style={styles.paymentPill}>PayPal</span>
            <span style={styles.paymentPill}>Credit / Debit</span>
          </div>

          <div style={styles.footerBottom}>
            <div>
              <span style={{ color: "#fff", fontWeight: 900, letterSpacing: "0.22em" }}>RITUAL</span> — Drift Co
            </div>
            <a href="https://instagram.com/ritualdriftco" target="_blank" rel="noopener noreferrer" style={styles.navLink}>
              @ritualdriftco
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
