import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, GraduationCap, Sparkles, ChevronRight } from "lucide-react";
import {
  BRAND, BRAND_VALUES, PHILOSOPHY, APP_FLOW, LEARNING_OPTIONS, FOUNDERS,
} from "../data/site";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import FounderCard from "../components/FounderCard";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sand to-cream pt-28 sm:pt-36">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-coral/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-40 h-80 w-80 rounded-full bg-teal/15 blur-3xl" />
        <div className="container-x relative grid items-center gap-12 pb-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="eyebrow">
                <Sparkles size={14} /> Relationships · Communication · Growth
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
                Find Real Connections{" "}
                <span className="relative whitespace-nowrap text-coral">
                  Beyond Looks.
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                    <path d="M2 7C50 2 150 2 198 7" stroke="#D9A441" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
                {BRAND.subline}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/app" className="btn-primary">
                  Ξεκίνα στο TheKamaki <ArrowRight size={16} />
                </Link>
                <Link to="/academy" className="btn-ghost">
                  Δες τα Μαθήματα
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex items-center gap-6 text-sm text-ink-muted">
                <div>
                  <div className="font-display text-2xl font-semibold text-ink">22–35</div>
                  <div>νέοι επαγγελματίες</div>
                </div>
                <div className="h-8 w-px bg-ink/10" />
                <div>
                  <div className="font-display text-2xl font-semibold text-ink">5 βήματα</div>
                  <div>Discover → Meet</div>
                </div>
                <div className="h-8 w-px bg-ink/10" />
                <div>
                  <div className="font-display text-2xl font-semibold text-ink">1 Academy</div>
                  <div>δεξιότητες ζωής</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Hero visual: phone mock */}
          <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm">
            <div className="animate-float rounded-[2.5rem] border border-ink/10 bg-white p-4 shadow-soft">
              <div className="rounded-[2rem] bg-gradient-to-br from-teal via-teal-dark to-ink p-6 text-cream">
                <div className="flex items-center justify-between text-xs text-cream/70">
                  <span>TheKamaki</span><span>9:41</span>
                </div>
                <div className="mt-6 space-y-3">
                  {PHILOSOPHY.slice(0, 4).map((p, i) => (
                    <div key={p} className="flex items-center gap-3 rounded-2xl bg-cream/10 px-4 py-3 backdrop-blur">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-coral text-xs font-bold">
                        {i + 1}
                      </span>
                      <span className="text-sm font-medium">{p}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-coral px-4 py-3 text-center text-sm font-semibold shadow-glow">
                  It's a match — αρχικά χωρίς φωτογραφία
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rotate-[-6deg] rounded-2xl bg-white px-4 py-3 shadow-card">
              <p className="text-xs font-semibold text-ink">Personality first</p>
              <p className="text-[11px] text-ink-muted">Looks reveal later</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          center
          eyebrow="Two ways in"
          title={<>Δύο τρόποι να σε βοηθήσει το TheKamaki</>}
          subtitle="Είτε θέλεις να γνωρίσεις κάποιον, είτε να γίνεις καλύτερος στις σχέσεις — ξεκίνα από εδώ."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Smartphone,
              tag: "Θέλεις να γνωρίσεις κάποιον;",
              title: "Try TheKamaki App",
              text: "Γνώρισε ανθρώπους μέσα από αξίες και προσωπικότητα, όχι μόνο φωτογραφίες.",
              to: "/app",
              cta: "Δες την εφαρμογή",
              from: "from-coral/10",
            },
            {
              icon: GraduationCap,
              tag: "Θέλεις να βελτιώσεις τις δεξιότητές σου;",
              title: "Explore TheKamaki Academy",
              text: "Μάθε επικοινωνία, αυτοπεποίθηση και κοινωνικές δεξιότητες με τον τρόπο που σου ταιριάζει.",
              to: "/academy",
              cta: "Δες την Academy",
              from: "from-teal/10",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <Link
                to={c.to}
                className={`group card relative block h-full overflow-hidden bg-gradient-to-br ${c.from} to-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-cream">
                  <c.icon size={26} />
                </span>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink-muted">{c.tag}</p>
                <h3 className="mt-2 text-2xl font-semibold text-ink">{c.title}</h3>
                <p className="mt-3 text-ink-muted">{c.text}</p>
                <span className="mt-6 inline-flex items-center gap-1 font-semibold text-coral">
                  {c.cta} <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* APP TEASER — flow */}
      <section className="bg-ink py-20 text-cream sm:py-28">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="The App"
            title="Όχι άλλο ένα dating app"
            subtitle="Το UX χτίζεται γύρω από μια απλή, ανθρώπινη διαδρομή."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {APP_FLOW.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-cream/10 bg-cream/[0.04] p-6 transition-colors hover:border-coral/40">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-coral text-cream">
                      <s.icon size={20} />
                    </span>
                    <span className="font-display text-3xl font-semibold text-cream/15">{s.step}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-cream">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10 flex justify-center">
              <Link to="/app" className="btn-primary">
                Μάθε για την εφαρμογή <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ACADEMY TEASER */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="The Academy"
            title="Δεξιότητες που κρατούν μια ζωή"
            subtitle="Διάλεξε τον τρόπο εκπαίδευσης που σου ταιριάζει — online, live ή διά ζώσης."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {LEARNING_OPTIONS.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.06}>
                <div className="card h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                    <o.icon size={20} />
                  </span>
                  <h3 className="mt-4 font-semibold text-ink">{o.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{o.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES BAND */}
      <section className="bg-gradient-to-r from-teal-dark to-teal py-14 text-cream">
        <div className="container-x">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-center">
            {BRAND_VALUES.map((v) => (
              <div key={v.label} className="flex items-center gap-2">
                <v.icon size={18} className="text-gold" />
                <span className="font-display text-lg font-medium">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS PREVIEW */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          center
          eyebrow="Meet the Founders"
          title="Οι άνθρωποι πίσω από το TheKamaki"
        />
        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {FOUNDERS.map((f, i) => (
            <FounderCard key={f.name} founder={f} delay={i * 0.08} />
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Link to="/about" className="btn-ghost">Η ιστορία μας <ArrowRight size={16} /></Link>
          </div>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="container-x pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-ink px-8 py-16 text-center text-cream sm:px-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-coral/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-teal/25 blur-3xl" />
            <h2 className="relative font-display text-3xl font-semibold sm:text-4xl">
              Έτοιμος για πραγματικές σχέσεις;
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-cream/75">
              Ξεκίνα με την εφαρμογή ή ανέβασε τις δεξιότητές σου στην Academy. Το επόμενο βήμα είναι δικό σου.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/app" className="btn-primary">Ξεκίνα στο TheKamaki</Link>
              <Link to="/seminars" className="btn-ghost !border-cream/20 !bg-cream/5 !text-cream hover:!bg-cream/10">
                Δες τα σεμινάρια
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
