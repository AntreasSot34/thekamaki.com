import { useState } from "react";
import { BadgeCheck } from "lucide-react";
import type { Founder } from "../data/site";
import Reveal from "./Reveal";

export default function FounderCard({ founder, delay = 0 }: { founder: Founder; delay?: number }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <Reveal delay={delay} className="card group overflow-hidden">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-teal via-teal-dark to-ink">
        {founder.image && imgOk ? (
          // Αντικατέστησε με την πραγματική φωτογραφία στο /public/founders/
          <img
            src={founder.image}
            alt={founder.name}
            onError={() => setImgOk(false)}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-cream">
            <span className="font-display text-6xl font-semibold tracking-tight">
              {founder.initials}
            </span>
            <span className="rounded-full bg-cream/15 px-3 py-1 text-xs font-medium tracking-wide">
              Φωτογραφία founder
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/70 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold text-ink">{founder.name}</h3>
          <BadgeCheck className="text-teal" size={18} />
        </div>
        <div className="mt-1 flex items-center gap-2 text-sm">
          <span className="font-semibold text-coral">{founder.role}</span>
          <span className="text-ink/30">•</span>
          <span className="text-ink-muted">{founder.years}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{founder.bio}</p>
      </div>
    </Reveal>
  );
}
