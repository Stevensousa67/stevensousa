'use client';

import React, { useState } from 'react';

const navbarItems = [
    'Work',
    'Services',
    'Blog',
    'Templates',
    'About'
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-20 top-0 left-0">
            {/* Main Navbar */}
            <div className={`
            flex justify-between items-center px-6 py-3 
            bg-white bg-opacity-5 backdrop-blur-lg border 
            border-white border-opacity-20 rounded-full 
            shadow-xl mt-5 mx-4 sm:mx-8 md:mx-auto 
            max-w-2xl md:max-w-4xl text-black-100`}>
                {/* Logo */}
                <div className="text-xl font-bold">
                    Logo
                </div>
                {/* Navigation Links */}
                <ul className="hidden md:flex gap-8 text-lg">
                    {navbarItems.map((item) => (
                        <li key={item} className="cursor-pointer hover:text-green-400 transition">
                            {item}
                        </li>
                    ))}
                </ul>
                {/* Contact Button */}
                <button className="hidden md:block bg-gradient-to-r from-blue-500 to-green-400 py-1 px-6 rounded-3xl shadow-2xl text-white font-semibold hover:from-blue-600 hover:to-green-500">
                    Contact
                </button>
                {/* Hamburger with optional margin */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-30 bg-black bg-opacity-70 flex items-center justify-center">
                    <div className="relative bg-white text-black w-11/12 max-w-xs rounded-2xl shadow-xl p-6 flex flex-col items-center animate-slide-in">
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-black p-2 rounded-full focus:outline-none focus:ring"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <ul className="flex flex-col items-center space-y-6 mt-8 w-full">
                            {navbarItems.map((item) => (
                                <li
                                    key={item}
                                    className="w-full text-center py-3 rounded-lg text-lg font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:text-white transition cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-8 w-full bg-gradient-to-r from-blue-500 to-green-400 py-3 rounded-2xl text-white font-semibold shadow-lg hover:from-blue-600 hover:to-green-500 transition">
                            Contact
                        </button>
                    </div>
                </div>
            )}

            {/* Animate Slide-In */}
            <style jsx>{`
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
        </nav>
    );
}
