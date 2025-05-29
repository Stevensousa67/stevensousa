import React from 'react';
import { ContactForm } from './ContactForm';

export default function Contact() {
  return (
    <section className="py-16 flex flex-col text-center gap-8">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <ContactForm />
      <p className="text-lg text-muted-foreground">Feel free to reach out for collaborations or just a chat!</p>
    </section>
  );
}