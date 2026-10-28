export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

export type TExperience = {
  companyName: string;
  iconBg: string;
  date: string;
  points: string[];
} & Required<Omit<TCommonProps, "name">>;

export type TTestimonial = {
  testimonial: string;
  designation: string;
  company: string;
  image: string;
} & Required<Pick<TCommonProps, "name">>;

export type TAchievement = {
  title: string;
  event: string;
  organization: string;
  date: string;
  icon?: string;
  badge?: string;
  description: string;
  link?: string;
};

export type TCertification = {
  title: string;
  issuer: string;
  date: string;
  skills: string;
};

export type TProject = {
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  sourceCodeLink: string;
  liveDemoLink?: string;
  badge?: string;
  badgeColor?: string;
  highlights?: string[];
} & Required<Pick<TCommonProps, "name">>;

export type TTechnology = {
  category?: "AI & GenAI" | "Frontend & 3D" | "Backend & DB" | "DevOps & Tools";
} & Required<Omit<TCommonProps, "title">>;

export type TNavLink = {
  id: string;
} & Required<Pick<TCommonProps, "title">>;

export type TService = {
  desc?: string;
} & Required<Omit<TCommonProps, "name">>;

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};
