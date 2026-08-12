import { Link } from "react-router-dom";
import { Heart, AtSign, Globe, Mail } from "lucide-react";
import { NAV, BRAND } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral text-white">
                <Heart className="h-4 w-4" fill="currentColor" size={16} />
              </span>
              <span className="font-display text-xl font-semibold">
                The<span className="text-coral">Kamaki</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              {BRAND.tagline} Μια πλατφόρμα για ουσιαστικές γνωριμίες και προσωπική ανάπτυξη.
            </p>
            <div className="mt-5 flex gap-3">
              {[AtSign, Globe, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition-colors hover:border-coral hover:text-coral"
                  aria-label="social"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cream/50">Πλοήγηση</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-cream/75 transition-colors hover:text-coral">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cream/50">Επικοινωνία</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
              <li>{BRAND.domain}</li>
              <li>hello@thekamaki.com</li>
              <li>Λευκωσία, Κύπρος</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <span>© {new Date().getFullYear()} {BRAND.name}. Με επιφύλαξη παντός δικαιώματος.</span>
          <span>Find Real Connections Beyond Looks.</span>
        </div>
      </div>
    </footer>
  );
}
