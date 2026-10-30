import { person } from "@/content/profile";
import Reveal from "./Reveal";

export default function ResumeBand() {
  return (
    <section className="section surface-alt resume-section" id="resume" aria-label="Resume">
      <div className="container">
        <Reveal>
          <div className="resume-band">
            <p className="eyebrow">The resume</p>
            <h2 className="section-title">Everything here, on one resume.</h2>
            <p className="section-lead">
              Experience, systems, open source, stack and contact details, written the same way:
              problem, solution, impact.
            </p>
            <a className="btn btn-primary" href={person.resumeFile} download>
              Download resume (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
