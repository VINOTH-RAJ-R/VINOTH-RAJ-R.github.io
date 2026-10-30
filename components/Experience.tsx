import { experience } from "@/content/profile";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="section surface-alt" id="experience" aria-label="Professional experience">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Where the systems shipped.</h2>
          <p className="section-lead">
            Every highlight below follows the same shape: the problem the business had, the solution I
            built, and the impact it made.
          </p>
        </Reveal>

        <div className="xp-list">
          {experience.map((xp) => (
            <Reveal key={xp.company}>
              <article className="xp" aria-labelledby={`xp-${xp.company.replace(/\s+/g, "-")}`}>
                <header className="xp-head">
                  <div>
                    <h3 id={`xp-${xp.company.replace(/\s+/g, "-")}`}>{xp.company}</h3>
                    <p className="xp-role">{xp.role}</p>
                  </div>
                  <p className="xp-meta">
                    <span>{xp.period}</span>
                    <span>{xp.location}</span>
                  </p>
                </header>
                <p className="xp-summary">{xp.summary}</p>

                <div className="xp-legend" aria-hidden="true">
                  <span>Problem</span>
                  <span>Solution</span>
                  <span>Impact</span>
                </div>
                <ol className="xp-rows">
                  {xp.highlights.map((h) => (
                    <li className="xp-row" key={h.area}>
                      <h4 className="xp-area">{h.area}</h4>
                      <div className="xp-cells">
                        <p className="xp-cell">
                          <span className="xp-cell-label">Problem</span>
                          {h.problem}
                        </p>
                        <p className="xp-cell">
                          <span className="xp-cell-label">Solution</span>
                          {h.solution}
                        </p>
                        <p className="xp-cell xp-cell-impact">
                          <span className="xp-cell-label">Impact</span>
                          {h.impact}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <ul className="tag-row" aria-label="Tech stack">
                  {xp.tech.map((t) => (
                    <li className="tag" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
