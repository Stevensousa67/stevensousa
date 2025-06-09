"use client";
import Link from "next/link";
import Navbar from "@/app/components/header/Navbar";
import Footer from "@/app/components/footer/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"


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
                    <p className="text-3xl font-semibold mt-4 text-center">All Projects</p>

                </main>

                <div className="max-w-5xl mx-auto w-full">
                    <Footer />
                </div>
            </div>
        </>
    );
}