'use client';
import React from 'react';
import QuoteRotator from './QuoteRotator';

export default function Skills() {
  return (
    <section className="py-16 flex flex-col items-center text-center gap-8">
      <h1 className="text-3xl font-semibold">Skills</h1>
      <div className="flex flex-wrap gap-8 justify-center">
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
      <QuoteRotator />
    </section>
  );
}