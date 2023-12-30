import Navbar from "@/components/header/nabvar";
import { PostLoader } from "@/lib/postLoader";
import CallToActionButton from "@/components/button/ctaButton";
import Image from "next/image";
const Header = () => {
    const projectsX = PostLoader("projects").map((post) => ({
        ...post,
        component: undefined,
    }));

    const projects = [
        ...projectsX,
        ...projectsX,
        ...projectsX,
        ...projectsX,
        ...projectsX,
        ...projectsX,
    ];
    return (
        <header className="sticky top-0 z-30 flex w-screen items-center justify-between bg-background p-5">
            <Image
                src={"/logo.png"}
                alt={"The Openary Logo"}
                width={200}
                height={100}
            />
            <Navbar projects={projects} />
            <CallToActionButton redirectTo="https://discord.com/invite/VZFWGp7FHZ">
                Join The Discord!
            </CallToActionButton>
        </header>
    );
};
export default Header;
