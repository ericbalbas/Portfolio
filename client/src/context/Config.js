import { Icon } from "@iconify/react/dist/iconify.js";
import DefaultImg from '../asset/arktechlogo.png'
import ThesisImg from '../asset/Thesis.jpg'
import TodoImg from '../asset/todo1.jpg'
import LandingImage from '../asset/Landing Page.jpg'
import PortfolioImg from '../asset/Portfolio.jpg'

import SGL from '../asset/sgl.png'
import DLL from '../asset/dll.png'
import DCLL from '../asset/dcll.webp'
import SA from '../asset/sorting.png'
import BT from '../asset/btree.png'

export const navbarLinks = [
  { label: "Home", path: "#home" },
  { label: "Skills", path: "#skills" },
  { label: "Project", path: "#project" },
];

export const socials = [
  {
    label: "Twitter",
    path: "https://x.com/miro_xs?mx=2",
    icon: <Icon icon="line-md:twitter-filled" width="24" height="24" />,
  },
  {
    label: "GitHub",
    path: "https://github.com/ericbalbas",
    icon: <Icon icon="line-md:github-loop" width="24" height="24" />,
  },
  {
    label: "Indeed",
    className: "iconify",
    path: "www.linkedin.com/in/eric-john-balbas",
    icon: <Icon icon="line-md:linkedin" width="24" height="24" />,
  },
];

export const selfContent = [
  "Web Developer.",
  "Software Engineer.",
  "System Designer.",
  "Learning Algos.",
  "Learning React.js.",
];

export const selfSkills = [
  {
    label: "System Designer",
    icon: (
      <Icon
        className="skillIcon"
        icon="icon-park-solid:bydesign"
        width="60"
        height="60"
      />
    ),
  },
  {
    label: "Backend Developer",
    icon: (
      <Icon
        className="skillIcon"
        icon="ix:hexagon-vertical-bars-database"
        width="60"
        height="60"
      />
    ),
  },
  {
    label: "Frontend Developer",
    icon: (
      <Icon
        className="skillIcon"
        icon="simple-icons:jirasoftware"
        width="60"
        height="60"
      />
    ),
  },
  {
    label: "Full Stack Developer",
    icon: (
      <Icon
        className="skillIcon"
        icon="raphael:fullcube"
        width="60"
        height="60"
      />
    ),
  },
  {
    label: "Responsive Design",
    icon: (
      <Icon
        className="skillIcon"
        icon="material-symbols:responsive-layout-rounded"
        width="60"
        height="60"
      />
    ),
  },
];

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const works = [

  {
    label: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio website using React.js and Node.js to showcase skills, projects, and achievements.",
    img: PortfolioImg,
  },
  {
    label: "Landing Page with React.js & Tailwind",
    description:
      "Built a modern and responsive landing page using React.js and Tailwind CSS as a practice project to improve frontend development skills.",
    img: LandingImage,
  },
  {
    label: "Real-Time Todo List App",
    description:
      "Created a real-time Todo List App to practice and demonstrate proficiency in the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    img: TodoImg,
  },
  {
    label: "Thesis: Recording Management System",
    description:
      "Developed a Recording Management System for the MSWDO office in Tubao, La Union, streamlining data recording and improving access to records.",
    img: ThesisImg,
  },
  {
    label: "Main Programmer at Arktech Phils Inc.",
    description:
      "Developed and optimized Accounting, Purchasing, Sales, and Engineering modules to enhance reporting, streamline processes, and improve management.",
    img: DefaultImg,
  },
]

export const algos = [
  {
    label: "Singly Linked List",
    description:
      "Explored and coded a Singly Linked List, improving my understanding of data structures and node manipulation.",
    img: SGL,
  },
  {
    label: "Doubly Linked List",
    description:
      "Implemented a Doubly Linked List to master bi-directional traversal and enhance my data structure skills.",
    img: DLL,
  },
  {
    label: "Circular Doubly Linked List",
    description:
      "Created a Circular Doubly Linked List, focusing on circular references and efficient memory usage.",
    img: DCLL,
  },
  {
    label: "Searching Algorithm",
    description:
      "Coded and optimized various searching algorithms to understand their efficiency and applications.",
    img: SA,
  },
  {
    label: "Binary Tree",
    description:
      "Developed a Binary Tree structure, exploring concepts like tree traversal, balancing, and node management.",
    img: BT,
  },
];
