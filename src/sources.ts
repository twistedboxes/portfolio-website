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
      stack: ["React", "Typescript", "Tailwind"],
      link: "https://jenna-doe-photography.netlify.app/",
      image: personalPortfolio,
    },
    {
      title: "Easy Crypto",
      desc: "A way to check the current status of the top 100 Cryptocurrencies in the world, using API calls",
      stack: ["React", "Typescript", "Tailwind", "Netlify"],
      link: "https://easycryptoviewer.netlify.app/",
      image: easyCryptoPreview,
    },
    {
      title: "Photographer Portfolio Concept",
      desc: "A Showcase website",
      stack: ["React", "Javascript", "Tailwind", "Netlify"],
      link: "https://jenna-doe-photography.netlify.app/",
      image: photographerPortfolio,
    },
  ];