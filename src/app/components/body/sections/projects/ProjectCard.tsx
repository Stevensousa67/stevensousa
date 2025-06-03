import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Drawer, DrawerTitle, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

interface Project {
    name: string;
    status: string;
    image: string;
    description: string;
    link?: string;
    techStack?: string;
    techDetails?: string;
}

interface ProjectCardProps {
    project: Project;
    imageSize?: { width: number; height: number };
    className?: string;
}

export default function ProjectCard({ project, imageSize = { width: 420, height: 420 }, className = "" }: ProjectCardProps) {
    const isLive = project.status === "Live" && project.link;

    const ProjectImage = ({ className: imageClassName = "" }: { className?: string }) => (
        <AspectRatio ratio={9 / 6}>
            <Image src={project.image} alt={project.name} width={imageSize.width} height={imageSize.height} className={`rounded-lg h-full w-full object-cover ${imageClassName}`} />
        </AspectRatio>
    );

    const ProjectButton = ({ children, className: buttonClassName = "" }: { children: React.ReactNode; className?: string }) => {
        if (isLive) {
            return (
                <Button asChild className={buttonClassName}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">{children}</a>
                </Button>
            );
        }
        return (
            <Button disabled className={buttonClassName}>Coming Soon</Button>
        );
    };

    return (
        <Card className={`transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 ${className}`}>
            <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.status}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
                <Drawer>
                    <DrawerTrigger asChild>
                        <ProjectImage className="cursor-pointer" />
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="p-4 max-w-md mx-auto">
                            <DrawerTitle className="text-lg font-semibold mb-4">{project.name}</DrawerTitle>
                            <ProjectImage />
                            <div className="max-h-60 overflow-y-auto mt-4">
                                <p className="mt-4 text-muted-foreground">{project.techStack}</p>
                                <p className="mt-4 text-muted-foreground">{project.techDetails}</p>
                            </div>
                            <div className="flex gap-2 justify-center mt-6">
                                <ProjectButton>{isLive ? "Open Project" : "Coming Soon"}</ProjectButton>
                                <DrawerClose asChild>
                                    <Button variant="outline">Close</Button>
                                </DrawerClose>
                            </div>
                        </div>
                    </DrawerContent>
                </Drawer>
            </CardContent>
            <CardFooter className="flex flex-col items-center">
                <CardDescription className="text-center">{project.description}</CardDescription>
                <ProjectButton className="mt-4">View Project</ProjectButton>
            </CardFooter>
        </Card>
    );
}