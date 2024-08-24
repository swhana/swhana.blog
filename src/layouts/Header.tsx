"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navList = [
    {
        name: "Posts",
        href: "/blog",
    },
    {
        name: "About",
        href: "/about",
    },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <nav className="w-full z-40 flex flex-col justify-center items-center border-b bg-background shadow-sm print:hidden">
            <div className="w-full max-w-[1200px] h-[64px] flex justify-between items-center mt-1 px-4">
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
            </div>
        </nav>
    );
}
