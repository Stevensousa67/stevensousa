import About from "@/components/sections/about/About";
import Projects from "@/components/sections/projects/Projects";
import Skills from "@/components/sections/skills/Skills";
import Contact from "@/components/sections/contact/Contact";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <AnimatedSection animation="fade-in-up" duration="duration-700">
        <About />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-left" duration="duration-700" delay="delay-200">
        <Projects />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-right" duration="duration-700">
        <Skills />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-up" duration="duration-700">
        <Contact />
      </AnimatedSection>
    </>
  );
}