/**
 * Single source of truth for every word on the site.
 * Edit here; components only render this data.
 */

export const site = {
  url: "https://vinoth-raj-r.github.io",
  // Paste the code from Google Search Console (HTML tag method) here, e.g. "AbC123..."
  googleSiteVerification: "w0CSxUYFRRl6SrRvwljNfOFCukF9GK999LXRjf1wK0E",
  title: "Vinoth Raj R | AI Engineer & Software Engineer",
  description:
    "Software engineer building production AI systems: a full Frappe CRM, voice-AI lead calling, a root-free Android call-automation app, LLM call QA, and marketing & business-metrics dashboards. Open-source author of ai-knowhow and llm-json. 3.5+ years with Python, Frappe/ERPNext, Flutter, React and LLMs.",
  keywords: [
    "Vinoth Raj",
    "Vinoth Raj R",
    "Software Engineer",
    "AI Engineer",
    "Frappe Developer",
    "ERPNext Developer",
    "Flutter Developer",
    "Python Developer",
    "LLM Pipelines",
    "Sarvam AI",
    "CRM Automation",
    "Software Engineer India",
    "AI Calling Pipeline",
    "Voice AI Integration",
    "Android Call Recording App",
    "Dify Custom Frontend",
    "RAG Chatbot Developer",
    "Frappe CRM Customization",
    "WhatsApp Automation WPPConnect",
    "Marketing Analytics Dashboard",
    "GA4 Meta Ads Dashboard",
    "Meta Conversions API",
    "Shizuku Call Recording",
    "Open Source AI Tools",
    "ai-knowhow modelwise",
    "llm-json",
  ],
};

export const person = {
  name: "Vinoth Raj R",
  shortName: "Vinoth Raj",
  monogram: "VR",
  role: "AI / Software Engineer",
  company: "AssetPlus",
  location: "Chennai, India", // used only in structured data, not rendered on the page
  availability: "works across timezones",
  email: "rs.vinothraj@gmail.com",
  phone: "+91 97894 04593",
  phoneHref: "+919789404593",
  linkedin: "https://www.linkedin.com/in/vinoth-raj-r/",
  github: "https://github.com/VINOTH-RAJ-R",
  stackoverflow: "https://stackoverflow.com/users/21301929",
  frappeCommunity: "https://discuss.frappe.io/u/vinoth",
  resumeFile: "/Vinoth-Raj-R.pdf",
  education: {
    school: "Sona College of Technology, Salem",
    detail: "Bachelor of Information Technology, June 2022 · Final-year project: Face Mask Detection (ResNet50)",
  },
};

export const hero = {
  eyebrow: "Vinoth Raj R · AI / Software Engineer",
  // Split for staggered animation
  headline: ["I engineer AI systems", "that do real work."],
  sub: "I start from the business bottleneck and ship the system that removes it. At AssetPlus that meant a full CRM set up and run end to end, a voice-AI agent that screens every ad lead before a human picks up the phone, a root-free Android call-automation app that went from 92% to 100% data reliability, and the marketing and business-metrics dashboard leadership reads every morning. I also publish open-source AI tools anyone can install.",
  ctaPrimary: { label: "See the work", href: "#work" },
  ctaSecondary: { label: "Download resume", href: "/Vinoth-Raj-R.pdf" },
  stats: [
    { value: 3.5, suffix: "+", label: "years shipping production systems", decimals: 1 },
    { value: 100, suffix: "%", label: "call-data reliability, up from 92%", decimals: 0 },
    { value: 5, suffix: "+", label: "ERPNext implementations led", decimals: 0 },
    { value: 40, suffix: "%", label: "operational cost reduced", decimals: 0 },
  ],
};

// The animated pipeline in the hero mirrors the real system I run in production:
// AI screens & prioritizes leads → humans call the hot ones → AI QA reviews every call.
export const heroPipeline = ["Lead", "AI Screening", "Prioritize", "Human Call", "AI QA", "CRM"];

export const about = {
  title: "Systems over scripts",
  lead: "I'm a software engineer who ends up owning problems end-to-end: the business rule, the architecture, the API, the mobile app, the dashboard that proves it worked.",
  paragraphs: [
    "I started at Makto Technology building products for UAE operations: customer and delivery-agent apps in Flutter, a React admin panel, a warehouse management system, and five-plus ERPNext implementations across CRM, fleet, healthcare and education. That period taught me how businesses actually run, and how much of their day is manual work that software should be doing.",
    "At AssetPlus, a financial services platform, I now build the AI layer of the sales operation. I set up and run the company's Frappe CRM end to end, and replaced traditional tele-calling with a system of my own design: an AI voice pipeline that calls, screens and prioritizes advertisement leads, a root-free Android call-automation app that captures every call and recording with zero data loss, and an LLM pipeline that turns raw call audio into QA scores, tags and insights inside the CRM. I also built the analytics dashboard that puts website, video, ad spend and CRM conversions in front of management every morning.",
    "I also publish open-source AI tooling: ai-knowhow, agent skills that pick the right model and effort for any task and turn finished AI work into lessons, and llm-json, a zero-dependency parser for messy model output.",
    "My bias is toward reliability. The interesting part of AI engineering isn't the demo. It's the retry policy, the dedup logic, the Sunday-aware scheduler, the token accounting, the webhook that never drops a payload. That's the work I enjoy most, and it's why the systems I build stay in production.",
  ],
  principles: [
    {
      title: "Start from the business rule",
      body: "Call windows, retry cadences, lead priorities: I model the operating reality first, then write code around it. Software that ignores how the team works gets abandoned.",
    },
    {
      title: "Design for failure",
      body: "Networks drop, servers restart, webhooks arrive twice. Every pipeline I ship has idempotency, checkpoints, retries and an audit trail before it has features.",
    },
    {
      title: "Measure or it didn't happen",
      body: "92% → 100% upload reliability. 40% cost reduction. 10% audio-issue rate against an 89% industry average. I instrument systems so improvements are provable.",
    },
    {
      title: "AI with a job description",
      body: "I put LLMs on real responsibilities: screening calls, scoring conversations, extracting structured data. And I benchmark models against each other before trusting one.",
    },
  ],
};

/** Every highlight reads as a business story: the pain, what I built, what changed. */
export type Highlight = {
  area: string;
  problem: string;
  solution: string;
  impact: string;
};

export type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: Highlight[];
  tech: string[];
};

export const experience: Role[] = [
  {
    company: "AssetPlus",
    role: "Software Engineer",
    period: "Apr 2025 → Present",
    location: "On-site · Financial services (mutual-fund distribution)",
    summary:
      "I own the CRM and the AI and communication infrastructure around it: the systems that decide which leads get called, call them, understand the calls, route the results to humans, and report what it all produced.",
    highlights: [
      {
        area: "AI voice calling",
        problem:
          "Tele-callers spent most of the day dialing ad leads that went nowhere, night sign-ups waited, and screening was inconsistent.",
        solution:
          "Designed and built an AI voice-agent pipeline on Sarvam AI with a rules engine in Frappe CRM. It contacts advertisement leads automatically and performs first-level screening: leads created 10:00–19:00 are called immediately, night leads batch to 10:00, and failed calls retry after 2 days, never on Sunday. Call outcomes prioritize every lead, and everything syncs to Zoho.",
        impact:
          "Every new lead gets a first call and first-level screening, and hot leads reach the sales team's WhatsApp groups instantly.",
      },
      {
        area: "LLM call QA",
        problem: "Management had no structured view of what actually happened on calls.",
        solution:
          "Built a server-side LLM pipeline (Sarvam AI, Gemini, OpenAI): Sarvam transcribes each captured recording, then four Gemini prompts produce a QA summary, tags, scoring metrics and coaching insights stored against the lead, with token-usage tracking and an LLM benchmark harness.",
        impact: "Every recorded call is QA-scored inside the CRM, and models are chosen on evidence.",
      },
      {
        area: "Call automation app",
        problem:
          "No market product reliably captures SIM calls on ordinary Android phones, and the first version needed rooted custom-ROM devices that could not scale with the team.",
        solution:
          "Shipped a call-automation app in Flutter + Kotlin that captures every SIM and WhatsApp call and recording into the CRM, re-engineered from a rooted custom ROM to a root-free build (Shizuku), with recording lookup moved into one batched native index and event-driven device-health reports.",
        impact:
          "It runs on the phones agents already carry. App open at 1,000 calls went from 19.1 s to 3.9 s, and ops knows the moment a phone stops recording.",
      },
      {
        area: "Call-data reliability",
        problem: "Uploads died on bad networks and a race condition created duplicate CRM records.",
        solution:
          "Built an offline-first upload queue, server-side duplicate rejection, an hourly backfill and a fix for the concurrent-checkpoint race.",
        impact: "Recording-upload reliability rose from 92% to 100% with zero duplicates.",
      },
      {
        area: "Replacing tele-calling",
        problem:
          "The traditional tele-calling setup was costly and could not guarantee that every lead was called and every call captured.",
        solution:
          "Together, the AI calling pipeline and the in-house calling app replaced the traditional tele-calling setup end to end.",
        impact:
          "Calling costs fell significantly while coverage rose: every lead gets called, every call gets captured.",
      },
      {
        area: "CRM ownership",
        problem:
          "Leads from Meta Instant Forms and the website needed one system for capture, prioritization and follow-up.",
        solution:
          "Set up and own the company's Frappe CRM end to end: lead capture, AI-driven prioritization, Zoho sync, Google Calendar scheduling, WhatsApp and Slack alerts, and Frappe Insights dashboards.",
        impact: "Sales and management track team performance and lead conversion in one place.",
      },
      {
        area: "Ad optimisation",
        problem: "Meta ads optimised for form fills rather than real registrations.",
        solution: "Integrated the Meta Conversions API so each CRM registration flows back to Meta.",
        impact: "Ad delivery now optimises for real outcomes.",
      },
      {
        area: "WhatsApp automation",
        problem: "Hot leads needed a faster team response.",
        solution:
          "Developed WhatsApp automation with WPPConnect and Puppeteer integrated into Frappe for instant lead alerts.",
        impact: "The team responds faster to new leads.",
      },
      {
        area: "Marketing & business metrics",
        problem:
          "Marketing data lived in five places, each platform reported its own success, and nobody could say what a lead cost per campaign.",
        solution:
          "Built the Har Ghar MFD marketing and business-metrics dashboard for management: GA4, Vimeo, Meta and Google Ads spend, Microsoft Clarity and CRM leads-to-deals in one place, refreshed daily by GitHub Actions, with a Gemini-powered AI Insights tab.",
        impact:
          "Management sees cost per real lead by campaign, platform-claimed vs CRM-received leads, and AI-written executive summaries every day.",
      },
      {
        area: "AI enablement",
        problem: "Departments needed a shared way to choose AI models for their work.",
        solution: "Rolling out my open-source ai-knowhow skills company-wide.",
        impact: "Every department picks the right AI model and effort for the job.",
      },
    ],
    tech: ["Python", "Frappe CRM", "Sarvam AI", "Gemini", "OpenAI", "Flutter", "Kotlin", "React", "GA4", "Meta Ads", "WPPConnect", "MySQL", "Redis"],
  },
  {
    company: "Makto Technology",
    role: "Senior Full Stack Engineer",
    period: "Dec 2022 → Mar 2025",
    location: "Remote · UAE operations",
    summary:
      "Built consumer-facing and internal products for UAE operations, from mobile apps with live payments and tracking to the ERP systems running behind them.",
    highlights: [
      {
        area: "ERP platforms",
        problem: "UAE operations needed internal tooling across CRM, fleet management, healthcare and education.",
        solution:
          "Led 5+ ERPNext implementations (Frappe, Python, JavaScript) and shipped 3 proprietary internal apps on ERPNext.",
        impact: "Operational costs fell by 40% and team productivity improved by 50%.",
      },
      {
        area: "Delivery platform",
        problem: "UAE operations needed mobile ordering, payments and delivery tracking.",
        solution:
          "Built a mobile-first product delivery platform in Flutter: separate customer and delivery-agent apps with Firebase real-time data, Stripe payments and Google Maps live tracking, plus a React admin panel and an internal warehouse management system with role-based access, inventory tracking and master-data management over REST APIs.",
        impact: "Customers get live tracking, and the team has role-based control of inventory and master data.",
      },
      {
        area: "Automation & delivery",
        problem: "Data collection was manual and deployments needed to be more reliable.",
        solution: "Integrated LinkedIn and Google Forms with ERPNext and set up a Git-based CI/CD pipeline.",
        impact: "Data collection is automated and deployment reliability improved.",
      },
    ],
    tech: ["Flutter", "React", "Firebase", "Stripe", "Google Maps", "Frappe/ERPNext", "Python", "CI/CD"],
  },
];

export type CaseStudy = {
  id: string;
  index: string;
  tag: string;
  title: string;
  oneLiner: string;
  /** The business pain, in the customer's terms */
  problem: string;
  /** What I built, step by step */
  solution: string[];
  /** How it was made to hold up in production */
  decisions: { title: string; body: string }[];
  /** One sentence a leader can repeat */
  impactSummary: string;
  /** The measurable result, as spec blocks */
  impact: { value: string; label: string }[];
  stack: string[];
  confidential?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "ai-lead-calling",
    index: "01",
    tag: "Voice AI · CRM Automation",
    title: "An AI voice agent that calls every lead first",
    oneLiner:
      "An end-to-end voice-AI pipeline that contacts advertisement leads, screens them in conversation, prioritizes them from call outcomes, and routes the hot ones straight into the sales team's WhatsApp before a human ever dials.",
    problem:
      "Ad campaigns generate thousands of leads, and most of a tele-calling team's day was spent dialing numbers that go nowhere: busy lines, wrong fits, night-time sign-ups. First contact was slow, screening was inconsistent, and management had no structured view of what actually happened on calls.",
    solution: [
      "A scheduling and rules engine inside Frappe CRM decides when each lead is called: leads created 10:00–19:00 are called immediately; night leads queue FIFO for the next 10:00 batch; failed calls retry after 2 days, never on Sundays, shifting to Monday automatically.",
      "Cron-driven workers (1–5 minute cadence) hand batches to Sarvam AI's voice agent, which makes the outbound call and conducts first-level screening in natural conversation.",
      "A webhook ingestion layer logs every callback, schedules analytics retrieval, and survives duplicate or delayed deliveries; a nightly job re-fetches any analytics that went missing.",
      "Call outcomes drive automatic lead prioritization: who's interested, who needs a callback, who's unreachable. The team's attention goes where the money is.",
      "Prioritized leads are pushed instantly to the sales team's WhatsApp groups through WPPConnect and synced to Zoho as the system of record. From there they feed the human calling queue, where agents dial from the custom calling app (case study 02).",
    ],
    decisions: [
      {
        title: "Business rules as first-class code",
        body: "Call windows, Sunday exclusions and FIFO night queues live in an explicit rules layer, not scattered ifs. Ops can reason about behaviour, and edge cases like a Saturday 8:30 PM lead or a retry landing on Sunday are handled by design.",
      },
      {
        title: "Every stage is recoverable",
        body: "Batches checkpoint per-contact status, webhooks are logged raw before parsing, analytics fetches are scheduled with retries, and a daily sweep catches anything missed. No stage assumes the previous one succeeded.",
      },
      {
        title: "Alerts where the team already lives",
        body: "Prioritized leads land in WhatsApp groups via WPPConnect, not in a dashboard nobody opens. Sales acts in seconds, ops gets daily queue reports, and Zoho stays in sync automatically.",
      },
    ],
    impactSummary:
      "Every new lead gets a first AI call and first-level screening before a human dials, hot leads reach the sales team's WhatsApp groups instantly, and together with the in-house calling app it replaced traditional tele-calling at significantly lower calling cost.",
    impact: [
      { value: "100%", label: "of new leads get a first AI call, Sundays included" },
      { value: "Instant", label: "prioritized-lead alerts in the team's WhatsApp groups" },
      { value: "First-level", label: "screening fully automated before human engagement" },
      { value: "↓ Cost", label: "AI + in-house calling app run far cheaper than the traditional tele-calling setup" },
    ],
    stack: ["Python", "Frappe CRM", "Sarvam AI", "WPPConnect", "WhatsApp", "Zoho", "Slack", "MySQL", "Redis", "Cron/Queues"],
    confidential: true,
  },
  {
    id: "call-capture",
    index: "02",
    tag: "Android Systems · Reliability · AI QA",
    title: "Call capture on any Android phone, no root required",
    oneLiner:
      "A Flutter + Kotlin background service that turns ordinary Android phones into reliable calling infrastructure. It captures every call and recording from the default dialer, syncs them to the CRM with zero loss and zero duplicates, and hands each recording to an AI pipeline that reviews it like a QA analyst. It started life on rooted devices; today it needs no root at all.",
    problem:
      "There is no product on the market that reliably captures SIM calls and recordings from ordinary Android phones. The first version of this platform ran on rooted devices with a custom ROM, which could never scale across a growing sales team. Getting to stock devices meant solving everything the OS throws at you: recordings scattered across manufacturer-specific folders, uploads dying on bad networks, long calls timing out, duplicates polluting the CRM, and battery savers silently killing tracking.",
    solution: [
      "A foreground Kotlin service monitors call state from any default dialer (Samsung, Google, MIUI, OnePlus) and detects call end on completely stock devices. The first generation needed root and a custom ROM; this one needs nothing but an APK install.",
      "A recording-discovery engine searches 60+ manufacturer recording locations with timestamp-based filename matching, an extended window for long calls, and skip-logic for 0-second calls that previously 'stole' audio files during resync.",
      "An offline-first upload queue sends multipart form-data to the Frappe API, retries when connectivity returns, and survives server downtime, plus a password-protected time-range recovery tool for audits.",
      "Duplicates were eliminated by root-causing a race condition: multiple triggers (call-end events, service restarts, manual resends) read the same checkpoint concurrently. The fix combined synchronized execution, per-record dedup tracking and server-side duplicate rejection.",
      "The service is deliberately hard to kill: instant auto-restart on swipe-away, boot persistence, and event-driven health reports (recording service up or down, missing audio, a 2-hour heartbeat in working hours) so the server can alert ops on WhatsApp the moment a device stops recording. Per-status de-duplication took redundant status records from 13 to 0 per restart cycle.",
      "Built to stay fast at volume: recording lookup moved off the startup path into one batched native index (app open at 1,000 calls: 19.1 s → 3.9 s), recordings written as mono 16 kHz in real time (about 6× smaller), and an hourly backfill that re-attaches late-arriving audio.",
      "Once a call log lands with audio, the server takes over. Sarvam AI transcribes the recording, then a four-prompt Gemini pipeline reviews every call like a QA analyst: Summary, Tags, Scoring Metrics and QA Questions. Outputs are parsed defensively (fence-stripping, balanced-brace extraction) and stored as structured insight on the call record, with token-usage tracking and an LLM benchmark harness governing model choice and cost.",
    ],
    decisions: [
      {
        title: "Evolve past root",
        body: "Version one ran on rooted phones with a custom ROM. Re-engineering it to cooperate with each manufacturer's own dialer and recorder means it now runs on the phones agents already carry, a capability you cannot buy off the shelf.",
      },
      {
        title: "Data integrity above everything",
        body: "Timestamp-matched audio mapping, idempotent uploads, client and server dedup, and checkpointed resync mean a record is either in the CRM exactly once or still safely queued: never lost, never doubled.",
      },
      {
        title: "Diagnose before you fix",
        body: "The audio-quality investigation isolated uplink network degradation (not the app) as the root cause, and WiFi calling as the fix, documented with test evidence and measured against industry baselines.",
      },
    ],
    impactSummary:
      "Recording-upload reliability rose from 92% to 100% with zero duplicates, the app runs on the phones agents already carry, and every recorded call is transcribed and QA-scored inside the CRM.",
    impact: [
      { value: "92→100%", label: "recording upload reliability after v1.1.3" },
      { value: "0", label: "duplicate records after the race-condition fix" },
      { value: "19.1→3.9s", label: "app open at 1,000 calls" },
      { value: "Root-free", label: "runs on stock phones; no market product does this" },
      { value: "Every call", label: "transcribed by Sarvam + QA-scored by 4 Gemini prompts" },
    ],
    stack: ["Flutter", "Dart", "Kotlin", "Android Services", "Telephony", "Frappe API", "Sarvam AI", "Gemini", "OpenAI", "Provider", "Dio"],
    confidential: true,
  },
  {
    id: "knowledge-assistant",
    index: "03",
    tag: "RAG · Product Engineering",
    title: "An AI knowledge assistant built like a product, not a demo",
    oneLiner:
      "A production chat frontend for a Dify knowledge-retrieval flow: embeddable on any site as a full-page iframe or floating widget, streaming answers token-by-token, engineered for 1,000+ users a day on free-tier infrastructure.",
    problem:
      "The platform needed an AI assistant on its public site that could answer from a curated knowledge base: embeddable in Webflow, safe to expose publicly, and cheap to run. Off-the-shelf chat widgets leaked API keys to the browser, couldn't be themed, and had no abuse protection.",
    solution: [
      "A Next.js 14 (App Router) + TypeScript frontend with a server-side proxy: the browser only ever talks to /api/chat, and the Dify API key never leaves the server.",
      "Dify's Server-Sent Events stream is passed straight through the proxy, so users watch answers generate token-by-token with no buffering layer.",
      "Per-user rate limiting (30 req/min, configurable) keyed on a UUID stored client-side: enough friction to stop abuse without accounts or a database.",
      "Two embed surfaces from one codebase: a full-page chat at / and an iframe-optimized /embed with transparent-background support and configurable frame-ancestors CSP for lock-down.",
      "Conversation memory delegated to Dify via conversation_id. Zero server state is what makes free-tier Vercel hosting viable at 1,000+ users a day.",
    ],
    decisions: [
      {
        title: "Security as architecture, not an afterthought",
        body: "Key isolation behind the proxy, rate limiting at the edge of the system, and CSP-controlled embedding were designed in from the first commit: the checklist a public AI endpoint actually needs.",
      },
      {
        title: "Stateless by design",
        body: "Pushing conversation state to the RAG backend removed the database, the session store and most scaling concerns in one decision.",
      },
      {
        title: "Built to be embedded",
        body: "The widget adapts to its host: landscape iframe or floating bubble, transparent backgrounds, clipboard permissions. A chat product is only useful where users already are.",
      },
    ],
    impactSummary:
      "Designed for 1,000+ users a day on free-tier hosting, with no API key ever exposed to the browser and two embed modes from a single codebase.",
    impact: [
      { value: "1,000+", label: "users/day designed for on free-tier infrastructure" },
      { value: "0", label: "API keys ever exposed to the browser" },
      { value: "2", label: "embed modes from a single codebase" },
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Dify", "SSE Streaming", "Vercel", "CSP"],
  },
];

caseStudies.push({
  id: "metrics-dashboard",
  index: "04",
  tag: "Marketing & Business Metrics · Data Engineering",
  title: "One dashboard for every rupee and every lead",
  oneLiner:
    "A management dashboard that puts website traffic, video, ad spend and CRM conversions side by side for the Har Ghar MFD platform, refreshed every morning, honest about what each number can and cannot tell you, with an AI analyst built in.",
  problem:
    "Marketing data lived in five places: GA4, Vimeo, Meta Ads, Google Ads and the CRM. Each platform reported its own version of success. Meta claimed leads that never reached the CRM, Google reported none because no conversion was configured, and nobody could say what a lead actually cost per campaign.",
  solution: [
    "A daily GitHub Actions job pulls GA4 (via Windsor.ai), Vimeo, Meta and Google Ads, Microsoft Clarity and Frappe CRM leads into versioned JSON, runs a verification step, and pushes. Vercel rebuilds on push, so the data is the database: no server and no API keys in the browser.",
    "Executive overview, acquisition, content, video, ad-spend and leads-and-conversion tabs, each comparing the period against the previous one and against benchmark targets that cite their source.",
    "Every ad figure is stated three ways: what the platform claimed, what reached the CRM, and what became a deal, with cost per lead ranked by campaign.",
    "An admin-gated AI Insights tab (Gemini) writes the executive summary for any period and answers follow-up questions, grounded only on a bounded data brief built from the same JSON the dashboard shows.",
    "Email-based access control and an AI-chat analytics tab show leadership what website visitors asked the platform's AI assistant.",
  ],
  decisions: [
    {
      title: "Show the claim, the arrival and the outcome",
      body: "Ad platforms grade their own homework. Putting platform-reported leads next to CRM-received leads and closed deals turned a vanity metric into a cost-per-real-lead number.",
    },
    {
      title: "Only compare like with like",
      body: "A benchmark appears only when it measures exactly what the dashboard measures, with its source attached. Where nothing comparable exists, the card shows no target rather than a plausible-looking guess.",
    },
    {
      title: "Find the leak, not just the number",
      body: "The data showed 166 of 167 Google Ads leads arriving with no campaign, leaving ₹1.69 lakh of spend unattributable. I traced it to the website dropping UTM and gclid parameters and specified the capture fix and a Frappe lead-and-deal API.",
    },
  ],
  impactSummary:
    "Management sees cost per real lead by campaign, platform-claimed vs CRM-received leads and AI-written executive summaries every day, and the attribution leak behind ₹1.69 lakh of unattributable spend was traced and specified for a fix.",
  impact: [
    { value: "6", label: "data sources in one view, refreshed daily" },
    { value: "3-way", label: "ad leads: claimed vs received vs converted" },
    { value: "AI", label: "executive summaries and Q&A on any period" },
    { value: "₹0", label: "servers: static site + scheduled sync" },
  ],
  stack: ["React", "Vite", "Vercel", "GitHub Actions", "GA4", "Windsor.ai", "Meta Ads", "Google Ads", "Vimeo", "Microsoft Clarity", "Frappe CRM", "Gemini"],
  confidential: true,
});

export const openSource = [
  {
    name: "ai-knowhow",
    href: "https://github.com/VINOTH-RAJ-R/ai-knowhow",
    tagline: "Know what to build it with. Know how it was built.",
    problem:
      "Choosing the right AI model, effort and cost for a task, and learning how AI-built work was done, had no standard method.",
    impact: "Users get the right model at a known cost, with no server, API keys or data collection.",
    body: "Open-source agent skills for Claude Code, claude.ai, Codex and ChatGPT. modelwise turns a basic prompt from any department into a top-practitioner plan, the right model and reasoning effort for each phase, a cost comparison across models, and a prompt written for that model. modelwise-run then executes the task on the chosen Claude model. retrace turns a finished AI task into a saved lesson that teaches how it was done.",
    points: [
      "Validated registry of 61 Anthropic and OpenAI models",
      "Cost per run and per 1,000 runs, compared across models",
      "Plain Markdown, JSON and one dependency-free Python script",
      "No server, no API keys, no data collection",
    ],
    meta: "MIT · Agent Skills · being rolled out company-wide at AssetPlus",
    tags: ["Claude Code", "Agent Skills", "Prompt engineering", "LLM routing", "Python"],
  },
  {
    name: "llm-json",
    href: "https://github.com/VINOTH-RAJ-R/llm-json",
    tagline: "Get a usable object from model output, or fail with the evidence.",
    problem: "LLMs return JSON wrapped in preambles, code fences, truncation or single quotes.",
    impact: "Production parse failures become debuggable instead of silent.",
    body: "You asked a model for JSON and got a preamble, a code fence, a truncated object or single quotes. llm-json extracts the object through staged, opt-in repairs, and when it can't, raises with the raw response, the stage it stopped at and your context attached, so a production parse failure is debuggable three days later.",
    points: [
      "Zero runtime dependencies, Python 3.9+",
      "parse, parse(repair=True) and try_parse entry points",
      "Failure carries raw text, last stage and caller context",
      "CI-tested",
    ],
    meta: "MIT · Python",
    tags: ["Python", "LLM", "Structured output", "Error handling"],
  },
];

export const expertise = [
  {
    title: "AI & LLM Engineering",
    body: "Production pipelines around Sarvam AI, Gemini and OpenAI: voice agents, transcript analysis, structured extraction, prompt systems, defensive output parsing, token accounting and model benchmarking.",
    tags: ["Sarvam AI", "Gemini", "OpenAI", "RAG / Dify", "Prompt pipelines", "LLM benchmarking"],
  },
  {
    title: "Backend & API Engineering",
    body: "Python services on Frappe: REST APIs, webhook ingestion, cron schedulers, queue workers, idempotent retries and audit logging. Systems designed to survive duplicate deliveries and midnight restarts.",
    tags: ["Python", "Frappe", "REST APIs", "Webhooks", "Redis queues", "MySQL", "PostgreSQL"],
  },
  {
    title: "Mobile & Android Systems",
    body: "Flutter apps and Kotlin services that go deeper than UI: background call monitoring, telephony integration, custom ROM work, offline-first sync and battery-saver survival on real devices.",
    tags: ["Flutter", "Dart", "Kotlin", "Background services", "Telephony", "Custom ROM"],
  },
  {
    title: "CRM & Business Platforms",
    body: "5+ ERPNext implementations across CRM, fleet, healthcare and education, plus deep Frappe CRM customization, Zoho sync, Google Calendar integration and Frappe Insights dashboards.",
    tags: ["ERPNext", "Frappe CRM", "Zoho", "Google Calendar", "Frappe Insights", "Meta Conversions API"],
  },
  {
    title: "Marketing & Business Analytics",
    body: "Dashboards leadership actually uses: GA4, ad-platform and CRM data joined into honest cost-per-lead and conversion views, scheduled syncs with verification, benchmarks with cited sources, and an AI analyst on top.",
    tags: ["GA4", "Windsor.ai", "Meta & Google Ads", "Microsoft Clarity", "Vimeo", "GitHub Actions"],
  },
  {
    title: "Frontend Engineering",
    body: "React and Next.js products: admin panels, warehouse systems and embeddable chat widgets, built with TypeScript, streaming UIs and the discipline to keep them fast.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "SSE / streaming UI"],
  },
  {
    title: "Automation & Integrations",
    body: "WhatsApp automation with WPPConnect and Puppeteer, Slack and Zoho pipelines, LinkedIn and Google Forms ingestion, Stripe payments, Google Maps tracking. Glue that removes manual work.",
    tags: ["WPPConnect", "Puppeteer", "Slack", "Stripe", "Google Maps", "CI/CD", "Linux"],
  },
];

export const achievements = [
  { value: 100, suffix: "%", label: "call-record reliability, up from 92%, across the calling fleet", decimals: 0 },
  { value: 8.9, suffix: "×", label: "better audio-issue rate than the 89% industry average", decimals: 1 },
  { value: 40, suffix: "%", label: "operational cost cut by 3 internal products", decimals: 0 },
  { value: 50, suffix: "%", label: "team productivity improvement from internal tooling", decimals: 0 },
  { value: 5, suffix: "+", label: "ERPNext implementations led across 4 industries", decimals: 0 },
  { value: 1000, suffix: "+", label: "users/day capacity engineered on free-tier infra", decimals: 0 },
  { value: 4.9, suffix: "×", label: "faster app open at 1,000 calls (19.1 s → 3.9 s)", decimals: 1 },
  { value: 2, suffix: "", label: "open-source AI projects published (ai-knowhow, llm-json)", decimals: 0 },
  { value: 6, suffix: "", label: "marketing & business data sources unified in one daily dashboard", decimals: 0 },
];

export const contact = {
  title: "Got a system that should exist but doesn't?",
  body: "That's my favourite kind of problem. I build the things teams wish they had: voice agents that never miss a lead, mobile infrastructure that never drops a record, automation that gives people their day back. Bring me a hard problem, an ambitious product, or just a question about architecture. My inbox is open.",
  note: "Fastest response: email or LinkedIn",
};
