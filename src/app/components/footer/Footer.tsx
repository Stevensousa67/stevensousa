import React from 'react';
import Image from "next/image";
import SpotifyStatus from './SpotifyStatus';

export default function Footer() {
  return (
    <footer className="bg-background/30 shadow-xs relative mx-auto mb-6 flex w-full max-w-5xl flex-col rounded-2xl p-8 saturate-100 backdrop-blur-[10px] overflow-hidden">
      <div className="relative z-10 flex items-center md:gap-4">
        <Image src="/Spotify Logo Icon.svg" alt="Spotify Logo" width={20} height={20} className="h-6 w-6" />
        <div className="inline-flex w-full items-center justify-center gap-1 text-sm md:justify-start">
          <SpotifyStatus />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-blue-300/20 via-transparent to-transparent blur-3xl opacity-70 pointer-events-none" />
    </footer>
  );
}