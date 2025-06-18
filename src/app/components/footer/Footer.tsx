import React from 'react';
import Image from "next/image";
import SpotifyStatus from './SpotifyStatus';

export default function Footer() {
  const baseUrl = `${process.env.NEXT_PUBLIC_AWS_S3_BASE_URL}svgs/`;
  

  return (
    <footer className="relative max-w-5xl mx-auto w-full mb-3 flex flex-col rounded-2xl p-8 saturate-100 backdrop-blur-[10px] overflow-hidden
  bg-gradient-to-t from-white/30 via-white/10 to-white/0 dark:from-black/30 dark:via-black/10 dark:to-black/0 shadow-xs">
      <div className="relative z-10 flex items-center md:gap-4">
        <Image src={`${baseUrl}Spotify.svg`} alt="Spotify Logo" width={20} height={20} className="h-6 w-6" />
        <div className="inline-flex w-full items-center justify-center gap-1 text-sm md:justify-start">
          <SpotifyStatus />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-blue-300/20 via-transparent to-transparent blur-3xl opacity-70 pointer-events-none" />
    </footer>
  );
}