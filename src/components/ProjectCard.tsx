import { IProjectCard } from "../types";

const ProjectCard = ({
  title,
  stack,
  link,
  desc,
  image,
  sourceCode,
}: IProjectCard) => {
  return (
    <div className="flex h-screen w-full shrink-0 snap-center flex-col items-center justify-center gap-0 bg-[--color-primary] p-7 text-xl">
      <div className="flex h-4/5 flex-col items-center justify-center rounded-sm bg-white p-4 px-6 py-8 shadow-2xl lg:w-3/4">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            border: "0.2em solid ",
            marginBottom: "1em",
          }}
          className="h-full w-full"
        ></div>
        <div className="w-full px-2 text-center lg:flex lg:justify-between lg:text-left">
          <h2 className="text-3xl font-black text-[--color-primary] decoration-[--color-primary] transition-colors duration-200 hover:text-[--color-accent] hover:underline lg:w-1/3">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h2>
          <span className="p-2 text-right">{desc}</span>
        </div>
        <p className="w-full p-2 text-center text-[--color-primary] lg:text-right">
          {stack.join(" - ")}
        </p>
        {sourceCode && (
          <a
            className="mt-2 bg-[--color-primary] px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-[--color-secondary] hover:text-black"
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
          >
            View On GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
