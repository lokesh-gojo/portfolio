import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`absolute inset-0 top-[85px] sm:top-[100px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none z-10`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-72" />
        </div>

        <div className="max-w-2xl pointer-events-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 px-4 py-1.5 mb-3 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[12px] sm:text-[13px] font-semibold text-[#dfd9ff]">
              2x Hackathon 1st Prize Winner 🏆 · Open to Internships
            </span>
          </div>

          <h1 className="text-white font-black lg:text-[60px] sm:text-[46px] xs:text-[36px] text-[30px] lg:leading-[72px]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#00cea8]">{config.hero.name}</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[18px] sm:text-[16px] text-[14px] lg:leading-[28px] mt-2 max-w-xl">
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-[#915EFF] to-[#7038e8] px-6 py-2.5 text-[14px] font-bold text-white shadow-lg shadow-[#915EFF]/30 transition-all hover:scale-105 hover:shadow-xl"
            >
              Explore Projects 🚀
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/20 bg-tertiary/80 backdrop-blur-md px-6 py-2.5 text-[14px] font-semibold text-white transition-all hover:bg-white/10 hover:border-white/40"
            >
              Get In Touch ✉️
            </a>
            <a
              href={config.social.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md px-4 py-2.5 text-[14px] font-medium text-secondary transition-all hover:text-white hover:border-white/30"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="xs:bottom-10 absolute bottom-8 flex w-full items-center justify-center z-10">
        <a href="#about" aria-label="Scroll to About section">
          <div className="border-secondary flex h-[60px] w-[32px] items-start justify-center rounded-3xl border-2 p-2">
            <motion.div
              animate={{
                y: [0, 22, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-2.5 w-2.5 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
