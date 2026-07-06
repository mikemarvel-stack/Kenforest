import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ClipboardCheck,
  Sprout,
  ShieldCheck,
  Handshake,
  Ship,
  LineChart,
} from "lucide-react";

import { PageHero, PageShell } from "@/components/site/SiteLayout";
import consultationImg from "@/assets/consultation.jpg";
import orchardImg from "@/assets/hero-orchard.jpg";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Agricultural Consultation — Avocado Orchards & Export Readiness | Kenforest" },
      {
        name: "description",
        content:
          "Kenforest's agronomists help East African growers plan Hass avocado orchards, achieve GlobalG.A.P. certification and enter international export markets.",
      },
      { property: "og:title", content: "Avocado Consultation — Kenforest Limited" },
      { property: "og:description", content: "Orchard planning, GlobalG.A.P. readiness and export market entry for Hass avocado growers." },
      { property: "og:url", content: "/consultation" },
    ],
    links: [{ rel: "canonical", href: "/consultation" }],
  }),
  component: Consultation,
});

function Consultation() {
  const services = [
    { icon: <Sprout className="h-5 w-5" />, title: "Orchard establishment", body: "Site assessment, variety selection, spacing, irrigation design and rootstock sourcing." },
    { icon: <LineChart className="h-5 w-5" />, title: "Agronomy & yields", body: "Nutrition programs, IPM, canopy management and monitoring to lift yields sustainably." },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "GlobalG.A.P. readiness", body: "Gap analysis, SOPs, record-keeping and pre-audit coaching to certification day." },
    { icon: <ClipboardCheck className="h-5 w-5" />, title: "Harvest & post-harvest", body: "Dry-matter testing, picking protocols, packhouse setup and cold-chain design." },
    { icon: <Ship className="h-5 w-5" />, title: "Export market entry", body: "Buyer introductions, KEPHIS registration, documentation and first-shipment support." },
    { icon: <Handshake className="h-5 w-5" />, title: "Offtake partnerships", body: "Contract farming and guaranteed-price offtake for growers who meet our spec." },
  ];
  return (
    <PageShell>
      <PageHero
        eyebrow="Consultation"
        title={<>Agronomy that pays for itself, <span className="text-accent">season after season.</span></>}
        subtitle="From your first Hass seedling to your first export container, our agronomists partner with growers, cooperatives and investors across East Africa."
        image={consultationImg}
      />

      <section className="py-28">
        <div className="container-x">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
              Services
            </div>
            <h2 className="text-balance text-4xl leading-tight md:text-5xl">
              Six services covering the full grower journey.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  {s.icon}
                </div>
                <h3 className="font-display text-xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <img
            src={orchardImg}
            alt="Kenyan avocado orchard rows"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-xl"
          />
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
              How we engage
            </div>
            <h2 className="text-balance text-4xl leading-tight md:text-5xl">
              Three ways to work with us.
            </h2>
            <div className="mt-10 space-y-6">
              <Package title="Advisory Retainer" price="From KES 80,000 / month">
                Ongoing agronomy visits, remote support and quarterly reviews.
                Ideal for growers with 5+ acres already in production.
              </Package>
              <Package title="Orchard Blueprint" price="Project-based">
                A one-off feasibility, design and implementation plan for new
                orchards — from land selection to year-three cashflow model.
              </Package>
              <Package title="Contract Farming" price="Guaranteed offtake">
                We supply inputs and agronomy at cost; you supply the land and
                labour; we buy the fruit at a pre-agreed price.
              </Package>
            </div>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Book a consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Package({
  title,
  price,
  children,
}: {
  title: string;
  price: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="font-display text-xl text-foreground">{title}</div>
        <div className="text-sm font-medium text-accent">{price}</div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}