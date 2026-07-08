"use client";

import { useEffect, useRef } from "react";
import { experience } from "@/content/profile";
import Reveal from "./Reveal";

/** Adds the animated left border when each entry scrolls into view. */
function XpItem({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="xp-item">
      {children}
    </div>
  );
}

export default function Experience() {
  return (
    <section className="section" id="experience" aria-label="Professional experience">
      <div className="container">
        <Reveal className="section-head">
          <p className="kicker">02 · Experience</p>
          <h2 className="section-title">Where the systems shipped</h2>
        </Reveal>

        <div className="xp-list">
          {experience.map((xp, i) => (
            <Reveal key={xp.company} delay={i * 100}>
              <XpItem>
                <div className="xp-top">
                  <h3>
                    {xp.role} <span>· {xp.company}</span>
                  </h3>
                  <span className="xp-period">{xp.period}</span>
                </div>
                <p className="xp-loc">{xp.location}</p>
                <p className="xp-summary">{xp.summary}</p>
                <ul className="xp-highlights">
                  {xp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {xp.tech.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </XpItem>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
