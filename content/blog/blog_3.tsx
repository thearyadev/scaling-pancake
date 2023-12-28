import { PostMetadata } from "@/models";

export const metadata: PostMetadata = {
  title: "",
  subtitle: "",
  description: "",
  date: "Wed Dec 27 2023 23:28:35 GMT+0000 (Coordinated Universal Time)",
};

const BlogPostContent = () => {
  return <>{metadata.title}</>;
};

export default BlogPostContent;
