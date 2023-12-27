import fs from "fs";

const args = process.argv.slice(2);
const [name] = args;

if (name === undefined){
    console.error("Argument #1 missing: 'name'")
    process.exit(1)
}

const filename = `${name}.tsx`
const currentDate1 = Date().toString()
const currentDate = new Date(currentDate1)
const fileContent = `import {PostMetadata} from "@/models";

export const metadata: PostMetadata = {
    title: "",
    subtitle: "",
    description: "",
    date: "${currentDate}"
}

const BlogPostContent = () => {
    return <>
        {metadata.title}
    </>
}

export default BlogPostContent
`;

fs.writeFile(`./blog/${filename}`, fileContent, (err) => {
    if (err) throw err;
    console.log(`A blog file has been created in blog/${name}. Remember to populate this file as it can cause render failures in production.`);
});
