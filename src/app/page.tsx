import Navbar from "@/app/components/header/Navbar";
import About from "@/app/components/body/sections/about/About";
import Projects from "@/app/components/body/sections/projects/Projects";
import Skills from "@/app/components/body/sections/skills/Skills";
import Contact from "@/app/components/body/sections/contact/Contact";
import Footer from "@/app/components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
      <main className="flex-grow flex flex-col max-w-5xl" style={{ position: 'relative', left: '50vw', transform: 'translateX(-50%)' }}>
        <div className="flex-grow">
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}