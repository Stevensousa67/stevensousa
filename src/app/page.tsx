import About from "@/app/components/body/sections/about/About";
import Projects from "@/app/components/body/sections/projects/Projects";
import Skills from "@/app/components/body/sections/skills/Skills";
import Contact from "@/app/components/body/sections/contact/Contact";
import AnimatedSection from "@/app/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <AnimatedSection animation="fade-in-up" duration="duration-700">
        <About />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-left" duration="duration-1000">
        <Projects />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-right" duration="duration-500" delay="delay-200">
        <Skills />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-up" duration="duration-300">
        <Contact />
      </AnimatedSection>
    </>
  );
}