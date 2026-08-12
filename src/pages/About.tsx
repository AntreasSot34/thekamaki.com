import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Target, Compass, Heart } from "lucide-react";
import { FOUNDERS, BRAND_VALUES } from "../data/site";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import FounderCard from "../components/FounderCard";

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-sand to-cream pt-28 sm:pt-36">
        <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-teal/15 blur-3xl" />
        <div className="container-x relative pb-16 text-center">
          <Reveal><span className="eyebrow"><Sparkles size={14} /> About Us</span></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Χτίζουμε έναν πιο ανθρώπινο τρόπο να γνωριζόμαστε
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">
              Το TheKamaki γεννήθηκε από μια απλή πεποίθηση: οι πραγματικές σχέσεις ξεκινούν από την
              ουσία — την προσωπικότητα, τις αξίες και την επικοινωνία — και όχι από μία φωτογραφία.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MISSION */}
      <section className="container-x py-20 sm:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Η αποστολή μας", text: "Να βοηθήσουμε τους ανθρώπους να γνωρίζονται με ουσία και να χτίζουν σχέσεις που αντέχουν." },
            { icon: Compass, title: "Η φιλοσοφία μας", text: "Προσωπικότητα, αξίες και επικοινωνία πρώτα. Η εμφάνιση αποκαλύπτεται σταδιακά." },
            { icon: Heart, title: "Οι αξίες μας", text: "Σεβασμός, αυθεντικότητα και προσωπική ανάπτυξη σε κάθε βήμα του ταξιδιού." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <div className="card h-full p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral/10 text-coral"><c.icon size={22} /></span>
                <h3 className="mt-5 text-xl font-semibold text-ink">{c.title}</h3>
                <p className="mt-3 text-ink-muted">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES BAND */}
      <section className="bg-gradient-to-r from-teal-dark to-teal py-14 text-cream">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-center">
          {BRAND_VALUES.map((v) => (
            <div key={v.label} className="flex items-center gap-2">
              <v.icon size={18} className="text-gold" />
              <span className="font-display text-lg font-medium">{v.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          center
          eyebrow="Meet the Founders"
          title="Οι άνθρωποι πίσω από το TheKamaki"
          subtitle="Δύο ιδρυτές με κοινό όραμα για πιο ουσιαστικές ανθρώπινες σχέσεις."
        />
        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {FOUNDERS.map((f, i) => <FounderCard key={f.name} founder={f} delay={i * 0.08} />)}
        </div>
      </section>

      <section className="container-x pb-24 text-center">
        <Reveal>
          <div className="rounded-4xl bg-ink px-8 py-14 text-cream">
            <h2 className="font-display text-3xl font-semibold">Θέλεις να μάθεις περισσότερα;</h2>
            <div className="mt-7 flex justify-center">
              <Link to="/contact" className="btn-primary">Επικοινώνησε μαζί μας <ArrowRight size={16} /></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
