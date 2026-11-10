// Shared layout for every app's privacy policy page.
import type { ReactNode } from "react";

export const CONTACT = {
  business: "Asian Le Restaurant",
  address: "635 Branion Drive, Prince Albert, SK S6V 2R9, Canada",
  email: "asianlepa@gmail.com",
  phone: "(306) 764-7799",
};

export function PolicyPage({
  appName,
  effectiveDate,
  children,
}: {
  appName: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12 text-[16px] leading-7 text-zinc-700 sm:py-16">
      <header className="mb-10 space-y-2">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">{appName}</p>
        <h1 className="text-3xl font-bold text-zinc-900">Privacy Policy</h1>
        <p className="text-sm text-zinc-500">Effective {effectiveDate}</p>
      </header>

      <div className="space-y-10">
        {children}
        <ContactSection />
      </div>
    </main>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
      {children}
    </section>
  );
}

export function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-6">{children}</ul>;
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className="font-medium text-zinc-900 underline"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function ContactSection() {
  return (
    <Section title="Contact us">
      <p>Questions or requests about your privacy can be sent to:</p>
      <address className="not-italic">
        {CONTACT.business}
        <br />
        {CONTACT.address}
        <br />
        Email:{" "}
        <a className="font-medium text-zinc-900 underline" href={`mailto:${CONTACT.email}`}>
          {CONTACT.email}
        </a>
        <br />
        Phone: {CONTACT.phone}
      </address>
    </Section>
  );
}
