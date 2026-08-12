import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { NAV, BRAND } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-ink/5 bg-cream/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-20">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral text-white shadow-glow">
            <Heart className="h-4.5 w-4.5" fill="currentColor" size={18} />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            The<span className="text-coral">Kamaki</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `link-nav ${isActive ? "!text-coral" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Link to="/contact" className="link-nav">Login</Link>
          <Link to="/app" className="btn-primary">Get Started</Link>
        </div>

        <button
          className="rounded-full p-2 text-ink xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/5 bg-cream xl:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2.5 text-sm font-medium ${
                    isActive ? "bg-coral/10 text-coral" : "text-ink/80 hover:bg-sand"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-3 flex gap-3">
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-ghost flex-1">Login</Link>
              <Link to="/app" onClick={() => setOpen(false)} className="btn-primary flex-1">Get Started</Link>
            </div>
          </div>
        </div>
      )}
      <span className="sr-only">{BRAND.domain}</span>
    </header>
  );
}
