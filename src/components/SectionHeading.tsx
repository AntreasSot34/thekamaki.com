import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, subtitle, center, light }: Props) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`mt-4 text-3xl font-semibold leading-tight sm:text-4xl ${light ? "text-cream" : "text-ink"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-cream/75" : "text-ink-muted"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
