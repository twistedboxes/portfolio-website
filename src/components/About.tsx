import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedScroll from "./AnimatedScroll";
const About = () => {
  return (
    <>
      <AnimatedScroll />
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full bg-[--color-secondary] lg:h-screen lg:w-1/2">
          <h1 className="mt-[5em] break-words text-center text-6xl font-black uppercase leading-3 lg:ml-6 lg:mt-[25vh] lg:w-full lg:text-left lg:text-[12em] lg:leading-[0.8em]">
            About
          </h1>
          <h2 className="my-8 mb-[4em] w-full break-words pb-8 text-center text-xl font-black uppercase tracking-widest text-[--color-primary] lg:ml-8 lg:mt-2 lg:text-left">
            Learn more about me
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, translateX: 200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex text-gray-100 flex-col items-center justify-center gap-6 overflow-y-scroll break-words px-6 py-8 text-[1.6rem] font-bold leading-9 lg:h-screen lg:w-1/2 lg:px-12 lg:pt-[14em] lg:text-right lg:text-2xl"
        >
          <motion.h3
            initial={{ opacity: 0, translateX: 200 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
            className="mt-4 w-full text-center text-5xl font-black text-[--color-secondary] lg:mt-6 lg:text-right"
          >
            Who am I?
          </motion.h3>
          <p className="pt-8">
            Passionate about technology, I began my programming journey with
            <span className="text-[--color-secondary]"> Python</span>,
            developing projects like text-based adventures and a password
            manager.
          </p>
          <p>
            With a background in Graphic Design, I transitioned to web
            development to bring my designs to life, learning front-end
            technologies such as{" "}
            <span className="text-[--color-secondary]">
              HTML, CSS, JavaScript, Typescript
            </span>
            , and currently focusing on{" "}
            <span className="text-[--color-secondary]">
              ReactJS, NextJS, and Tailwind
            </span>
            , using GitHub to keep track of my progress.
          </p>
          I’m eager to explore new technologies and take on challenging
          projects. I am proficient with various operating systems, Adobe
          Creative Suite, and virtualization tools, and have a solid
          understanding of Unix shell and command-line software.
          <motion.h3
            initial={{ opacity: 0, translateX: 200 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
            className="mt-4 w-full text-center text-5xl font-black text-[--color-secondary] lg:mt-6 lg:text-right"
          >
            Certifications
          </motion.h3>
          <a
            className="my-4 w-full text-right text-3xl font-black text-gray-100 decoration-[--color-accent] underline-offset-8 transition-colors duration-200 hover:text-[--color-secondary] hover:underline"
            href="https://www.coursera.org/account/accomplishments/professional-cert/EU246NTKX3J2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="text-center lg:text-right">
              <span className="text-[--color-secondary]">Meta</span> Front-End
              Developer
            </h4>
          </a>
          <p className="break-words">
            I have successfully completed the 9-course program that prepares
            learners for an entry-level career as front-end developers.
          </p>
        </motion.div>
      </div>
      <Link
        className="fixed right-0 top-0 mt-8 bg-black text-2xl font-black leading-[0.3em] text-gray-100 hover:bg-[--color-primary]"
        to="/"
      >
        <button className="p-4">BACK</button>
      </Link>
    </>
  );
};

export default About;
