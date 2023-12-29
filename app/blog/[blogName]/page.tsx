import { SinglePostLoader } from "@/lib/postLoader";
import { notFound } from "next/navigation";

const BlogPost = ({ params }: { params: { blogName: string } }) => {
  try {
    const Post = SinglePostLoader("blog", params.blogName)[0];
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
export default BlogPost;
