import {
  Sparkles, MessageCircle, HeartHandshake, ShieldCheck, Users, Compass,
  Eye, Coffee, BadgeCheck, GraduationCap, Video, MapPin, CalendarDays,
  Brain, Smile, Handshake, Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const BRAND = {
  name: "TheKamaki",
  domain: "thekamaki.com",
  tagline: "Find Real Connections Beyond Looks.",
  subline:
    "Γνώρισε ανθρώπους. Βελτίωσε την επικοινωνία σου. Δημιούργησε ουσιαστικές σχέσεις.",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "The App", to: "/app" },
  { label: "Academy", to: "/academy" },
  { label: "Seminars", to: "/seminars" },
  { label: "Articles", to: "/articles" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const BRAND_VALUES: { label: string; icon: LucideIcon }[] = [
  { label: "Real Connections", icon: HeartHandshake },
  { label: "Communication", icon: MessageCircle },
  { label: "Confidence", icon: Sparkles },
  { label: "Compatibility", icon: Compass },
  { label: "Relationships", icon: Users },
  { label: "Personal Development", icon: GraduationCap },
];

// App philosophy chain
export const PHILOSOPHY = [
  "Προσωπικότητα",
  "Αξίες",
  "Επικοινωνία",
  "Συμβατότητα",
  "Εμφάνιση",
  "Πραγματική γνωριμία",
];

export const APP_FLOW: { step: string; title: string; text: string; icon: LucideIcon }[] = [
  { step: "01", title: "Discover", text: "Ανακάλυψε ανθρώπους μέσα από αξίες, ενδιαφέροντα και προσωπικότητα — όχι μόνο φωτογραφίες.", icon: Compass },
  { step: "02", title: "Connect", text: "Το compatibility matching σου προτείνει ανθρώπους που πραγματικά ταιριάζουν μαζί σου.", icon: HeartHandshake },
  { step: "03", title: "Talk", text: "Ξεκίνα ουσιαστική συνομιλία πριν ακόμη δεις την εμφάνιση.", icon: MessageCircle },
  { step: "04", title: "Reveal", text: "Οι φωτογραφίες αποκαλύπτονται σταδιακά, καθώς χτίζεται η σύνδεση.", icon: Eye },
  { step: "05", title: "Meet", text: "Weekend Meetups και προτάσεις για πραγματικά, ασφαλή ραντεβού.", icon: Coffee },
];

export const APP_FEATURES: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Ερωτηματολόγιο προσωπικότητας", text: "Χτίσε ένα προφίλ που δείχνει ποιος πραγματικά είσαι.", icon: Brain },
  { title: "Αξίες & ενδιαφέροντα", text: "Ταίριαξε με βάση αυτά που μετράνε για σένα.", icon: Star },
  { title: "Compatibility matching", text: "Έξυπνες προτάσεις που ξεπερνούν την επιφάνεια.", icon: Compass },
  { title: "Relationship goals", text: "Ξεκαθάρισε τι ψάχνεις — από φιλία μέχρι σχέση.", icon: HeartHandshake },
  { title: "Σταδιακό photo reveal", text: "Αρχικά blurred φωτογραφίες που αποκαλύπτονται με τον χρόνο.", icon: Eye },
  { title: "Chat", text: "Ασφαλής, ουσιαστική επικοινωνία μέσα στην εφαρμογή.", icon: MessageCircle },
  { title: "Weekend Meetups", text: "Οργανωμένες ευκαιρίες να γνωριστείτε από κοντά.", icon: Coffee },
  { title: "Premium Membership", text: "Περισσότερα matches, insights και προτεραιότητα.", icon: BadgeCheck },
];

export type Founder = {
  name: string;
  role: string;
  years: string;
  bio: string;
  image?: string; // βάλε πραγματική φωτογραφία στο /public/founders/...
  initials: string;
};

export const FOUNDERS: Founder[] = [
  {
    name: "Αντρέας Σωτηρίου",
    role: "Co-Founder",
    years: "7 χρόνια εμπειρίας στον χώρο των σχέσεων",
    bio: "Ένας από τους ανθρώπους πίσω από τη δημιουργία του TheKamaki και την εκπαιδευτική φιλοσοφία της πλατφόρμας.",
    initials: "ΑΣ",
    image: "/founders/antreas.png",
  },
  {
    name: "Στέλιος Χρυσοστόμου",
    role: "Co-Founder",
    years: "6 χρόνια εμπειρίας στον χώρο των σχέσεων",
    bio: "Co-founder που συμμετέχει στην ανάπτυξη της πλατφόρμας, των υπηρεσιών και των εκπαιδευτικών προγραμμάτων.",
    initials: "ΣΧ",
    image: "/founders/stelios.png",
  },
];

export const LEARNING_OPTIONS: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Online Courses", text: "Παρακολούθηση μαθημάτων on-demand, με τον δικό σου ρυθμό.", icon: Video },
  { title: "Live Online Training", text: "Ζωντανά διαδικτυακά μαθήματα και workshops.", icon: Users },
  { title: "In-Person Seminars", text: "Διά ζώσης βιωματικά εκπαιδευτικά σεμινάρια.", icon: MapPin },
  { title: "Training Programs", text: "Οργανωμένα προγράμματα κατάρτισης, με δυνατότητα επιλέξιμων προγραμμάτων ΑνΑΔ όπου εφαρμόζεται.", icon: GraduationCap },
];

export const ACADEMY_TOPICS = [
  "Επικοινωνία", "Κοινωνικές δεξιότητες", "Αυτοπεποίθηση",
  "Προσέγγιση & γνωριμία", "Dating skills", "Ουσιαστικές σχέσεις",
  "Personal development", "Σύγχρονες προκλήσεις στις σχέσεις",
];

export type Course = {
  title: string;
  trainer: string;
  description: string;
  duration: string;
  mode: "Online" | "Physical" | "Hybrid";
  date: string;
  price: string;
  seats: number;
  featured?: boolean;
};

export const COURSES: Course[] = [
  {
    title: "Επικοινωνία μεταξύ των δύο φύλων",
    trainer: "Stelios Chrysostomou & ASDETECH",
    description: "Ολοκληρωμένο 40ωρο βιωματικό πρόγραμμα: επικοινωνία, αυτοπεποίθηση, γλώσσα σώματος, γνωριμίες και υγιείς σχέσεις.",
    duration: "40 ώρες",
    mode: "Physical",
    date: "Επόμενος κύκλος: υπό ανακοίνωση",
    price: "€490",
    seats: 12,
    featured: true,
  },
  {
    title: "Confidence & Social Skills Bootcamp",
    trainer: "Antreas Sotiriou",
    description: "Εντατικό workshop για αυτοπεποίθηση, κοινωνική άνεση και πρώτη εντύπωση.",
    duration: "8 ώρες",
    mode: "Hybrid",
    date: "Κάθε μήνα",
    price: "€120",
    seats: 20,
  },
  {
    title: "Modern Dating Essentials",
    trainer: "TheKamaki Academy",
    description: "On-demand course για τις σύγχρονες προκλήσεις των γνωριμιών, από τα apps μέχρι το πρώτο ραντεβού.",
    duration: "3.5 ώρες",
    mode: "Online",
    date: "Άμεσα διαθέσιμο",
    price: "€39",
    seats: 999,
  },
  {
    title: "Meaningful Relationships Masterclass",
    trainer: "Stelios Chrysostomou",
    description: "Live online masterclass για το χτίσιμο και τη διατήρηση ουσιαστικών σχέσεων.",
    duration: "6 ώρες",
    mode: "Online",
    date: "Τριμηνιαία",
    price: "€89",
    seats: 40,
  },
];

export const SEMINAR_MODULES: { n: string; title: string; hours: number }[] = [
  { n: "01", title: "Τα θεμέλια της επικοινωνίας", hours: 4 },
  { n: "02", title: "Πώς σκέφτονται & επικοινωνούν τα δύο φύλα", hours: 5 },
  { n: "03", title: "Γλώσσα σώματος & σήματα ενδιαφέροντος", hours: 5 },
  { n: "04", title: "Αυτοπεποίθηση & προσωπική γοητεία", hours: 5 },
  { n: "05", title: "Η πρώτη κίνηση: πώς ξεκινάς μια κουβέντα", hours: 5 },
  { n: "06", title: "Ακρόαση, χημεία & αυθεντική σύνδεση", hours: 5 },
  { n: "07", title: "Όρια, σεβασμός & διαχείριση της απόρριψης", hours: 5 },
  { n: "08", title: "Ψηφιακό φλερτ & εφαρμογή στην πράξη", hours: 6 },
];

export const SEMINAR_BENEFITS: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Αυτοπεποίθηση", text: "Θα νιώθεις άνετα να κάνεις την πρώτη κίνηση.", icon: Sparkles },
  { title: "Πρώτη εντύπωση", text: "Θα ξεχωρίζεις θετικά από το πρώτο λεπτό.", icon: Smile },
  { title: "Γλώσσα σώματος", text: "Θα διαβάζεις τα σήματα ενδιαφέροντος.", icon: Eye },
  { title: "Ουσιαστική σύνδεση", text: "Θα χτίζεις χημεία μέσα από αυθεντική επικοινωνία.", icon: HeartHandshake },
  { title: "Σεβασμός & όρια", text: "Θα διαχειρίζεσαι την απόρριψη με ωριμότητα.", icon: ShieldCheck },
  { title: "Ψηφιακό φλερτ", text: "Θα ξέρεις τι να γράφεις σε apps και μηνύματα.", icon: MessageCircle },
];

export const SEMINAR_FACTS: { label: string; icon: LucideIcon }[] = [
  { label: "40 ώρες", icon: CalendarDays },
  { label: "Διά ζώσης", icon: MapPin },
  { label: "Μικρά γκρουπ 8–16", icon: Users },
  { label: "Βεβαίωση παρακολούθησης", icon: BadgeCheck },
];

export const SEMINAR_FAQ = [
  { q: "Χρειάζομαι εμπειρία;", a: "Όχι. Το σεμινάριο είναι σχεδιασμένο για όλους, ανεξάρτητα από αφετηρία." },
  { q: "Είναι διά ζώσης;", a: "Ναι, σε μικρά γκρουπ ώστε να υπάρχει μέγιστη εξάσκηση και προσωπική καθοδήγηση." },
  { q: "Θα κάνουμε πρακτική;", a: "Ναι. Μεγάλο μέρος είναι παιχνίδι ρόλων, ασκήσεις και βιωματικές δραστηριότητες." },
  { q: "Θα πάρω βεβαίωση;", a: "Ναι, λαμβάνεις βεβαίωση παρακολούθησης με την ολοκλήρωση." },
];

export const iconMap = { Handshake, BadgeCheck };
