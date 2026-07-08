/**
 * Hand-drawn SVG architecture diagrams for each case study.
 * Animated with SMIL (animateMotion) + CSS dash animation — zero JS cost.
 * Text widths are budgeted: mono ≈ 7.5px/char at 12.5px labels, ≈ 5.7px/char at 9.5px subs.
 */

type NodeProps = {
  x: number;
  y: number;
  w: number;
  h?: number;
  label: string;
  sub?: string;
  hl?: boolean;
};

function Node({ x, y, w, h = 46, label, sub, hl }: NodeProps) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="10" className={`node ${hl ? "node-hl" : ""}`} />
      <circle cx={x + 14} cy={y + h / 2} r="3" fill={hl ? "#2dd4bf" : "#475569"} />
      <text x={x + 26} y={y + (sub ? 20 : h / 2 + 4)} className="node-label">
        {label}
      </text>
      {sub && (
        <text x={x + 26} y={y + 34} className="node-sub">
          {sub}
        </text>
      )}
    </g>
  );
}

function Pulse({ path, dur = 5, begin = "0s", opacity = 1 }: { path: string; dur?: number; begin?: string; opacity?: number }) {
  return (
    <circle r="3" className="pulse" opacity={opacity}>
      <animateMotion dur={`${dur}s`} begin={begin} repeatCount="indefinite" path={path} />
    </circle>
  );
}

/* ---------- 01 · AI lead-calling pipeline ----------
   Row 1: lead → rules → AI call → webhook (left→right)
   Row 2: call outcome → prioritization (right→left)
   Row 3: WhatsApp → Zoho → human calling queue (left→right) */
export function LeadCallingDiagram() {
  const main = "M 18 51 H 702";
  const serpent = "M 634 74 V 140 M 545 163 H 500 M 400 186 V 220 H 103 V 250";

  return (
    <svg className="arch" viewBox="0 0 720 320" role="img" aria-label="Architecture of the AI lead-calling pipeline: leads flow from the CRM through a rules engine to Sarvam AI voice calls; call outcomes drive lead prioritization, which is pushed to WhatsApp groups via WPPConnect, synced to Zoho, and feeds the human calling queue.">
      {/* flows */}
      <path d={main} className="flow dash-anim" />
      <path d="M 634 74 V 140" className="flow flow-hl dash-anim" />
      <path d="M 545 163 H 500" className="flow flow-hl dash-anim" />
      <path d="M 400 186 V 220 H 103 V 250" className="flow flow-hl dash-anim" />
      <path d="M 193 273 H 240" className="flow dash-anim" />
      <path d="M 370 273 H 415" className="flow dash-anim" />
      <Pulse path={main} dur={6} />
      <Pulse path={serpent} dur={5.5} begin="1.6s" opacity={0.75} />

      {/* row 1 — the AI call flow */}
      <Node x={13} y={28} w={145} label="Ad lead" sub="Meta → CRM" />
      <Node x={196} y={28} w={145} label="Rules engine" sub="windows · retries" />
      <Node x={379} y={28} w={145} label="Sarvam AI call" sub="voice screening" hl />
      <Node x={562} y={28} w={145} label="Webhook ingest" sub="log · analytics" />

      {/* row 2 — outcome → prioritization (flows right → left) */}
      <Node x={545} y={140} w={160} label="Call outcome" sub="status · analytics" />
      <Node x={300} y={140} w={200} label="Prioritization" sub="high · medium · low" hl />

      {/* row 3 — outputs */}
      <Node x={13} y={250} w={180} label="WhatsApp groups" sub="WPPConnect alerts" hl />
      <Node x={240} y={250} w={130} label="Zoho sync" />
      <Node x={415} y={250} w={185} label="Human call queue" sub="→ calling app (02)" />
    </svg>
  );
}

/* ---------- 02 · Android call-capture platform + AI QA ---------- */
export function CallCaptureDiagram() {
  const p1 = "M 115 86 V 116";
  const p2 = "M 115 162 V 196";
  const p3 = "M 205 219 H 335 V 166";
  const p4 = "M 420 139 H 478";
  const p5 = "M 584 162 V 196";
  const p6 = "M 584 242 V 276";

  return (
    <svg className="arch" viewBox="0 0 720 340" role="img" aria-label="Architecture of the Android call-capture platform: on a non-rooted device, a Kotlin background service detects call end, a recording finder locates the audio, and an offline queue uploads everything to the Frappe CRM API; each recording is then transcribed by Sarvam AI and QA-reviewed by a four-prompt Gemini pipeline.">
      {/* zones */}
      <rect x={10} y={14} width={430} height={264} className="zone" rx="14" />
      <text x={26} y={36} className="zone-label">
        android device · no root required
      </text>
      <rect x={466} y={90} width={240} height={244} className="zone" rx="14" />
      <text x={482} y={112} className="zone-label">
        server · ai qa on every call
      </text>

      {/* flows */}
      {[p1, p2, p3, p4, p5, p6].map((p) => (
        <path key={p} d={p} className="flow dash-anim" />
      ))}
      <Pulse path={`${p2} M 205 219 H 335 V 166 M 420 139 H 478 M 584 162 V 196 M 584 242 V 276`} dur={7} />
      <Pulse path={p4} dur={2.4} begin="1.2s" opacity={0.6} />

      {/* device side */}
      <Node x={25} y={40} w={180} label="Default dialer" sub="OEM auto-record" />
      <Node x={25} y={116} w={180} label="Kotlin bg service" sub="undying · heartbeat" hl />
      <Node x={25} y={196} w={180} label="Recording finder" sub="60+ paths · time match" />
      <Node x={250} y={116} w={170} label="Offline queue" sub="dedup · retry" hl />

      {/* server side — capture → transcribe → QA */}
      <Node x={478} y={116} w={212} label="Frappe CRM API" sub="multipart · dedup check" />
      <Node x={478} y={196} w={212} label="Sarvam transcription" sub="speech → transcript" hl />
      <Node x={478} y={276} w={212} label="Gemini QA agent" sub="summary · tags · metrics · QA" hl />
    </svg>
  );
}

/* ---------- 03 · AI knowledge assistant (RAG) ---------- */
export function RagDiagram() {
  const sse = "M 610 100 V 44 H 100 V 96";

  return (
    <svg className="arch" viewBox="0 0 720 240" role="img" aria-label="Architecture of the AI knowledge assistant: a host web page embeds the chat via iframe, a Next.js proxy on Vercel holds the API key and rate-limits requests, and Dify performs knowledge retrieval before streaming the answer back over server-sent events.">
      {/* forward + return flows */}
      <path d="M 180 126 H 250" className="flow dash-anim" />
      <path d="M 450 126 H 520" className="flow dash-anim" />
      <path d={sse} className="flow flow-hl dash-anim" />
      <path d="M 350 152 V 186" className="flow" />
      <Pulse path="M 180 126 H 250 M 450 126 H 520" dur={3} />
      <Pulse path={sse} dur={4} begin="1s" opacity={0.8} />
      <text x={355} y={38} textAnchor="middle" className="node-sub">
        SSE stream · tokens render live
      </text>

      <Node x={20} y={100} w={160} h={52} label="Host page" sub="iframe / widget" />
      <Node x={250} y={100} w={200} h={52} label="Next.js on Vercel" sub="proxy · rate limit" hl />
      <Node x={520} y={100} w={180} h={52} label="Dify chatflow" sub="retrieval → LLM" hl />

      {/* key isolation chip */}
      <rect x={250} y={186} width={200} height={28} rx="8" className="node" />
      <text x={350} y={204} textAnchor="middle" className="node-sub">
        API key never reaches the browser
      </text>
    </svg>
  );
}
