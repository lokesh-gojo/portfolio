import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
  desc?: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon, desc }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    glareColor="#915EFF"
    className="w-full xs:w-[260px]"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.35, 0.75)}
      className="green-pink-gradient shadow-card w-full rounded-[22px] p-[1px] h-full"
    >
      <div className="bg-tertiary flex min-h-[300px] flex-col items-center justify-between rounded-[22px] px-6 py-8 text-center border border-white/5 h-full">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/80 p-3 shadow-inner">
          <img
            src={icon}
            alt={title}
            className="h-12 w-12 object-contain"
          />
        </div>

        <div className="my-3">
          <h3 className="text-[19px] font-bold text-white leading-tight">
            {title}
          </h3>
          {desc && (
            <p className="mt-2 text-[13px] text-secondary leading-[20px]">
              {desc}
            </p>
          )}
        </div>

        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#915EFF] to-[#00cea8]" />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

      {/* Quick Profile Key Facts */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div className="rounded-xl bg-tertiary/60 p-4 border border-white/5">
          <p className="text-[11px] font-semibold text-[#915EFF] uppercase tracking-wider">Education</p>
          <p className="text-[14px] font-bold text-white mt-0.5">B.E. Computer Science</p>
          <span className="text-[12px] text-secondary">EASA Autonomous (2027)</span>
        </div>

        <div className="rounded-xl bg-tertiary/60 p-4 border border-white/5">
          <p className="text-[11px] font-semibold text-[#00cea8] uppercase tracking-wider">Location</p>
          <p className="text-[14px] font-bold text-white mt-0.5">Coimbatore, India</p>
          <span className="text-[12px] text-secondary">Tamil Nadu · Open to Relocate</span>
        </div>

        <div className="rounded-xl bg-tertiary/60 p-4 border border-white/5">
          <p className="text-[11px] font-semibold text-yellow-400 uppercase tracking-wider">Hackathons</p>
          <p className="text-[14px] font-bold text-white mt-0.5">2x First Place 🏆</p>
          <span className="text-[12px] text-secondary">HACKRO'26 &amp; NEXUS'26</span>
        </div>

        <div className="rounded-xl bg-tertiary/60 p-4 border border-white/5">
          <p className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider">Availability</p>
          <p className="text-[14px] font-bold text-white mt-0.5">Internship Ready</p>
          <span className="text-[12px] text-secondary">AI Engineering &amp; Full Stack</span>
        </div>
      </motion.div>

      {/* Services Cards */}
      <div className="mt-14 flex flex-wrap gap-7 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
