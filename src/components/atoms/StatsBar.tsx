import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const stats = [
  {
    num: "2x 1st Prize",
    label: "Hackathon Winner",
    desc: "HACKRO'26 & NEXUS'26 🏆",
  },
  {
    num: "Production RAG",
    label: "Enterprise AI Helpdesk",
    desc: "FastAPI, pgvector & Gemini",
  },
  {
    num: "14+ Repos",
    label: "GitHub Codebases",
    desc: "LMS, FinTech, Agri-AI & RAG",
  },
  {
    num: "Class of 2027",
    label: "B.E. Computer Science",
    desc: "EASA College of Engg (Autonomous)",
  },
];

const StatsBar = () => {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-16 -mt-16 sm:-mt-20 mb-16">
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="glass-morphism rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10"
      >
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center ${
                idx < stats.length - 1 ? "md:border-r md:border-white/10" : ""
              }`}
            >
              <h3 className="text-[26px] sm:text-[32px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] via-[#00cea8] to-[#38bdf8]">
                {stat.num}
              </h3>
              <p className="mt-1 text-[15px] font-semibold text-white">{stat.label}</p>
              <span className="text-[12px] text-secondary mt-0.5">{stat.desc}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StatsBar;
