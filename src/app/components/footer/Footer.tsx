import React from 'react'
import Copyright from "./Socials";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Footer() {
  return (
    <>
      <footer className="py-32 flex flex-col items-center text-center gap-8">
        <SocialMediaLinks />
        <Copyright />
      </footer>
    </>
  );
}
