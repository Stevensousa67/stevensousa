import AboutMe from "./AboutMe";
import MyJourney from "./MyJourney";

export default function AboutPage() {
  return (
    <>
      <p className="text-3xl font-semibold mt-10 mb-10 text-center animate-fade-slide-down">
        About Me
      </p>
      <AboutMe />
      <MyJourney />
    </>
  );
}