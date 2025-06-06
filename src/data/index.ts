import { Experience, NavItem, Project, Skill, SocialLink } from "../types";

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
    title: "FullStack Developer",
    company: "CEJAM",
    period: "2023 - Present",
    description: "development and maintenance of internal systems, utilizing a robust stack including .NET, C#, JavaScript, React Native, React.js, and MySQL. I actively participated in legacy system modernization projects and implemented significant interface improvements, with an enhanced focus on usability (UX)."
  },
  {
    title: "Team Coordinator",
    company: "General Claims",
    period: "2021 - 2022",
    description: "As a coordinator, I provided technical leadership, organized sprints, and mentored the team, leading to a 35% reduction in production bugs through code reviews and standardization."
  },
  {
    title: "FullStack Developer",
    company: "General Claims",
    period: "2020 - 2023",
    description: "robust ASP.NET MVC application development, integrating AngularJS and SQL Server, and creating RESTful APIs for CRUD solutions. I was responsible for implementing complex business rules in the insurance sector."
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
  title: "Eric Giannetti",
  subtitle: "Frontend Developer",
  description: "I'm a passionate FullStack developer with expertise in creating modern and responsive web applications. I specialize in React.js/.Net Aplications and have experience working with various frontend technologies to deliver exceptional user experiences.",
  longDescription: "Full Stack Developer with solid experience in C#/.NET, JavaScript, React.js, SQL Server and MySQL. " +
      "I started my journey in technology in 2018, and since then, I've been evolving in both development and interface design. I've worked on complete web solutions with a focus on usability and performance.\n" +
      "I was promoted to team coordinator at General Claims, an opportunity that broadened my strategic vision, leadership skills and project management.\n" +
      "I have a degree in Systems Analysis and Development from FIAP and am constantly looking to evolve with new technologies, such as Cloud Computing and AI."
};