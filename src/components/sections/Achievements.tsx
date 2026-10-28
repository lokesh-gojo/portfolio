import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";
import { achievements, certifications } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { github } from "../../assets";

const Achievements = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.achievements} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          Competitive hackathon victories, engineering recognitions, and certified competencies.
        </motion.p>
      </div>

      {/* Hackathon Victories */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((item, idx) => (
          <motion.div
            key={item.title}
            variants={fadeIn(idx % 2 === 0 ? "right" : "left", "spring", idx * 0.3, 0.75)}
            className="glass-morphism rounded-2xl p-6 sm:p-8 border border-amber-500/30 relative overflow-hidden group hover:border-amber-400 transition-all shadow-xl"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />

            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                {item.badge}
              </span>
              <span className="text-[13px] text-secondary font-medium">{item.date}</span>
            </div>

            <h3 className="text-[22px] font-extrabold text-white group-hover:text-amber-300 transition-colors">
              {item.title}
            </h3>

            <p className="text-[14px] font-semibold text-[#00cea8] mt-1">
              {item.organization}
            </p>

            <p className="text-secondary mt-3 text-[14px] leading-[24px]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* GitHub & Open Source Activity Showcase */}
      <motion.div
        variants={fadeIn("up", "spring", 0.25, 0.75)}
        className="mt-14 glass-morphism rounded-2xl p-6 sm:p-8 border border-white/10"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary">
              <img src={github} alt="GitHub" className="h-7 w-7 object-contain" />
            </div>
            <div>
              <h3 className="text-[20px] font-bold text-white">GitHub Open Source &amp; Codebases</h3>
              <p className="text-[13px] text-secondary">Active code, repositories, and technical documentation</p>
            </div>
          </div>
          <a
            href={config.social.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-gradient-to-r from-[#915EFF] to-[#7038e8] px-5 py-2.5 text-[13px] font-bold text-white hover:scale-105 transition-all shadow-md flex items-center gap-2"
          >
            <span>Follow @lokesh-gojo</span>
            <span>↗</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="rounded-xl bg-primary/70 p-4 border border-white/5">
            <h4 className="text-[24px] font-extrabold text-[#915EFF]">14+</h4>
            <p className="text-[12px] font-medium text-slate-300 mt-1">Public Repositories</p>
          </div>
          <div className="rounded-xl bg-primary/70 p-4 border border-white/5">
            <h4 className="text-[24px] font-extrabold text-[#00cea8]">Python &amp; AI</h4>
            <p className="text-[12px] font-medium text-slate-300 mt-1">Core Tech Specialization</p>
          </div>
          <div className="rounded-xl bg-primary/70 p-4 border border-white/5">
            <h4 className="text-[24px] font-extrabold text-amber-400">2x</h4>
            <p className="text-[12px] font-medium text-slate-300 mt-1">Hackathon First Prizes</p>
          </div>
          <div className="rounded-xl bg-primary/70 p-4 border border-white/5">
            <h4 className="text-[24px] font-extrabold text-sky-400">100%</h4>
            <p className="text-[12px] font-medium text-slate-300 mt-1">Source Code Grounded</p>
          </div>
        </div>
      </motion.div>

      {/* Certifications Grid */}
      <div className="mt-16">
        <h3 className="text-[24px] font-bold text-white mb-6 flex items-center gap-2">
          <span>📜</span> Verified Certifications &amp; Training
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              variants={fadeIn("up", "spring", idx * 0.15, 0.75)}
              className="glass-morphism rounded-xl p-5 border border-white/5 hover:border-[#915EFF]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-[#915EFF] font-semibold mb-2">
                  <span>{cert.issuer}</span>
                  <span className="text-secondary">{cert.date}</span>
                </div>
                <h4 className="text-[16px] font-bold text-white leading-snug">
                  {cert.title}
                </h4>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5">
                <p className="text-[12px] text-secondary">
                  <span className="text-white/60 font-medium">Competencies: </span>
                  {cert.skills}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
