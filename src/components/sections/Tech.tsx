import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";
import { fadeIn } from "../../utils/motion";

const skillCategories = [
  {
    title: "AI & Generative AI",
    icon: "🤖",
    skills: [
      "Python",
      "Google Gemini API SDK",
      "Strict Grounded RAG",
      "FastAPI",
      "Supabase pgvector",
      "Sentence-Transformers",
      "SpeechRecognition & NLP",
    ],
  },
  {
    title: "Frontend & 3D Web",
    icon: "🌐",
    skills: [
      "React.js",
      "Three.js / React Three Fiber",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Backend & Databases",
    icon: "⚙️",
    skills: [
      "Python (FastAPI / Uvicorn)",
      "Node.js & Express",
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "SQLite (Local Fallback)",
      "RESTful APIs",
    ],
  },
  {
    title: "DevOps, Tools & IoT",
    icon: "🧰",
    skills: [
      "Docker & Containerization",
      "Google Cloud Run",
      "Git & GitHub",
      "ESP32 IoT Telemetry",
      "VS Code",
      "Figma",
      "Postman",
    ],
  },
];

// Display the 14 core technologies matching the portfolio layout
const coreTechNames = [
  "Python",
  "FastAPI",
  "React JS",
  "Redux",
  "TypeScript",
  "Three JS",
  "JavaScript",
  "Tailwind CSS",
  "HTML 5",
  "CSS 3",
  "Node JS",
  "PostgreSQL",
  "MongoDB",
  "Docker",
];

const TechBall: React.FC<{ name: string; icon: string; index: number }> = ({
  name,
  icon,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.05, 0.75)}
      className="flex flex-col items-center justify-center group"
    >
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        perspective={800}
        glareColor="#915EFF"
        glareMaxOpacity={0.35}
        glareBorderRadius="50%"
        className="w-28 h-28 cursor-grab active:cursor-grabbing"
      >
        <div className="relative w-full h-full rounded-full p-[2px] shadow-2xl transition-transform duration-300 group-hover:scale-110">
          {/* 3D Faceted Metallic Sphere Core */}
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#2e2a4a] via-[#1c1838] to-[#09061c] border border-white/20 p-3 flex items-center justify-center overflow-hidden shadow-[inset_0_4px_14px_rgba(255,255,255,0.2),0_10px_25px_rgba(0,0,0,0.6)]">
            {/* Specular 3D Lighting Glare */}
            <div className="absolute -top-5 -left-5 w-14 h-14 bg-white/25 rounded-full blur-md pointer-events-none" />
            <div className="absolute -bottom-5 -right-5 w-14 h-14 bg-[#915EFF]/25 rounded-full blur-md pointer-events-none" />

            {/* Crisp 3D Elevated Logo */}
            <img
              src={icon}
              alt={name}
              className="w-14 h-14 object-contain filter drop-shadow-[0_6px_10px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-115 relative z-10"
            />
          </div>
        </div>
      </Tilt>

      <span className="mt-2.5 text-[12px] font-semibold text-secondary group-hover:text-white transition-colors bg-tertiary/90 px-3 py-1 rounded-full border border-white/10 shadow-md">
        {name}
      </span>
    </motion.div>
  );
};

const Tech = () => {
  const displayedTech = technologies.filter((t) =>
    coreTechNames.includes(t.name)
  );

  return (
    <>
      <Header useMotion={true} {...config.sections.tech} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
      >
        Interactive 3D technology matrix. Hover and drag across the physical 3D spheres to inspect my development stack.
      </motion.p>

      {/* 3D Interactive Spheres Grid (Ultra-stable, 60fps, 0 WebGL context crashes) */}
      <div className="mt-12 flex flex-row flex-wrap justify-center gap-7 sm:gap-9 max-w-6xl mx-auto">
        {displayedTech.map((technology, index) => (
          <TechBall
            key={technology.name}
            name={technology.name}
            icon={technology.icon}
            index={index}
          />
        ))}
      </div>

      {/* Structured Domain Competency Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            variants={fadeIn("up", "spring", idx * 0.2, 0.75)}
            className="glass-morphism rounded-2xl p-6 border border-white/10 hover:border-[#915EFF]/40 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[24px]">{cat.icon}</span>
              <h3 className="text-[17px] font-bold text-white">{cat.title}</h3>
            </div>
            <ul className="space-y-2 list-none">
              {cat.skills.map((skill, sIdx) => (
                <li
                  key={sIdx}
                  className="flex items-center gap-2 text-[13px] text-secondary"
                >
                  <span className="text-[#915EFF] text-[10px]">●</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
