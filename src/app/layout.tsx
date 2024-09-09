import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/config/globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";

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
        <html className="scrollbar-hide" lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider>
                    <Header />
                    <main className="flex flex-1 flex-col min-h-[70vh]">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
