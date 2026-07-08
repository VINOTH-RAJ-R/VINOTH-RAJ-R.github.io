import { expertise } from "@/content/profile";
import Reveal from "./Reveal";

export default function Expertise() {
  return (
    <section className="section" id="expertise" aria-label="Engineering expertise">
      <div className="container">
        <Reveal className="section-head">
          <p className="kicker">04 · Expertise</p>
          <h2 className="section-title">What I build with what I know</h2>
          <p className="section-sub">
            Skills grouped the way they're actually used: capabilities that ship systems, not a
            keyword cloud.
          </p>
        </Reveal>

        <div className="skills-grid">
          {expertise.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <div className="skill-card">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="tag-row">
                  {s.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
