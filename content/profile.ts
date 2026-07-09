/**
 * Single source of truth for every word on the site.
 * Edit here — components only render this data.
 */

export const site = {
  url: "https://vinoth-raj-r.github.io",
  // Paste the code from Google Search Console (HTML tag method) here, e.g. "AbC123..."
  googleSiteVerification: "",
  title: "Vinoth Raj R | Software Engineer",
  description:
    "Software engineer building AI-powered calling pipelines, CRM automation, Android calling infrastructure and RAG assistants. 3.5+ years shipping production systems with Python, Frappe/ERPNext, Flutter and LLMs. Systems that replace manual work with intelligence.",
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
  ],
};

export const person = {
  name: "Vinoth Raj R",
  shortName: "Vinoth Raj",
  monogram: "VR",
  role: "Software Engineer",
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
    detail: "B.E. graduated June 2022 · Final-year project: Face Mask Detection (ResNet50)",
  },
};

export const hero = {
  eyebrow: "Vinoth Raj R · shipping AI systems in production",
  // Split for staggered animation
  headline: ["I engineer AI systems", "that do real work."],
  sub: "Voice AI that screens thousands of leads before a human picks up the phone. Android calling infrastructure that went from 92% to 100% data reliability. RAG assistants built for 1,000+ users a day. I design the architecture, write the code and ship the whole system.",
  roleLine: "software developer @ assetplus · ai pipelines · frappe · python · flutter",
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
    "At AssetPlus, a financial services platform, I now build the AI layer of the sales operation. I replaced traditional tele-calling with a system of my own design: an AI voice pipeline that calls, screens and prioritizes advertisement leads, a custom Android calling app that captures every call and recording with zero data loss, and an LLM pipeline that turns raw call audio into QA scores, tags and insights inside the CRM.",
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

export const experience = [
  {
    company: "AssetPlus",
    role: "Software Developer",
    period: "Apr 2025 → Present",
    location: "On-site",
    summary:
      "I own the AI and communication infrastructure around the sales CRM: the systems that decide which leads get called, call them, understand the calls, and route the results to humans.",
    highlights: [
      "Designed and built an AI-powered calling pipeline on Sarvam AI that contacts advertisement leads automatically, performs first-level screening and prioritizes leads from call outcomes, pushing the hot ones to the team's WhatsApp groups and syncing everything to Zoho.",
      "Replaced traditional tele-calling by shipping a custom Android setup: a Flutter + Kotlin app that lets agents call via SIM while auto-capturing call logs and recordings into the CRM.",
      "Together, the AI calling pipeline and the in-house calling app replaced the traditional tele-calling setup end to end, cutting the organisation's calling costs significantly while raising coverage: every lead gets called, every call gets captured.",
      "Built a server-side LLM pipeline (Sarvam AI, Gemini, OpenAI) that turns captured call recordings into QA summaries, tags, scoring metrics and coaching insights, stored against each lead.",
      "Developed WhatsApp automation with WPPConnect and Puppeteer integrated into Frappe for instant lead alerts and faster team response.",
      "Integrated Google Calendar for meeting scheduling, built Frappe Insights dashboards for team performance and lead conversion, and optimized real-time lead sync and message queues.",
    ],
    tech: ["Python", "Frappe", "Sarvam AI", "Gemini", "OpenAI", "Flutter", "Kotlin", "WPPConnect", "MySQL", "Redis"],
  },
  {
    company: "Makto Technology",
    role: "Senior Full Stack Engineer",
    period: "Dec 2022 → Mar 2025",
    location: "Remote",
    summary:
      "Built consumer-facing and internal products for UAE operations, from mobile apps with live payments and tracking to the ERP systems running behind them.",
    highlights: [
      "Built a mobile-first product delivery platform for UAE operations in Flutter: separate customer and delivery-agent apps with Firebase real-time data, Stripe payments and Google Maps live tracking.",
      "Developed a React-based admin panel and an internal warehouse management system with role-based access, inventory tracking and master-data management over REST APIs.",
      "Led 5+ ERPNext implementations (Frappe, Python, JavaScript) across CRM, fleet management, healthcare and education domains.",
      "Shipped 3 proprietary internal apps on ERPNext that cut operational costs by 40% and improved team productivity by 50%.",
      "Integrated LinkedIn and Google Forms with ERPNext to automate data collection; set up a Git-based CI/CD pipeline that improved deployment reliability.",
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
  problem: string;
  build: string[];
  decisions: { title: string; body: string }[];
  outcomes: { value: string; label: string }[];
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
    build: [
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
    outcomes: [
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
    build: [
      "A foreground Kotlin service monitors call state from any default dialer (Samsung, Google, MIUI, OnePlus) and detects call end on completely stock devices. The first generation needed root and a custom ROM; this one needs nothing but an APK install.",
      "A recording-discovery engine searches 60+ manufacturer recording locations with timestamp-based filename matching, an extended window for long calls, and skip-logic for 0-second calls that previously 'stole' audio files during resync.",
      "An offline-first upload queue sends multipart form-data to the Frappe API, retries when connectivity returns, and survives server downtime, plus a password-protected time-range recovery tool for audits.",
      "Duplicates were eliminated by root-causing a race condition: multiple triggers (call-end events, service restarts, manual resends) read the same checkpoint concurrently. The fix combined synchronized execution, per-record dedup tracking and server-side duplicate rejection.",
      "The service is deliberately hard to kill: instant auto-restart on swipe-away, a 1-minute heartbeat alarm against aggressive battery savers, boot persistence, and start/stop audit logs pushed to the server so ops can see exactly when any device went dark.",
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
    outcomes: [
      { value: "92→100%", label: "recording upload reliability after v1.1.3" },
      { value: "0", label: "duplicate records after the race-condition fix" },
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
    build: [
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
    outcomes: [
      { value: "1,000+", label: "users/day designed for on free-tier infrastructure" },
      { value: "0", label: "API keys ever exposed to the browser" },
      { value: "2", label: "embed modes from a single codebase" },
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Dify", "SSE Streaming", "Vercel", "CSP"],
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
    tags: ["ERPNext", "Frappe CRM", "Zoho", "Google Calendar", "Frappe Insights"],
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
];

export const contact = {
  title: "Got a system that should exist but doesn't?",
  body: "That's my favourite kind of problem. I build the things teams wish they had: voice agents that never miss a lead, mobile infrastructure that never drops a record, automation that gives people their day back. Bring me a hard problem, an ambitious product, or just a question about architecture. My inbox is open.",
  note: "Fastest response: email or LinkedIn",
};
