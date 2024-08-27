import GithubIcon from "@/components/icons/GithubIcon";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center text-center mb-16 mt-20 gap-4 print:hidden">
            <div className="flex justify-center items-center gap-4 ">
                <Link href="mailto:swhan0428@gmail.com" target="_blank">
                    <Mail className="hover:stroke-blue-500" />
                </Link>
                <Link href="https://github.com/swhana" target="_blank">
                    <GithubIcon
                        className="fill-current hover:fill-blue-500 dark:fill-white"
                        width={24}
                        height={24}
                    />
                </Link>
            </div>
            <div>
                <span className="font-semibold">Sang Won, Han</span> © 2024
            </div>
        </footer>
    );
}
