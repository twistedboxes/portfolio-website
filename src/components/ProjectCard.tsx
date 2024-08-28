interface IProjectCard {
  title: string;
  stack: string[];
  link: string;
  desc: string;
  image: string;
}

const ProjectCard = ({ title, stack, link, desc, image }: IProjectCard) => {
  return (
    <div className="my-8 flex h-screen w-full shrink-0 snap-center flex-col items-center justify-center gap-0 bg-[--color-primary] p-7 text-xl">
      <div className="flex h-3/4 w-3/4 flex-col items-center justify-center rounded-sm bg-[--color-secondary] p-4 py-8 shadow-2xl">
        <img className="mb-8 max-w-[70%]" src={image} alt="projectImage" />
        <div className="flex w-full justify-around">
          <h2 className="text-2xl font-black decoration-[--color-accent] hover:text-[--color-primary] hover:underline">
            {title}
          </h2>
          <span className="lg:text-right">{desc}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
