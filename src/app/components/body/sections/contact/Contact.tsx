import React from 'react'

export default function Contact() {
  return (
    <section className="py-16 flex flex-col items-center text-center gap-8">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="text-2xl text-primary">Email me, I'd love to hear from you!</p>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="p-2 border rounded" />
        <textarea placeholder="Your Message" className="p-2 border rounded h-32"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
      </form>
      <p className="text-lg text-gray-500">Feel free to reach out for collaborations or just a chat!</p>
    </section>
  )
}
