import { hero } from "@/content/profile";
import Counter from "./Counter";
import NetworkField from "./NetworkField";

/** Animated schematic of the real production pipeline — the hero's centerpiece.
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
    <div className="pipeline-card" aria-label="Diagram of the lead pipeline I run in production: AI screening, prioritization, human calling and AI QA">
      <div className="pipeline-title">
        <span>lead-pipeline</span>
        <span className="live">
          <i /> in production
        </span>
      </div>
      <svg className="arch" viewBox="0 0 320 350" role="img" aria-hidden="true">
        {/* spine */}
        <path d={path} className="flow flow-hl dash-anim" />
        {/* travelling pulses */}
        <circle r="3.2" className="pulse">
          <animateMotion dur="5.5s" repeatCount="indefinite" path={path} />
        </circle>
        <circle r="3.2" className="pulse" opacity="0.55">
          <animateMotion dur="5.5s" begin="2.7s" repeatCount="indefinite" path={path} />
        </circle>
        {nodes.map((n) => (
          <g key={n.label}>
            <rect x="52" y={n.y} width="216" height="40" rx="10" className={`node ${n.hl ? "node-hl" : ""}`} />
            <circle cx="70" cy={n.y + 20} r="3" fill={n.hl ? "#2dd4bf" : "#475569"} />
            <text x="84" y={n.y + 17} className="node-label">
              {n.label}
            </text>
            <text x="84" y={n.y + 31} className="node-sub">
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
      <div className="pipeline-log">
        <span>10:02:11 lead L-4821 screened → priority <span className="ok">high</span></span>
        <span>10:02:13 whatsapp alert → sales · zoho <span className="ok">synced</span></span>
        <span>10:41:37 agent call 03:12 → recording uploaded</span>
        <span>10:42:05 sarvam transcript → gemini QA <span className="ok">8.2/10</span></span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <NetworkField />
      <div className="container">
        <div className="hero-grid">
          <div>
            <p className="hero-eyebrow">
              <span className="dot" aria-hidden="true" />
              {hero.eyebrow}
            </p>
            <h1>
              <span className="hero-line">
                <span style={{ "--d": "80ms" } as React.CSSProperties}>{hero.headline[0]}</span>
              </span>
              <span className="hero-line">
                <span className="grad" style={{ "--d": "220ms" } as React.CSSProperties}>
                  {hero.headline[1]}
                </span>
              </span>
            </h1>
            <p className="hero-sub">{hero.sub}</p>
            <p className="hero-role" aria-label={hero.roleLine}>
              <span className="prompt">~/vinoth-raj</span>
              <span>$ {hero.roleLine}</span>
              <span className="caret" aria-hidden="true" />
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href={hero.ctaPrimary.href}>
                {hero.ctaPrimary.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a className="btn btn-ghost" href={hero.ctaSecondary.href} download>
                {hero.ctaSecondary.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14" />
                </svg>
              </a>
            </div>
          </div>
          <PipelineVisual />
        </div>

        <div className="hero-stats">
          {hero.stats.map((s, i) => (
            <div className="hero-stat" key={s.label}>
              <b>
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} duration={1200 + i * 200} />
              </b>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
