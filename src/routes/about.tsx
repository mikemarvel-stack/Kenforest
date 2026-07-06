import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Target, Eye, HeartHandshake, Users, Globe2, Sprout } from "lucide-react";

import { PageHero, PageShell } from "@/components/site/SiteLayout";
import orchardImg from "@/assets/hero-orchard.jpg";
import consultationImg from "@/assets/consultation.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kenforest Limited — East African Avocado Growers & Exporters" },
      {
        name: "description",
        content:
          "Kenforest Limited is an East Africa-based avocado grower, processor and exporter. Learn about our farms, our team and our sustainability commitments.",
      },
      { property: "og:title", content: "About — Kenforest Limited" },
      { property: "og:description", content: "Meet the East African avocado export house nurturing nature and sustaining futures." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About us"
        title={<>Nurturing nature. <span className="text-accent">Sustaining future.</span></>}
        subtitle="An East African avocado export house built on farmer partnerships, modern agronomy and honest global trade."
        image={consultationImg}
      />

      {/* Story */}
      <section className="py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <img
            src={orchardImg}
            alt="Kenforest avocado orchard in East Africa"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-xl"
          />
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
              Our story
            </div>
            <h2 className="text-balance text-4xl leading-tight md:text-5xl">
              Rooted in East Africa. Reaching the world.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Kenforest Limited was founded to bridge two worlds: the smallholder
              farmers of East Africa's highlands and the global buyers who
              demand consistent, certified, traceable avocados. We built an
              integrated model — farm, agronomy, packhouse and export desk
              under one roof — so quality never depends on chance.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Today, we work with over 1,600 contracted growers across Kenya,
              Uganda and Tanzania, run our own flagship orchards, cold-press oil
              for premium brands and consult on new plantings across East Africa.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { k: "1,600+", v: "Contracted growers" },
                { k: "3", v: "Countries of operation" },
                { k: "18+", v: "Export markets" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-border bg-card p-5 text-center">
                  <div className="font-display text-3xl font-semibold text-primary">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-cream py-28">
        <div className="container-x grid gap-8 md:grid-cols-3">
          <ValueCard icon={<Target className="h-6 w-6" />} title="Our Mission">
            To grow and deliver the finest East African avocados and
            avocado oil while raising the incomes and the standards of the
            farmers we work with.
          </ValueCard>
          <ValueCard icon={<Eye className="h-6 w-6" />} title="Our Vision">
            A future where East Africa is recognised as the world's most
            trusted source of premium, sustainably grown avocados.
          </ValueCard>
          <ValueCard icon={<HeartHandshake className="h-6 w-6" />} title="Our Values">
            Nurture the soil. Honour the farmer. Deliver on the promise.
            Everything else is detail.
          </ValueCard>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="py-28">
        <div className="container-x">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
              Our advantage
            </div>
            <h2 className="text-balance text-4xl leading-tight md:text-5xl">
              What sets Kenforest apart.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Sprout className="h-5 w-5" />,
                title: "Multi-variety sourcing",
                body: "We source Hass, Fuerte, Pinkerton, Reed and Jumbo varieties, giving buyers year-round supply continuity and variety flexibility.",
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: "Integrated supply chain",
                body: "From farm to export carton under one roof — no middlemen, no quality gaps, full traceability at every step.",
              },
              {
                icon: <Globe2 className="h-5 w-5" />,
                title: "Market expertise",
                body: "Our export desk has deep knowledge of EU, GCC and Asian import requirements, ensuring smooth customs clearance every time.",
              },
              {
                icon: <Leaf className="h-5 w-5" />,
                title: "Sustainability first",
                body: "Drip irrigation, organic mulching, zero banned pesticides and indigenous tree planting are standard across our supply chain.",
              },
              {
                icon: <Target className="h-5 w-5" />,
                title: "Certified operations",
                body: "GlobalG.A.P., KEPHIS, HCD and GRASP certifications give buyers the compliance confidence they need.",
              },
              {
                icon: <HeartHandshake className="h-5 w-5" />,
                title: "Long-term partnerships",
                body: "We build multi-season offtake agreements — not spot deals — so both growers and buyers can plan with confidence.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-8 transition hover:border-accent/40 hover:shadow-md">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-primary/5 py-28">
        <div className="container-x">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
              Sustainability
            </div>
            <h2 className="text-balance text-4xl leading-tight md:text-5xl">
              Farming that gives back more than it takes.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "42%", v: "Less water used through drip irrigation vs. flood." },
              { k: "180k+", v: "Indigenous trees planted on partner farms since 2019." },
              { k: "100%", v: "Organic mulching and cover cropping on flagship orchards." },
              { k: "0", v: "Chlorothalonil or paraquat — banned across our supply chain." },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-card p-8">
                <Leaf className="h-6 w-6 text-accent" />
                <div className="mt-4 font-display text-4xl text-primary">{s.k}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Work with us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ValueCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mt-6 font-display text-2xl text-foreground">{title}</h3>
      <p className="mt-3 text-base text-muted-foreground">{children}</p>
    </div>
  );
}
