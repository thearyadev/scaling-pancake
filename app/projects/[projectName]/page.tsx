import { SinglePostLoader } from "@/lib/postLoader";
import { notFound } from "next/navigation";

const ProjectsPost = ({ params }: { params: { projectName: string } }) => {
  try {
    const Post = SinglePostLoader("projects", params.projectName)[0];
    return (
      <>
        <Post.component />
      </>
    );
  } catch (error) {
    notFound();
  }
};
export default ProjectsPost;
