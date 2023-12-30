import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

const CallToActionButton = ({
    children,
    redirectTo,
}: {
    children: React.ReactNode;
    redirectTo: string;
}) => {
    return (
        <Link href={redirectTo}>
            <Button variant="outline" size="sm" className="border-black">
                {children}
            </Button>
        </Link>
    );
};

export default CallToActionButton;
