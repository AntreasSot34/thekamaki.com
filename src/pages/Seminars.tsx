import { useState } from "react";
import { Plus, Minus, Sparkles } from "lucide-react";
import {
  SEMINAR_MODULES, SEMINAR_BENEFITS, SEMINAR_FACTS, SEMINAR_FAQ, FOUNDERS,
} from "../data/site";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import RegistrationForm from "../components/RegistrationForm";
import FounderCard from "../components/FounderCard";

export default function Seminars() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const total = SEMINAR_MODULES.reduce((s, m) => s + m.hours, 0);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sand to-cream pt-28 sm:pt-36">
        <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-coral/15 blur-3xl" />
        <div className="container-x relative grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal><span className="eyebrow"><Sparkles size={14} /> Βιωματικό σεμινάριο · 40 ώρες</span></Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                Επικοινωνία μεταξύ των <span className="text-coral">δύο φύλων</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
                Μάθε να επικοινωνείς, να φλερτάρεις και να δημιουργείς αυθεντικές σχέσεις — με
                αυτοπεποίθηση, χιούμορ και σεβασμό.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#register" className="btn-primary">Δήλωσε συμμετοχή</a>
                <a href="#program" className="btn-ghost">Δες το πρόγραμμα</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 gap-3">
              {SEMINAR_FACTS.map((f) => (
                <div key={f.label} className="card flex items-center gap-3 p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-coral/10 text-coral">
                    <f.icon size={18} />
                  </span>
                  <span className="text-sm font-semibold text-ink">{f.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-x py-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-ink-muted">
            Οι σχέσεις ξεκινούν από την επικοινωνία. Σε αυτό το βιωματικό σεμινάριο θα αποκτήσεις
            πραγματικές δεξιότητες για να ξεκινάς μια κουβέντα με άνεση, να διαβάζεις τα σήματα του
            άλλου, να χτίζεις χημεία και να δημιουργείς ουσιαστικές γνωριμίες — χωρίς τεχνάσματα,
            με αυθεντικότητα και αμοιβαίο σεβασμό.
          </p>
        </Reveal>
      </section>

      {/* BENEFITS */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading center eyebrow="Τι θα κερδίσεις" title="Δεξιότητες που θα δεις αμέσως στην πράξη" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SEMINAR_BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.06}>
                <div className="card h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                    <b.icon size={20} />
                  </span>
                  <h3 className="mt-4 font-semibold text-ink">{b.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="container-x scroll-mt-24 py-20 sm:py-24">
        <SectionHeading
          eyebrow="Το πρόγραμμα"
          title="8 ενότητες, 40 ώρες βιωματικής εκπαίδευσης"
          subtitle="Δομημένο ταξίδι από τα θεμέλια της επικοινωνίας μέχρι την εφαρμογή στην πράξη."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {SEMINAR_MODULES.map((m, i) => (
            <Reveal key={m.n} delay={(i % 2) * 0.05}>
              <div className="flex items-center gap-4 rounded-3xl border border-ink/5 bg-white p-5 shadow-card transition-transform hover:-translate-y-0.5">
                <span className="font-display text-2xl font-semibold text-coral/70">{m.n}</span>
                <span className="flex-1 font-medium text-ink">{m.title}</span>
                <span className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-ink-muted">{m.hours} ώρες</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-sm font-semibold text-teal">
            Σύνολο: {total} ώρες βιωματικής εκπαίδευσης
          </p>
        </Reveal>
      </section>

      {/* TRAINERS */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading center eyebrow="Εκπαιδευτές" title="Μάθε από ανθρώπους με εμπειρία" />
          <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            {FOUNDERS.map((f, i) => <FounderCard key={f.name} founder={f} delay={i * 0.08} />)}
          </div>
        </div>
      </section>

      {/* REGISTER */}
      <section id="register" className="container-x scroll-mt-24 py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Κράτησε τη θέση σου"
            title="Δήλωσε συμμετοχή"
            subtitle="Συμπλήρωσε τα στοιχεία σου και θα επικοινωνήσουμε μαζί σου για τις επόμενες ημερομηνίες."
          />
          <Reveal delay={0.08} className="card p-6 sm:p-8">
            <RegistrationForm />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-x max-w-3xl">
          <SectionHeading center eyebrow="FAQ" title="Συχνές ερωτήσεις" />
          <div className="mt-10 space-y-3">
            {SEMINAR_FAQ.map((item, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={item.q} delay={i * 0.04}>
                  <div className="overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-card">
                    <button
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      onClick={() => setOpenFaq(open ? null : i)}
                    >
                      <span className="font-semibold text-ink">{item.q}</span>
                      {open ? <Minus className="shrink-0 text-coral" size={18} /> : <Plus className="shrink-0 text-ink/40" size={18} />}
                    </button>
                    {open && <p className="px-6 pb-5 text-sm leading-relaxed text-ink-muted">{item.a}</p>}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
