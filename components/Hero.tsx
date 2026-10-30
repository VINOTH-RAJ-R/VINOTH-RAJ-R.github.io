import { hero } from "@/content/profile";
import Counter from "./Counter";

/** Animated schematic of the real production pipeline, presented like a product shot.
 *  AI screens & prioritizes → humans call the hot leads → AI QA reviews every call. */
function PipelineVisual() {
  const nodes = [
    { y: 24, label: "Lead created", sub: "Meta ads → Frappe CRM", hl: false },
    { y: 80, label: "Rules engine", sub: "windows · retries · FIFO", hl: false },
    { y: 136, label: "Sarvam AI screening", sub: "voice call · outcome", hl: true },
    { y: 192, label: "Prioritize → WhatsApp", sub: "WPPConnect · Zoho sync", hl: false },
    { y: 248, label: "Human call (app)", sub: "SIM call · auto-recorded", hl: false },
    { y: 304, label: "Gemini QA → CRM", sub: "transcript · 4 prompts", hl: true },
  ];
  const path = "M 160 44 L 160 336";

  return (
    <figure
      className="pipeline"
      aria-label="Diagram of the lead pipeline I run in production: AI screening, prioritization, human calling and AI QA"
    >
      <figcaption className="pipeline-title">
        <span>The lead pipeline</span>
        <span className="live">
          <i aria-hidden="true" /> In production
        </span>
      </figcaption>
      <svg className="arch" viewBox="0 0 320 350" role="img" aria-hidden="true">
        <path d={path} className="flow flow-hl dash-anim" />
        <circle r="3.2" className="pulse">
          <animateMotion dur="5.5s" repeatCount="indefinite" path={path} />
        </circle>
        <circle r="3.2" className="pulse" opacity="0.55">
          <animateMotion dur="5.5s" begin="2.7s" repeatCount="indefinite" path={path} />
        </circle>
        {nodes.map((n) => (
          <g key={n.label}>
            <rect x="52" y={n.y} width="216" height="40" rx="10" className={`node ${n.hl ? "node-hl" : ""}`} />
            <circle cx="70" cy={n.y + 20} r="3" className={n.hl ? "dot dot-hl" : "dot"} />
            <text x="84" y={n.y + 17} className="node-label">
              {n.label}
            </text>
            <text x="84" y={n.y + 31} className="node-sub">
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}

export default function Hero() {
  return (
    <section className="hero surface-light" aria-label="Introduction">
      <div className="container">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">{hero.eyebrow}</p>
          <h1>
            <span className="hero-line">
              <span style={{ "--d": "60ms" } as React.CSSProperties}>{hero.headline[0]}</span>
            </span>
            <span className="hero-line">
              <span className="grad" style={{ "--d": "180ms" } as React.CSSProperties}>
                {hero.headline[1]}
              </span>
            </span>
          </h1>
          <p className="hero-sub">{hero.sub}</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href={hero.ctaPrimary.href}>
              {hero.ctaPrimary.label}
            </a>
            <a className="link-more" href={hero.ctaSecondary.href} download>
              {hero.ctaSecondary.label}
              <span aria-hidden="true"> ›</span>
            </a>
          </div>
        </div>

        <div className="hero-stage surface-dark">
          <PipelineVisual />
          <dl className="spec-grid hero-specs">
            {hero.stats.map((s, i) => (
              <div className="spec" key={s.label}>
                <dt className="spec-label">{s.label}</dt>
                <dd className="spec-value">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} duration={1200 + i * 200} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
