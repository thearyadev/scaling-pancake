import {PostMetadata} from "@/models";

export const metadata: PostMetadata = {
    title: "The Openary: Anniversary",
    subtitle: "",
    description: "",
    date: "Wed Dec 27 2023 23:36:57 GMT+0000 (Coordinated Universal Time)"
}

const BlogPostContent = () => {
    return <>
        {metadata.title}
    </>
}

export default BlogPostContent
