import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter as Router, BrowserRouter, Route, Link, Routes } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes.js";

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <StrictMode>
      <AnimatedRoutes />
    </StrictMode>
  </BrowserRouter>,
);
