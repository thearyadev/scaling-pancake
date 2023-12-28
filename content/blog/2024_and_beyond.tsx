import { PostMetadata } from "@/models";

export const metadata: PostMetadata = {
  title: "2023 and Beyond",
  subtitle: "",
  description: "",
  date: "Wed Dec 27 2023 23:36:44 GMT+0000 (Coordinated Universal Time)",
};

const BlogPostContent = () => {
  return <>{metadata.title}</>;
};

export default BlogPostContent;
