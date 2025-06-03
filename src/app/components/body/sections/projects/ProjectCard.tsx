import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Project {
    name: string;
    status: string;
    image: string;
    description: string;
    link?: string;
}

interface ProjectCardProps {
    project: Project;
    imageSize?: { width: number; height: number };
    className?: string;
}

export default function ProjectCard({ project, imageSize = { width: 420, height: 420 }, className = "" }: ProjectCardProps) {
    return (
        <Card className={`transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 ${className}`}>
            <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.status}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
                <AspectRatio ratio={9 / 6}>
                    <Image src={project.image} alt={project.name} width={imageSize.width} height={imageSize.height} className="rounded-lg h-full w-full object-cover" />
                </AspectRatio>
            </CardContent>
            <CardFooter className="flex flex-col items-center">
                <CardDescription className="text-center">{project.description}</CardDescription>
                <Button asChild className="mt-4" disabled={project.status !== "Live"}>
                    {project.status === "Live" ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            View Project
                        </a>
                    ) : (
                        <span className="text-gray-400 cursor-not-allowed">Coming Soon</span>
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
}