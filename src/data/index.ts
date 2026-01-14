import { Experience, NavItem, Project, Skill, SocialLink } from "../types";

export const navItems: NavItem[] = [
  // {
  //   title: "Home",
  //   href: "#home",
  // },
  // {
  //   title: "About",
  //   href: "#about",
  // },
  // {
  //   title: "Experience",
  //   href: "#experience",
  // },
  // {
  //   title: "Skills",
  //   href: "#skills",
  // },
  // {
  //   title: "Projects",
  //   href: "#projects",
  // },
  // {
  //   title: "Contact",
  //   href: "#contact",
  // },
  { key: "nav_about", href: "#about" },
  { key: "nav_experience", href: "#experience" },
  { key: "nav_projects", href: "#projects" },
  { key: "nav_contact", href: "#contact" },
];

export const skills: Skill[] = [
  {
    name: "JavaScript",
    level: 85,
  },
  {
    name: "React",
    level: 80,
  },
  {
    name: "Node.js",
    level: 75,
  },
  {
    name: "HTML/CSS",
    level: 90,
  },
  {
    name: "TypeScript",
    level: 70,
  },
  {
    name: "UI/UX Design",
    level: 65,
  },
];

export const experiences: Experience[] = [
  {
    title: "exp_1_title",
    company: "exp_1_company",
    period: "2025 - Present",
    description: "exp_1_description"
  },
  {
    title: "exp_2_title",
    company: "exp_2_company",
    period: "2023 - 2025",
    description: "exp_2_description"
  },
  {
    title: "exp_3_title",
    company: "exp_3_company",
    period: "2021 - 2022",
    description: "exp_3_description"
  },
  {
    title: "exp_4_title",
    company: "exp_4_company",
    period: "2020 - 2023",
    description: "exp_4_description"
  }
];

export const projects: Project[] = [
  {
    title: "project_1_title",
    description: "project_1_description",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "#"
  },
  {
    title: "project_2_title",
    description: "project_2_description",
    image: "https://images.pexels.com/photos/7648466/pexels-photo-7648466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Firebase", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "project_3_title",
    description: "project_3_description",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#"
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/eric-giannetti-490b6b198/",
    icon: "Linkedin"
  },
  {
    name: "Email",
    url: "mailto:ericbgiant@gmail.com",
    icon: "Mail"
  },
  {
    name: "GitHub",
    url: "https://github.com/Eric-Giannetti",
    icon: "Github"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/eric_giannetti/",
    icon: "Instagram"
  }
];

export const aboutMe = {
  title: "hero_greeting",
  subtitle: "Frontend Developer",
  description: "hero_subtitle",
  longDescription: "Full Stack Developer with solid experience in C#/.NET, JavaScript, React.js, SQL Server and MySQL. " +
      "I started my journey in technology in 2018, and since then, I've been evolving in both development and interface design. I've worked on complete web solutions with a focus on usability and performance.\n" +
      "I was promoted to team coordinator at General Claims, an opportunity that broadened my strategic vision, leadership skills and project management.\n" +
      "I have a degree in Systems Analysis and Development from FIAP and am constantly looking to evolve with new technologies, such as Cloud Computing and AI."
};