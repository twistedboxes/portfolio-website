interface IProject {
  title: string;
  stack: string[];
  link: string; // URL of the project page or repository.
  previewImage: string; // URL of the project's preview image.
}

const Project = ({ title, stack, link, previewImage }: IProject) => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <h2>{title}</h2>
      <a href={link}>
        <img src={previewImage} alt="projectImage" />
      </a>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech, index) => (
          <span
            key={index}
            className="text-sm font-medium text-[--color-primary]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Project;
