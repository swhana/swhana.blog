"use client";

import { resume } from "@/config/resume";
import { Project } from "@/config/types";
import { cn } from "@/lib/utils";
import { useAboutObserver } from "@/utils/useIO";
import Image from "next/image";
import Link from "next/link";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card";

type Props = {
    projects: Project[];
};

export default function AboutPage({ projects }: Props) {
    const target = useAboutObserver("h2");
    const contents = ["Experience", "Education", "Projects"];

    return (
        <div className="w-full flex flex-col min-w-[400px] max-w-[750px] items-center md:items-start">
            <div
                id="left"
                className="max-w-[400px] md:w-[250px] pr-4 md:block md:fixed flex flex-row"
            >
                <div className="text-center md:text-start">
                    <h1 className="font-bold text-4xl">{resume.name}</h1>
                    <p className="text-md dark:text-zinc-200/80 text-zinc-500/80 mt-2">
                        {resume.position}
                    </p>
                    <p className="text-sm mt-2 ">{resume.description}</p>
                </div>

                <aside className="sidebar mt-12 hidden md:block">
                    <div className="mb-4 animate-slide-in-right-0.5">
                        <ul className="text-md">
                            {contents.map((content) => {
                                const isIntersecting = target.includes(content);

                                return (
                                    <li key={content} className="py-3">
                                        <Link
                                            href={`#${content}`}
                                            className="flex group items-center"
                                        >
                                            <hr
                                                className={cn(
                                                    "mr-4 h-px w-8 bg-black group-hover:w-16 transition-all group-hover:bg-blue-500 group-hover:h-[2px]",
                                                    isIntersecting &&
                                                        "bg-blue-500 w-16 h-[2px]",
                                                )}
                                            />

                                            <span
                                                className={cn(
                                                    "text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 group-hover:text-blue-500",
                                                    isIntersecting &&
                                                        "text-blue-500",
                                                )}
                                            >
                                                {content}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </aside>
            </div>
            <div
                id="right"
                className="flex flex-col justify-center max-w-[450px] mt-12 md:mt-0 md:w-[480px] md:ml-[250px] px-4 md:px-0"
            >
                <div id="Experience" className="scroll-mt-24" />
                <div>
                    <h2 className="font-bold text-2xl px-6">Experience</h2>
                    {resume.experience?.map((exp) => (
                        <Link
                            href={exp.link}
                            key={exp.title + exp.duration}
                            className="flex flex-row px-6 py-4 rounded-md hover:shadow-sm hover:bg-cyan-100/50 group"
                        >
                            <div className="w-[120px]">
                                <p className="text-sm">{exp.duration}</p>
                            </div>
                            <div className="w-[380px]">
                                <p className="font-semibold group-hover:text-blue-700/80">
                                    {exp.title}
                                </p>
                                <p className="mt-1 text-md">
                                    {exp.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div id="Education" className="scroll-mt-12" />
                <div className="mt-12">
                    <h2 className="font-bold text-2xl px-6">Education</h2>
                    {resume.education?.map((edu) => (
                        <Link
                            href={edu.link}
                            key={edu.title + edu.duration}
                            className="flex flex-row px-6 py-4 rounded-md hover:shadow-sm hover:bg-cyan-100/50 group"
                        >
                            <div className="w-[120px]">
                                <p className="text-sm">{edu.duration}</p>
                            </div>
                            <div className="w-[380px]">
                                <p className="font-semibold group-hover:text-blue-700/80">
                                    {edu.title}
                                </p>
                                <p className="mt-1 text-md">
                                    {edu.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div id="Projects" className="scroll-mt-12" />
                <div className="mt-12">
                    <div className="flex flex-row justify-between items-center px-6">
                        <h2 className="font-bold text-2xl">Projects</h2>
                        <Link href="/project">
                            <p className="text-sm dark:text-zinc-200/80 text-zinc-500/80 hover:underline">
                                View Full Projects
                            </p>
                        </Link>
                    </div>
                    {projects?.map((p) => (
                        <HoverCard key={p.title + p.endDate}>
                            <HoverCardTrigger>
                                <Link
                                    href={p.url}
                                    className="flex flex-row items-start mt-6 pl-4 pr-6 py-4 rounded-md hover:shadow-sm hover:bg-cyan-100/50 group"
                                >
                                    <div className="w-[120px] relative pr-2 mr-2">
                                        <Image
                                            src={p.thumbnail}
                                            alt={p.title}
                                            width={100}
                                            height={100}
                                            className="aspect-video border-2 border-white group-hover:border-cyan-200/50 rounded-md"
                                        />
                                    </div>

                                    <div className="w-[380px] overflow-auto">
                                        <p className="font-semibold text-lg group-hover:text-blue-700/80">
                                            {p.title}
                                        </p>
                                        <p className="mt-1 text-md">
                                            {p.description}
                                        </p>
                                        <div className="flex flex-row gap-1 flex-wrap mt-1">
                                            {p.techstacks.map((tech) => (
                                                <div
                                                    key={tech}
                                                    className="rounded-xl bg-slate-800 text-white px-2 py-1 text-xs text-nowrap"
                                                >
                                                    {tech}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </HoverCardTrigger>
                            <HoverCardContent
                                className="w-80 aspect-video"
                                side="right"
                            >
                                <Image
                                    src={p.thumbnail}
                                    alt={p.title}
                                    fill
                                    objectFit="contain"
                                />
                            </HoverCardContent>
                        </HoverCard>
                    ))}
                </div>
            </div>
        </div>
    );
}
