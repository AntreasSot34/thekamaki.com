import { useEffect, useState } from "react";

export type Article = {
  id: string;
  title: string;
  author: string;
  summary: string;
  content: string;
  cover?: string; // data URL ή εξωτερικό link
  date: string; // ISO
};

const KEY = "thekamaki_articles_v1";

const SEED: Article[] = [
  {
    id: "seed-1",
    title: "Γιατί η επικοινωνία νικά την εμφάνιση",
    author: "Αντρέας Σωτηρίου",
    summary: "Οι σχέσεις που κρατούν χτίζονται στην ουσία, όχι στην πρώτη εικόνα.",
    content:
      "Στο TheKamaki πιστεύουμε ότι η πραγματική έλξη ξεκινά από την επικοινωνία. Η εμφάνιση τραβά την προσοχή, αλλά η προσωπικότητα, οι αξίες και ο τρόπος που ακούμε τον άλλον είναι αυτά που δημιουργούν ουσιαστική σύνδεση.\n\nΌταν μαθαίνουμε να επικοινωνούμε με αυθεντικότητα και σεβασμό, σταματάμε να «παίζουμε ρόλους» και αρχίζουμε να χτίζουμε σχέσεις που αντέχουν στον χρόνο.",
    date: "2026-07-20T09:00:00.000Z",
  },
  {
    id: "seed-2",
    title: "3 μικρές συνήθειες που ανεβάζουν την αυτοπεποίθησή σου",
    author: "Στέλιος Χρυσοστόμου",
    summary: "Η αυτοπεποίθηση δεν είναι ταλέντο — είναι συνήθεια που καλλιεργείται.",
    content:
      "1. Ξεκίνα μικρές συνομιλίες κάθε μέρα, χωρίς στόχο — απλώς για εξάσκηση.\n2. Πρόσεξε τη γλώσσα του σώματός σου: ίσια πλάτη, βλεμματική επαφή, χαλαρή αναπνοή.\n3. Μίλα στον εαυτό σου όπως θα μιλούσες σε έναν καλό φίλο.\n\nΜε τον καιρό, αυτές οι μικρές κινήσεις γίνονται φυσικές και η άνεσή σου με τους ανθρώπους μεγαλώνει.",
    date: "2026-07-28T09:00:00.000Z",
  },
];

function load(): Article[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return SEED;
    const parsed = JSON.parse(raw) as Article[];
    return Array.isArray(parsed) ? parsed : SEED;
  } catch {
    return SEED;
  }
}

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles(load());
  }, []);

  function persist(next: Article[]) {
    setArticles(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* localStorage γεμάτο ή μη διαθέσιμο — αγνόησε στο prototype */
    }
  }

  function addArticle(a: Omit<Article, "id" | "date">) {
    const item: Article = {
      ...a,
      id: `a-${Date.now()}-${Math.round(Math.random() * 1000)}`,
      date: new Date().toISOString(),
    };
    persist([item, ...articles]);
    return item;
  }

  function removeArticle(id: string) {
    persist(articles.filter((x) => x.id !== id));
  }

  return { articles, addArticle, removeArticle };
}

export function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("el-GR", { day: "2-digit", month: "long", year: "numeric" });
  } catch {
    return iso;
  }
}
