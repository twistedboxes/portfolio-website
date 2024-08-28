import { Link } from "react-router-dom";
import AnimatedScroll from "./AnimatedScroll";
import ProjectCard from "./ProjectCard";
import letitallpreview from "../assets/letitallpreview.png";

const Projects = () => {
  return (
    <>
      <AnimatedScroll />
      <div className="flex h-[100vh] w-full snap-y snap-mandatory flex-col justify-center overflow-y-scroll scroll-smooth bg-[--color-secondary] leading-3">
        <h1 className="lg:w-2/3 pb-10 lg:text-left text-center select-none snap-center break-words text-6xl font-black uppercase lg:leading-[0.8em] lg:ml-12 mt-[320vh] lg:mt-[190%] lg:text-[12em]">
          Recent projects
        </h1>
        <h2 className="mb-40 mt-[-1.8rem] w-full break-words pb-8 text-center text-xl font-black uppercase tracking-widest text-[--color-primary] lg:ml-12 lg:text-left">
          Have a look at some of the projects I’ve worked on.
        </h2>
        <ProjectCard
          title="Let It All Out"
          desc="Simple journaling tool with a stress-levels tracker"
          stack={["NextJS", "Tailwind", "MongoDB"]}
          link="https://www.letitallout.xyz"
          image={letitallpreview}
        />
        <ProjectCard
          title="Let It All Out"
          desc="Simple journaling tool with a stress-levels tracker"
          stack={["NextJS", "Tailwind", "MongoDB"]}
          link="https://www.letitallout.xyz"
          image={letitallpreview}
        />
        <ProjectCard
          title="Let It All Out"
          desc="Simple journaling tool with a stress-levels tracker"
          stack={["NextJS", "Tailwind", "MongoDB"]}
          link="https://www.letitallout.xyz"
          image={letitallpreview}
        />
      </div>
      <Link
        className="fixed right-0 top-0 mt-8 bg-black text-2xl font-black leading-[0.3em] text-white hover:bg-[--color-primary]"
        to="/"
      >
        <button className="p-4">BACK</button>
      </Link>
    </>
  );
};

export default Projects;
