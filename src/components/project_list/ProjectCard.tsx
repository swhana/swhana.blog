import { Project } from "@/config/types";
import Image from "next/image";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <li className="flex h-full flex-col gap-3 overflow-hidden rounded-md border shadow-md transition hover:shadow-xl dark:border-slate-700 dark:hover:border-white">
            <div className="relative aspect-video w-full rounded-t-md border-b">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    sizes="(max-width: 1000px) 50vw, 450px"
                    fill
                    priority
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className="flex flex-1 flex-col justify-between p-4 pt-1">
                <div>
                    <h2 className="mt-1 text-lg font-bold sm:text-xl md:text-lg">
                        {project.title}
                    </h2>
                    <h3 className="mb-3 text-sm font-base text-stone-400 sm:text-xs md:text-sm">
                        {project.startDate} ~ {project.endDate}
                    </h3>
                    <p className="text-sm sm:text-xs md:text-sm truncate-2">
                        {project.description}
                    </p>
                </div>
            </div>
        </li>
    );
}
