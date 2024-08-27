import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: "100%" }}
        exit={{ translateX: "-200%" }}
        transition={{ duration:0.5, easings: ["easeIn", "easeOut"] }}
        className="fixed right-0 top-0 h-screen w-full origin-left bg-[--color-primary]"
      ></motion.div>
      <div className="flex h-screen flex-col items-center justify-center overflow-hidden bg-[--color-secondary]">
        <h1 className="text-3xl">I'm Contact page</h1>
        <Link to="/">
          <button className="bg-[--color-primary] px-4 py-2 text-3xl">
            BACK
          </button>
        </Link>
      </div>
    </>
  );
};

export default Contact;
