import { Link } from "react-router-dom";
import { Smartphone, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import { APP_FLOW } from "../data/site";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const ACADEMY_STEPS = [
  { step: "01", title: "Διάλεξε στόχο", text: "Επικοινωνία, αυτοπεποίθηση, dating skills ή ουσιαστικές σχέσεις." },
  { step: "02", title: "Διάλεξε τρόπο", text: "Online course, live training ή διά ζώσης σεμινάριο — ό,τι σου ταιριάζει." },
  { step: "03", title: "Μάθε & εξασκήσου", text: "Βιωματικές ασκήσεις, παιχνίδι ρόλων και πρακτική καθοδήγηση." },
  { step: "04", title: "Εφάρμοσε στην πράξη", text: "Πάρε τις δεξιότητες στον πραγματικό κόσμο — και στην εφαρμογή." },
];

export default function HowItWorks() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-sand to-cream pt-28 sm:pt-36">
        <div className="container-x relative pb-16 text-center">
          <Reveal><span className="eyebrow"><Sparkles size={14} /> How It Works</span></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Δύο διαδρομές, ένας στόχος: ουσιαστικές σχέσεις
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">
              Ξεκίνα από την εφαρμογή για να γνωρίσεις ανθρώπους, ή από την Academy για να χτίσεις τις δεξιότητές σου.
            </p>
          </Reveal>
        </div>
      </section>

      {/* APP PATH */}
      <section className="container-x py-20 sm:py-24">
        <div className="mb-10 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-coral text-cream"><Smartphone size={20} /></span>
          <h2 className="font-display text-2xl font-semibold text-ink">Με την εφαρμογή</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {APP_FLOW.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="card h-full p-6">
                <span className="font-display text-3xl font-semibold text-coral/40">{s.step}</span>
                <h3 className="mt-2 font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ACADEMY PATH */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-x">
          <div className="mb-10 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal text-cream"><GraduationCap size={20} /></span>
            <h2 className="font-display text-2xl font-semibold text-ink">Με την Academy</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ACADEMY_STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="card h-full p-6">
                  <span className="font-display text-3xl font-semibold text-teal/40">{s.step}</span>
                  <h3 className="mt-2 font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 text-center">
        <Reveal>
          <SectionHeading center title="Έτοιμος να ξεκινήσεις;" />
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/app" className="btn-primary">Try TheKamaki App <ArrowRight size={16} /></Link>
            <Link to="/academy" className="btn-ghost">Explore Academy</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
