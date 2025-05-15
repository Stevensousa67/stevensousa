'use client';

import React, { useState } from 'react';
import classes from './navbar.module.css'

const navbarItems = [
    'About',
    'Projects',
    'Skills',
    'Experience',
    'Contact',
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const closeMenu = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            setIsOpen(false);
        }, 700); // Same duration as animation
    };

    return (
        <nav className="fixed w-full z-20 top-0 left-0">
            {/* Main Navbar */}
            <div className={`flex justify-between items-center px-6 py-3 bg-white/20 border border-white/30 rounded-full shadow-xl mt-5 mx-4 sm:mx-8 md:mx-auto max-w-2xl md:max-w-4xl text-white `}>
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
                {/* Hamburger */}
                <button
                    className="md:hidden text-white"
                    onClick={() => isOpen ? closeMenu() : setIsOpen(true)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu - Vertical Expansion */}
            {isOpen && (
                <div className={`md:hidden mx-4 sm:mx-8 mt-2 overflow-hidden ${isClosing ? classes["animate-slide-up"] : classes["animate-slide-down"]}`}>
                    <div className={`p-6 flex flex-col bg-white/20 border border-white/30 rounded-2xl shadow-xl text-white`}>
                        <ul className="flex flex-col items-center space-y-4 w-full">
                            {navbarItems.map((item) => (
                                <li key={item} className="w-full text-center py-3 rounded-lg text-lg font-semibold bg-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:text-white transition cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}