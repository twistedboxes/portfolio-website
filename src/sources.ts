import easyCryptoPreview from "./assets/easyCryptoPreview.png";
import photographerPortfolio from "./assets/photographerPortfolio.png";
import personalPortfolio from "./assets/personalPortfolio.png";
import letitallpreview from "./assets/letitallpreview.png";

import { TListOfProjects } from "./types";

export const listOfProjects: TListOfProjects = [
  {
    title: "Let It All Out",
    desc: "Simple journaling tool with a stress-levels tracker",
    stack: ["NextJS", "Typescript", "Tailwind", "MongoDB", "Vercel"],
    link: "https://www.letitallout.xyz",
    image: letitallpreview,
  },
  {
    title: "Personal Portfolio",
    desc: "The website you're on!",
    stack: ["React", "Typescript", "Tailwind", "Framer Motion"],
    link: "/",
    sourceCode: "https://github.com/twistedboxes/portfolio-website",
    image: personalPortfolio,
  },

  {
    title: "Photographer Portfolio Concept",
    desc: "A Showcase website animated with Framer Motion",
    stack: ["React", "Javascript", "Tailwind", "Framer Motion"],
    link: "https://jenna-doe-photography.netlify.app/",
    image: photographerPortfolio,
    sourceCode: "https://github.com/twistedboxes/photographer-portfolio",
  },
  {
    title: "Easy Crypto",
    desc: "A way to check the current status of the top 100 Cryptocurrencies in the world, using API calls and filtering the results stored in a state.",
    stack: ["React", "Typescript", "Tailwind", "Netlify"],
    link: "https://easycryptoviewer.netlify.app/",
    image: easyCryptoPreview,
    sourceCode: "https://github.com/twistedboxes/EasyCrypto",
  },
];
