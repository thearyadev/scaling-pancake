import { SinglePostLoader, PostLoader } from "@/lib/postLoader";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const posts = await PostLoader("blog");
    return posts.map((post) => ({
        blogName: post.modName,
    }));
}

const BlogPost = async ({ params }: { params: { blogName: string } }) => {
    const Post = await SinglePostLoader("blog", params.blogName);
    if (!Post) {
        notFound();
    }
    return (
        <main>
            <Post.component />
        </main>
    );
};
export default BlogPost;
