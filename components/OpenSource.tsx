import { openSource } from "@/content/profile";
import Reveal from "./Reveal";
import ShotGallery from "./ShotGallery";

export default function OpenSource() {
  return (
    <section className="section surface-dark" id="open-source" aria-label="Open source">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Open source</p>
          <h2 className="section-title">Tools I give away.</h2>
          <p className="section-lead">
            Recent open-source work, built from problems I hit shipping AI in production. Both are
            MIT-licensed and on GitHub.
          </p>
        </Reveal>

        <div className="tiles tiles-2 oss-grid">
          {openSource.map((repo, i) => (
            <Reveal key={repo.name} delay={i * 90}>
              <article className="tile oss">
                <p className="oss-meta">{repo.meta}</p>
                <h3>
                  <a href={repo.href} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </h3>
                <p className="oss-tagline">{repo.tagline}</p>
                {"shots" in repo && repo.shots ? (
                  <ShotGallery shots={repo.shots} label={`${repo.name}: screenshot`} note={false} />
                ) : null}
                <dl className="oss-psi">
                  <div>
                    <dt>The problem</dt>
                    <dd>{repo.problem}</dd>
                  </div>
                  <div>
                    <dt>What I built</dt>
                    <dd>{repo.body}</dd>
                  </div>
                  <div>
                    <dt>The impact</dt>
                    <dd>{repo.impact}</dd>
                  </div>
                </dl>
                <ul className="oss-points">
                  {repo.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <ul className="tag-row" aria-label="Topics">
                  {repo.tags.map((t) => (
                    <li className="tag" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
                <a className="link-more" href={repo.href} target="_blank" rel="noopener noreferrer">
                  View {repo.name} on GitHub<span aria-hidden="true"> ›</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
