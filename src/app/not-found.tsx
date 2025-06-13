import Link from "next/link";
import Navbar from "@/app/components/header/Navbar";
import Footer from "@/app/components/footer/Footer";
import Image from "next/image";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export default function NotFound() {
    const baseURL  = process.env.NEXT_PUBLIC_AWS_S3_BASE_URL;

    return (
        <>
            <div className="min-h-screen flex flex-col">
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
                                    <BreadcrumbPage>Page not Found</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <p className="text-3xl font-semibold mt-20 mb-8 text-center">Woops! Well something went wrong... </p>
                    <AspectRatio ratio={16 / 9} className="w-full max-w-2xl mx-auto">
                        <Image src={`${baseURL}Astronaut.jpg`} alt="Astronaut in space" className="object-cover rounded-lg" width={1920} height={1080} />
                    </AspectRatio>
                    <p className="text-3xl text-muted-foreground text-center mt-80">Fear not, I am actively working to get this issue resolved. </p>
                </main>
                <div className="max-w-5xl mx-auto w-full">
                    <Footer />
                </div>
            </div>
        </>
    );
}