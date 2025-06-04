import { Experience, NavItem, Project, Skill, SocialLink } from "../types";
import { Github, Linkedin, Mail } from "lucide-react";

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
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
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description: "Developing modern web applications using React and TypeScript. Working closely with design teams to implement responsive and accessible user interfaces."
  },
  {
    title: "Web Developer",
    company: "Digital Agency",
    period: "2021 - 2023",
    description: "Created and maintained websites for various clients. Implemented responsive designs and improved website performance."
  },
  {
    title: "Junior Developer",
    company: "Startup Innovations",
    period: "2019 - 2021",
    description: "Assisted in the development of web applications. Gained experience in frontend frameworks and agile methodologies."
  }
];

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform built with React and Node.js",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A modern task management application with user authentication",
    image: "https://images.pexels.com/photos/7648466/pexels-photo-7648466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Firebase", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website to showcase projects and skills",
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
    url: "https://github.com/",
    icon: "Github"
  }
];

export const aboutMe = {
  title: "Eric Giannetti",
  subtitle: "Frontend Developer",
  description: "I'm a passionate frontend developer with expertise in creating modern and responsive web applications. I specialize in React.js and have experience working with various frontend technologies to deliver exceptional user experiences.",
  longDescription: "With several years of experience in web development, I've worked on various projects ranging from e-commerce platforms to portfolio websites. I'm dedicated to writing clean, efficient code and creating intuitive user interfaces. My goal is to continually improve my skills and stay updated with the latest trends in web development."
};