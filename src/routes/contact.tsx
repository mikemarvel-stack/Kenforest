import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin, Mail, Phone, Globe, Clock } from "lucide-react";
import { useState } from "react";

import { PageHero, PageShell } from "@/components/site/SiteLayout";
import exportImg from "@/assets/export.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kenforest Limited — Kenyan Hass Avocado Exporter" },
      {
        name: "description",
        content:
          "Contact Kenforest Limited for Hass avocado export enquiries, avocado oil purchase orders and agricultural consultation. Based in East Africa.",
      },
      { property: "og:title", content: "Contact — Kenforest Limited" },
      { property: "og:description", content: "Talk to our export desk about Hass avocados, oil and consultation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell>
      <PageHero
        eyebrow="Get in touch"
        title={<>Let's grow <span className="text-accent">something together.</span></>}
        subtitle="Whether you're a buyer, retailer, distributor, grower or investor — our team responds within two working days."
        image={exportImg}
      />

      <section className="py-28">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
              Reach us directly
            </div>
            <h2 className="text-balance text-4xl leading-tight md:text-5xl">
              Head office · East Africa
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We are based in the heart of East Africa's premium fruit growing
              region, with easy access to international airports and major
              export corridors. Farm and packhouse visits are available by appointment.
            </p>
            <ul className="mt-10 space-y-5">
              <ContactRow icon={<MapPin className="h-5 w-5" />} label="Address">
                Kenforest Limited · P.O. Box 50729, 00232 · Nairobi, Kenya
              </ContactRow>
              <ContactRow icon={<Mail className="h-5 w-5" />} label="Email">
                <a href="mailto:kenforestlimited@gmail.com" className="hover:text-primary">
                  kenforestlimited@gmail.com
                </a>
              </ContactRow>
              <ContactRow icon={<Phone className="h-5 w-5" />} label="Phone">
                <a href="tel:+254711281829" className="hover:text-primary">
                  +254 711 281 829
                </a>
              </ContactRow>
              <ContactRow icon={<Globe className="h-5 w-5" />} label="Website">
                www.kenforestlimited.com
              </ContactRow>
              <ContactRow icon={<Clock className="h-5 w-5" />} label="Hours">
                Mon – Fri · 08:00 – 17:00 EAT
              </ContactRow>
            </ul>
          </div>
          {submitted ? (
            <div
              role="status"
              aria-live="polite"
              className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center shadow-sm"
            >
              <svg className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" className="opacity-20" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 13l3 3 7-7" />
              </svg>
              <h3 className="mt-4 font-display text-2xl text-foreground">Enquiry sent!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your email client should have opened. If not, email us directly at{" "}
                <a href="mailto:kenforestlimited@gmail.com" className="text-primary hover:underline">
                  kenforestlimited@gmail.com
                </a>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-accent hover:underline"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
          <form
            aria-label="Contact enquiry form"
            className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(
                `Website enquiry — ${data.get("subject") || data.get("name") || ""}`,
              );
              const body = encodeURIComponent(
                `${data.get("message") ?? ""}\n\nProduct interest: ${data.get("interest") ?? ""}\nVolume: ${data.get("volume") ?? ""}\n\n— ${data.get("name") ?? ""}\n${data.get("company") ?? ""}\n${data.get("email") ?? ""}`,
              );
              window.location.href = `mailto:kenforestlimited@gmail.com?subject=${subject}&body=${body}`;
              setSubmitted(true);
            }}
          >
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" name="name" required />
                <Field label="Company" name="company" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Country" name="country" />
              </div>
              <div>
                <label
                  htmlFor="contact-interest"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Product interest
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option>Fresh Hass avocados</option>
                  <option>Cold-pressed avocado oil</option>
                  <option>Agricultural consultation</option>
                  <option>Private-label / OEM</option>
                  <option>Other</option>
                </select>
              </div>
              <Field label="Estimated volume (optional)" name="volume" placeholder="e.g. 2 x 40ft reefers / month" />
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Send enquiry <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  const id = `contact-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </span>
      <span>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 text-base text-foreground">{children}</div>
      </span>
    </li>
  );
}