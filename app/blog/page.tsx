import { PostLoader } from "@/lib/postLoader";
const BlogList = () => {
    const posts = PostLoader("blog");
    return (
        <main>
            <ul>
                {posts.map((item) => (
                    <li key={item.metadata.title}>
                        <a href={`/blog/${item.modName}`}>
                            {" "}
                            {item.metadata.title}{" "}
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default BlogList;
