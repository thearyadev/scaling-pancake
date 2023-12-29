import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import ScreenSizeIndicator from "@/components/ssi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {process.env.NODE_ENV === "development" && <ScreenSizeIndicator />}
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
