import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

type Fields = {
  name: string;
  email: string;
  phone: string;
  age: string;
  message: string;
};

const EMPTY: Fields = { name: "", email: "", phone: "", age: "", message: "" };

export default function RegistrationForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof Fields>(key: K, val: string) {
    setValues((v) => ({ ...v, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Fields> = {};
    if (!values.name.trim()) next.name = "Συμπλήρωσε το ονοματεπώνυμό σου.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Δώσε ένα έγκυρο email.";
    if (values.phone.trim().length < 8) next.phone = "Δώσε ένα έγκυρο τηλέφωνο.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // TODO: σύνδεση με Supabase (πίνακας "registrations") ή email/CRM.
    // Προς το παρόν κρατάμε τα δεδομένα τοπικά.
    console.log("registration", values);
    setSent(true);
    setValues(EMPTY);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-4xl bg-teal/5 p-10 text-center">
        <CheckCircle2 className="text-teal" size={48} />
        <h3 className="font-display text-2xl font-semibold text-ink">Ευχαριστούμε!</h3>
        <p className="max-w-sm text-ink-muted">Λάβαμε τα στοιχεία σου. Θα επικοινωνήσουμε σύντομα μαζί σου.</p>
        <button className="btn-ghost" onClick={() => setSent(false)}>Νέα εγγραφή</button>
      </div>
    );
  }

  const input =
    "w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-coral";
  const err = "mt-1 text-xs font-medium text-coral-dark";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Ονοματεπώνυμο *</label>
          <input className={input} value={values.name} onChange={(e) => update("name", e.target.value)} placeholder="Το όνομά σου" />
          {errors.name && <p className={err}>{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Email *</label>
          <input className={input} value={values.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" />
          {errors.email && <p className={err}>{errors.email}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Τηλέφωνο *</label>
          <input className={input} value={values.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+357 ..." />
          {errors.phone && <p className={err}>{errors.phone}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Ηλικιακή ομάδα</label>
          <select className={input} value={values.age} onChange={(e) => update("age", e.target.value)}>
            <option value="">Επίλεξε…</option>
            <option>18-25</option>
            <option>26-35</option>
            <option>36-45</option>
            <option>46+</option>
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Μήνυμα (προαιρετικό)</label>
        <textarea className={`${input} min-h-[96px] resize-y`} value={values.message} onChange={(e) => update("message", e.target.value)} placeholder="Πες μας τι σε ενδιαφέρει…" />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Δήλωσε συμμετοχή <Send size={16} />
      </button>
    </form>
  );
}
