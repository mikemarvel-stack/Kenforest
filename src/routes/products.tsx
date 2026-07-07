import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Leaf } from "lucide-react";

import { PageHero, PageShell } from "@/components/site/SiteLayout";
import hassImg from "@/assets/hass-crate.jpg";
import oilImg from "@/assets/avocado-oil.jpg";
import packhouseImg from "@/assets/packhouse.jpg";
import exportImg from "@/assets/export.jpg";
import heroImg from "@/assets/hero-orchard.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Export Avocados, Mangoes, Passion Fruit & Macadamia | Kenforest" },
      {
        name: "description",
        content:
          "Export-grade East African avocados (Hass, Fuerte, Pinkerton, Reed, Jumbo), mangoes, passion fruit, macadamia nuts and cold-pressed avocado oil. Weekly shipments to Europe, the Middle East and Asia.",
      },
      { property: "og:title", content: "Kenforest Products — Fresh Fruit & Cold-Pressed Oil" },
      { property: "og:description", content: "Premium East African avocados, mangoes, passion fruit, macadamia and cold-pressed avocado oil exported worldwide." },
      { property: "og:url", content: "https://www.kenforestlimited.com/products" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Kenforest Products — Fresh Fruit & Cold-Pressed Oil" },
      { name: "twitter:description", content: "East African avocados, mangoes, passion fruit, macadamia and cold-pressed oil exported to 18+ markets." },
    ],
    links: [{ rel: "canonical", href: "https://www.kenforestlimited.com/products" }],
  }),
  component: Products,
});

const fruits = [
  {
    name: "Avocados",
    tag: "Year-round",
    desc: "Multiple varieties grown at 1,700–2,100m. Thick skin, creamy flesh and a long ripening window ideal for sea freight.",
    varieties: "Hass · Fuerte · Pinkerton · Reed · Jumbo",
    grades: "Class I & II",
    packaging: "4 kg / 10 kg export cartons",
  },
  {
    name: "Mangoes",
    tag: "Oct – Feb",
    desc: "Sweet, fibre-free East African mangoes with vibrant colour and exceptional Brix levels. Popular in European and Gulf markets.",
    varieties: "Apple · Kent · Tommy Atkins · Ngowe",
    grades: "Class I & II",
    packaging: "4 kg / 5 kg export cartons",
  },
  {
    name: "Passion Fruit",
    tag: "Year-round",
    desc: "Purple and yellow passion fruit with high pulp yield and intense aroma. Supplied fresh or as frozen pulp for juice processors.",
    varieties: "Purple Granadilla · Yellow Passion",
    grades: "Export & processing grade",
    packaging: "3 kg punnets / 10 kg bulk cartons",
  },
  {
    name: "Macadamia",
    tag: "Mar – Jul",
    desc: "Kenyan macadamia nuts with high kernel recovery and low moisture. Supplied in-shell, de-husked or as finished kernels.",
    varieties: "Beaumont · KARI 6 · KARI 16",
    grades: "Style 0 – Style 4 kernels",
    packaging: "25 kg vacuum bags / bulk sacks",
  },
];

function Products() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Products"
        title={<>Premium East African produce — <span className="text-accent">fresh and pressed.</span></>}
        subtitle="Four flagship categories backed by one integrated supply chain — from highland orchards and smallholder networks to your distribution centre."
        image={heroImg}
      />

      {/* Product overview cards */}
      <section className="py-24">
        <div className="container-x">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">What we export</div>
            <h2 className="text-balance text-3xl leading-tight md:text-4xl">
              Four categories. One reliable source.
            </h2>
            <p className="mt-4 text-muted-foreground">
              All produce is sourced from certified East African farms, packed in our own facilities and shipped under strict cold-chain protocols.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fruits.map((f) => (
              <div
                key={f.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:border-accent/40 hover:shadow-md"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-display text-xl text-primary">{f.name}</span>
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                    {f.tag}
                  </span>
                </div>
                <p className="flex-1 text-sm text-muted-foreground">{f.desc}</p>
                <dl className="mt-5 space-y-1.5 border-t border-border pt-4 text-xs">
                  <div className="flex gap-2"><dt className="font-medium text-foreground">Varieties</dt><dd className="text-muted-foreground">{f.varieties}</dd></div>
                  <div className="flex gap-2"><dt className="font-medium text-foreground">Grades</dt><dd className="text-muted-foreground">{f.grades}</dd></div>
                  <div className="flex gap-2"><dt className="font-medium text-foreground">Pack</dt><dd className="text-muted-foreground">{f.packaging}</dd></div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fresh Avocados — detailed */}
      <section id="avocados" className="bg-cream py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <img
            src={hassImg}
            alt="Fresh avocados in a wooden export crate"
            width={1280}
            height={1280}
            loading="lazy"
            className="aspect-square w-full rounded-3xl object-cover shadow-xl"
          />
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">Fresh Avocados</div>
            <h2 className="text-balance text-4xl leading-tight md:text-5xl">
              Export-Grade Avocados
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Grown across East Africa's highlands at 1,700–2,100m, our avocados
              carry thick, textured skin, creamy flesh and a long ripening
              window — ideal for sea freight to Europe, the Middle East and Asia.
            </p>
            <SpecTable
              rows={[
                ["Varieties", "Hass · Fuerte · Pinkerton · Reed · Jumbo"],
                ["Grades", "Class I, Class II"],
                ["Counts", "10 · 12 · 14 · 16 · 18 · 20 · 22 · 24 · 26 · 30"],
                ["Dry matter", "24–30% (destination-tuned)"],
                ["Packaging", "4 kg / 10 kg export cartons, plastic-crate option"],
                ["Container load", "5,280 × 4 kg cartons per 40ft reefer"],
                ["Shelf life", "28–35 days at +5.5°C"],
                ["Season", "Year-round across varieties and growing regions"],
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
                href="#other-fruits"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                Other fruits
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Fruits — detailed */}
      <section id="other-fruits" className="py-28">
        <div className="container-x">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">Beyond Avocados</div>
            <h2 className="text-balance text-3xl leading-tight md:text-4xl">
              Mangoes, passion fruit & macadamia
            </h2>
            <p className="mt-4 text-muted-foreground">
              East Africa's diverse climate zones let us offer complementary crops that fill seasonal gaps and broaden your sourcing portfolio.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            <FruitDetail
              name="Mangoes"
              season="October – February"
              origin="Coastal & lowland Kenya, Uganda"
              highlights={[
                "Brix 16–22° at export maturity",
                "Fibre-free flesh, vibrant skin colour",
                "Hot-water treatment (HWT) available for EU/US protocols",
                "Varieties: Apple, Kent, Tommy Atkins, Ngowe",
                "4 kg & 5 kg export cartons",
              ]}
            />
            <FruitDetail
              name="Passion Fruit"
              season="Year-round (two peaks)"
              origin="Central highlands, Kenya"
              highlights={[
                "Purple Granadilla & Yellow Passion varieties",
                "Pulp yield 35–40%, Brix 14–18°",
                "Fresh export & IQF frozen pulp options",
                "3 kg retail punnets or 10 kg bulk cartons",
                "Processing-grade supply for juice manufacturers",
              ]}
            />
            <FruitDetail
              name="Macadamia Nuts"
              season="March – July"
              origin="Central Kenya highlands"
              highlights={[
                "Kernel recovery rate ≥ 32%",
                "Moisture ≤ 1.5% (finished kernels)",
                "Styles 0, 1, 2, 4 — whole & pieces",
                "In-shell, de-husked or finished kernel supply",
                "25 kg vacuum-sealed bags or bulk sacks",
              ]}
            />
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Enquire about any product <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Oil */}
      <section id="oil" className="bg-primary text-primary-foreground">
        <div className="container-x py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">Cold-Pressed</div>
              <h2 className="text-balance text-4xl leading-tight text-white md:text-5xl">
                Extra Virgin Avocado Oil
              </h2>
              <p className="mt-6 text-lg text-white/80">
                Pressed from ripe avocados within 48 hours of harvest, below 45°C,
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

      {/* Private Label */}
      <section className="py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">Private label</div>
            <h2 className="text-balance text-4xl leading-tight md:text-5xl">
              Build your own brand.
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
                "Ex-works, FOB East Africa, CIF or DDP terms",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Leaf className="mt-1 h-4 w-4 shrink-0 text-accent" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Discuss private label <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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

function FruitDetail({ name, season, origin, highlights }: { name: string; season: string; origin: string; highlights: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 transition hover:border-accent/40 hover:shadow-md">
      <div className="font-display text-2xl text-primary">{name}</div>
      <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
        <span>🗓 {season}</span>
        <span>📍 {origin}</span>
      </div>
      <ul className="mt-5 space-y-2">
        {highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {h}
          </li>
        ))}
      </ul>
    </div>
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
