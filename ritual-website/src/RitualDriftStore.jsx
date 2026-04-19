import { useMemo, useState } from "react";

const PLACEHOLDER_IMAGE = "/mnt/data/3346c2ef-1b75-4120-bec2-73cdc6a6aeea.png";
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
    image: PLACEHOLDER_IMAGE,
    paypalLink: "https://www.paypal.com/checkoutnow?placeholder=signature-tee",
    cardLink: "https://buy.stripe.com/test_placeholder_signature_tee",
  },
  {
    id: "signature-hoodie",
    name: "Signature Hoodie",
    category: "Hoodies",
    price: "$1",
    desc: "description unavailable",
    longDesc: "description unavailable",
    hasSizes: true,
    image: PLACEHOLDER_IMAGE,
    paypalLink: "https://www.paypal.com/checkoutnow?placeholder=signature-hoodie",
    cardLink: "https://buy.stripe.com/test_placeholder_signature_hoodie",
  },
  {
    id: "pit-banner",
    name: "Pit Banner",
    category: "Banners",
    price: "$1",
    desc: "description unavailable",
    longDesc: "description unavailable",
    hasSizes: false,
    image: PLACEHOLDER_IMAGE,
    paypalLink: "https://www.paypal.com/checkoutnow?placeholder=pit-banner",
    cardLink: "https://buy.stripe.com/test_placeholder_pit_banner",
  },
  {
    id: "logo-sticker",
    name: "Logo Sticker",
    category: "Stickers",
    price: "$1",
    desc: "description unavailable",
    longDesc: "description unavailable",
    hasSizes: false,
    image: PLACEHOLDER_IMAGE,
    paypalLink: "https://www.paypal.com/checkoutnow?placeholder=logo-sticker",
    cardLink: "https://buy.stripe.com/test_placeholder_logo_sticker",
  },
  {
    id: "team-plate",
    name: "Team Plate",
    category: "License Plates",
    price: "$1",
    desc: "description unavailable",
    longDesc: "description unavailable",
    hasSizes: false,
    image: PLACEHOLDER_IMAGE,
    paypalLink: "https://www.paypal.com/checkoutnow?placeholder=team-plate",
    cardLink: "https://buy.stripe.com/test_placeholder_team_plate",
  },
];

const GALLERY = [
  { id: "gallery-1", image: PLACEHOLDER_IMAGE },
  { id: "gallery-2", image: PLACEHOLDER_IMAGE },
  { id: "gallery-3", image: PLACEHOLDER_IMAGE },
  { id: "gallery-4", image: PLACEHOLDER_IMAGE },
];

export default function RitualDriftStore() {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [activeProductId, setActiveProductId] = useState(null);

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
    }, 10);
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
    } catch {
      window.alert("Checkout link is not ready yet.");
    }
  };

  if (activeProduct) {
    const selectedSize = selectedSizes[activeProduct.id];

    return (
      <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
        <section className="border-b border-white/10 bg-zinc-950/90">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
            <button
              type="button"
              onClick={closeProductPage}
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] transition hover:bg-white hover:text-black"
            >
              Back to Shop
            </button>
            <div>
              <div className="text-right text-2xl font-black tracking-[0.35em]">RITUAL</div>
              <div className="text-right text-[10px] uppercase tracking-[0.45em] text-white/60">
                Drift Co
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div
                className="aspect-[4/5] w-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.18)), url(${activeProduct.image})`,
                }}
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
                {activeProduct.category}
              </div>
              <h1 className="text-4xl font-black uppercase tracking-[0.08em] md:text-6xl">
                {activeProduct.name}
              </h1>
              <div className="mt-4 text-2xl font-black">{activeProduct.price}</div>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                {activeProduct.longDesc}
              </p>

              {activeProduct.hasSizes && (
                <div className="mt-8">
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                    Select Size
                  </div>
                  <div className="grid max-w-sm grid-cols-4 gap-3">
                    {SIZES.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => handleSizeChange(activeProduct.id, size)}
                        className={`rounded-full border px-4 py-3 text-xs font-bold uppercase tracking-[0.25em] transition ${
                          selectedSize === size
                            ? "border-white bg-white text-black"
                            : "border-white/15 bg-black/30 text-white hover:border-white/35"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => handleCheckout(activeProduct.paypalLink, activeProduct)}
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-[0.25em] transition hover:bg-white hover:text-black"
                >
                  PayPal Checkout
                </button>
                <button
                  type="button"
                  onClick={() => handleCheckout(activeProduct.cardLink, activeProduct)}
                  className="rounded-full border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.25em] transition hover:bg-white hover:text-black"
                >
                  Card Checkout
                </button>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/60">
                Payment links are currently placeholder checkout URLs for PayPal and Stripe.
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_30%,rgba(255,255,255,0.04))]" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-6 md:px-10">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <div>
              <div className="text-2xl font-black tracking-[0.35em]">RITUAL</div>
              <div className="text-[10px] uppercase tracking-[0.45em] text-white/60">Drift Co</div>
            </div>
            <div className="hidden gap-8 text-sm uppercase tracking-[0.25em] text-white/75 md:flex">
              <a href="#shop" onClick={scrollToSection("shop")} className="transition hover:text-white">
                Shop
              </a>
              <a href="#about" onClick={scrollToSection("about")} className="transition hover:text-white">
                About
              </a>
              <a href="#gallery" onClick={scrollToSection("gallery")} className="transition hover:text-white">
                Gallery
              </a>
              <a href="#contact" onClick={scrollToSection("contact")} className="transition hover:text-white">
                Contact
              </a>
            </div>
            <button className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition hover:bg-white hover:text-black">
              Cart (0)
            </button>
          </nav>

          <div className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70">
                Apparel & accessories
              </div>
              <h1 className="max-w-3xl text-5xl font-black uppercase leading-none tracking-[0.08em] md:text-7xl">
                Built for the drift culture.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
                RITUAL is a drift team and brand pushing style on and off track. Shop shirts,
                hoodies, banners, stickers, and plates made for drivers, crews, and supporters.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#shop"
                  onClick={scrollToSection("shop")}
                  className="rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.25em] text-black transition hover:scale-[1.02]"
                >
                  Shop Drops
                </a>
                <a
                  href="#gallery"
                  onClick={scrollToSection("gallery")}
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.25em] transition hover:bg-white hover:text-black"
                >
                  View Team
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] border border-white/10 bg-white/5 blur-xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl">
                <div
                  className="aspect-[4/5] w-full bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.2)), url(${PLACEHOLDER_IMAGE})`,
                  }}
                />
                <div className="grid gap-4 border-t border-white/10 p-6 md:grid-cols-2">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-white/50">Featured drop</div>
                    <div className="mt-2 text-2xl font-black uppercase tracking-[0.1em]">
                      RITUAL Signature Hoodie
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/65">description unavailable</p>
                  </div>
                  <div className="flex items-end justify-start md:justify-end">
                    <button
                      type="button"
                      onClick={() => openProductPage("signature-hoodie")}
                      className="rounded-full border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] transition hover:bg-white hover:text-black"
                    >
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.35em] text-white/45">Store</div>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-[0.08em] md:text-5xl">
            Current Products
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => openProductPage(product.id)}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 text-left transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div
                className="flex aspect-[4/3] items-end bg-contain bg-center bg-no-repeat p-5"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.2)), url(${product.image})`,
                }}
              >
                <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-white/80 backdrop-blur">
                  {product.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-[0.08em]">{product.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/65">{product.desc}</p>
                  </div>
                  <div className="text-lg font-black">{product.price}</div>
                </div>
                <div className="mt-6 w-full rounded-full border border-white/20 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.25em] transition group-hover:bg-white group-hover:text-black">
                  View Product
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-zinc-950/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/45 flex items-center gap-4">
              About RITUAL
              <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] tracking-[0.25em]">
                EST. 2025
              </span>
            </div>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[0.08em] md:text-5xl">
              More than merch.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70">
              Founded in 2025 and based out of <span className="font-semibold text-white">Tucson, Arizona</span>,
              RITUAL is built around the local drift scene and the people behind it. We’re a
              community-focused streetwear brand driven by passion, style, and the culture behind
              the cars.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            {[
              "Tucson-based brand",
              "Community focused",
              "Streetwear for the drift scene",
              "Founded in 2025",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-6 text-white/70"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.35em] text-white/45">Visuals</div>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-[0.08em] md:text-5xl">
            Drift team gallery
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {GALLERY.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
              <div
                className="aspect-[4/5] bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.2)), url(${item.image})`,
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-zinc-950/80">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[1fr_1fr] md:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/45">Contact / Booking</div>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[0.08em] md:text-5xl">
              Reach the team.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
              For collabs, team updates, and questions, set your socials and contact details here.
            </p>
          </div>
          <form className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="grid gap-4">
              <input
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm outline-none placeholder:text-white/35 focus:border-white/30"
                placeholder="Name"
              />
              <input
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm outline-none placeholder:text-white/35 focus:border-white/30"
                placeholder="Email"
              />
              <textarea
                rows={5}
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm outline-none placeholder:text-white/35 focus:border-white/30"
                placeholder="Message"
              />
              <button
                type="button"
                className="rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.25em] text-black transition hover:scale-[1.01]"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="mb-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-6 text-white/60">
          Payment links are currently placeholder checkout URLs for PayPal and Stripe.
        </div>
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
          <span className="text-white/70">Accepted Payments:</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">PayPal</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Credit / Debit</span>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-black uppercase tracking-[0.3em] text-white">RITUAL</span> — Drift Co
          </div>
          <div className="flex gap-5 uppercase tracking-[0.25em]">
            <a
              href="https://instagram.com/ritualdriftco"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              @ritualdriftco
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
