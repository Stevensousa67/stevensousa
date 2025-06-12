import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from 'framer-motion';

interface Project {
    name: string;
    status: string;
    image: string;
    description: string;
    link?: string;
    techStack?: string;
    techDetails?: string;
}

interface ProjectCardProps {
    project: Project;
    imageSize?: { width: number; height: number };
    className?: string;
    isReversed?: boolean;
}

export default function ProjectCard({ project, imageSize = { width: 420, height: 420 }, className = "", isReversed = false }: ProjectCardProps) {
    const isLive = project.status === "Live" && project.link;

    const ProjectImage = ({ className: imageClassName = "" }: { className?: string }) => (
        <AspectRatio ratio={9 / 6}>
            <Image src={project.image} alt={project.name} width={imageSize.width} height={imageSize.height} className={`rounded-lg h-full w-full object-cover ${imageClassName}`}/>
        </AspectRatio>
    );

    const ProjectButton = ({ children, className: buttonClassName = "" }: { children: React.ReactNode; className?: string }) => {
        if (isLive) {
            return (
                <Button asChild className={buttonClassName}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">{children}</a>
                </Button>
            );
        }
        return <Button disabled className={buttonClassName}>Coming Soon</Button>;
    };

    const cardVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    // Define the two sections
    const imageSection = (
        <motion.div className="w-1/3 flex-shrink-0" variants={childVariants}>
            <CardHeader className="flex flex-col items-center">
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.status}</CardDescription>
                <ProjectImage className="cursor-pointer" />
                <p className="mt-4 text-muted-foreground text-center">{project.techStack}</p>
            </CardHeader>
        </motion.div>
    );

    const contentSection = (
        <motion.div className="w-2/3 flex flex-col min-w-0" variants={childVariants}>
            <CardContent className="flex justify-center items-center flex-grow">
                <p>{project.techDetails}</p>
            </CardContent>
            <CardFooter className={isReversed ? "justify-start" : "justify-end"}>
                <ProjectButton>{isLive ? "View Project" : "Coming Soon"}</ProjectButton>
            </CardFooter>
        </motion.div>
    );

    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={cardVariants}>
            <Card className={`flex flex-row w-full transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 ${className}`}>
                {isReversed ? (
                    <>
                        {contentSection}
                        {imageSection}
                    </>
                ) : (
                    <>
                        {imageSection}
                        {contentSection}
                    </>
                )}
            </Card>
        </motion.div>
    );
}