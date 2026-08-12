import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import RegistrationForm from "../components/RegistrationForm";
import { BRAND } from "../data/site";

export default function Contact() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-sand to-cream pt-28 sm:pt-36">
        <div className="container-x relative pb-12 text-center">
          <Reveal><span className="eyebrow"><Sparkles size={14} /> Contact</span></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Ας μιλήσουμε
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
              Έχεις ερώτηση για την εφαρμογή, την Academy ή τα σεμινάρια; Στείλε μας μήνυμα.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@thekamaki.com" },
              { icon: Phone, label: "Τηλέφωνο", value: "+357 00 000 000" },
              { icon: MapPin, label: "Έδρα", value: "Λευκωσία, Κύπρος" },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06}>
                <div className="card flex items-center gap-4 p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal/10 text-teal"><c.icon size={20} /></span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{c.label}</p>
                    <p className="font-medium text-ink">{c.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className="rounded-4xl bg-ink p-6 text-cream">
                <p className="font-display text-lg font-semibold">{BRAND.name}</p>
                <p className="mt-1 text-sm text-cream/70">{BRAND.tagline}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <SectionHeading title="Στείλε μας μήνυμα" />
            <div className="card mt-6 p-6 sm:p-8">
              <RegistrationForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
