import { contact, person } from "@/content/profile";
import Reveal from "./Reveal";

const IconMail = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const IconPhone = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7a2 2 0 0 1 1.7 2.05Z" />
  </svg>
);
const IconLinkedIn = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.4v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);
const IconGitHub = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);
const IconStackOverflow = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38h12.56M6.77 14.32l.37-1.76 8.79 1.85-.37 1.76-8.79-1.85m1.16-4.21l.76-1.61 8.14 3.78-.76 1.62-8.14-3.79m2.26-3.99l1.15-1.38 6.9 5.76-1.15 1.37-6.9-5.75M14.66 2l5.35 7.2-1.44 1.07-5.35-7.2L14.66 2M6.59 18.41v-1.8h8.98v1.8H6.59Z" />
  </svg>
);
const IconFrappe = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12a8.5 8.5 0 0 1-8.5 8.5c-1.35 0-2.63-.31-3.77-.87L3 21l1.42-5.62A8.5 8.5 0 1 1 21 12Z" />
    <path d="M8.5 10h7M8.5 13.5h4.5" />
  </svg>
);

export default function Contact() {
  const cards = [
    { icon: IconMail, label: "Email", value: person.email, href: `mailto:${person.email}` },
    { icon: IconPhone, label: "Phone / WhatsApp", value: person.phone, href: `tel:${person.phoneHref}` },
    { icon: IconLinkedIn, label: "LinkedIn", value: "in/vinoth-raj-r", href: person.linkedin },
    { icon: IconGitHub, label: "GitHub", value: "VINOTH-RAJ-R", href: person.github },
    { icon: IconStackOverflow, label: "Stack Overflow", value: "users/21301929", href: person.stackoverflow },
    { icon: IconFrappe, label: "Frappe Community", value: "discuss.frappe.io/u/vinoth", href: person.frappeCommunity },
  ];

  return (
    <section className="section" id="contact" aria-label="Contact">
      <div className="container">
        <div className="contact-grid">
          <Reveal className="contact-copy">
            <p className="kicker">06 · Contact</p>
            <h2>{contact.title}</h2>
            <p>{contact.body}</p>
            <p className="contact-note">
              {contact.note} · {person.availability}
            </p>
          </Reveal>

          <div className="contact-cards">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 90}>
                <a
                  className="contact-card"
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span className="ico">{c.icon}</span>
                  <span>
                    <b>{c.label}</b>
                    <span>{c.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
