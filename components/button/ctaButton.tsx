import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

const CallToActionButton = ({
    children,
    className,
    redirectTo,
}: {
    children: React.ReactNode;
    className?: string;
    redirectTo: string;
}) => {
    return (
        <Link href={redirectTo}>
            <Button
                variant="outline"
                size="sm"
                className={`border-black ${className}`}
            >
                {children}
            </Button>
        </Link>
    );
};

export default CallToActionButton;
