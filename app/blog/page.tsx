import {Post} from "@/models";
import path from "path";
import fs from "fs";

function get_all_posts(): Post[] {
    const directory = path.join(process.cwd(), "blog")
    const filenames = fs.readdirSync(directory).filter(filename => filename.endsWith("tsx"))
    return filenames.map(filename => {
        const module = require(`../../blog/${filename.replace(".tsx", "")}`)
        return {
            metadata: module.metadata,
            component: module.default,
            modName: filename.replace(".tsx", "")
        }
    })
}

const BlogList = () => {
    const posts = get_all_posts()
    console.log(posts)
    return <>
        <ul>
            {posts.map(item => (<li><a href={`/blog/${item.modName}`}> {item.metadata.title} </a></li>))}
        </ul>
    </>
}

export default BlogList