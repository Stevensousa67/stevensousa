"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const validRoutes = ["/", "/about", "/projects"];

export default function AppBreadcrumb() {
    const pathname = usePathname();
    const is404 = !validRoutes.includes(pathname);


    // Set page title based on pathname
    const pageTitle = is404 ? "Lost in Space" :
        pathname === "/" ? "" :
            pathname.charAt(1).toUpperCase() + pathname.slice(2);

    // Hide breadcrumb if pathname is "/"
    const computedClassName = pathname === "/" ? "hidden" : "";

    return (
        <div className={`mt-30 ml-4 ${computedClassName}`.trim()}>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    {pageTitle && (
                        <>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </>
                    )}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}