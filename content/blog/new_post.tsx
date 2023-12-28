import { PostMetadata } from "@/models";

export const metadata: PostMetadata = {
  title: "auto generated post!!!",
  subtitle: "auto generated post!!! (subtitle :3)",
  description: "",
  date: "Wed Dec 27 2023 23:43:51 GMT+0000 (Coordinated Universal Time)",
};

const BlogPostContent = () => {
  return (
    <>
      {metadata.title}
      <h3>{metadata.subtitle}</h3>
    </>
  );
};

export default BlogPostContent;
