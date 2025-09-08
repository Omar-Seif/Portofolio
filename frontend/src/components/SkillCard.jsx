// Alternative: Use a single icon set to avoid import issues
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCisco,
} from "react-icons/si";
import {
  AiOutlineApi,
  AiOutlineCode,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { BsCpu, BsDiagram3, BsCodeSlash } from "react-icons/bs";

// Simplified icon mapping
const iconComponents = {
  java: FaJava,
  python: FaPython,
  javascript: FaJs,
  typescript: SiTypescript,
  html5: FaHtml5,
  css3: FaCss3Alt,
  react: FaReact,
  tailwindcss: SiTailwindcss,
  api: AiOutlineApi,
  nodejs: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  database: FaDatabase,
  mern: BsCodeSlash,
  ai: BsCpu,
  transformer: BsDiagram3,
  bert: AiOutlineFundProjectionScreen,
  github: FaGithub,
  datastructure: AiOutlineCode,
  oop: BsCodeSlash,
  software: AiOutlineCode,
  cisco: SiCisco,
};

const SkillCard = ({ name, icon }) => {
  const IconComponent = iconComponents[icon] || AiOutlineCode;

  return (
    <div className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center h-full">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
        <IconComponent className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-semibold text-lg text-center">{name}</h3>
    </div>
  );
};

export default SkillCard;
