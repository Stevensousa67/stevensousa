import React from 'react'

export default function Projects() {
  return (
    <section className="fpy-32 flex flex-col items-center text-center gap-8">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="text-2xl text-primary">Here are some of my projects</p>
      <div className="flex flex-wrap gap-8 justify-center">
        {/* Add your project cards here */}
        <div className="w-64 h-64 rounded-lg shadow-lg flex items-center justify-center border-3">
          Project 1
        </div>
        <div className="w-64 h-64 rounded-lg shadow-lg flex items-center justify-center border-3">
          Project 2
        </div>
        <div className="w-64 h-64 rounded-lg shadow-lg flex items-center justify-center border-3">
          Project 3
        </div>
        <div className="w-64 h-64 rounded-lg shadow-lg flex items-center justify-center border-3">
          Project 4
        </div>
      </div>
      <p className="text-lg text-gray-500">More projects coming soon!</p>
      <a href="/projects" className="text-lg text-blue-500 hover:underline">View all projects</a>
    </section>
  )
}
