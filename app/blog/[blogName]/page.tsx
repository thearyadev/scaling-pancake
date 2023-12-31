import { SinglePostLoader } from "@/lib/postLoader";
import { notFound } from "next/navigation";

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
