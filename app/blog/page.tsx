import { PostLoader } from "@/lib/postLoader";
const BlogList = () => {
  const posts = PostLoader("content/blog");
  return (
    <>
      <ul>
        {posts.map((item) => (
          <li>
            <a href={`/blog/${item.modName}`}> {item.metadata.title} </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogList;
