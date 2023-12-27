import React from "react";
import { PostMetadata } from "@/models/postMetadata";

export type Post = {
  metadata: PostMetadata;
  component: React.ComponentType<any>;
};
