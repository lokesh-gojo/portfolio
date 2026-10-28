import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close, github, linkedin } from "../../assets";
import { config } from "../../constants/config";
import { ResumeModal } from "../atoms/ResumeModal";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } fixed top-0 z-30 flex w-full items-center py-4 transition-all duration-300 ${
          scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
            <div>
              <p className="flex cursor-pointer text-[17px] font-bold text-white items-center gap-1.5">
                {config.html.fullName}
                <span className="hidden md:inline-block text-[13px] font-medium text-[#00cea8]">
                  · AI &amp; Full Stack
                </span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            <ul className="list-none flex flex-row gap-6">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.id ? "text-white font-bold" : "text-secondary"
                  } cursor-pointer text-[15px] font-medium hover:text-white transition-colors`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 border-l border-white/15 pl-5">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="rounded-lg bg-gradient-to-r from-[#915EFF] to-[#7038e8] px-3.5 py-1.5 text-[13px] font-bold text-white shadow-md hover:scale-105 transition-all"
              >
                Resume / CV 📄
              </button>

              <a
                href={config.social.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub Profile"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-tertiary hover:scale-110 transition-transform"
              >
                <img src={github} alt="GitHub" className="h-4 w-4 object-contain" />
              </a>
              <a
                href={config.social.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Profile"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0077b5] hover:scale-110 transition-transform"
              >
                <img src={linkedin} alt="LinkedIn" className="h-4 w-4 object-contain" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex flex-1 items-center justify-end lg:hidden gap-3">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="rounded-lg bg-[#915EFF] px-2.5 py-1 text-[12px] font-bold text-white"
            >
              Resume
            </button>

            <img
              src={toggle ? close : menu}
              alt="menu"
              className="h-[26px] w-[26px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } black-gradient absolute right-0 top-16 z-30 mx-4 my-2 min-w-[200px] rounded-xl p-6 flex-col gap-4 border border-white/10 shadow-2xl backdrop-blur-xl`}
            >
              <ul className="flex flex-1 list-none flex-col items-start justify-end gap-3.5">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer text-[15px] font-medium ${
                      active === nav.id ? "text-white font-bold" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2.5 border-t border-white/15 pt-4">
                <button
                  onClick={() => {
                    setToggle(false);
                    setIsResumeOpen(true);
                  }}
                  className="rounded-lg bg-gradient-to-r from-[#915EFF] to-[#7038e8] py-2 text-center text-[13px] font-bold text-white shadow-md"
                >
                  View Resume / CV
                </button>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={config.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-secondary text-[13px] hover:text-white"
                  >
                    <img src={github} alt="GitHub" className="h-4 w-4 object-contain" />
                    GitHub
                  </a>
                  <a
                    href={config.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-secondary text-[13px] hover:text-white"
                  >
                    <img src={linkedin} alt="LinkedIn" className="h-4 w-4 object-contain" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Navbar;
