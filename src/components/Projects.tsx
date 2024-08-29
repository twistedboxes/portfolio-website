import { Link } from "react-router-dom";
import AnimatedScroll from "./AnimatedScroll";
import ProjectCard from "./ProjectCard";
import letitallpreview from "../assets/letitallpreview.png";
import easyCryptoPreview from "../assets/easyCryptoPreview.png";
import photographerPortfolio from "../assets/photographerPortfolio.png";

const listOfProjects = [
  {
    title: "Let It All Out",
    desc: "Simple journaling tool with a stress-levels tracker",
    stack: ["NextJS", "Tailwind", "MongoDB", "Vercel"],
    link: "https://www.letitallout.xyz",
    image: letitallpreview,
  },
  {
    title: "Easy Crypto",
    desc: "A way to check the current status of the top 100 Cryptocurrencies in the world, using API calls",
    stack: ["React", "Tailwind", "Netlify"],
    link: "https://easycryptoviewer.netlify.app/",
    image: easyCryptoPreview,
  },
  {
    title: "Photographer Portfolio Concept",
    desc: "A Showcase website",
    stack: ["React", "Tailwind", "Netlify"],
    link: "https://jenna-doe-photography.netlify.app/",
    image: photographerPortfolio,
  },
];

const projectPreview = listOfProjects.map((project) => {
  return (
    <ProjectCard
      link={project.link}
      image={project.image}
      title={project.title}
      desc={project.desc}
      key={project.title}
      stack={project.stack}
    />
  );
});

const Projects = () => {
  return (
    <>
      <AnimatedScroll />
      <div className="flex h-[100vh] w-full snap-y snap-mandatory flex-col justify-center overflow-y-scroll scroll-smooth bg-[--color-secondary] leading-3">
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
