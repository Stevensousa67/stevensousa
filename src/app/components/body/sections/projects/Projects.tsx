import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <section className="py-10 flex flex-col items-center text-center gap-8">
      <h1 className="text-4xl font-bold">Featured Projects</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {/* project cards 1 */}
        <Card className='w-80'>
          <CardHeader>
            <CardTitle>Holy Bible</CardTitle>
            <CardDescription>Under Development</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <Image src="/Holy Bible.jpg" alt="Holy Bible" className="rounded-lg object-cover" width={420} height={420}></Image>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <CardDescription>Grow yourself spiritually and get closer to God by reading the Scriptures, studying customized study plans and devotionals.</CardDescription>
          </CardFooter>
        </Card>

        {/* project cards 2 */}
        <Card className='w-80'>
          <CardHeader>
            <CardTitle>Resume Builder</CardTitle>
            <CardDescription className="opacity-0">Live</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <Image src="/Resume Builder.jpg" alt="Resume Builder" className="rounded-lg object-cover" width={420} height={420}></Image>
          </CardContent>
          <CardFooter className='flex flex-col items-center'>
            <CardDescription>Leverage Google Gemini AI to build resumes and cover letters tailored specifically to a selected job description.</CardDescription>
            <Button asChild className="mt-4"><a href="https://resumebuilder.stevensousa.com" target="_blank" rel="noopener noreferrer">View Project</a></Button>
          </CardFooter>
        </Card>

        {/* project cards 3 */}
        <Card className='w-80'>
          <CardHeader>
            <CardTitle>Football</CardTitle>
            <CardDescription className="opacity-0">Live</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <Image src="/Soccer.jpg" alt="Soccer" className="rounded-lg object-cover" width={420} height={420}></Image>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <CardDescription>Track major football league standings, game schedules, and news. Perfect for those football junkies needing a quick fix.</CardDescription>
            <Button asChild className="mt-4"><a href="https://soccer.stevensousa.com" target="_blank" rel="noopener noreferrer">View Project</a></Button>
          </CardFooter>
        </Card>
      </div>
      <p className="text-lg text-gray-500">More projects coming soon!</p>
      <a href="/projects" className="text-lg text-blue-500 hover:underline">View all projects</a>
    </section>
  );
}