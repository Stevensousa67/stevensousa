"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
    const baseUrl = `${process.env.NEXT_PUBLIC_AWS_S3_BASE_URL}ss-pictures/`;
    const imageSrc = `${baseUrl}Steven+Sousa.jpeg`;

    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const item = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <>
            <motion.p className="text-3xl font-semibold mt-10 mb-10 text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                About Me
            </motion.p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-10 px-4">
                {/* Changed flex-1 to md:flex-1 */}
                <motion.div className="flex-1 mb-10" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                    <Image src={imageSrc} alt="Steven Sousa" width={250} height={250} className="rounded-2xl object-cover mx-auto" />
                </motion.div>
                <motion.div className="flex-1 text-center md:text-left" variants={container} initial="hidden" animate="visible">
                    {[
                        "Hi there! I'm Steven Sousa, a Full Stack Engineer on a mission to make the Internet a better place, one project at a time.",
                        "I specialize in crafting seamless web experiences with tools like React, Node.js, and TypeScript. My passion lies in solving complex problems and building scalable, user-focused solutions that leave a lasting impact.",
                        "When I'm not coding, you’ll find me strumming my guitar, hitting the gym, gaming, or rolling on the mats practicing Brazilian Jiu-Jitsu (Oss!). Personal projects keep my creativity flowing, too.",
                    ].map((text, index) => (
                        <motion.p key={index} className="text-lg mb-4 last:mb-0" variants={item}>
                            {text}
                        </motion.p>
                    ))}
                </motion.div>
            </div>
        </>
    );
}