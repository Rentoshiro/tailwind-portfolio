import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-orange-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-amber-300" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-sky-700" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://i.imgur.com/ZZNDRUJ.png",
    url: "https://ren-comfy-store.netlify.app/",
    github: "https://github.com/Rentoshiro/Comfy-Sloth",
    title: "Comfy Sloth",
  },
  {
    id: nanoid(),
    img: "https://i.imgur.com/mq4SZzp.png",
    url: "https://ren-mixmaster.netlify.app/",
    github: "https://github.com/Rentoshiro/mix-master",
    title: "Mix master",
  },
  {
    id: nanoid(),
    img: "https://i.imgur.com/swYpB2U.png",
    url: "https://ren-search-github-user.netlify.app/login",
    github: "https://github.com/Rentoshiro/github-users",
    title: "Github User",
  },
  {
    id: nanoid(),
    img: "https://i.imgur.com/kS1NkRp.png",
    url: "https://ren-jobster.netlify.app",
    github: "https://github.com/Rentoshiro/jobster",
    title: "JobSter",
  },
  {
    id: nanoid(),
    img: "https://i.imgur.com/7vtK7ns.png",
    url: "https://main--ren-comfortable-house.netlify.app/",
    github: "https://github.com/Rentoshiro/comfy-store",
    title: "Comfortable House",
  },
  {
    id: nanoid(),
    img: "https://i.imgur.com/wnQU9cb.png",
    url: "https://main--ren-projects.netlify.app/",
    github: "https://github.com/Rentoshiro/Projects",
    title: "Projects",
  },
  {
    id: nanoid(),
    img: "https://i.imgur.com/U1PYML0.png",
    url: "https://ren-placepicker.netlify.app/",
    github: "https://github.com/Rentoshiro/placepicker",
    title: "Place picker",
  },
  {
    id: nanoid(),
    img: "https://i.imgur.com/jBIIsI6.png",
    url: "https://main--ren-foodorder.netlify.app/",
    github: "https://github.com/Rentoshiro/FoodOrder",
    title: "Food order",
  },
  {
    id: nanoid(),
    img: "https://i.imgur.com/mDb3iqN.png",
    url: "https://ren-tictactoe.netlify.app/",
    github: "https://github.com/Rentoshiro/tic-tac-toe",
    title: "Tic-tac-toe",
  },
  {
    id: nanoid(),
    img: "https://i.imgur.com/Yh49lVv.png",
    url: "https://main--ren-finalcountdown.netlify.app/",
    github: "https://github.com/Rentoshiro/Final-Countdown",
    title: "Final Countdown",
  },
  {
    id: nanoid(),
    img: "https://i.imgur.com/fvNAbB5.png",
    url: "https://rentoshiro.github.io/social-media/#/login",
    github: "https://github.com/Rentoshiro/social-media",
    title: "Social media",
  },
];
