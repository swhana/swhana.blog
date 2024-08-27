import { MDXRemote } from "next-mdx-remote/rsc";
import { MdxComponent } from "../mdx";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { Project } from "@/config/types";
import Link from "next/link";
import { Suspense } from "react";
import { LinkIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import { getProjectImgs } from "@/lib/projects";

interface ProjectCardProps {
    project: Project;
}

export default async function ProjectDetail({ project }: ProjectCardProps) {
    const imgPaths = await getProjectImgs(project);

    return (
        <Suspense>
            <div className="justify-center items-center mx-6">
                <Link href={project.url}>
                    <div className="flex flex-row m-auto items-center gap-1 w-fit text-center text-2xl font-bold">
                        {project.title}
                        {project.url && <LinkIcon width={16} height={16} />}
                    </div>

                    <div className="mt-1 text-center text-sm text-gray-500">
                        {project.startDate} - {project.endDate}
                    </div>
                </Link>
                <ul className="flex flex-row gap-1 m-4 flex-wrap justify-center">
                    {project.techstacks.map((stack, i) => (
                        <li
                            key={i}
                            className="bg-slate-700 text-white text-xs rounded-md px-2 py-0.5"
                        >
                            {stack}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="max-h-[50vh] sm:max-h-[70vh] overflow-y-scroll scroll-smooth">
                <Carousel
                    className="m-6"
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {imgPaths.map((img, i) => (
                            <CarouselItem
                                key={i}
                                className="aspect-video items-center justify-center h-[240px]"
                            >
                                <Image
                                    src={img}
                                    alt={img + i}
                                    width={480}
                                    height={320}
                                    priority
                                    unoptimized
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                <div className="prose project px-8 dark:prose-invert mt-8">
                    <MDXRemote
                        source={project.content}
                        components={MdxComponent}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [
                                    remarkGfm,
                                    remarkA11yEmoji,
                                    remarkBreaks,
                                ],
                                rehypePlugins: [
                                    [
                                        rehypePrettyCode,
                                        {
                                            theme: {
                                                dark: "github-dark",
                                                light: "github-light",
                                            },
                                        },
                                    ],
                                    rehypeSlug,
                                ],
                            },
                        }}
                    />
                </div>
            </div>
        </Suspense>
    );
}
