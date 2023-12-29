import { SinglePostLoader } from "@/lib/postLoader";
import { notFound } from "next/navigation";

const ProjectsPost = ({ params }: { params: { projectName: string } }) => {
    try {
        const Post = SinglePostLoader("projects", params.projectName)[0];

        if (typeof Post.component === "undefined") {
            notFound();
        }

        return (
            <main>
                <Post.component />
            </main>
        );
    } catch (error) {
        notFound();
    }
};
export default ProjectsPost;
