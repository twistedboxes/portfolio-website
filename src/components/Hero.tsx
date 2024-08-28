import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ translateX: "0" }}
        animate={{ translateX: "100%" }}
        transition={{ duration: 0.7, easings: ["easeIn", "easeOut"] }}
        className="fixed left-0 top-0 h-screen w-full origin-left bg-[--color-secondary]"
      ></motion.div>
      <div className="h-[55vh] w-full cursor-default break-words bg-[--color-secondary] p-4 font-black text-black md:flex md:flex-col md:items-center md:justify-center lg:h-screen lg:w-2/3">
        <h3 className="select-none text-center text-xl uppercase tracking-widest text-[--color-primary] lg:ml-[6em] lg:w-full lg:text-left">
          // Andrea Tamponi
        </h3>
        <h1 className="mt-8 select-none text-8xl uppercase leading-[0.8em] lg:ml-8 lg:mt-0 lg:text-[12em]">
          front-end dev
        </h1>
        <h2 className="mt-4 w-full break-words pb-8 text-center text-xl uppercase tracking-widest text-[--color-primary] lg:ml-[5em] lg:text-left">
          html - css - react - typescript - tailwind //
        </h2>
      </div>
    </>
  );
};

export default Hero;
