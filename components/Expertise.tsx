import { expertise } from "@/content/profile";
import Reveal from "./Reveal";

export default function Expertise() {
  return (
    <section className="section surface-light" id="expertise" aria-label="Engineering expertise">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Expertise</p>
          <h2 className="section-title">What I build with what I know.</h2>
          <p className="section-lead">
            Skills grouped the way they're actually used: capabilities that ship systems, not a keyword
            cloud.
          </p>
        </Reveal>

        <div className="tiles tiles-3">
          {expertise.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <div className="tile">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <ul className="tag-row" aria-label={`${s.title} tools`}>
                  {s.tags.map((t) => (
                    <li className="tag" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
