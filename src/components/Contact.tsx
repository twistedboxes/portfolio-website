import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedScroll from "./AnimatedScroll";
const Contact = () => {
  return (
    <>
      <AnimatedScroll />
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full bg-[--color-secondary] lg:h-screen lg:w-2/3">
          <h1 className="mt-[6em] text-center text-6xl font-black uppercase leading-3 lg:ml-6 lg:mt-[26vh] lg:w-full lg:text-left lg:text-[12em] lg:leading-[0.8em]">
            Contacts
          </h1>
          <h2 className="my-8 w-full break-words pb-8 text-center text-xl font-black uppercase tracking-widest text-[--color-primary] lg:ml-8 lg:mt-2 lg:text-left">
            Let's get in touch
          </h2>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 break-words px-6 py-12 text-center text-2xl font-bold leading-9 lg:h-screen lg:w-1/3 lg:px-12 lg:pt-[12em] lg:text-right lg:text-3xl">
          <a
            className="text-3xl font-black decoration-[--color-accent] underline-offset-8 transition-colors duration-200 hover:text-[--color-secondary] hover:underline"
            href="mailto:tamponiandrea@gmail.com"
          >
            tamponiandrea@gmail.com
          </a>
          <ul className="flex w-full px-8 flex-col gap-2">
            <li className="hover:text-[--color-secondary] hover:underline underline-offset-8 decoration-[--color-accent]  w-full text-center text-3xl lg:text-right">
              <a
                href="https://www.linkedin.com/in/andrea-tamponi-984778179"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li className="hover:text-[--color-secondary] hover:underline underline-offset-8 decoration-[--color-accent]  w-full text-center text-3xl lg:text-right">
              <a
                href="https://github.com/twistedboxes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
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

export default Contact;
