import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from './projectsList';

export default function Projects() {
  return (
    <section className="flex flex-col items-center text-center gap-8">
      <h1 className="text-3xl font-semibold">Featured Projects</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {projects.map((project) => (
          <Card key={project.name} className="w-80 transform transition duration-300 ease-in-out hover:opacity-90 hover:-translate-y-1 hover:shadow-lg hover:border-blue-500">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.status}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <Image src={project.image} alt={project.name} className="rounded-lg object-cover" width={420} height={420}/>
            </CardContent>
            <CardFooter className="flex flex-col items-center">
              <CardDescription className="text-center">{project.description}</CardDescription>
              <Button asChild className="mt-4" disabled={project.status !== "Live"}>
                {project.status === "Live" ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">View Project</a>
                ) : (
                  <span className="text-gray-400 cursor-not-allowed">Coming Soon</span>
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <p className="text-lg text-gray-500">More projects coming soon!</p>
      <a href="/projects" className="text-lg text-blue-500 hover:underline">View all projects</a>
    </section>
  );
}