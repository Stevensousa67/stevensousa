import Navbar from "@/app/components/header/Navbar";
import About from "@/app/components/body/sections/about/About";
import Projects from "@/app/components/body/sections/projects/Projects";
import Skills from "@/app/components/body/sections/skills/Skills";
import Experience from "@/app/components/body/sections/experience/Experience";
import Contact from "@/app/components/body/sections/contact/Contact";
import Footer from "@/app/components/footer/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
    <Footer/>
    </>
  );
}
