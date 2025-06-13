"use client";
import Link from "next/link";
import Navbar from "@/app/components/header/Navbar";
import Footer from "@/app/components/footer/Footer";
import Image from "next/image";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
    const baseURL = process.env.NEXT_PUBLIC_AWS_S3_BASE_URL;

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900 text-white">
            <Navbar />

            <main className="flex-grow w-full max-w-5xl mx-auto">
                <div className="mt-30 ml-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Projects</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <motion.p className="text-3xl font-semibold mt-20 mb-8 text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    404 - Houston, We Have a Problem!
                </motion.p>
                <AspectRatio ratio={4 / 3} className="w-full max-w-md mx-auto">
                    <motion.div animate={{ y: [-10, 10] }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}>
                        <Image src={`${baseURL}Astronaut.jpg`} alt="Astronaut floating in space" className="object-cover rounded-lg" width={1920} height={1080} />
                    </motion.div>
                </AspectRatio>
                <motion.p className="text-xl md:text-2xl text-center mb-8 -mt-42" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
                    You&apos;ve drifted into deep space! Let&apos;s get you back to Earth.
                </motion.p>
                <div className="text-center">
                    <Button asChild className="hover:underline">
                        <Link href="/">Return to Earth</Link>
                    </Button>
                </div>
            </main>
            <div className="max-w-5xl mx-auto w-full">
                <Footer />
            </div>
        </div>
    );
}