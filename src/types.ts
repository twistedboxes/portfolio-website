export type TListOfProjects = {
  title: string;
  desc: string;
  stack: string[];
  link: string;
  image: string;
  sourceCode?: string;
}[];

export interface IProjectCard {
  title: string;
  stack: string[];
  link: string;
  desc: string;
  image: string;
  sourceCode?: string;
}
