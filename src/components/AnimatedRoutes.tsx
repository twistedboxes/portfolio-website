import { Routes, Route } from "react-router-dom";
import App from "../App";
import ErrorPage from "../ErrorPage";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import { motion } from "framer-motion";
const AnimatedRoutes = () => {
  return (
    <motion.div
      // initial={{ translateX: "-100%" }}
      // animate={{ translateX: "0" }}
      // exit={{ translateX: "100vw"}}
      // transition={{ duration: 0.5 }}
    >
      <Routes>
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/" element={<App />} errorElement={<ErrorPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </motion.div>
  );
};

export default AnimatedRoutes;
