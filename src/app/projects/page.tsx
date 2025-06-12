"use client";
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
                    <div className="mt-40">
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
                    <p className="text-3xl font-semibold mt-4 mb-4 text-center">All Projects</p>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.name} project={project} isReversed={index % 2 === 1} className="w-full mb-4 border border-foreground/30" />
                    ))}

                </main>

                <div className="max-w-5xl mx-auto w-full">
                    <Footer />
                </div>
            </div>
        </>
    );
}