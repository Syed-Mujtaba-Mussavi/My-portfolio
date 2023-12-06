import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { Service, ISkill, IProject, Category } from "./type";
import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b> CSS</b>,<b> Tailwind</b>,<b> Javascript</b>,<b> React.js</b> and <b>Next.js</b>",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about: "In process of learning",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "In process of learning",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Adobe XD</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "70",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Adobe XD",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "60",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Nike shoe",
    image_path: "/portfolio11.PNG",
    deployed_url: "https://nike-shoe-landing-page.netlify.app/",
    github_url: "https://github.com/Syed-Mujtaba-Mussavi/Nike-landing-page",
    category: ["Tailwind"],
    description: "Nike Landing Page made by React and Tailwind css",
    key_techs: ["react", "Tailwind"],
  },
  {
    id: 2,
    name: "Game Hub",
    image_path: "/portfolio10.PNG",
    deployed_url: "https://game-hub-lac-xi.vercel.app/",
    github_url: "https://github.com/Syed-Mujtaba-Mussavi/game-hub",
    category: ["react"],
    description: "It's a web app for searching your favorite games",
    key_techs: ["react", "Material UI"],
  },
  {
    id: 3,
    name: "Promptopia",
    image_path: "/portfolio9.PNG",
    deployed_url: "https://promptopia-project-sigma.vercel.app/",
    github_url: "https://github.com/Syed-Mujtaba-Mussavi/promptopia_project",
    category: ["next"],
    description:
      "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
    key_techs: ["Next", "react", "Tailwind"],
  },
  {
    id: 4,
    name: "open-ai-article-summarizer",
    image_path: "/portfolio8.PNG",
    deployed_url: "https://open-ai-article-summarizer.netlify.app/",
    github_url:
      "https://github.com/Syed-Mujtaba-Mussavi/AI-Article-Summarizer/tree/master",
    category: ["react"],
    description:
      "Simplify your reading with summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries",
    key_techs: ["React", "OpenAI API"],
  },
  {
    id: 5,
    name: "React CRUD app",
    image_path: "/portfolio12.PNG",
    deployed_url: "Nike Landing Page made by React and Tailwind css",
    github_url: "https://github.com/Syed-Mujtaba-Mussavi/react-crud-app",
    category: ["react"],
    description: "A website to add users and implement react CRUD features",
    key_techs: ["React", "Bootstrap"],
  },
  {
    id: 6,
    name: "Glassy portfolio",
    image_path: "/portfolio.PNG",
    deployed_url: "https://glass-portfolioo.netlify.app/",
    github_url: "https://github.com/Syed-Mujtaba-Mussavi/portfolio-design",
    category: ["HTML&CSS"],
    description: "Glassy template of personal portfolio",
    key_techs: ["HTML", "CSS"],
  },
  {
    id: 7,
    name: "Bankist App",
    image_path: "/portfolio1.PNG",
    deployed_url: "https://bankist-2023.netlify.app/",
    github_url: "https://github.com/Syed-Mujtaba-Mussavi/Bankist-Web",
    category: ["Javascript"],
    description: "It's a landing page for a bank",
    key_techs: ["HTML", "CSS", "javascript"],
  },

  {
    id: 8,
    name: "Pig Game",
    image_path: "/portfolio2.PNG",
    deployed_url: "https://pig-game23.netlify.app/",
    github_url: "https://github.com/Syed-Mujtaba-Mussavi/pig-game",
    category: ["Javascript"],
    description: "A dice game to improve javascript skill",
    key_techs: ["HTML", "CSS", "javascript"],
  },

  {
    id: 9,
    name: "Grocery Store",
    image_path: "/portfolio3.PNG",
    deployed_url: "https://grocery-store-dev.netlify.app/",
    github_url:
      "https://github.com/Syed-Mujtaba-Mussavi/Grocery-website-freshy-",
    category: ["HTML&CSS"],
    description: "It's an online grocery store design",
    key_techs: ["HTML", "CSS"],
  },

  {
    id: 10,
    name: "Guess my number game",
    image_path: "/portfolio4.PNG",
    deployed_url: "https://guess-my-number-game22.netlify.app/",
    github_url: "https://github.com/Syed-Mujtaba-Mussavi/guess-my-number-game",
    category: ["Javascript"],
    description: "A Guess my number game to improve javascript skill",
    key_techs: ["HTML", "CSS", "Javascript"],
  },

  {
    id: 11,
    name: "Mapty",
    image_path: "/portfolio5.PNG",
    deployed_url: "https://mapty-pro.netlify.app/",
    github_url: "https://github.com/Syed-Mujtaba-Mussavi/Mapty-project",
    category: ["Javascript"],
    description:
      "Mapty project it's a website that you can set up your destination on the map and track your running or cycling",
    key_techs: ["javascript", "HTML", "CSS"],
  },
  {
    id: 12,
    name: "Natorious",
    image_path: "/portfolio6.PNG",
    deployed_url: "https://natorious-web.netlify.app/",
    github_url: "https://github.com/Syed-Mujtaba-Mussavi/Natorious-",
    category: ["HTML&CSS"],
    description: "exciting tours for adventurous people website",
    key_techs: ["HTML", "CSS", "Sass"],
  },
  {
    id: 13,
    name: "Omni-food",
    image_path: "/portfolio7.PNG",
    deployed_url: "https://omni-food-muj.netlify.app/",
    github_url: "https://github.com/Syed-Mujtaba-Mussavi/omnifood-muj",
    category: ["HTML&CSS"],
    description:
      "It's an Al food ordering website that provide a healthy food around the clock and have a annual plan and monthly plan of serving and payment",
    key_techs: ["HTML", "CSS"],
  },
];
