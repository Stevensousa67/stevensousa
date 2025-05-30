import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projects } from './projectsList';

export default function Projects() {
  return (
    <section className="mt-30 flex flex-col items-center text-center gap-8">
      <h1 className="text-3xl font-semibold">Featured Projects</h1>
      
      {/* Grid layout when screen can fit all 3 cards */}
      <div className="hidden lg:flex flex-wrap gap-8 justify-center">
        {projects.map((project) => (
          <Card key={project.name} className="w-80 transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-blue-500">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.status}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <Image src={project.image}  alt={project.name}  className="rounded-lg object-cover"  width={420}  height={420}/>
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

      {/* Carousel for smaller screens only */}
      <div className="w-full max-w-4xl px-4 lg:hidden">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4 pt-2">
            {projects.map((project) => (
              <CarouselItem key={project.name} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                <Card className="max-w-72 mx-auto transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-blue-500">
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.status}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center items-center">
                    <Image src={project.image} alt={project.name} className="rounded-lg object-cover" width={300} height={300}/>
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-2" />
          <CarouselNext className="right-2 md:right-2" />
        </Carousel>
      </div>
      {/* Button to all projects page */}
      <Button asChild className="mt-4 hover:underline"> 
        <Link href="/projects">
          View all projects
        </Link>
      </Button>
    </section>
  );
}