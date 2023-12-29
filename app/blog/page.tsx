import { PostLoader } from "@/lib/postLoader";
const BlogList = () => {
  const posts = PostLoader("blog");
  return (
    <>
      <ul>
        {posts.map((item) => (
          <li key={item.metadata.title}>
            <a href={`/blog/${item.modName}`}> {item.metadata.title} </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogList;
