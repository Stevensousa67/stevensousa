interface Project {
  name: string;
  status: string;
  image: string;
  description: string;
  link?: string; // Optional link for live projects
}

export const projects: Project[] = [
    {name: "Holy Bible", status: "Under Development", image: "/Holy Bible.jpg", description: "Grow yourself spiritually and get closer to God by reading the Scriptures, studying customized study plans and devotionals."},
    {name: "Resume Builder", status: "Live", image: "/Resume Builder.jpg", description: "Leverage Google Gemini AI to build resumes and cover letters tailored specifically to a selected job description.", link: "https://resumebuilder.stevensousa.com"},
    {name: "Football", status: "Live", image: "/Soccer.jpg", description: "Track major football league standings, game schedules, and news. Perfect for those football junkies needing a quick fix.", link: "https://soccer.stevensousa.com"}
];