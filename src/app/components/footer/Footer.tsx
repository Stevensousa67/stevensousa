import React from 'react'
import Image from "next/image";
import SpotifyStatus from './SpotifyStatus';
// import Copyright from "./Copyright";
// import SocialMediaLinks from "./SocialMediaLinks";


export default function Footer() {
  return (
    <>
      <footer className="bg-background/30 shadow-xs relative mx-auto mb-6 flex w-full max-w-5xl flex-col rounded-2xl p-8 saturate-100 backdrop-blur-[10px]">
      <div className="flex items-center gap-4">
        <Image src="/Spotify Logo Icon.svg" alt="Spotify Logo" width={20} height={20} className="h-6 w-6" />
        <div className="inline-flex w-full items-center justify-center gap-1 text-sm md:justify-start">
          <SpotifyStatus />
        </div>

      </div>
        {/* <SocialMediaLinks />
        <Copyright /> */}
      </footer>
    </>
  );
}
