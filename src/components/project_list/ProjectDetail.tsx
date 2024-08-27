import { MDXRemote } from "next-mdx-remote/rsc";
import { MdxComponent } from "../mdx";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { Project } from "@/config/types";
import { Suspense } from "react";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectDetail({ project }: ProjectCardProps) {
    return (
        <Suspense fallback={<>Loading...</>}>
            <Link href={project.url}>
                <div className="relative m-auto w-fit text-center text-2xl font-bold">
                    {project.title}
                    {project.url && (
                        <div className="absolute -right-3 top-3 size-1 rounded-full bg-green-500" />
                    )}
                </div>

                <div className="mt-1 text-center text-sm text-gray-500">
                    {project.startDate} - {project.endDate}
                </div>
            </Link>
            <div className="prose project px-5 dark:prose-invert mt-2 max-h-[60vh] overflow-y-scroll sm:max-h-[70vh]">
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
        </Suspense>
    );
}
