import { SinglePostLoader } from "@/lib/postLoader";
import { notFound } from "next/navigation";
import Navbar from "@/components/header/nabvar";

const ProjectsPost = async ({
    params,
}: {
    params: { projectName: string };
}) => {
    const Post = await SinglePostLoader("projects", params.projectName);
    if (!Post) {
        notFound();
    }
    return (
        <main>
            <Post.component />
        </main>
    );
};
export default ProjectsPost;
