import React from 'react'
import Copyright from "./Copyright";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center text-center gap-8">
        <SocialMediaLinks />
        <Copyright />
      </footer>
    </>
  );
}
