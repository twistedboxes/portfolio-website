import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="h-[50vh] w-full bg-[--color-primary] text-center lg:h-screen lg:w-1/3 lg:pt-[32%]">
      <ul className="flex h-full w-full flex-col justify-center gap-1 uppercase lg:items-end">
        <Link to="/projects">
          <li className="duration-400 w-full cursor-pointer bg-origin-content px-6 py-1 text-4xl font-black text-[--color-secondary] decoration-[--color-accent] underline-offset-8 transition-all hover:w-full hover:bg-[--color-secondary] hover:text-[--color-primary] hover:underline lg:text-right lg:text-5xl">
            <h2>Projects</h2>
          </li>
        </Link>
        <Link to="about">
          <li className="duration-400 w-full cursor-pointer bg-origin-content px-6 py-1 text-4xl font-black text-[--color-secondary] decoration-[--color-accent] underline-offset-8 transition-all hover:w-full hover:bg-[--color-secondary] hover:text-[--color-primary] hover:underline lg:text-right lg:text-5xl">
            <h2>About</h2>
          </li>
        </Link>
        <Link to="contact">
          <li className="duration-400 w-full cursor-pointer bg-origin-content px-6 py-1 text-4xl font-black text-[--color-secondary] decoration-[--color-accent] underline-offset-8 transition-all hover:w-full hover:bg-[--color-secondary] hover:text-[--color-primary] hover:underline lg:text-right lg:text-5xl">
            <h2>Contacts</h2>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
