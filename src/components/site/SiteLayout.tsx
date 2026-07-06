import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Menu, X, MapPin, Mail, Phone, Globe } from "lucide-react";
const logoUrl = "/Logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/consultation", label: "Consultation" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logoUrl} alt="Kenforest Limited" className="h-12 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary [&.active]:text-primary"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 md:inline-flex"
        >
          Request quote <ArrowRight className="h-4 w-4" />
        </Link>
        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-border md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Request quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground/90">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src={logoUrl}
            alt="Kenforest Limited"
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="mt-6 max-w-sm text-sm text-white/70">
            Nurturing Nature. Sustaining Future. Growing, processing and exporting
            premium Kenyan Hass avocados and cold-pressed avocado oil to the world.
          </p>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">
            Explore
          </div>
          <ul className="space-y-2 text-sm text-white/80">
            {nav.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">
            Contact
          </div>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> P.O. Box 50729, 00232, Kiambu, Kenya</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><a href="tel:+254711281829" className="hover:text-white">+254 711 281 829</a></li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><a href="mailto:kenforestlimited@gmail.com" className="hover:text-white">kenforestlimited@gmail.com</a></li>
            <li className="flex gap-2"><Globe className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><a href="https://www.kenforestlimited.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">www.kenforestlimited.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-6 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Kenforest Limited. All rights reserved.</div>
          <div>Nurturing Nature. Sustaining Future.</div>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/80 via-primary/50 to-background" />
      <div className="container-x flex min-h-[52vh] flex-col justify-end pb-16 pt-28 text-primary-foreground">
        <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </div>
        <h1 className="max-w-3xl text-balance text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/85">{subtitle}</p>
      </div>
    </section>
  );
}