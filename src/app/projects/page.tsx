import ProjectCard from "./ProjectCard"
import { projects } from "@/lib/allProjects";


export default function ProjectsPage() {
    return (
        <>
            <p className="text-3xl font-semibold mt-20 mb-8 text-center">All Projects</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 mb-8 " >
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.name}
                        project={project}
                        isReversed={index % 2 === 1}
                        className="border-foreground/30 max-w-72 md:max-w-none lg:max-w-none mx-auto"
                        imageSize={{ width: 420, height: 420 }}
                    />
                ))}
            </div>
        </>
    );
}