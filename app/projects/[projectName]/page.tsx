import { PostLoader, SinglePostLoader } from "@/lib/postLoader";
import { notFound } from "next/navigation";


export async function generateStaticParams() {
    const posts = await PostLoader("projects")
    return posts.map(post => ({
        projectName: post.modName
    }))
}

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
