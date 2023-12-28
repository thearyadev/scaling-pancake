import { Post } from "@/models";
import path from "path";
import fs from "fs";

export function PostLoader(postDirectory: string): Post[] {
  const directory = path.join(process.cwd(), postDirectory);
  const filenames = fs
    .readdirSync(directory)
    .filter((filename) => filename.endsWith("tsx"));
  return filenames.map((filename) => {
    const module = require(
      `../${postDirectory}/${filename.replace(".tsx", "")}`,
    );
    return {
      metadata: module.metadata,
      component: module.default,
      modName: filename.replace(".tsx", ""),
    };
  });
}

export function SinglePostLoader(
  postDirectory: string,
  modName: string,
): Post[] {
  return PostLoader(postDirectory).filter((post) => post.modName === modName);
}
