import { caseStudies } from "@/content/profile";
import Reveal from "./Reveal";
import { LeadCallingDiagram, CallCaptureDiagram, RagDiagram, MetricsDashboardDiagram } from "./diagrams";

const DIAGRAMS: Record<string, { el: React.ReactNode; caption: string }> = {
  "ai-lead-calling": {
    el: <LeadCallingDiagram />,
    caption: "System flow: rules engine → Sarvam AI call → outcome-based prioritization → WhatsApp (WPPConnect) + Zoho → prioritized queue for human calling",
  },
  "call-capture": {
    el: <CallCaptureDiagram />,
    caption: "System flow: background service on stock Android → recording discovery → offline-first queue → Frappe API → Sarvam transcription → 4-prompt Gemini QA",
  },
  "knowledge-assistant": {
    el: <RagDiagram />,
    caption: "System flow: embedded widget → server-side proxy (key isolation + rate limiting) → Dify RAG → SSE streaming back to the user",
  },
  "metrics-dashboard": {
    el: <MetricsDashboardDiagram />,
    caption: "System flow: GA4, Vimeo, ad platforms, Clarity and CRM → daily GitHub Actions sync + verification → static React dashboard on Vercel → Gemini AI Insights",
  },
};

export default function Work() {
  return (
    <div id="work">
      {caseStudies.map((cs, i) => {
        const surface = i % 2 === 0 ? "surface-light" : "surface-dark";
        return (
          <section
            key={cs.id}
            className={`section case ${surface} ${i === 0 ? "case-first" : ""}`}
            id={cs.id}
            aria-labelledby={`${cs.id}-title`}
          >
            <div className="container">
              {i === 0 && (
                <Reveal className="section-head work-head">
                  <p className="eyebrow">Featured work</p>
                  <h2 className="section-title">Business problem in. Shipped system out.</h2>
                  <p className="section-lead">
                    Each case study reads the way the work happened: the problem the business had, what I
                    built, and the impact it produced. Company projects respect confidentiality:
                    architecture and outcomes are shown, internals stay private.
                  </p>
                </Reveal>
              )}

              <Reveal className="case-head">
                <p className="eyebrow">
                  <span className="case-index">{cs.index}</span> {cs.tag}
                </p>
                <h3 className="case-title" id={`${cs.id}-title`}>
                  {cs.title}
                </h3>
                <p className="case-oneliner">{cs.oneLiner}</p>
              </Reveal>

              <div className="psi">
                <Reveal className="psi-col">
                  <h4 className="psi-label">
                    <span aria-hidden="true">1</span> The problem
                  </h4>
                  <p className="psi-problem">{cs.problem}</p>
                </Reveal>
                <Reveal className="psi-col" delay={90}>
                  <h4 className="psi-label">
                    <span aria-hidden="true">2</span> What I built
                  </h4>
                  <ol className="build-list">
                    {cs.solution.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ol>
                </Reveal>
                <Reveal className="psi-col" delay={180}>
                  <h4 className="psi-label">
                    <span aria-hidden="true">3</span> The impact
                  </h4>
                  <p className="psi-impact">{cs.impactSummary}</p>
                </Reveal>
              </div>

              <Reveal>
                <dl className="spec-grid case-specs">
                  {cs.impact.map((o) => (
                    <div className="spec" key={o.label}>
                      <dt className="spec-label">{o.label}</dt>
                      <dd className="spec-value">{o.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal>
                <figure className="diagram">
                  <div className="diagram-scroll">{DIAGRAMS[cs.id]?.el}</div>
                  <figcaption className="diagram-caption">{DIAGRAMS[cs.id]?.caption}</figcaption>
                </figure>
              </Reveal>

              <Reveal>
                <h4 className="subhead">How it holds up in production</h4>
                <div className="tiles tiles-3">
                  {cs.decisions.map((d) => (
                    <div className="tile" key={d.title}>
                      <h5>{d.title}</h5>
                      <p>{d.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className="case-foot">
                <ul className="tag-row" aria-label="Tech stack">
                  {cs.stack.map((t) => (
                    <li className="tag" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
                {cs.confidential && <span className="confidential">Internal system · case study</span>}
              </Reveal>
            </div>
          </section>
        );
      })}
    </div>
  );
}
