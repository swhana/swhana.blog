"use client";
//Table Of Content(목차) Sidebar

import { TableItem } from "@/config/types";
import { cn } from "@/lib/utils";
import { useContentObserver } from "@/utils/useContentObserver";
import Link from "next/link";
import { ScrollToTop } from "../button/ScrollToTop";

interface TableProps {
    contents: TableItem[];
}

export default function Sidebar({ contents }: TableProps) {
    const targetList = useContentObserver("h2, h3");

    if (contents.length === 0) return null;

    return (
        <aside className="not-prose absolute -top-[200px] left-full -mb-[100px] hidden h-[calc(100%+150px)] xl:block ">
            <div className="sticky bottom-0  top-[200px] z-10 ml-[5rem] mt-[200px] w-[200px]">
                <div className="mb-4 border-l px-4 py-2 animate-slide-in-right-0.5">
                    {/* <div className="mb-1 font-bold">On this page</div> */}
                    <ul className="text-sm">
                        {contents.map((content) => {
                            const isH3 = content.indent === 1;
                            const isIntersecting = targetList.includes(
                                content.link,
                            );

                            return (
                                <li
                                    key={content.link}
                                    className={cn(
                                        isH3 && "ml-4",
                                        isIntersecting &&
                                            "font-medium text-blue-500",
                                        "py-1 transition",
                                    )}
                                >
                                    <Link href={content.link}>
                                        {content.text}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex gap-2 animate-slide-in-right-1">
                    <ScrollToTop className="w-8 h-8" />
                </div>
            </div>
        </aside>
    );
}
