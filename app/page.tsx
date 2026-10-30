import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import OpenSource from "@/components/OpenSource";
import Expertise from "@/components/Expertise";
import Achievements from "@/components/Achievements";
import ResumeBand from "@/components/ResumeBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Product-page rhythm: full-width sections that alternate light and dark
 * surfaces. Hero (light) → About (dark) → Work (case studies alternate)
 * → Experience (light) → Open source (dark) → Expertise (light)
 * → Impact (dark) → Resume + Contact (light).
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Experience />
        <OpenSource />
        <Expertise />
        <Achievements />
        <ResumeBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
