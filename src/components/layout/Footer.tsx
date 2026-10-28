import { logo, github, linkedin } from "../../assets";
import { config } from "../../constants/config";
import { navLinks } from "../../constants";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-[#050816]/90 py-10 px-6 sm:px-16 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-8 w-8 object-contain" />
          <div>
            <h4 className="text-[17px] font-bold text-white">{config.html.fullName}</h4>
            <p className="text-[13px] text-[#00cea8]">AI Engineer &amp; Full Stack Developer</p>
          </div>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-6 list-none">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className="text-[14px] text-secondary transition-colors hover:text-white"
              >
                {nav.title}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={scrollToTop}
              className="text-[14px] text-[#915EFF] transition-colors hover:text-white font-semibold"
            >
              Back to Top ↑
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={config.social.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-tertiary transition-transform hover:scale-110 hover:bg-[#915EFF]"
          >
            <img src={github} alt="GitHub" className="h-5 w-5 object-contain" />
          </a>
          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0077b5] transition-transform hover:scale-110"
          >
            <img src={linkedin} alt="LinkedIn" className="h-5 w-5 object-contain" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-6 text-center text-[13px] text-secondary">
        <p>
          © {new Date().getFullYear()} {config.html.fullName}. Engineered with React 18, Three.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
