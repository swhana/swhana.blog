import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/config/globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

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
        <html lang="en" suppressHydrationWarning={true}>
            <body className={inter.className}>
                <Header />
                <main className="mt-[64px] flex flex-1 flex-col">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
