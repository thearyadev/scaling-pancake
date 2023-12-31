"use client";

import Navbar from "@/components/header/nabvar";
import { PostLoader } from "@/lib/postLoader";
import CallToActionButton from "@/components/button/ctaButton";
import Image from "next/image";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Post } from "@/models";

const Header = () => {
    useEffect(() => {
        PostLoader("projects").then((posts) => {
            setProjects(posts);
        });
    }, []);
    const [projects, setProjects] = useState<Post[]>([]);
    const [navbarOpen, setNavbarOpen] = useState();
    return (
        <header className="sticky top-0 z-30 flex flex-nowrap items-center justify-between bg-background pb-5 pl-10 pr-10 pt-5 ">
            <Image
                src={"/logo.png"}
                alt={"The Openary Logo"}
                width={150}
                height={50}
                className="sm:w-auto "
            />
            {/* This is the navbar and buttons*/}
            <div className="center hidden flex-nowrap justify-between lg:flex lg:space-x-[15vw] 2xl:space-x-[24vw]">
                <Navbar projects={projects} />
                <CallToActionButton
                    redirectTo="https://discord.com/invite/VZFWGp7FHZ"
                    className="order-2 ml-auto"
                >
                    Join The Discord!
                </CallToActionButton>
            </div>
            <HamburgerMenuIcon
                className="md:inline-block lg:hidden "
                width={35}
                height={35}
            />
        </header>
    );
};
export default Header;
