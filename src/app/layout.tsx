import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/config/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "swhana's blog",
    description: "프론트엔드 개발자 한상원입니다.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
