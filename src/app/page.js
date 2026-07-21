import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
