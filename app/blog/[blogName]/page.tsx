import {Post} from "@/models";

function get_post_from_mod_name(modName: string): Post{
    const module = require(`../../../blog/${modName}`)
    return {
        metadata: module.metadata,
        component: module.default,
        modName: modName
    }
}

const BlogPost = ({params}:  {params: {blogName: string}}) => {
    const Post = get_post_from_mod_name(params.blogName)
    return <>
        <Post.component />
    </>

}

export default BlogPost