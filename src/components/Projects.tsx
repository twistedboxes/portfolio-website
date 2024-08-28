
import { Link } from "react-router-dom";
import AnimatedScroll from "./AnimatedScroll";
const Projects = () => {
  return (
    <>
     <AnimatedScroll />
      <div className="flex flex-col h-screen items-center justify-center overflow-hidden bg-[--color-secondary]">
        <h1 className="text-3xl">I'm projects page</h1>
        <Link to="/">
          <button className="bg-[--color-primary] py-2 px-4 text-3xl">BACK</button>
        </Link>
      </div>
    </>
  );
};

export default Projects;
