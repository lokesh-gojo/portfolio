import React from "react";
import { config } from "../../constants/config";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f172a] border border-white/20 p-6 sm:p-10 shadow-2xl text-white">
        {/* Header Controls */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-[24px]">📄</span>
            <div>
              <h2 className="text-[20px] font-bold text-white">Curriculum Vitae / Resume</h2>
              <p className="text-[12px] text-secondary">Verified GitHub &amp; Academic Credentials</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-[13px] font-semibold text-white hover:bg-emerald-500 transition-colors flex items-center gap-1.5"
            >
              <span>🖨️</span> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="rounded-lg bg-white/10 px-3 py-2 text-[14px] font-bold text-white hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="space-y-6 text-[14px] leading-relaxed text-slate-200">
          {/* Header */}
          <div className="border-b border-white/10 pb-5">
            <h1 className="text-[28px] font-black text-white">{config.html.fullName}</h1>
            <p className="text-[#00cea8] font-semibold text-[15px] mt-0.5">
              AI Engineer &amp; Full Stack Web Developer · 2x Hackathon 1st Prize Winner
            </p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-slate-400">
              <span>📍 {config.html.location}</span>
              <span>✉️ {config.html.email}</span>
              <span>📞 {config.html.phone}</span>
              <a href={config.social.github} target="_blank" rel="noreferrer" className="text-[#915EFF] underline">
                github.com/lokesh-gojo
              </a>
              <a href={config.social.linkedin} target="_blank" rel="noreferrer" className="text-[#915EFF] underline">
                linkedin.com/in/lokesh-c
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-[16px] font-bold text-white uppercase tracking-wider border-b border-white/10 pb-1 mb-2 text-[#915EFF]">
              Education
            </h3>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-white text-[15px]">
                B.E. Computer Science and Engineering
              </span>
              <span className="text-secondary text-[13px]">2023 – 2027</span>
            </div>
            <p className="text-[#00cea8] text-[13px]">EASA College of Engineering and Technology (Autonomous), Coimbatore</p>
            <p className="text-[13px] text-slate-300 mt-1">
              Affiliated to Anna University · NAAC 'A' Grade Accredited. Focus on Software Engineering, Artificial Intelligence, and Full Stack Web Architectures.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-[16px] font-bold text-white uppercase tracking-wider border-b border-white/10 pb-1 mb-2 text-[#915EFF]">
              Experience
            </h3>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-white text-[15px]">
                Full Stack Python Developer Intern
              </span>
              <span className="text-secondary text-[13px]">Jun 2026 – Aug 2026</span>
            </div>
            <p className="text-[#00cea8] text-[13px]">Bangalore, Karnataka, India</p>
            <ul className="list-disc ml-5 mt-1.5 space-y-1 text-[13px] text-slate-300">
              <li>Built and shipped modular web application features using Python and RESTful services.</li>
              <li>Engineered backend API handlers and resolved critical codebase bottlenecks.</li>
              <li>Participated in agile sprints, technical peer code reviews, and Git version control workflows.</li>
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <h3 className="text-[16px] font-bold text-white uppercase tracking-wider border-b border-white/10 pb-1 mb-2 text-[#915EFF]">
              Featured Projects (GitHub Verified)
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-white text-[15px]">
                    EASA DeskBot AI – Production Strict Source-Grounded RAG Helpdesk
                  </span>
                  <span className="text-secondary text-[13px]">FastAPI · Supabase pgvector · Gemini SDK · Docker</span>
                </div>
                <p className="text-[13px] text-slate-300 mt-1">
                  Enterprise-grade helpdesk using hybrid BM25 + 384-dimensional dense multilingual vector embeddings (English &amp; Tamil). Implemented contextual multi-turn query rewriting, 60 req/min rate limiter, automated unit test suites, and Cloud Run specs.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-white text-[15px]">
                    Smart Crop Rotation &amp; Soil Restorer AI (2x Hackathon 1st Prize Winner)
                  </span>
                  <span className="text-secondary text-[13px]">Python · Gemini API · ESP32 IoT</span>
                </div>
                <p className="text-[13px] text-slate-300 mt-1">
                  AI agricultural decision-support platform calculating soil health from N-P-K, pH &amp; organic carbon with IoT sensors. Delivers multi-season crop rotation optimization and bilingual Tamil/English conversational advisory.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-white text-[15px]">
                    Acadex LMS Suite – Next-Gen Learning &amp; Placement Suite
                  </span>
                  <span className="text-secondary text-[13px]">Live Deployed · HTML5 · CSS3 · JavaScript</span>
                </div>
                <p className="text-[13px] text-slate-300 mt-1">
                  Complete platform with distinct Admin, Faculty, and Student dashboards. Integrated in-browser code compiler sandbox, AI ATS resume builder, quizzes, attendance, and dynamic certificate generator.
                </p>
              </div>
            </div>
          </div>

          {/* Honors & Awards */}
          <div>
            <h3 className="text-[16px] font-bold text-white uppercase tracking-wider border-b border-white/10 pb-1 mb-2 text-[#915EFF]">
              Honors &amp; Hackathon Victories
            </h3>
            <ul className="list-disc ml-5 space-y-1 text-[13px] text-slate-300">
              <li>
                <strong className="text-white">🥇 First Prize – HACKRO'26 Hackathon</strong>: Erode Sengunthar Engineering College (September 2026).
              </li>
              <li>
                <strong className="text-white">🥇 First Place – NEXUS'26 Grand Hackathon</strong>: Sasurie College of Engineering (October 2026).
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-[16px] font-bold text-white uppercase tracking-wider border-b border-white/10 pb-1 mb-2 text-[#915EFF]">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-slate-300">
              <div><strong className="text-white">Languages:</strong> Python, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3</div>
              <div><strong className="text-white">AI / GenAI:</strong> Gemini API SDK, Grounded RAG, Sentence-Transformers, NLP</div>
              <div><strong className="text-white">Frontend:</strong> React.js, Three.js, React Three Fiber, Tailwind CSS, Framer Motion</div>
              <div><strong className="text-white">Backend &amp; DB:</strong> FastAPI, Node.js, Supabase pgvector, PostgreSQL, MongoDB, SQLite</div>
              <div><strong className="text-white">DevOps &amp; Tools:</strong> Docker, Google Cloud Run, Git, GitHub, VS Code, Postman, Figma</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg bg-tertiary px-6 py-2.5 text-[14px] font-semibold text-white hover:bg-tertiary/80 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

