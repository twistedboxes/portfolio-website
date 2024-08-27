import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <>
      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: "100%" }}
        exit={{ translateX: "-200%" }}
        transition={{ duration:0.5, easings: ["easeIn", "easeOut"] }}
        className="fixed left-0 top-0 h-screen w-full origin-left bg-[--color-primary]"
      ></motion.div>
      <div className="flex flex-col h-screen items-center justify-center overflow-hidden bg-[--color-secondary]">
        <h1 className="text-3xl">I'm projects page</h1>
        <Link to="/">
          <button className="bg-[--color-primary] py-2 px-4 text-3xl">BACK</button>
        </Link>
      </div>
    </>
  );
};

export default Projects;
