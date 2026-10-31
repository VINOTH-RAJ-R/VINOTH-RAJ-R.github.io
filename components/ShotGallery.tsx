import Reveal from "./Reveal";

export type Shot = {
  src: string;
  alt: string;
  caption?: string;
  kind: "desktop" | "phone" | "plain";
};

/** Product glimpses in Apple-style frames. Figures are illustrative, never real business data. */
export default function ShotGallery({ shots, label }: { shots: Shot[]; label: string }) {
  if (!shots.length) return null;
  const desktop = shots.filter((s) => s.kind === "desktop");
  const phone = shots.filter((s) => s.kind === "phone");
  const plain = shots.filter((s) => s.kind === "plain");
  return (
    <Reveal className="shots">
      <span className="sr-only">{label}</span>
      {plain.map((s) => (
        <figure className="shot shot-plain" key={s.src}>
          <a href={s.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size: ${s.alt}`}>
              <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
            </a>
          {s.caption && <figcaption>{s.caption}</figcaption>}
        </figure>
      ))}
      {desktop.map((s) => (
        <figure className="shot shot-desktop" key={s.src}>
          <div className="frame-browser">
            <div className="frame-bar" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <a href={s.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size: ${s.alt}`}>
              <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
            </a>
          </div>
          {s.caption && <figcaption>{s.caption}</figcaption>}
        </figure>
      ))}
      {phone.length > 0 && (
        <div className="shot-phones">
          {phone.map((s) => (
            <figure className="shot shot-phone" key={s.src}>
              <div className="frame-phone">
                <a href={s.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size: ${s.alt}`}>
              <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
            </a>
              </div>
              {s.caption && <figcaption>{s.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
    </Reveal>
  );
}
