import { Link } from "react-router-dom";
import { ArrowRight, Clock, MapPin, Video, CalendarDays, Users, GraduationCap, Info } from "lucide-react";
import { LEARNING_OPTIONS, ACADEMY_TOPICS, COURSES } from "../data/site";
import type { Course } from "../data/site";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

function modeBadge(mode: Course["mode"]) {
  const map = {
    Online: { icon: Video, label: "Online", cls: "bg-teal/10 text-teal" },
    Physical: { icon: MapPin, label: "Διά ζώσης", cls: "bg-coral/10 text-coral" },
    Hybrid: { icon: Users, label: "Hybrid", cls: "bg-gold/15 text-gold" },
  } as const;
  const m = map[mode];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${m.cls}`}>
      <m.icon size={13} /> {m.label}
    </span>
  );
}

function CourseCard({ course, delay }: { course: Course; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className={`card flex h-full flex-col p-6 ${course.featured ? "ring-2 ring-coral/40" : ""}`}>
        <div className="flex items-center justify-between gap-2">
          {modeBadge(course.mode)}
          {course.featured && (
            <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-cream">Flagship</span>
          )}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-ink">{course.title}</h3>
        <p className="mt-1 text-sm font-medium text-teal">{course.trainer}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{course.description}</p>

        <div className="mt-5 grid grid-cols-2 gap-2 text-sm text-ink-muted">
          <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {course.duration}</span>
          <span className="inline-flex items-center gap-1.5"><CalendarDays size={14} /> {course.date}</span>
          <span className="inline-flex items-center gap-1.5"><Users size={14} /> {course.seats > 100 ? "Απεριόριστες" : `${course.seats} θέσεις`}</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-ink"><GraduationCap size={14} /> {course.price}</span>
        </div>

        <div className="mt-6 flex gap-2 pt-2">
          <Link
            to={course.featured ? "/seminars" : "/contact"}
            className="btn-ghost flex-1 !py-2.5 text-xs"
          >
            Learn More
          </Link>
          <Link to="/contact" className="btn-primary flex-1 !py-2.5 text-xs">Book Now</Link>
        </div>
      </div>
    </Reveal>
  );
}

export default function Academy() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sand to-cream pt-28 sm:pt-36">
        <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-teal/15 blur-3xl" />
        <div className="container-x relative pb-16 text-center">
          <Reveal><span className="eyebrow"><GraduationCap size={14} /> TheKamaki Academy</span></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Εκπαίδευση για επικοινωνία, αυτοπεποίθηση και ουσιαστικές σχέσεις
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">
              Διάλεξε τον τρόπο που σου ταιριάζει — από on-demand μαθήματα μέχρι διά ζώσης σεμινάρια.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {ACADEMY_TOPICS.map((t) => (
                <span key={t} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink/70">{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEARNING OPTIONS */}
      <section className="container-x py-20 sm:py-24">
        <SectionHeading center eyebrow="Learning Options" title="Ο δικός σου τρόπος να μάθεις" />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LEARNING_OPTIONS.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.06}>
              <div className="card h-full p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-cream">
                  <o.icon size={22} />
                </span>
                <h3 className="mt-4 font-semibold text-ink">{o.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{o.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* COURSE CATALOGUE */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Course Catalogue" title="Προγράμματα & σεμινάρια" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((c, i) => (
              <CourseCard key={c.title} course={c} delay={(i % 3) * 0.06} />
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex items-start gap-3 rounded-3xl border border-teal/20 bg-teal/5 p-5 text-sm text-ink-muted">
              <Info className="mt-0.5 shrink-0 text-teal" size={18} />
              <p>
                Ορισμένα προγράμματα κατάρτισης ενδέχεται μελλοντικά να προσφέρονται ως{" "}
                <span className="font-semibold text-ink">επιλέξιμα προγράμματα ΑνΑΔ</span>, όπου αυτό εφαρμόζεται και εγκρίνεται.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-ink">Δεν ξέρεις από πού να ξεκινήσεις;</h2>
          <p className="mx-auto mt-3 max-w-lg text-ink-muted">
            Πες μας τι ψάχνεις και θα σου προτείνουμε το κατάλληλο πρόγραμμα ή σεμινάριο.
          </p>
          <div className="mt-7 flex justify-center">
            <Link to="/contact" className="btn-primary">Ζήτησε καθοδήγηση <ArrowRight size={16} /></Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
