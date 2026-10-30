import { about } from "@/content/profile";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section surface-dark" id="about" aria-label="About">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">About</p>
          <h2 className="section-title">{about.title}.</h2>
          <p className="section-lead">{about.lead}</p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <div className="tiles tiles-2">
            {about.principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 90}>
                <div className="tile">
                  <p className="tile-index">0{i + 1}</p>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
