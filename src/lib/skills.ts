interface Skills {
    name: string;
    icon: string;
    isBlack?: boolean;
}

const baseURL  = `${process.env.NEXT_PUBLIC_AWS_S3_BASE_URL}svgs/skills/`;

export const skills: Skills[] = [
    {
        name: "React",
        icon: `${baseURL}react.svg`,
    },
    {
        name: "Next.js",
        icon: `${baseURL}nextjs.svg`,
        isBlack: true,
    },
    {
        name: "TypeScript",
        icon: `${baseURL}ts.svg`,
    },
    {
        name: "JavaScript",
        icon: `${baseURL}js.svg`,
    },
    {
        name: "Tailwind CSS",
        icon: `${baseURL}tailwind.svg`,
    },
    {
        name: "Node.js",
        icon: `${baseURL}nodejs.svg`,
    },
    {
        name: "Express",
        icon: `${baseURL}express.svg`,
        isBlack: true,
    },
    {
        name: "Django",
        icon: `${baseURL}django.svg`,
    },
    {
        name: "Python",
        icon: `${baseURL}python.svg`,
    },
    {
        name: "PostgreSQL",
        icon: `${baseURL}postgresql.svg`,
    },
    {
        name: "MySQL",
        icon: `${baseURL}mysql.svg`,
    },
    {
        name: "MongoDB",
        icon: `${baseURL}mongodb.svg`,
    },
    {
        name: "AWS",
        icon: `${baseURL}aws.svg`,
        isBlack: true,
    },
    {
        name: "GCP",
        icon: `${baseURL}gcp.svg`,
    },
    {
        name: "Vercel",
        icon: `${baseURL}vercel.svg`,
        isBlack: true,
    },
    {
        name: "Docker",
        icon: `${baseURL}docker.svg`,
    },
    {
        name: "Git",
        icon: `${baseURL}git.svg`,
    },
    {
        name: "GitHub",
        icon: `${baseURL}github.svg`,
        isBlack: true,
    }
];