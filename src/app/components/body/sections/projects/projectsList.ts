interface Project {
  name: string;
  status: string;
  image: string;
  description: string;
  link?: string;
  techStack?: string;
  techDetails?: string;
}

export const projects: Project[] = [
    {name: "Holy Bible", status: "Under Development", image: "/Holy Bible.jpg", description: "Grow yourself spiritually and get closer to God by reading the Scriptures, studying customized study plans and devotionals.", techStack: "Stack: Next.js, TypeScript, Tailwind CSS, AWS RDS, AWS S3, APIs, Vercel", techDetails: "The Bible Web App aims to make scripture accessible, intuitive, and meaningful for users worldwide, with a focus on inclusivity and user engagement. As a personal learning project, it serves to master modern web and mobile development technologies. Key goals include: Accessibility: Ensure the app is usable by all, including those with visual, auditory, or motor impairments. User Engagement: Provide features like study plans and community interaction to deepen Bible study. Scalability: Deploy a production-ready app to Vercel with a cloud database (e.g., Supabase, Neon). Mobile Expansion: Build a React Native app to extend the experience to mobile users. Personal Mission: Create a tool that supports spiritual growth, inspired by a commitment to making the Bible approachable for all."},
    {name: "Resume Builder", status: "Live", image: "/Resume Builder.jpg", description: "Leverage Google Gemini AI to build resumes and cover letters tailored specifically to a selected job description.", link: "https://resumebuilder.stevensousa.com", techDetails: "Stack: Django, Docker, Supabase, Tailwind CSS, Google Gemini API, AWS EC2, AWS ECR. "},
    {name: "Football", status: "Live", image: "/Soccer.jpg", description: "Track major football league standings, game schedules, and news. Perfect for those football junkies needing a quick fix.", link: "https://soccer.stevensousa.com"}
];