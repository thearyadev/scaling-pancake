"use client";
import { useEffect, useState } from "react";
import tailwindConfig from "@/tailwind.config";
import { Action } from "@radix-ui/react-alert-dialog";

const screens = Object.fromEntries(
    Object.entries(tailwindConfig.theme.container.screens).map(([k, v]) => [
        k,
        v.replace("px", ""),
    ]),
);
function mapPxToSize(px: number): string {
    const breakpoints = Object.entries(screens)
        .map(([label, size]) => ({ label, size }))
        .sort((a, b) => Number(a.size) - Number(b.size));

    if (px < Number(breakpoints[0].size)) {
        return "default";
    }

    let screenSize = breakpoints[0].label; // Default to the smallest size

    breakpoints.forEach((breakpoint) => {
        if (px >= Number(breakpoint.size)) {
            screenSize = breakpoint.label;
        }
    });

    return screenSize;
}

interface Color {
    [key: string]: any;
}

const colorMapping: Color = {
    default: "bg-purple-500",
    sm: "bg-green-500",
    md: "bg-fuchsia-500",
    lg: "bg-amber-500",
    xl: "bg-red-500",
    "2xl": "bg-blue-500",
    GT2xl: "bg-pink-500",
};

const ScreenSizeIndicator = () => {
    const [screenSize, setScreenSize] = useState<string>(
        mapPxToSize(window.innerWidth),
    );
    const [actualSize, setActualSize] = useState<number>(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenSize(mapPxToSize(window.innerWidth));
            setActualSize(window.innerWidth);
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <div
            className={`fixed top-0 z-30 flex pl-2 pr-2 text-white hover:hidden ${
                colorMapping[screenSize] || "bg-red-500"
            }`}
        >
            <p className="font-bold italic">{screenSize.toUpperCase()}</p>{" "}
            <p className="pl-2 font-light italic text-gray-300">
                [{actualSize}px]
            </p>
        </div>
    );
};

export default ScreenSizeIndicator;
