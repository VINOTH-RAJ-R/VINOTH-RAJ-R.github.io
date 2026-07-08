import { caseStudies } from "@/content/profile";
import Reveal from "./Reveal";
import { LeadCallingDiagram, CallCaptureDiagram, RagDiagram } from "./diagrams";

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
};

export default function Work() {
  return (
    <section className="section" id="work" aria-label="Featured work">
      <div className="container">
        <Reveal className="section-head">
          <p className="kicker">03 · Featured work</p>
          <h2 className="section-title">Case studies, not screenshots</h2>
          <p className="section-sub">
            Production systems I designed and built, presented as engineering case studies. Company
            projects respect confidentiality: architecture and outcomes are shown, internals stay
            private.
          </p>
        </Reveal>

        {caseStudies.map((cs) => (
          <Reveal key={cs.id}>
            <article className="case" data-index={cs.index} id={cs.id}>
              <p className="case-tag">{cs.tag}</p>
              <h3>{cs.title}</h3>
              <p className="case-oneliner">{cs.oneLiner}</p>

              <div className="case-cols">
                <div className="case-block">
                  <h4>The problem</h4>
                  <p className="case-problem">{cs.problem}</p>
                </div>
                <div className="case-block">
                  <h4>What I built</h4>
                  <ul className="case-build">
                    {cs.build.map((b, i) => (
                      <li key={i}>
                        <span className="step">{String(i + 1).padStart(2, "0")}</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="diagram-wrap">
                <div className="diagram-scroll">{DIAGRAMS[cs.id]?.el}</div>
                <p className="diagram-caption">{DIAGRAMS[cs.id]?.caption}</p>
              </div>

              <div className="decisions">
                {cs.decisions.map((d) => (
                  <div className="decision" key={d.title}>
                    <h5>{d.title}</h5>
                    <p>{d.body}</p>
                  </div>
                ))}
              </div>

              <div className="case-foot">
                <div className="outcomes">
                  {cs.outcomes.map((o) => (
                    <div className="outcome" key={o.label}>
                      <b>{o.value}</b>
                      <span>{o.label}</span>
                    </div>
                  ))}
                </div>
                {cs.confidential && <span className="confidential">internal system · case study</span>}
              </div>

              <div className="tag-row" style={{ marginTop: 22 }}>
                {cs.stack.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
