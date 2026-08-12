import { useRef, useState } from "react";
import { PenLine, Sparkles, Send, X, ImagePlus, Trash2, ArrowLeft } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { useArticles, formatDate } from "../lib/articles";
import type { Article } from "../lib/articles";
import { FOUNDERS } from "../data/site";

const AUTHORS = [...FOUNDERS.map((f) => f.name), "Ομάδα TheKamaki"];

export default function Articles() {
  const { articles, addArticle, removeArticle } = useArticles();
  const [open, setOpen] = useState(false);
  const [reading, setReading] = useState<Article | null>(null);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState(AUTHORS[0]);
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState<string | undefined>();
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setCover(reader.result as string);
    reader.readAsDataURL(file);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (title.trim().length < 3 || content.trim().length < 10) {
      setError("Συμπλήρωσε τουλάχιστον τίτλο και κείμενο.");
      return;
    }
    addArticle({ title: title.trim(), author, summary: summary.trim() || content.trim().slice(0, 120) + "…", content: content.trim(), cover });
    setTitle(""); setSummary(""); setContent(""); setCover(undefined); setError("");
    if (fileRef.current) fileRef.current.value = "";
    setOpen(false);
  }

  const input = "w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-coral";

  // Reading view
  if (reading) {
    return (
      <div className="pt-28 sm:pt-32">
        <article className="container-x max-w-3xl py-10">
          <button onClick={() => setReading(null)} className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-coral">
            <ArrowLeft size={16} /> Πίσω στα articles
          </button>
          {reading.cover && (
            <img src={reading.cover} alt="" className="mb-8 max-h-[420px] w-full rounded-4xl object-cover" />
          )}
          <p className="text-sm font-semibold uppercase tracking-wide text-teal">{reading.author} · {formatDate(reading.date)}</p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">{reading.title}</h1>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-muted">
            {reading.content.split("\n").filter(Boolean).map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sand to-cream pt-28 sm:pt-36">
        <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-coral/15 blur-3xl" />
        <div className="container-x relative flex flex-col items-center pb-14 text-center">
          <Reveal><span className="eyebrow"><Sparkles size={14} /> Articles</span></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Σκέψεις για σχέσεις, επικοινωνία & προσωπική ανάπτυξη
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-muted">
              Άρθρα γραμμένα από την ομάδα του TheKamaki. Γράψε το δικό σου και δημοσίευσέ το με ένα κλικ.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <button onClick={() => setOpen((v) => !v)} className="btn-primary mt-8">
              {open ? <><X size={16} /> Κλείσιμο</> : <><PenLine size={16} /> Γράψε άρθρο</>}
            </button>
          </Reveal>
        </div>
      </section>

      {/* COMPOSER */}
      {open && (
        <section className="container-x -mt-2 pb-4">
          <Reveal className="card mx-auto max-w-3xl p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink">Νέο άρθρο</h2>
            <form onSubmit={submit} className="mt-5 space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">Τίτλος *</label>
                  <input className={input} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ο τίτλος του άρθρου" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">Συγγραφέας</label>
                  <select className={input} value={author} onChange={(e) => setAuthor(e.target.value)}>
                    {AUTHORS.map((a) => <option key={a}>{a}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">Περίληψη (προαιρετικό)</label>
                <input className={input} value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Μία πρόταση που περιγράφει το άρθρο" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">Κείμενο *</label>
                <textarea className={`${input} min-h-[180px] resize-y`} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Γράψε εδώ το άρθρο σου… (Enter για νέα παράγραφο)" />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button type="button" onClick={() => fileRef.current?.click()} className="btn-ghost !py-2.5 text-xs">
                  <ImagePlus size={15} /> {cover ? "Αλλαγή εικόνας" : "Προσθήκη εικόνας"}
                </button>
                <input ref={fileRef} type="file" accept="image/*" onChange={onFile} className="hidden" />
                {cover && <img src={cover} alt="" className="h-12 w-16 rounded-lg object-cover" />}
              </div>
              {error && <p className="text-sm font-medium text-coral-dark">{error}</p>}
              <button type="submit" className="btn-primary">Δημοσίευση <Send size={16} /></button>
            </form>
          </Reveal>
        </section>
      )}

      {/* LIST */}
      <section className="container-x py-14 sm:py-20">
        <SectionHeading eyebrow={`${articles.length} άρθρα`} title="Τελευταία άρθρα" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.id} delay={(i % 3) * 0.05}>
              <div className="card group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-teal to-ink">
                  {a.cover && <img src={a.cover} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />}
                  {!a.cover && <div className="flex h-full items-center justify-center"><PenLine className="text-cream/40" size={40} /></div>}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal">{a.author} · {formatDate(a.date)}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-ink">{a.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink-muted">{a.summary}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <button onClick={() => setReading(a)} className="text-sm font-semibold text-coral">Διάβασε →</button>
                    {!a.id.startsWith("seed-") && (
                      <button onClick={() => removeArticle(a.id)} className="text-ink/30 transition-colors hover:text-coral-dark" aria-label="Διαγραφή">
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-xs text-ink-muted">
            Τα άρθρα αποθηκεύονται τοπικά σε αυτόν τον browser (prototype). Για κοινή δημοσίευση σε όλους τους επισκέπτες,
            συνδέεται εύκολα βάση δεδομένων (π.χ. Supabase).
          </p>
        </Reveal>
      </section>
    </div>
  );
}
