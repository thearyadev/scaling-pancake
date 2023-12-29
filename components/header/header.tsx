import Navbar from "@/components/header/nabvar";
import { PostLoader } from "@/lib/postLoader";
const Header = () => {
  const projects = PostLoader("projects").map((post) => ({
    ...post,
    component: undefined,
  }));
  return (
    <header className="sticky top-0 z-30 flex w-screen items-center justify-between bg-background p-5">
      <h1 className="text-2xl">[logo]</h1>
      <Navbar projects={projects} />
      <h1 className="text-2xl">[utility icons]</h1>
    </header>
  );
};
export default Header;
