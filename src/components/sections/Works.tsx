import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github, external } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  liveDemoLink,
  badge,
  badgeColor,
  highlights,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.25, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        glareColor="#aaa6c3"
        className="h-full"
      >
        <div className="glass-morphism glass-card-hover flex h-full w-full flex-col justify-between rounded-2xl p-5 sm:w-[360px] border border-white/10 hover:border-[#915EFF]/40 transition-colors">
          <div>
            {/* Project Image Banner */}
            <div className="relative h-[220px] w-full overflow-hidden rounded-xl bg-tertiary">
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />

              {/* Status Badge */}
              {badge && (
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wide backdrop-blur-md border ${
                      badgeColor || "bg-black/70 text-white border-white/20"
                    }`}
                  >
                    {badge}
                  </span>
                </div>
              )}

              {/* Action Buttons Overlay */}
              <div className="card-img_hover absolute top-3 right-3 flex items-center gap-2">
                {liveDemoLink && (
                  <a
                    href={liveDemoLink}
                    target="_blank"
                    rel="noreferrer"
                    title="Open Live Deployment / Demo"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/90 text-white shadow-lg backdrop-blur-md transition-all hover:scale-115 hover:bg-emerald-500"
                  >
                    <img
                      src={external}
                      alt="Live Demo"
                      className="h-5 w-5 object-contain invert brightness-0"
                    />
                  </a>
                )}
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noreferrer"
                  title="View Source on GitHub"
                  className="black-gradient flex h-10 w-10 items-center justify-center rounded-full shadow-lg border border-white/20 transition-all hover:scale-115 hover:border-white/50"
                >
                  <img
                    src={github}
                    alt="GitHub"
                    className="h-5 w-5 object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Title & Description */}
            <div className="mt-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[22px] font-bold text-white transition-colors hover:text-[#915EFF]">
                  {name}
                </h3>
              </div>
              <p className="text-secondary mt-2 text-[14px] leading-[22px]">
                {description}
              </p>
            </div>

            {/* Architectural Highlights */}
            {highlights && highlights.length > 0 && (
              <div className="mt-4 space-y-1.5 rounded-xl bg-primary/60 p-3 border border-white/5">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-[12px] text-white/80">
                    <span className="text-[#00cea8] font-bold mt-0.5">▹</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tech Tags */}
          <div className="mt-5 pt-3 border-t border-white/10 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-[12px] font-medium px-2.5 py-1 rounded-md bg-tertiary/80 border border-white/5 ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "ai")
      return project.tags.some(
        (t) =>
          t.name.includes("ai") ||
          t.name.includes("rag") ||
          t.name.includes("gemini") ||
          t.name.includes("nlp") ||
          t.name.includes("speech")
      );
    if (filter === "web")
      return project.tags.some(
        (t) =>
          t.name.includes("lms") ||
          t.name.includes("html") ||
          t.name.includes("fintech") ||
          t.name.includes("compiler")
      );
    return true;
  });

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div className="mt-8 flex flex-wrap gap-3">
        {[
          { id: "all", label: `All Projects (${projects.length})` },
          { id: "ai", label: "AI & RAG Systems" },
          { id: "web", label: "Web Portals & LMS" },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={`px-5 py-2 rounded-xl text-[14px] font-semibold transition-all ${
              filter === btn.id
                ? "bg-[#915EFF] text-white shadow-lg shadow-[#915EFF]/30 scale-105"
                : "bg-tertiary text-secondary hover:text-white hover:bg-tertiary/80 border border-white/5"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-10 flex flex-wrap gap-7 max-sm:justify-center">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
