import { PostMetadata } from "@/models";

export const metadata: PostMetadata = {
    title: "Neutrino",
    subtitle: "neutrino",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aptent ligula enim venenatis turpis nisi varius lectus.",
    date: "Thu Dec 28 2023 05:33:12 GMT+0000 (Coordinated Universal Time)",
};

const ProjectsPostContent = () => {
    return <>{metadata.title}</>;
};

export default ProjectsPostContent;
