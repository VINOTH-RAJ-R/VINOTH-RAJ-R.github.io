import { achievements } from "@/content/profile";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function Achievements() {
  return (
    <section className="section surface-dark" id="achievements" aria-label="Impact in numbers">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Impact</p>
          <h2 className="section-title">Measured, not claimed.</h2>
          <p className="section-lead">
            Every number below comes from a shipped system: tracked in production, documented, and
            verifiable in an interview.
          </p>
        </Reveal>

        <Reveal>
          <dl className="spec-grid spec-grid-3">
            {achievements.map((a, i) => (
              <div className="spec" key={a.label}>
                <dt className="spec-label">{a.label}</dt>
                <dd className="spec-value">
                  <Counter value={a.value} suffix={a.suffix} decimals={a.decimals} duration={1300 + i * 120} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
