import { useState } from "react";
import SkillCard from "../components/SkillCard";

const skills = [
  // Programming Languages
  { name: "Java", category: "languages", icon: "java" },
  { name: "Python", category: "languages", icon: "python" },
  { name: "JavaScript", category: "languages", icon: "javascript" },
  { name: "TypeScript", category: "languages", icon: "typescript" },

  // Web Technologies
  { name: "HTML", category: "web", icon: "html5" },
  { name: "CSS", category: "web", icon: "css3" },
  { name: "React", category: "web", icon: "react" },
  { name: "Tailwind CSS", category: "web", icon: "tailwindcss" },
  { name: "REST APIs", category: "web", icon: "api" },

  // Backend & Databases
  { name: "Node.js", category: "backend", icon: "nodejs" },
  { name: "Express", category: "backend", icon: "express" },
  { name: "MongoDB", category: "backend", icon: "mongodb" },
  { name: "SQL", category: "backend", icon: "database" },
  { name: "MERN Stack", category: "backend", icon: "mern" },

  // AI/ML
  { name: "Fine-tuning LLMs", category: "ai_ml", icon: "ai" },
  { name: "Transformer Models", category: "ai_ml", icon: "transformer" },
  { name: "BERT", category: "ai_ml", icon: "bert" },

  // Tools & Platforms
  { name: "GitHub", category: "tools", icon: "github" },

  // Concepts
  { name: "Data Structures", category: "concepts", icon: "datastructure" },
  { name: "OOP", category: "concepts", icon: "oop" },
  { name: "Software Engineering", category: "concepts", icon: "software" },

  // Networking
  { name: "CCNA", category: "networking", icon: "cisco" },
];

const categories = [
  "all",
  "languages",
  "web",
  "backend",
  "ai_ml",
  "tools",
  "concepts",
  "networking",
];

const categoryLabels = {
  all: "All Skills",
  languages: "Programming Languages",
  web: "Web Technologies",
  backend: "Backend & Databases",
  ai_ml: "AI & Machine Learning",
  tools: "Tools & Platforms",
  concepts: "Concepts",
  networking: "Networking",
};

const SkillsSection = () => {
  const [activeCat, setActiveCat] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCat === "all" || skill.category === activeCat
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary text-glow">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCat(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCat === category
                  ? "cosmic-button"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Scrollable Skills Container */}
        <div className="relative">
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-96 overflow-y-auto p-2 custom-scrollbar">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgb(59 130 246) transparent;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgb(59 130 246);
          border-radius: 4px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgb(37 99 235);
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
