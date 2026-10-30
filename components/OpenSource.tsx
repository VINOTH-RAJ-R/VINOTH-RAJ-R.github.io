import { openSource } from "@/content/profile";
import Reveal from "./Reveal";

export default function OpenSource() {
  return (
    <section className="section" id="open-source" aria-label="Open source">
      <div className="container">
        <Reveal className="section-head">
          <p className="kicker">04 · Open source</p>
          <h2 className="section-title">Tools I give away</h2>
          <p className="section-sub">
            Recent open-source work, built from problems I hit shipping AI in production. Both are
            MIT-licensed and on GitHub.
          </p>
        </Reveal>

        <div className="oss-grid">
          {openSource.map((repo) => (
            <Reveal key={repo.name}>
              <article className="case oss-card">
                <p className="case-tag">{repo.meta}</p>
                <h3>
                  <a href={repo.href} target="_blank" rel="noreferrer">
                    {repo.name} <span aria-hidden="true">↗</span>
                  </a>
                </h3>
                <p className="case-oneliner">{repo.tagline}</p>
                <p className="case-problem">{repo.body}</p>
                <ul className="oss-points">
                  {repo.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="tag-row" style={{ marginTop: 18 }}>
                  {repo.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
