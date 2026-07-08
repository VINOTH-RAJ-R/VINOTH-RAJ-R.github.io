import { achievements } from "@/content/profile";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function Achievements() {
  return (
    <section className="section" id="achievements" aria-label="Achievements">
      <div className="container">
        <Reveal className="section-head">
          <p className="kicker">05 · Impact</p>
          <h2 className="section-title">Measured, not claimed</h2>
          <p className="section-sub">
            Every number below comes from a shipped system: tracked in production, documented, and
            verifiable in an interview.
          </p>
        </Reveal>

        <Reveal>
          <div className="metrics-grid">
            {achievements.map((a, i) => (
              <div className="metric" key={a.label}>
                <b>
                  <Counter value={a.value} suffix={a.suffix} decimals={a.decimals} duration={1300 + i * 150} />
                </b>
                <span className="stat-label">{a.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
