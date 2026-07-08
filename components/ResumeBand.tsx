import { person } from "@/content/profile";
import Reveal from "./Reveal";

export default function ResumeBand() {
  return (
    <section className="section" id="resume" aria-label="Resume" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <div className="resume-band">
            <div>
              <h3>The one-page version</h3>
              <p>
                Everything on this site, condensed for your ATS and hiring committee: experience,
                systems, stack and contact details.
              </p>
            </div>
            <a className="btn btn-primary" href={person.resumeFile} download>
              Download resume (PDF)
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
