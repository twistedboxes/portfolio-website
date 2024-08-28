import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedScroll from "./AnimatedScroll";
const About = () => {
  return (
    <>
      <AnimatedScroll/>
      <div className="flex h-screen flex-col items-center justify-center overflow-hidden bg-[--color-secondary]">
        <h1 className="text-3xl">I'm About page</h1>
        <Link to="/">
          <button className="bg-[--color-primary] px-4 py-2 text-3xl">
            BACK
          </button>
        </Link>
      </div>
    </>
  );
};

export default About;
