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
    img: "https://i.imgur.com/TqwbjVB.png",
    url: "https://ren-comfy-store.netlify.app/",
    github: "https://github.com/Rentoshiro/Comfy-Sloth",
    title: "Comfy Sloth",
  },
  {
    id: nanoid(),
    img: "https://i.imgur.com/nTLgjf3.png",
    url: "https://ren-mixmaster.netlify.app/",
    github: "https://github.com/Rentoshiro/mix-master",
    title: "Mix master",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://ren-search-github-user.netlify.app/login",
    github: "https://github.com/Rentoshiro/github-users",
    title: "Github User",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://ren-jobster.netlify.app",
    github: "https://github.com/Rentoshiro/jobster",
    title: "JobSter",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://main--ren-comfortable-house.netlify.app/",
    github: "https://github.com/Rentoshiro/comfy-store",
    title: "Comfortable House",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://main--ren-projects.netlify.app/",
    github: "https://github.com/Rentoshiro/Projects",
    title: "Projects",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://ren-placepicker.netlify.app/",
    github: "https://github.com/Rentoshiro/placepicker",
    title: "Place picker",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://main--ren-finalcountdown.netlify.app/",
    github: "https://github.com/Rentoshiro/Final-Countdown",
    title: "Final Countdown",
  },
];
