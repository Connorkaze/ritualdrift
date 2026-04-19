import React, { useState, useMemo } from "react";

const SIZES = ["S", "M", "L", "XL"];

const placeholderImage = "/placeholder.jpg";

const PRODUCTS = [
  {
    id: "signature-tee",
    name: "Signature Tee",
    category: "Shirts",
    price: "$1",
    desc: "description unavailable",
    longDesc: "description unavailable",
    hasSizes: true,
    image: placeholderImage,
  },
  {
    id: "signature-hoodie",
    name: "Signature Hoodie",
    category: "Hoodies",
    price: "$1",
    desc: "description unavailable",
    longDesc: "description unavailable",
    hasSizes: true,
    image: placeholderImage,
  },
  {
    id: "pit-banner",
    name: "Pit Banner",
    category: "Banners",
    price: "$1",
    desc: "description unavailable",
    longDesc: "description unavailable",
    hasSizes: false,
    image: placeholderImage,
  },
  {
    id: "logo-sticker",
    name: "Logo Sticker",
    category: "Stickers",
    price: "$1",
    desc: "description unavailable",
    longDesc: "description unavailable",
    hasSizes: false,
    image: placeholderImage,
  },
  {
    id: "team-plate",
    name: "Team Plate",
    category: "License Plates",
    price: "$1",
    desc: "description unavailable",
    longDesc: "description unavailable",
    hasSizes: false,
    image: placeholderImage,
  },
];

const galleryImages = [
  placeholderImage,
  placeholderImage,
  placeholderImage,
  placeholderImage,
];

export default function RitualDriftStore() {
  const [activeProductId, setActiveProductId] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({});

  const activeProduct = useMemo(
    () => PRODUCTS.find((p) => p.id === activeProductId) || null,
    [activeProductId]
  );

  const containerStyle = {
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  };

  const cardStyle = {
    border: "1px solid #333",
    borderRadius: "12px",
    padding: "15px",
    margin: "10px",
    width: "200px",
    backgroundColor: "#111",
    cursor: "pointer",
    textAlign: "center",
  };

  const buttonStyle = {
    padding: "8px 12px",
    marginTop: "10px",
    backgroundColor: "white",
    color: "black",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  };

  if (activeProduct) {
    return (
      <div style={containerStyle}>
        <button
          style={buttonStyle}
          onClick={() => setActiveProductId(null)}
        >
          Back to Shop
        </button>

        <h1>{activeProduct.name}</h1>

        <img
          src={activeProduct.image}
          alt={activeProduct.name}
          style={{ width: "300px", borderRadius: "12px" }}
        />

        <h2>{activeProduct.price}</h2>

        <p>{activeProduct.longDesc}</p>

        {activeProduct.hasSizes && (
          <div>
            <h3>Select Size</h3>
            {SIZES.map((size) => (
              <button
                key={size}
                style={{ ...buttonStyle, marginRight: "6px" }}
                onClick={() =>
                  setSelectedSizes((prev) => ({
                    ...prev,
                    [activeProduct.id]: size,
                  }))
                }
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1>RITUAL Drift Co</h1>

      <p style={{ marginTop: "10px", opacity: 0.8 }}>
        Apparel & accessories
      </p>

      <h2 style={{ marginTop: "30px" }}>Built for the drift culture.</h2>

      <p>
        RITUAL is a drift team and brand pushing style on and off track. Shop
        shirts, hoodies, banners, stickers, and plates made for drivers, crews,
        and supporters.
      </p>

      <h2 style={{ marginTop: "40px" }}>Current Products</h2>

      <div style={gridStyle}>
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            style={cardStyle}
            onClick={() => setActiveProductId(product.id)}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />

            <h3>{product.name}</h3>

            <p>{product.desc}</p>

            <strong>{product.price}</strong>

            <div>
              <button style={buttonStyle}>View Product</button>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "50px" }}>More than merch.</h2>

      <p>
        Founded in 2025 and based out of Tucson, Arizona, RITUAL is built around
        the local drift scene and the people behind it. We're a community-focused
        streetwear brand driven by passion, style, and the culture behind the
        cars.
      </p>

      <ul style={{ marginTop: "15px" }}>
        <li>Tucson-based brand</li>
        <li>Community focused</li>
        <li>Streetwear for the drift scene</li>
        <li>Founded in 2025</li>
      </ul>

      <h2 style={{ marginTop: "50px" }}>Drift team gallery</h2>

      <div style={gridStyle}>
        {galleryImages.map((img, index) => (
          <div key={index} style={cardStyle}>
            <img
              src={img}
              alt={`gallery-${index}`}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "50px" }}>Reach the team.</h2>

      <p>
        For collabs, team updates, and questions, set your socials and contact
        details here.
      </p>

      <div style={{ marginTop: "20px" }}>
        <input
          placeholder="Name"
          style={{ display: "block", marginBottom: "10px", padding: "8px" }}
        />
        <input
          placeholder="Email"
          style={{ display: "block", marginBottom: "10px", padding: "8px" }}
        />
        <textarea
          placeholder="Message"
          rows={4}
          style={{ display: "block", marginBottom: "10px", padding: "8px" }}
        />

        <button style={buttonStyle}>Send Inquiry</button>
      </div>

      <footer style={{ marginTop: "60px", opacity: 0.6 }}>
        RITUAL — Drift Co
      </footer>
    </div>
  );
}
