import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Leaf } from "lucide-react";

import { PageHero, PageShell } from "@/components/site/SiteLayout";
import hassImg from "@/assets/hass-crate.jpg";
import oilImg from "@/assets/avocado-oil.jpg";
import packhouseImg from "@/assets/packhouse.jpg";
import heroImg from "@/assets/hero-orchard.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Hass Avocados & Cold-Pressed Avocado Oil | Kenforest" },
      {
        name: "description",
        content:
          "Export-grade Kenyan Hass avocados (Class I & II, count 10–30) and extra-virgin cold-pressed avocado oil in bulk and private-label. Weekly shipments from Mombasa.",
      },
      { property: "og:title", content: "Kenforest Products — Hass Avocados & Avocado Oil" },
      { property: "og:description", content: "Fresh Hass avocados and extra-virgin avocado oil, exported worldwide from Kenya." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Products"
        title={<>Premium Hass — <span className="text-accent">fresh and pressed.</span></>}
        subtitle="Two flagship products, backed by one integrated supply chain from Kiambu highland orchards to your distribution center."
        image={heroImg}
      />

      <section id="hass" className="py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <img
            src={hassImg}
            alt="Fresh Hass avocados in a wooden crate"
            width={1280}
            height={1280}
            loading="lazy"
            className="aspect-square w-full rounded-3xl object-cover shadow-xl"
          />
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
              Fresh Fruit
            </div>
            <h2 className="text-balance text-4xl leading-tight md:text-5xl">
              Hass Avocado — Export Grade
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Grown at 1,700–2,100m in Kenya's central highlands, our Hass
              carries thick, textured skin, creamy flesh and a long ripening
              window — ideal for sea freight to Europe, the Middle East and Asia.
            </p>
            <SpecTable
              rows={[
                ["Variety", "Hass (Persea americana)"],
                ["Grades", "Class I, Class II"],
                ["Counts", "10 · 12 · 14 · 16 · 18 · 20 · 22 · 24 · 26 · 30"],
                ["Dry matter", "24–30% (destination-tuned)"],
                ["Packaging", "4kg / 10kg export cartons, plastic-crate option"],
                ["Container load", "5,280 × 4kg cartons per 40ft reefer"],
                ["Shelf life", "28–35 days at +5.5°C"],
                ["Season", "March – October (main) · November – February (fly crop)"],
              ]}
            />
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Request pricing <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#oil"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                See our oil
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="oil" className="bg-primary text-primary-foreground">
        <div className="container-x py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
                Cold-Pressed
              </div>
              <h2 className="text-balance text-4xl leading-tight text-white md:text-5xl">
                Extra Virgin Avocado Oil
              </h2>
              <p className="mt-6 text-lg text-white/80">
                Pressed from ripe Hass within 48 hours of harvest, below 45°C,
                and filtered without chemicals. The result: a vibrant green
                oil with a buttery-nutty finish, 500°F+ smoke point and a
                lipid profile prized in premium food and cosmetics.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Free fatty acids ≤ 0.5%",
                  "Peroxide value ≤ 3 meq/kg",
                  "Chlorophyll ≥ 20 mg/kg",
                  "Oleic acid 60–70%",
                  "Non-GMO · additive-free",
                  "Culinary & cosmetic grades",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <PackTile size="250 – 750 mL" note="Retail glass bottles" />
                <PackTile size="5 – 20 L" note="HORECA jerrycans" />
                <PackTile size="190 kg" note="Bulk food-grade drums" />
              </div>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary transition hover:brightness-110"
                >
                  Request oil sample <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <img
              src={oilImg}
              alt="Bottle of extra virgin cold-pressed avocado oil"
              width={1280}
              height={960}
              loading="lazy"
              className="order-1 aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl lg:order-2"
            />
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
              Private label
            </div>
            <h2 className="text-balance text-4xl leading-tight md:text-5xl">
              Build your own avocado brand.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We produce and pack under your label — from bottle and cap to
              artwork and carton. Minimum runs from 3,000 units for oil and
              full-container programs for fresh fruit.
            </p>
            <ul className="mt-6 space-y-3 text-base text-foreground">
              {[
                "Bespoke bottle, cap and label design support",
                "COAs, allergen statements and nutritional panels",
                "EU, GCC and China-compliant labelling",
                "Ex-works, FOB Mombasa, CIF or DDP terms",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Leaf className="mt-1 h-4 w-4 shrink-0 text-accent" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={packhouseImg}
            alt="Kenforest packhouse operations"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>
    </PageShell>
  );
}

function SpecTable({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="mt-8 overflow-hidden rounded-2xl border border-border">
      {rows.map(([k, v], i) => (
        <div
          key={k}
          className={`grid grid-cols-3 gap-4 px-5 py-4 text-sm ${
            i % 2 === 0 ? "bg-muted/50" : "bg-card"
          }`}
        >
          <dt className="col-span-1 font-medium text-foreground">{k}</dt>
          <dd className="col-span-2 text-muted-foreground">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function PackTile({ size, note }: { size: string; note: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-5">
      <div className="font-display text-xl text-white">{size}</div>
      <div className="mt-1 text-xs text-white/70">{note}</div>
    </div>
  );
}