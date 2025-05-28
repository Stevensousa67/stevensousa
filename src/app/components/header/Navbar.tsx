'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavbarLinks from './NavbarLinks';
import classes from './navbar.module.css';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from '@/components/ui/modeToggle';
import { Separator } from '@/components/ui/separator';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const closeMenu = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            setIsOpen(false);
        }, 700);
    };

    return (
        <header>
            <nav className="fixed w-full z-20 top-0 left-0 mb-16" role="navigation">
                <div className="flex justify-center px-4 md:px-0">
                    <div className="inline-flex items-center px-6 py-3 bg-white/20 border border-white/30 rounded-full shadow-xl mt-5 backdrop-blur-lg transition-all w-full md:w-auto md:max-w-2xl lg:max-w-4xl">
                        <Link href='/' className="inline-block mr-2 md:mr-6">
                            <Avatar>
                                <AvatarImage src='/Logo.jpeg'/>
                                <AvatarFallback>Logo</AvatarFallback>
                            </Avatar>
                        </Link>
                        <NavbarLinks className="hidden md:flex gap-8 text-lg" />
                        <Separator orientation="vertical" className="ml-4 mr-4"/>
                        <ModeToggle />
                        <button className="md:hidden text-black ml-auto" onClick={() => (isOpen ? closeMenu() : setIsOpen(true))} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen}>
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
                </div>

                {/* Mobile Menu - Vertical Expansion */}
                {isOpen && (
                    <div className={`md:hidden px-4 mt-2 overflow-hidden ${isClosing ? classes['animate-slide-up'] : classes['animate-slide-down']}`}>
                        <div className="py-2 px-4 flex flex-col bg-white/20 border border-white/30 rounded-2xl shadow-xl w-full">
                            <NavbarLinks className="flex flex-col items-center space-y-4 w-full" />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}