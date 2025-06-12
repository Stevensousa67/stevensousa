import Link from "next/link";
import Navbar from "@/app/components/header/Navbar";
import Footer from "@/app/components/footer/Footer";
import ProjectCard from "./ProjectCard"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { projects } from "@/lib/allProjects";


export default function ProjectsPage() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar />

                <main className="flex-grow w-full max-w-5xl mx-auto">
                    <div className="mt-30">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="/">Home</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Projects</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <p className="text-3xl font-semibold mt-10 mb-8 text-center">All Projects</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 mb-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.name}
                                project={project}
                                isReversed={index % 2 === 1} // Keep the reversing logic
                                className="border-foreground/30" // Keep the border class here
                            />
                        ))}
                    </div>
                </main>

                <div className="max-w-5xl mx-auto w-full">
                    <Footer />
                </div>
            </div>
        </>
    );
}