import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import dynamic from "next/dynamic";
// import ScreenSizeIndicator from "@/components/ssi";
const ScreenSizeIndicator = dynamic(() => import("@/components/ssi"), {
    ssr: false,
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "The Openary",
    description: "theopenary.com",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {process.env.NODE_ENV === "development" && (
                    <ScreenSizeIndicator />
                )}
                <Header />
                {children}
            </body>
        </html>
    );
}
