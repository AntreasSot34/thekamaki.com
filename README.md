# TheKamaki

Premium, mobile-first πλατφόρμα για ουσιαστικές γνωριμίες και προσωπική ανάπτυξη.
**Find Real Connections Beyond Looks.**

Χτισμένο με **Vite + React + TypeScript + Tailwind CSS + React Router + Framer Motion**.

## Σελίδες
- **Home** — hero, δύο διαδρομές (App / Academy), app flow, values, founders, CTA
- **The App** — φιλοσοφία, Discover → Connect → Talk → Reveal → Meet, features, premium
- **Academy** — learning options, course catalogue (με Book Now), σημείωση ΑνΑΔ
- **Seminars** — flagship 40ωρο «Επικοινωνία μεταξύ των δύο φύλων», 8 ενότητες, φόρμα εγγραφής, FAQ
- **Articles** — blog όπου γράφετε άρθρα με φόρμα + submit· δημοσιεύονται στη σελίδα (δες παρακάτω)
- **How It Works**, **About Us** (Meet the Founders — με τις φωτογραφίες σας), **Contact**

## Τοπική εκτέλεση
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build για production
```bash
npm run build      # παράγει τον φάκελο dist/
npm run preview    # τοπικό preview του build
```

## Φωτογραφίες founders
Οι φωτογραφίες του **Αντρέα** και του **Στέλιου** είναι ήδη μέσα στο `public/founders/`
(`antreas.png`, `stelios.png` για τις κάρτες, `antreas-ride.png`, `stelios-ride.png` ως εναλλακτικές).
Για αλλαγή, απλώς αντικατέστησε τα αρχεία με ίδιο όνομα (ιδανικά αναλογία ~4:5).

## Articles (blog)
Η σελίδα **/articles** έχει φόρμα «Γράψε άρθρο» (τίτλος, συγγραφέας, εικόνα, κείμενο) και με
**Δημοσίευση** το άρθρο μπαίνει αμέσως στη σελίδα. Στο prototype τα άρθρα αποθηκεύονται τοπικά
στον browser (`localStorage`). Για να δημοσιεύονται για ΟΛΟΥΣ τους επισκέπτες (κοινή βάση),
σύνδεσε Supabase — η λογική βρίσκεται συγκεντρωμένη στο `src/lib/articles.ts` (αντικατέστησε τα
`load` / `persist` με κλήσεις στη βάση).

## Standalone preview (ένα αρχείο για γρήγορη επίδειξη)
```bash
VITE_HASH=1 npx vite build --config vite.preview.config.ts
# παράγει dist-preview/index.html — ανοίγει ακόμη και με διπλό κλικ (HashRouter)
```

## Περιεχόμενο & δεδομένα
Όλα τα κείμενα/δεδομένα (nav, features, courses, founders, ενότητες σεμιναρίου) βρίσκονται στο
`src/data/site.tsx` — άλλαξέ τα από ένα σημείο.

## Φόρμες
Η φόρμα εγγραφής (`src/components/RegistrationForm.tsx`) κάνει validation και δείχνει μήνυμα
επιτυχίας. Τα δεδομένα προς το παρόν πάνε σε `console.log`. Για αποθήκευση, σύνδεσε Supabase
(πίνακας `registrations`) ή email/CRM στο σημείο με το `// TODO`.

## Deploy & σύνδεση με Namecheap
Το project είναι στατικό (SPA). Δύο εύκολοι δρόμοι:

### Α) Netlify ή Vercel (προτεινόμενο)
1. Ανέβασε τον κώδικα σε GitHub και σύνδεσέ τον στο Netlify/Vercel (build command: `npm run build`, publish dir: `dist`).
2. Στο Netlify: Domain settings → Add custom domain → `thekamaki.com`.
3. Στο **Namecheap** → Domain List → Manage → **Advanced DNS**:
   - Πρόσθεσε τα DNS records που σου δίνει το Netlify/Vercel (συνήθως ένα `A record` για το apex `@`
     και ένα `CNAME` για το `www`), ή άλλαξε τους **Nameservers** σε αυτούς του Netlify.
4. Περίμενε να γίνει propagate το DNS και θα ενεργοποιηθεί αυτόματα το HTTPS.

Το αρχείο `public/_redirects` (Netlify) φροντίζει ώστε τα routes (π.χ. `/academy`) να δουλεύουν σε refresh.

### Β) Namecheap hosting (cPanel)
1. `npm run build` και ανέβασε το περιεχόμενο του `dist/` στο `public_html` μέσω File Manager/FTP.
2. Πρόσθεσε ένα `.htaccess` για SPA routing:
   ```
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## Design tokens
Χρώματα/γραμματοσειρές: `tailwind.config.js` (ink, coral, teal, gold, sand, cream · Fraunces + Inter).

---
© TheKamaki — First UI/UX prototype. Χωρίς σύνθετο backend (κατά τον σχεδιασμό).
