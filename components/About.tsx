import { about } from "@/content/profile";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section" id="about" aria-label="About">
      <div className="container">
        <Reveal className="section-head">
          <p className="kicker">01 · About</p>
          <h2 className="section-title">{about.title}</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <p className="about-lead">{about.lead}</p>
            <div className="about-copy">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <div className="principles">
            {about.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="principle">
                  <h3>
                    <span className="n">0{i + 1}</span>
                    {p.title}
                  </h3>
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
