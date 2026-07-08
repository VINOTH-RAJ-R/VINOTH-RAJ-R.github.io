import Nav from "@/components/Nav";
import CursorGlow from "@/components/CursorGlow";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Expertise from "@/components/Expertise";
import Achievements from "@/components/Achievements";
import ResumeBand from "@/components/ResumeBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Expertise />
        <Achievements />
        <ResumeBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
