import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { APP_FEATURES, APP_FLOW, PHILOSOPHY } from "../data/site";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function AppPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sand to-cream pt-28 sm:pt-36">
        <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-coral/15 blur-3xl" />
        <div className="container-x relative grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal><span className="eyebrow"><Sparkles size={14} /> TheKamaki App</span></Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                Γνωριμίες που ξεκινούν από την <span className="text-coral">προσωπικότητα</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
                Για νέους επαγγελματίες 22–35 ετών που δουλεύουν πολλές ώρες και δυσκολεύονται
                να γνωρίσουν νέους ανθρώπους. Χωρίς επιφανειακά swipes — με πραγματική σύνδεση.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Μπες στη waitlist <ArrowRight size={16} /></Link>
                <Link to="/how-it-works" className="btn-ghost">Πώς λειτουργεί</Link>
              </div>
            </Reveal>
          </div>

          {/* Philosophy chain */}
          <Reveal delay={0.12}>
            <div className="card p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Η φιλοσοφία μας</p>
              <div className="mt-5 space-y-2.5">
                {PHILOSOPHY.map((p, i) => (
                  <div key={p} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-coral/10 text-sm font-bold text-coral">
                      {i + 1}
                    </span>
                    <span className="font-medium text-ink">{p}</span>
                    {i < PHILOSOPHY.length - 1 && <span className="ml-auto text-ink/20">↓</span>}
                  </div>
                ))}
              </div>
              <p className="mt-6 rounded-2xl bg-sand p-4 text-sm text-ink-muted">
                Οι χρήστες δεν επιλέγουν κάποιον μόνο από μία φωτογραφία. Πρώτα η ουσία, μετά η εμφάνιση.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* UX FLOW */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          center
          eyebrow="The experience"
          title="Discover → Connect → Talk → Reveal → Meet"
          subtitle="Μια καθαρή διαδρομή που οδηγεί από την πρώτη ανακάλυψη σε ένα πραγματικό ραντεβού."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {APP_FLOW.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="card h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                    <s.icon size={20} />
                  </span>
                  <span className="font-display text-3xl font-semibold text-ink/10">{s.step}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Features"
            title="Ό,τι χρειάζεσαι για ουσιαστικές γνωριμίες"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {APP_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 0.05}>
                <div className="card h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                    <f.icon size={20} />
                  </span>
                  <h3 className="mt-4 font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM */}
      <section className="container-x py-20 sm:py-28">
        <Reveal>
          <div className="grid items-center gap-10 rounded-4xl bg-gradient-to-br from-ink to-teal-dark p-10 text-cream sm:p-14 lg:grid-cols-2">
            <div>
              <span className="eyebrow !border-gold/50 !bg-gold/15 !text-gold">Premium Membership</span>
              <h2 className="mt-5 font-display text-3xl font-semibold">Ξεκλείδωσε βαθύτερες συνδέσεις</h2>
              <p className="mt-4 text-cream/75">
                Το premium σου δίνει περισσότερα ουσιαστικά matches, insights συμβατότητας και προτεραιότητα στα Weekend Meetups.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Απεριόριστα compatibility matches",
                "Προηγμένα insights προσωπικότητας",
                "Προτεραιότητα σε Weekend Meetups",
                "Έλεγχος στο σταδιακό photo reveal",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 rounded-2xl bg-cream/[0.06] px-4 py-3">
                  <Check className="text-coral" size={18} />
                  <span className="text-sm text-cream/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
