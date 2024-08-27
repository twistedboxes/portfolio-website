import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Menu = () => {
  return (
    <motion.div
      initial={{ translateX: 0 }}
      exit={{ translateX: "-100vw" }}
      transition={{ duration: 1 }}
      className="h-[50vh] w-full bg-[--color-primary] text-center lg:h-screen lg:w-1/3 lg:pt-[32%]"
    >
      <ul className="flex h-full w-full flex-col justify-center gap-1 uppercase lg:items-end">
        <Link className="w-full" to="/projects">
          <li className="cursor-pointer bg-origin-content px-6 py-1 text-4xl font-black text-[--color-secondary] decoration-[--color-accent] underline-offset-8 transition-all hover:w-full hover:bg-[--color-secondary] hover:text-[--color-primary] hover:underline lg:text-right lg:text-5xl">
            Projects
          </li>
        </Link>
        <Link className="w-full" to="about">
          <li className="w-full cursor-pointer bg-origin-content px-6 py-1 text-4xl font-black text-[--color-secondary] decoration-[--color-accent] underline-offset-8 transition-all hover:w-full hover:bg-[--color-secondary] hover:text-[--color-primary] hover:underline lg:text-right lg:text-5xl">
            <h2>About</h2>
          </li>
        </Link>
        <Link className="w-full" to="contacts">
          <li className="w-full cursor-pointer bg-[--color-primary] bg-origin-content px-6 py-1 text-4xl font-black text-[--color-secondary] decoration-[--color-accent] underline-offset-8 transition-all hover:w-full hover:bg-[--color-secondary] hover:text-[--color-primary] hover:underline lg:text-right lg:text-5xl">
            <h2>Contacts</h2>
          </li>
        </Link>
      </ul>
    </motion.div>
  );
};

export default Menu;
