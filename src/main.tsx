import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </StrictMode>
    ,
  </BrowserRouter>,
);
