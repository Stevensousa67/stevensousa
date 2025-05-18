import React from 'react'

export default function Skills() {
  return (
    <section className="py-32 flex flex-col items-center text-center gap-8">
      <h1 className="text-4xl font-bold">Skills</h1>
      <p className="text-2xl text-primary">Here are some of my skills</p>
      <div className="flex flex-wrap gap-8 justify-center">
        {/* Add your skill cards here */}
        <div className="w-64 h-64 rounded-lg shadow-lg flex items-center justify-center border-3">
          Skill 1
        </div>
        <div className="w-64 h-64 rounded-lg shadow-lg flex items-center justify-center border-3">
          Skill 2
        </div>
        <div className="w-64 h-64 rounded-lg shadow-lg flex items-center justify-center border-3">
          Skill 3
        </div>
        <div className="w-64 h-64 rounded-lg shadow-lg flex items-center justify-center border-3">
          Skill 4
        </div>
      </div>
      <p className="text-lg text-gray-500">More skills coming soon!</p>
      <a href="/skills" className="text-lg text-blue-500 hover:underline">View all skills</a>
    </section>
  )
}
