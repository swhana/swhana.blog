"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navList } from "@/config/const";
import GithubIcon from "@/components/icons/GithubIcon";
import ThemeBtn from "@/components/theme/ThemeBtn";
import { Linkedin, Mail } from "lucide-react";

export default function Header() {
    const pathname = usePathname();

    return (
        <nav className="w-full z-40 flex flex-col justify-center items-center border-b bg-background shadow-sm print:hidden fixed">
            <div className="w-full md:max-w-[750px] h-[64px] flex justify-between items-center mt-1 px-4">
                <div className="flex items-center font-medium">
                    {navList.map((nav) => (
                        <Link
                            href={nav.href}
                            key={nav.name}
                            className={cn(
                                "rounded-full px-4 py-1 text-center text-sm transition-colors hover:text-primary",
                                pathname?.startsWith(nav.href)
                                    ? "font-bold text-primary"
                                    : "text-muted-foreground",
                            )}
                        >
                            {nav.name}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center md:gap-4">
                    <ThemeBtn />
                    <Link href="mailto:swhan0428@gmail.com" target="_blank">
                        <Mail className="hover:stroke-blue-500 hidden md:block" />
                    </Link>
                    <Link href="https://github.com/swhana" target="_blank">
                        <GithubIcon
                            className="fill-current hover:fill-blue-500 dark:fill-white hidden md:block"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/sangwon-han"
                        target="_blank"
                    >
                        <Linkedin
                            width={24}
                            className="stroke-current hover:stroke-blue-500 dark:fill-white hidden md:block"
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
