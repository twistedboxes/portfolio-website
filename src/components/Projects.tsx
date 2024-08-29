import { Link } from "react-router-dom";
import AnimatedScroll from "./AnimatedScroll";
import ProjectCard from "./ProjectCard";

import { listOfProjects } from "../sources";

const projectPreview = listOfProjects.map((project) => {
  return (
    <ProjectCard
      link={project.link}
      image={project.image}
      title={project.title}
      desc={project.desc}
      key={project.title}
      stack={project.stack}
      sourceCode={project.sourceCode}
    />
  );
});

const Projects = () => {
  return (
    <>
      <AnimatedScroll />
      <div className="h-[100vh] w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-[--color-secondary] leading-3">
        <h1 className="mt-[320vh] select-none snap-center break-words pb-10 text-center text-6xl font-black uppercase lg:ml-12 lg:mt-[190%] lg:w-2/3 lg:text-left lg:text-[12em] lg:leading-[0.8em]">
          Recent projects
        </h1>
        <h2 className="mb-40 mt-[-1.8rem] w-full break-words pb-8 text-center text-xl font-black uppercase tracking-widest text-[--color-primary] lg:ml-12 lg:text-left">
          Have a look at some of the projects I’ve worked on.
        </h2>
        {projectPreview}
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
