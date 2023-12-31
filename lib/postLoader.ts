"use server";

import { Post } from "@/models";
import path from "path";
import fs from "fs";

export async function PostLoader(postDirectory: string): Promise<Post[]> {
    const directory = path.join(process.cwd(), `content/${postDirectory}`);
    const filenames = fs
        .readdirSync(directory)
        .filter((filename) => filename.endsWith("tsx"));
    return filenames.map((filename) => {
        const postModule = require(
            `../content/${postDirectory}/${filename.replace(".tsx", "")}`,
        );
        return {
            metadata: postModule.metadata,
            modName: filename.replace(".tsx", ""),
        };
    });
}

export async function SinglePostLoader(
    postDirectory: string,
    modName: string,
): Promise<Post[]> {
    return (await PostLoader(postDirectory)).filter(
        (post) => post.modName === modName,
    );
}
