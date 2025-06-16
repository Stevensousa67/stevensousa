import About from "@/app/components/body/sections/about/About";
import Projects from "@/app/components/body/sections/projects/Projects";
import Skills from "@/app/components/body/sections/skills/Skills";
import Contact from "@/app/components/body/sections/contact/Contact";

export default function Home() {
  return (
    <>
      <div className="flex-grow">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}