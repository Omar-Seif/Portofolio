import { useState } from "react";
import SkillCard from "../components/SkillCard"

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },

    // Backend
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express", level: 75, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "PostgreSQL", level: 65, category: "backend" },
    { name: "GraphQL", level: 60, category: "backend" },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Docker", level: 70, category: "tools" },
    { name: "Figma", level: 85, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
];




const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {


    const [activeCat, setActiveCat] = useState("all")
    // const [isFrontend, setFrontend] = useState(false)
    // const [isBackend, setBackend] = useState(false)
    // const [isTools, setTools] = useState(false)

    const filteredSkills = skills.filter(
        skill => activeCat === "all" || skill.category === activeCat
    )

    return (
        <section className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-primary text-glow">Skills</span>
                </h2>
                <div className="flex justify-center items-center space-x-3 md:space-x-6">
                    <button onClick={() => setActiveCat("all")} className="px-6 py-2 rounded-full hover:cosmic-button transition-all duration-500 text-sm">All</button>
                    <button onClick={() => setActiveCat("frontend")} className="px-6 py-2 rounded-full hover:cosmic-button transition-all duration-500 text-sm">Frontend</button>
                    <button onClick={() => setActiveCat("backend")} className="px-6 py-2 rounded-full hover:cosmic-button transition-all duration-500 text-sm">Backend</button>
                    <button onClick={() => setActiveCat("tools")} className="px-6 py-2 rounded-full hover:cosmic-button transition-all duration-500 text-sm">Tools</button>
                </div>

                {<div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredSkills.map((skill) =>
                        <SkillCard name={skill.name}
                            level={skill.level} />
                    )}
                </div>}

            </div>
        </section>
    )
}

export default SkillsSection
