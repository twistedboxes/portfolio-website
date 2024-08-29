interface IProjectCard {
  title: string;
  stack: string[];
  link: string;
  desc: string;
  image: string;
}

const ProjectCard = ({ title, stack, link, desc, image }: IProjectCard) => {
  return (
    <div className="flex h-screen w-full shrink-0 snap-center flex-col items-center justify-center gap-0 bg-[--color-primary] p-7 text-xl">
      <div className="flex h-3/4 flex-col items-center justify-center rounded-sm px-6 bg-white p-4 py-8 shadow-2xl lg:w-3/4">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            border: "0.2em solid ",
            marginBottom: "1em",
          }}
          className="mb-2 h-full w-full"
        ></div>
        <div className="w-full px-2 text-center lg:flex lg:justify-between lg:text-left">
          <h2 className="text-2xl font-black decoration-[--color-accent] hover:text-[--color-primary] hover:underline lg:w-1/3">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h2>
          <span className="p-2">{desc}</span>
        </div>
        <p className="w-full p-2 text-center text-[--color-primary] lg:text-right">
          {stack.join(" - ")}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
