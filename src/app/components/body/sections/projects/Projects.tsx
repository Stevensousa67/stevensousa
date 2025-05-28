import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <section className="py-16 flex flex-col items-center text-center gap-8">
      <h1 className="text-4xl font-bold">Featured Projects</h1>
      <p className="text-2xl text-primary">Here are some of my projects</p>
      <div className="flex flex-wrap gap-8 justify-center">

        {/* project cards 1 */}
        <Card className='w-80'>
          <CardHeader>
            <CardTitle>Holy Bible</CardTitle>
            <CardDescription>Under Development</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <Image src="/Holy Bible.jpg" alt="Holy Bible" className="rounded-lg" width={420} height={420}></Image>
          </CardContent>
          <CardFooter>
            <CardDescription>A full-stack web application of the Holy Bible built using Next.JS, Tailwind CSS, PostgreSQL, and APIs. </CardDescription>
          </CardFooter>
        </Card>

        {/* project cards 2 */}
        <Card className='w-80'>
          <CardHeader>
            <CardTitle>Resume Builder</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <Image src="/Resume Builder.jpg" alt="Resume Builder" className="rounded-lg" width={420} height={420}></Image>
          </CardContent>
          <CardFooter className='flex flex-col items-center'>
            <CardDescription>A full-stack web application that leverages Google Gemini to build resumes and cover letters tailored specifically to job descriptions. Built using Django, Tailwind CSS, and PostgreSQL, and deployed on AWS EC2. </CardDescription>
            <Button asChild className="mt-4"><a href="https://resumebuilder.stevensousa.com" target="_blank" rel="noopener noreferrer">View Project</a></Button>
          </CardFooter>
        </Card>

        {/* project cards 3 */}
        <Card className='w-80'>
          <CardHeader>
            <CardTitle>Soccer</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <Image src="/Soccer.jpg" alt="Soccer" className="rounded-lg" width={420} height={420}></Image>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <CardDescription>A full-stack web application for soccer fans to keep track of major league standings, game schedules, and news. Built using Express, Bootstrap, PostgreSQL, ESPN APIs, and GCP. </CardDescription>
            <Button asChild className="mt-4"><a href="https://soccer.stevensousa.com" target="_blank" rel="noopener noreferrer">View Project</a></Button>
          </CardFooter>
        </Card>
      </div>
      <p className="text-lg text-gray-500">More projects coming soon!</p>
      <a href="/projects" className="text-lg text-blue-500 hover:underline">View all projects</a>
    </section>
  )
}
