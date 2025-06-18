import React from 'react';
import Image from "next/image";
import SpotifyStatus from './SpotifyStatus';
import SocialMediaLinks from './SocialMediaLinks';

export default function Footer() {
  const baseUrl = `${process.env.NEXT_PUBLIC_AWS_S3_BASE_URL}svgs/socials/`;
  
  return (
    <footer className="relative max-w-5xl mx-auto w-full mb-3 flex flex-col rounded-2xl p-8 saturate-100 backdrop-blur-[10px] overflow-hidden bg-gradient-to-t from-white/30 via-white/10 to-white/0 dark:from-black/30 dark:via-black/10 dark:to-black/0 shadow-xs">
      <div className="relative z-10 flex items-center md:gap-4">
        <a href="https://open.spotify.com/user/223qjmi62hl4nilhilo6lsdea" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <Image src={`${baseUrl}Spotify.svg`} alt="Spotify Logo" width={20} height={20} className="h-6 w-6" />
        </a>
        <div className="inline-flex w-full items-center justify-center gap-1 text-sm md:justify-start">
          <SpotifyStatus />
          <SocialMediaLinks />
        </div>
      </div>
    </footer>
  );
}