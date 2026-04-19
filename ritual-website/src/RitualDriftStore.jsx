import React, { useMemo, useState } from "react";

const SIZES = ["S", "M", "L", "XL"];

const PRODUCTS = [
  {
    id: "signature-tee",
    name: "Signature Tee",
    category: "Shirts",
    price: "$35",
    desc: "Heavyweight streetwear fit with bold RITUAL branding.",
    longDesc:
      "A clean essential built for daily wear, track nights, and event weekends. The Signature Tee is designed as an easy first-drop staple with a strong branded look.",
    hasSizes: true,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    paypalLink: "https://www.paypal.com/checkoutnow?placeholder=signature-tee",
    cardLink: "https://buy.stripe.com/test_placeholder_signature_tee",
  },
  {
    id: "trackside-hoodie",
    name: "Trackside Hoodie",
    category: "Hoodies",
    price: "$68",
    desc: "Premium fleece hoodie built for cold nights at the lot.",
    longDesc:
      "A heavier layer for cooler evenings and track mornings. The Trackside Hoodie is meant to feel substantial, clean, and easy to wear with the rest of the RITUAL lineup.",
    hasSizes: true,
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80",
    paypalLink: "https://www.paypal.com/checkoutnow?placeholder=trackside-hoodie",
    cardLink: "https://buy.stripe.com/test_placeholder_trackside_hoodie",
  },
  {
    id: "pit-banner",
    name: "Pit Banner",
    category: "Banners",
    price: "$45",
    desc: "Garage and canopy banner with high-contrast logo treatment.",
    longDesc:
      "A bold display piece made for pit setups, garage walls, and event canopies. This is a straightforward brand statement piece built to stand out in person and in photos.",
    hasSizes: false,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    paypalLink: "https://www.paypal.com/checkoutnow?placeholder=pit-banner",
    cardLink: "https://buy.stripe.com/test_placeholder_pit_banner",
  },
  {
    id: "logo-sticker-pack",
    name: "Logo Sticker Pack",
    category: "Stickers",
    price: "$14",
    desc: "Durable vinyl stickers for cars, toolboxes, and helmets.",
    longDesc:
      "A simple add-on product that works well for supporters, event pickups, and online orders. Great for cars, laptops, boxes, helmets, and shop setups.",
    hasSizes: false,
    image:
      "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1200&q=80",
    paypalLink: "https://www.paypal.com/checkoutnow?placeholder=logo-sticker-pack",
    cardLink: "https://buy.stripe.com/test_placeholder_logo_sticker_pack",
  },
  {
    id: "team-plate",
    name: "Team Plate",
    category: "License Plates",
    price: "$22",
    desc: "Metal display plate made for wall setups and show builds.",
    longDesc:
      "A display plate built for interior setups, garage walls, and show-car presentation. It keeps the RITUAL identity visible even when the car is parked.",
    hasSizes: false,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    paypalLink: "https://www.paypal.com/checkoutnow?placeholder=team-plate",
    cardLink: "https://buy.stripe.com/test_placeholder_team_plate",
  },
  {
    id: "midnight-tee",
    name: "Midnight Tee",
    category: "Shirts",
    price: "$38",
    desc: "Minimal front, aggressive back graphic inspired by drift lines.",
    longDesc:
      "A slightly more graphic-driven tee meant for a louder look. This works as a second-drop piece or a stronger visual option next to the Signature Tee.",
    hasSizes: true,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    paypalLink: "https://www.paypal.com/checkoutnow?placeholder=midnight-tee",
    cardLink: "https://buy.stripe.com/test_placeholder_midnight_tee",
  },
];

const GALLERY = [
  {
    title: "Night Runs",
    text: "Built for the drivers, pit crews, and late-night sessions that make the culture.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Track Presence",
    text: "Merch and visuals that hit as hard as the cars look under lights.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Crew Energy",
    text: "RITUAL is about style, noise, smoke, and the people behind it.",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
  },
];

const CATEGORIES = ["Shirts", "Hoodies", "Banners", "Stickers", "License Plates"];

const styles = {
  page: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    padding: "18px 0",
  },
  brand: {
    fontSize: "28px",
    fontWeight: 900,
    letterSpacing: "0.2em",
  },
  subBrand: {
    fontSize: "10px",
    letterSpacing: "0.35em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.6)",
  },
  navLinks: {
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    cursor: "pointer",
  },
  hero: {
    padding: "36px 0 72px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: "32px",
    alignItems: "center",
  },
  badge: {
    display: "inline-block",
    border: "1px solid rgba(255,255,255,0.18)",
    padding: "10px 14px",
    borderRadius: "999px",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    color: "rgba(255,255,255,0.75)",
    marginBottom: "18px",
  },
  h1: {
    fontSize: "64px",
    lineHeight: 1,
    margin: "0 0 18px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  heroText: {
    color: "rgba(255,255,255,0.72)",
    lineHeight: 1.7,
    maxWidth: "560px",
    marginBottom: "24px",
  },
  buttonRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "30px",
  },
  primaryBtn: {
    background: "#fff",
    color: "#000",
    border: "none",
    borderRadius: "999px",
    padding: "14px 20px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    cursor: "pointer",
  },
  secondaryBtn: {
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "999px",
    padding: "14px 20px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    cursor: "pointer",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "12px",
    maxWidth: "520px",
  },
  statCard: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "18px",
    padding: "18px",
    textAlign: "center",
  },
  statValue: {
    fontSize: "24px",
    fontWeight: 900,
    marginBottom: "6px",
  },
  statLabel: {
    fontSize: "11px",
    color: "rgba(255,255,255,0.55)",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
  },
  heroCard: {
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "28px",
    overflow: "hidden",
    background: "#0a0a0a",
  },
  heroImage: {
    height: "520px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heroCardBody: {
    padding: "22px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
  },
  section: {
    padding: "72px 0",
  },
  sectionMuted: {
    padding: "72px 0",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    background: "#050505",
  },
  sectionEyebrow: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.24em",
    color: "rgba(255,255,255,0.5)",
    marginBottom: "12px",
  },
  sectionTitle: {
    fontSize: "42px",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    margin: "0 0 16px",
  },
  sectionText: {
    color: "rgba(255,255,255,0.66)",
    lineHeight: 1.7,
  },
  categoryRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "16px",
  },
  pill: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "999px",
    padding: "10px 14px",
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "22px",
    marginTop: "28px",
  },
  cardButton: {
    padding: 0,
    width: "100%",
    textAlign: "left",
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "24px",
    overflow: "hidden",
    color: "#fff",
  },
  productImage: {
    height: "260px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  cardBody: {
    padding: "20px",
  },
  productHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
  },
  productName: {
    fontSize: "26px",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    margin: 0,
  },
  productPrice: {
    fontSize: "18px",
    fontWeight: 900,
    whiteSpace: "nowrap",
  },
  productDesc: {
    color: "rgba(255,255,255,0.66)",
    lineHeight: 1.6,
    marginTop: "12px",
  },
  viewBtn: {
    marginTop: "18px",
    width: "100%",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "transparent",
    color: "#fff",
    padding: "13px 16px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    cursor: "pointer",
  },
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: "28px",
    alignItems: "start",
  },
  featureCard: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "22px",
    padding: "18px",
    color: "rgba(255,255,255,0.7)",
    lineHeight: 1.6,
  },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "22px",
    marginTop: "28px",
  },
  galleryCard: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "24px",
    overflow: "hidden",
  },
  galleryImage: {
    height: "360px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "28px",
    alignItems: "start",
  },
  form: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "28px",
    padding: "22px",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    background: "rgba(0,0,0,0.45)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "16px",
    padding: "14px 16px",
    marginBottom: "14px",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    boxSizing: "border-box",
    background: "rgba(0,0,0,0.45)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "16px",
    padding: "14px 16px",
    marginBottom: "14px",
    fontSize: "14px",
    minHeight: "130px",
    resize: "vertical",
  },
  footerNote: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "18px",
    padding: "14px 16px",
    fontSize: "13px",
    color: "rgba(255,255,255,0.62)",
    lineHeight: 1.6,
    marginBottom: "16px",
  },
  footer: {
    padding: "24px 0 40px",
  },
  footerTop: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    alignItems: "center",
    marginBottom: "16px",
  },
  footerBottom: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    flexWrap: "wrap",
    color: "rgba(255,255,255,0.58)",
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
  productPageWrap: {
    padding: "28px 0 72px",
  },
  productPageGrid: {
    display: "grid",
    gridTemplateColumns: "1.05fr 0.95fr",
    gap: "30px",
    alignItems: "start",
  },
  productPageImage: {
    height: "680px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "28px",
    border: "1px solid rgba(255,255,255,0.1)",
  },
  backBtn: {
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "999px",
    padding: "12px 18px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    cursor: "pointer",
    marginBottom: "20px",
  },
  sizeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "10px",
    maxWidth: "360px",
    marginTop: "14px",
  },
  sizeBtn: {
    borderRadius: "999px",
    padding: "12px 14px",
    cursor: "pointer",
    fontWeight: 700,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "transparent",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
  },
  sizeBtnActive: {
    background: "#fff",
    color: "#000",
  },
  checkoutGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    marginTop: "24px",
    maxWidth: "460px",
  },
};

function useResponsiveStyles() {
  const isSmall =
    typeof window !== "undefined" ? window.innerWidth < 900 : false;

  if (!isSmall) return styles;

  return {
    ...styles,
    heroGrid: { ...styles.heroGrid, gridTemplateColumns: "1fr" },
    statsGrid: { ...styles.statsGrid, gridTemplateColumns: "1fr" },
    productsGrid: { ...styles.productsGrid, gridTemplateColumns: "1fr" },
    aboutGrid: { ...styles.aboutGrid, gridTemplateColumns: "1fr" },
    galleryGrid: { ...styles.galleryGrid, gridTemplateColumns: "1fr" },
    contactGrid: { ...styles.contactGrid, gridTemplateColumns: "1fr" },
    productPageGrid: { ...styles.productPageGrid, gridTemplateColumns: "1fr" },
    checkoutGrid: { ...styles.checkoutGrid, gridTemplateColumns: "1fr" },
    h1: { ...styles.h1, fontSize: "42px" },
    sectionTitle: { ...styles.sectionTitle, fontSize: "32px" },
    productPageImage: { ...styles.productPageImage, height: "420px" },
    heroImage: { ...styles.heroImage, height: "380px" },
  };
}

export default function RitualDriftStore() {
  const ui = useResponsiveStyles();
  const [selectedSizes, setSelectedSizes] = useState({});
  const [activeProductId, setActiveProductId] = useState(null);

  const activeProduct = useMemo(
    () => PRODUCTS.find((product) => product.id === activeProductId) || null,
    [activeProductId]
  );

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openProductPage = (productId) => {
    setActiveProductId(productId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeProductPage = () => {
    setActiveProductId(null);
    setTimeout(() => {
      const shop = document.getElementById("shop");
      if (shop) {
        shop.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 20);
  };

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleCheckout = (link, product) => {
    const selectedSize = selectedSizes[product.id];

    if (product.hasSizes && !selectedSize) {
      window.alert("Please select a size before checkout.");
      return;
    }

    try {
      const url = new URL(link);
      url.searchParams.set("product", product.name);
      if (selectedSize) {
        url.searchParams.set("size", selectedSize);
      }
      window.open(url.toString(), "_blank", "noopener,noreferrer");
    } catch (error) {
      window.alert("Checkout link is not ready yet.");
    }
  };

  if (activeProduct) {
    const selectedSize = selectedSizes[activeProduct.id];

    return (
      <div style={ui.page}>
        <div style={ui.container}>
          <div style={ui.productPageWrap}>
            <button type="button" onClick={closeProductPage} style={ui.backBtn}>
              Back to Shop
            </button>

            <div style={ui.productPageGrid}>
              <div
                style={{
                  ...ui.productPageImage,
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.35)), url(${activeProduct.image})`,
                }}
              />

              <div>
                <div style={ui.badge}>{activeProduct.category}</div>
                <h1 style={{ ...ui.sectionTitle, fontSize: ui.h1.fontSize }}>
                  {activeProduct.name}
                </h1>
                <div style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px" }}>
                  {activeProduct.price}
                </div>
                <p style={ui.sectionText}>{activeProduct.longDesc}</p>

                {activeProduct.hasSizes && (
                  <div style={{ marginTop: "26px" }}>
                    <div style={ui.sectionEyebrow}>Select Size</div>
                    <div style={ui.sizeGrid}>
                      {SIZES.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => handleSizeChange(activeProduct.id, size)}
                          style={{
                            ...ui.sizeBtn,
                            ...(selectedSize === size ? ui.sizeBtnActive : {}),
                          }}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div style={ui.checkoutGrid}>
                  <button
                    type="button"
                    onClick={() => handleCheckout(activeProduct.paypalLink, activeProduct)}
                    style={ui.primaryBtn}
                  >
                    PayPal Checkout
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCheckout(activeProduct.cardLink, activeProduct)}
                    style={ui.secondaryBtn}
                  >
                    Card Checkout
                  </button>
                </div>

                <div style={{ ...ui.footerNote, marginTop: "18px" }}>
                  Payment links are placeholders for now. When your products are finalized,
                  swap each item’s PayPal and Stripe link with the live checkout URLs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={ui.page}>
      <div style={ui.container}>
        <nav style={ui.nav}>
          <div>
            <div style={ui.brand}>RITUAL</div>
            <div style={ui.subBrand}>Drift Co</div>
          </div>

          <div style={ui.navLinks}>
            <a href="#shop" onClick={scrollToSection("shop")} style={ui.link}>
              Shop
            </a>
            <a href="#about" onClick={scrollToSection("about")} style={ui.link}>
              About
            </a>
            <a href="#gallery" onClick={scrollToSection("gallery")} style={ui.link}>
              Gallery
            </a>
            <a href="#contact" onClick={scrollToSection("contact")} style={ui.link}>
              Contact
            </a>
          </div>
        </nav>
      </div>

      <section style={ui.hero}>
        <div style={ui.container}>
          <div style={ui.heroGrid}>
            <div>
              <div style={ui.badge}>Night-driven apparel & pit gear</div>
              <h1 style={ui.h1}>Built for the drift culture.</h1>
              <p style={ui.heroText}>
                RITUAL is a drift team and brand pushing style on and off track.
                Shop shirts, hoodies, banners, stickers, and plates made for drivers,
                crews, and supporters.
              </p>

              <div style={ui.buttonRow}>
                <button type="button" onClick={scrollToSection("shop")} style={ui.primaryBtn}>
                  Shop Drops
                </button>
                <button type="button" onClick={scrollToSection("gallery")} style={ui.secondaryBtn}>
                  View Team
                </button>
              </div>

              <div style={ui.statsGrid}>
                <div style={ui.statCard}>
                  <div style={ui.statValue}>5</div>
                  <div style={ui.statLabel}>Categories</div>
                </div>
                <div style={ui.statCard}>
                  <div style={ui.statValue}>Trackside</div>
                  <div style={ui.statLabel}>Brand Energy</div>
                </div>
                <div style={ui.statCard}>
                  <div style={ui.statValue}>24/7</div>
                  <div style={ui.statLabel}>Streetwear Mood</div>
                </div>
              </div>
            </div>

            <div style={ui.heroCard}>
              <div
                style={{
                  ...ui.heroImage,
                  backgroundImage:
                    "linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.52)), url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80')",
                }}
              />
              <div style={ui.heroCardBody}>
                <div style={ui.sectionEyebrow}>Featured Drop</div>
                <div style={{ fontSize: "28px", fontWeight: 900, textTransform: "uppercase" }}>
                  RITUAL Core Hoodie
                </div>
                <p style={ui.sectionText}>
                  Clean front hit, loud back graphic, heavyweight feel.
                </p>
                <div style={{ marginTop: "16px" }}>
                  <button
                    type="button"
                    onClick={() => openProductPage("trackside-hoodie")}
                    style={ui.secondaryBtn}
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={ui.categoryRow}>
            {CATEGORIES.map((category) => (
              <div key={category} style={ui.pill}>
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" style={ui.section}>
        <div style={ui.container}>
          <div style={ui.sectionEyebrow}>Store</div>
          <h2 style={ui.sectionTitle}>Current Products</h2>
          <p style={ui.sectionText}>
            Click any product to open its dedicated product page, where customers can
            view it more closely and choose sizing before checkout.
          </p>

          <div style={ui.productsGrid}>
            {PRODUCTS.map((product) => (
              <button
                key={product.id}
                type="button"
                onClick={() => openProductPage(product.id)}
                style={ui.cardButton}
              >
                <div
                  style={{
                    ...ui.productImage,
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.48)), url(${product.image})`,
                  }}
                />
                <div style={ui.cardBody}>
                  <div style={ui.productHeader}>
                    <div>
                      <p style={{ ...ui.sectionEyebrow, marginBottom: "8px" }}>{product.category}</p>
                      <h3 style={ui.productName}>{product.name}</h3>
                    </div>
                    <div style={ui.productPrice}>{product.price}</div>
                  </div>

                  <div style={ui.productDesc}>{product.desc}</div>

                  <div>
                    <button type="button" style={ui.viewBtn}>
                      View Product
                    </button>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="about" style={ui.sectionMuted}>
        <div style={ui.container}>
          <div style={ui.aboutGrid}>
            <div>
              <div style={ui.sectionEyebrow}>About RITUAL</div>
              <h2 style={ui.sectionTitle}>More than merch.</h2>
              <p style={ui.sectionText}>
                RITUAL is built around drift nights, smoke, speed, and a clean identity
                that stands out in the pits. This site concept is designed to feel
                aggressive, modern, and easy to shop from a phone when your audience
                finds you through social media or at events.
              </p>
            </div>

            <div style={{ display: "grid", gap: "14px" }}>
              {[
                "Dark motorsport-inspired visual language",
                "Mobile-friendly shopping layout",
                "Built to expand into real ecommerce",
                "Strong brand sections for merch and team identity",
              ].map((item) => (
                <div key={item} style={ui.featureCard}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" style={ui.section}>
        <div style={ui.container}>
          <div style={ui.sectionEyebrow}>Visuals</div>
          <h2 style={ui.sectionTitle}>Drift team gallery</h2>

          <div style={ui.galleryGrid}>
            {GALLERY.map((item) => (
              <div key={item.title} style={ui.galleryCard}>
                <div
                  style={{
                    ...ui.galleryImage,
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.48)), url(${item.image})`,
                  }}
                />
                <div style={ui.cardBody}>
                  <h3 style={ui.productName}>{item.title}</h3>
                  <div style={ui.productDesc}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={ui.sectionMuted}>
        <div style={ui.container}>
          <div style={ui.contactGrid}>
            <div>
              <div style={ui.sectionEyebrow}>Contact / Booking</div>
              <h2 style={ui.sectionTitle}>Reach the team.</h2>
              <p style={ui.sectionText}>
                For collabs, event bookings, vendor spots, and team updates, set your
                socials and contact details here.
              </p>
            </div>

            <div style={ui.form}>
              <input style={ui.input} placeholder="Name" />
              <input style={ui.input} placeholder="Email" />
              <textarea style={ui.textarea} placeholder="Message" />
              <button type="button" style={ui.primaryBtn}>
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer style={ui.footer}>
        <div style={ui.container}>
          <div style={ui.footerNote}>
            Payment links are currently placeholder checkout URLs for PayPal and Stripe.
            Swap them with your live product links when your first drop is ready.
          </div>

          <div style={ui.footerTop}>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              Accepted Payments:
            </span>
            <span style={ui.paymentPill}>PayPal</span>
            <span style={ui.paymentPill}>Credit / Debit</span>
          </div>

          <div style={ui.footerBottom}>
            <div>
              <span style={{ fontWeight: 900, letterSpacing: "0.2em", color: "#fff" }}>
                RITUAL
              </span>{" "}
              — Drift Co
            </div>

            <a
              href="https://instagram.com/ritualdriftco"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...ui.link, color: "rgba(255,255,255,0.85)" }}
            >
              @ritualdriftco
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
