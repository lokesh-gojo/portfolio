type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
    phone: string;
    location: string;
    education: string;
  };
  social: {
    github: string;
    linkedin: string;
  };
  hero: {
    name: string;
    tagline: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    tech: TSection;
    works: Required<TSection>;
    achievements: TSection;
    feedbacks: TSection;
  };
};

export const config: TConfig = {
  html: {
    title: "Lokesh C | AI Engineer & Full Stack Developer",
    fullName: "Lokesh C",
    email: "lokesh2005c@gmail.com",
    phone: "+91 8122333804",
    location: "Coimbatore, Tamil Nadu, India",
    education: "B.E. Computer Science Engineering – EASA College of Engineering and Technology (2027)",
  },
  social: {
    github: "https://github.com/lokesh-gojo",
    linkedin: "https://www.linkedin.com/in/lokesh-c-05551b278",
  },
  hero: {
    name: "Lokesh",
    tagline: "2x Hackathon Winner 🏆 · Open to AI & Full Stack Internships",
    p: [
      "AI Engineer & Full Stack Developer,",
      "building production RAG systems, Gemini AI applications & interactive web experiences.",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact Me.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "Share project inquiries, opportunities, or feedback...",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a Computer Science Engineering student (Class of 2027) at EASA College of Engineering and Technology, specializing in AI Engineering, Python, and Full Stack Web Development. With verified experience building enterprise Source-Grounded RAG helpdesk systems, 2x Hackathon-winning Agri-AI decision platforms, and end-to-end LMS suites with in-browser code sandboxes, I turn ideas into production-ready software. Currently seeking AI Engineering & Full Stack internships to deliver impactful real-world software.`,
    },
    experience: {
      p: "Industry & Academic Journey",
      h2: "Experience & Roles.",
    },
    tech: {
      p: "Technical Arsenal",
      h2: "Skills & Technologies.",
    },
    works: {
      p: "GitHub Analyzed Work",
      h2: "Featured & Completed Projects.",
      content: `Each project below is built, tested, and actively maintained on GitHub with verified source code, architecture specifications, and live demonstrations. Filter across AI/RAG architectures, full-stack portals, and IoT systems.`,
    },
    achievements: {
      p: "Honors & Credentials",
      h2: "Hackathons & Certifications.",
    },
    feedbacks: {
      p: "Core Strengths & Competencies",
      h2: "Strengths & Endorsements.",
    },
  },
};
