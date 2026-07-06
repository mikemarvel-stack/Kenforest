import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Leaf,
  Ship,
  Sparkles,
  Sprout,
  ShieldCheck,
  Globe2,
  Award,
  ClipboardCheck,
  Truck,
  Factory,
  TreeDeciduous,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import { PageShell } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-orchard.jpg";
import hassImg from "@/assets/hass-crate.jpg";
import oilImg from "@/assets/avocado-oil.jpg";
import consultationImg from "@/assets/consultation.jpg";
import packhouseImg from "@/assets/packhouse.jpg";
import exportImg from "@/assets/export.jpg";
import singleImg from "@/assets/single-avocado.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kenforest Limited — Premium East African Avocado Export & Oil" },
      {
        name: "description",
        content:
          "Kenforest Limited grows, processes and exports GlobalG.A.P. certified avocados and cold-pressed avocado oil from East Africa to Europe, the Middle East and Asia.",
      },
      { property: "og:title", content: "Kenforest Limited — Premium East African Avocados" },
      { property: "og:description", content: "Export-grade avocados, cold-pressed avocado oil and agricultural consultation from East Africa." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kenforest Limited",
          slogan: "Nurturing Nature. Sustaining Future.",
          email: "kenforestlimited@gmail.com",
          telephone: "+254711281829",
          address: {
            "@type": "PostalAddress",
            streetAddress: "P.O. Box 50729, 00232",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <Hero />
      <TrustStrip />
      <Intro />
      <WhyEastAfrica />
      <ProductsOverview />
      <Markets />
      <ProcessTimeline />
      <Certifications />
      <FieldGallery />
      <Testimonial />
      <CTA />
    </PageShell>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="East African avocado orchard at golden hour"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/75 via-primary/40 to-background" />
      <div className="container-x flex min-h-[92vh] flex-col justify-end pb-24 pt-32 text-primary-foreground">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/90 backdrop-blur">
            <Leaf className="h-3.5 w-3.5 text-accent" />
            Premium Avocado Export · East Africa
          </div>
          <h1 className="text-balance text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
            East Africa's finest avocados,
            <br />
            <span className="text-accent">delivered to the world.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Kenforest Limited sources, processes and exports premium avocados
            and cold-pressed oils from the highlands of East Africa —
            partnering with buyers across Europe, the Middle East and Asia.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary transition hover:brightness-110"
            >
              Explore our products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const stats = [
    { k: "18+", v: "Export markets served" },
    { k: "2,400 T", v: "Annual avocado capacity" },
    { k: "1,600+", v: "Contracted smallholders" },
    { k: "GG.A.P.", v: "Certified operations" },
  ];
  return (
    <section className="border-y border-border bg-cream">
      <div className="container-x grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.v} className="text-center md:text-left">
            <div className="font-display text-4xl font-semibold text-primary">
              {s.k}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="py-28">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={singleImg}
            alt="Fresh avocado on the branch"
            width={1280}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 -right-4 hidden max-w-xs rounded-2xl border border-border bg-card p-6 shadow-lg md:block">
            <div className="text-xs uppercase tracking-widest text-accent">Origin</div>
            <div className="mt-1 font-display text-lg">East African Highlands, 1,900m</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Cool nights, volcanic soils, world-class avocados.
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
            Who we are
          </div>
          <h2 className="text-balance text-4xl leading-tight md:text-5xl">
            An East African avocado export house, built on trust and terroir.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From a network of high-altitude farms across East Africa, we deliver
            three things exceptionally well: <strong className="text-foreground">fresh export avocados</strong> to
            global retailers, <strong className="text-foreground">cold-pressed avocado oil</strong> to premium food
            and cosmetics brands, and <strong className="text-foreground">agricultural consultation</strong> to
            growers ready to enter the export supply chain.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Pillar icon={<TreeDeciduous className="h-5 w-5" />} title="Highland-grown">
              1,700–2,100m altitude for firm flesh, long shelf life and superior dry matter.
            </Pillar>
            <Pillar icon={<ShieldCheck className="h-5 w-5" />} title="Traceable">
              Every carton traces back to farm, block and picking date.
            </Pillar>
            <Pillar icon={<Sparkles className="h-5 w-5" />} title="Cold-pressed">
              Oil extracted below 45°C to preserve chlorophyll, aroma and nutrients.
            </Pillar>
            <Pillar icon={<Sprout className="h-5 w-5" />} title="Farmer-first">
              Fair pricing, agronomy support and long-term offtake agreements.
            </Pillar>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillar({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="font-display text-lg text-foreground">{title}</div>
      <p className="mt-1 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}

/* ---------- Why East Africa ---------- */
function WhyEastAfrica() {
  const reasons = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Year-round supply",
      body: "East Africa's equatorial climate and varied altitudes enable staggered harvests across multiple varieties, delivering consistent supply 12 months a year.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Superior quality",
      body: "High-altitude growing conditions — cool nights, rich volcanic soils and ample rainfall — produce avocados with exceptional oil content, flavour and shelf life.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Smallholder network",
      body: "Over 1,600 contracted growers across Kenya, Uganda and Tanzania give us unmatched sourcing depth and supply resilience across seasons.",
    },
    {
      icon: <Globe2 className="h-6 w-6" />,
      title: "Strategic location",
      body: "Positioned between Europe, the Middle East and Asia, East Africa offers competitive freight times and growing trade corridor advantages.",
    },
  ];
  return (
    <section className="bg-primary/5 py-28">
      <div className="container-x">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
            Why East Africa
          </div>
          <h2 className="text-balance text-4xl leading-tight md:text-5xl">
            The world's most compelling avocado origin.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            East Africa is the fastest-growing avocado export region globally — and Kenforest is at its centre.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                {r.icon}
              </div>
              <h3 className="font-display text-xl text-foreground">{r.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Products Overview ---------- */
function ProductsOverview() {
  const products = [
    {
      img: hassImg,
      tag: "Fresh Fruit",
      title: "Export-Grade Avocados",
      body: "Multiple varieties — Class I & II, harvested at peak dry matter, pre-cooled and shipped by sea in refrigerated 40ft reefers.",
      href: "/products",
    },
    {
      img: oilImg,
      tag: "Cold-Pressed",
      title: "Extra Virgin Avocado Oil",
      body: "Vibrant green, buttery-nutty oil pressed within 48 hours of harvest. Bulk drums and private-label bottling available.",
      href: "/products",
    },
    {
      img: consultationImg,
      tag: "Advisory",
      title: "Agricultural Consultation",
      body: "Orchard establishment, GlobalG.A.P. readiness, harvest scheduling and export market entry — from soil test to first pallet.",
      href: "/consultation",
    },
  ];
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-x py-28">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
              What we offer
            </div>
            <h2 className="text-balance text-4xl leading-tight text-white md:text-5xl">
              Three products. One integrated avocado supply chain.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white"
          >
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.title}
              to={p.href}
              className="group overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-accent/60"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="text-xs uppercase tracking-widest text-accent">
                  {p.tag}
                </div>
                <h3 className="mt-2 font-display text-2xl text-white">{p.title}</h3>
                <p className="mt-3 text-sm text-white/70">{p.body}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Markets ---------- */
function Markets() {
  const markets = [
    { region: "European Union", countries: "Netherlands · France · Spain · Germany" },
    { region: "Middle East", countries: "UAE · Saudi Arabia · Qatar · Kuwait" },
    { region: "Asia", countries: "China · Hong Kong · India · Malaysia" },
    { region: "Africa", countries: "South Africa · Egypt · Morocco" },
  ];
  return (
    <section className="py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
            Where we ship
          </div>
          <h2 className="text-balance text-4xl leading-tight md:text-5xl">
            From East Africa to eighteen markets across three continents.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We ship weekly via East African ports in refrigerated containers,
            and by air-freight for premium retail and food-service customers.
            Our sales team handles documentation, phytosanitary clearance and
            cold-chain from farm gate to destination port.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {markets.map((m) => (
              <div
                key={m.region}
                className="rounded-2xl border border-border bg-card p-5 transition hover:border-accent/40 hover:shadow-sm"
              >
                <div className="flex items-center gap-2 font-display text-lg text-foreground">
                  <Globe2 className="h-4 w-4 text-accent" /> {m.region}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{m.countries}</div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={exportImg}
          alt="Avocado export boxes loaded for shipping"
          width={1280}
          height={960}
          loading="lazy"
          className="w-full rounded-3xl object-cover shadow-xl"
        />
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
function ProcessTimeline() {
  const steps = [
    { n: "01", icon: <Sprout className="h-5 w-5" />, title: "Orchard", body: "Managed avocado blocks at 1,700–2,100m altitude with drip irrigation and integrated pest management." },
    { n: "02", icon: <ClipboardCheck className="h-5 w-5" />, title: "Harvest", body: "Dry-matter tested and hand-picked at optimum maturity for the target destination." },
    { n: "03", icon: <Factory className="h-5 w-5" />, title: "Packhouse", body: "Pre-cooling, brush washing, size grading and export cartons completed within 24 hours." },
    { n: "04", icon: <Truck className="h-5 w-5" />, title: "Cold chain", body: "Reefer trucks to port, +5.5°C controlled atmosphere containers to destination." },
    { n: "05", icon: <Ship className="h-5 w-5" />, title: "Delivery", body: "Documentation, phytosanitary and customs handled — landed in market ready for ripening." },
  ];
  return (
    <section className="bg-cream py-28">
      <div className="container-x">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
            Farm to port
          </div>
          <h2 className="text-balance text-4xl leading-tight md:text-5xl">
            An unbroken cold chain, engineered for shelf life.
          </h2>
        </div>
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-border bg-card p-6 transition hover:border-accent/40 hover:shadow-md"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                {s.icon}
              </div>
              <div className="font-display text-sm text-accent">{s.n}</div>
              <div className="mt-1 font-display text-xl text-foreground">{s.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Certifications ---------- */
function Certifications() {
  const certs = [
    { name: "GlobalG.A.P.", body: "Good Agricultural Practices, farm-level certified." },
    { name: "KEPHIS", body: "Kenya Plant Health Inspectorate export registration." },
    { name: "HCD", body: "Horticultural Crops Directorate licensed exporter." },
    { name: "GRASP", body: "GlobalG.A.P. Risk Assessment on Social Practice." },
  ];
  return (
    <section className="py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
              Standards & compliance
            </div>
            <h2 className="text-balance text-4xl leading-tight md:text-5xl">
              Audited, certified, and traceable end-to-end.
            </h2>
          </div>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {certs.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-border bg-card p-8 text-center transition hover:border-accent/40 hover:shadow-md"
            >
              <Award className="mx-auto h-8 w-8 text-accent" />
              <div className="mt-4 font-display text-xl text-foreground">
                {c.name}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
function FieldGallery() {
  const shots = [
    { src: heroImg, alt: "East African avocado orchard at golden hour", span: "md:col-span-2 md:row-span-2" },
    { src: packhouseImg, alt: "Kenforest packhouse operations", span: "" },
    { src: hassImg, alt: "Fresh avocados in a wooden crate", span: "" },
    { src: consultationImg, alt: "Agronomist consulting with an East African farmer", span: "md:col-span-2" },
    { src: oilImg, alt: "Bottle of cold-pressed avocado oil", span: "" },
  ];
  return (
    <section className="bg-primary/5 py-28">
      <div className="container-x">
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
            From the fields
          </div>
          <h2 className="text-balance text-4xl leading-tight md:text-5xl">
            Everyday moments from orchard to port.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {shots.map((s) => (
            <div
              key={s.alt}
              className={`overflow-hidden rounded-2xl ${s.span || "row-span-1"}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-28">
      <div className="container-x">
        <figure className="mx-auto max-w-4xl text-center">
          <Leaf className="mx-auto h-8 w-8 text-accent" />
          <blockquote className="mt-6 font-display text-3xl leading-snug text-foreground md:text-4xl">
            "Kenforest have been our most consistent East African supplier for
            three seasons — dry matter on spec, cold chain unbroken, and paperwork
            that just works. Their East African avocados have become a staple in our program."
          </blockquote>
          <figcaption className="mt-8 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Lars van der Meer</span> ·
            Head of Sourcing, Rotterdam Fresh Produce
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-x pb-28">
      <div className="relative overflow-hidden rounded-3xl bg-primary p-12 text-primary-foreground md:p-20">
        <div className="absolute inset-0 opacity-25">
          <img src={heroImg} alt="" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="relative max-w-2xl">
          <h2 className="text-balance text-4xl leading-tight text-white md:text-5xl">
            Ready for a reliable East African avocado partner?
          </h2>
          <p className="mt-6 text-lg text-white/80">
            Tell us your target market, volumes and specifications — we'll come
            back with pricing, availability and a sample shipment plan within
            two working days.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary transition hover:brightness-110"
            >
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
