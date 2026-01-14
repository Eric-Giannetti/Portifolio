import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            // Header
            "nav_about": "About",
            "nav_experience": "Experience",
            "nav_projects": "Projects",
            "nav_contact": "Contact",
            
            // Hero
            "hero_greeting": "Eric Giannetti",
            "hero_title": "A passionate Full-Stack Developer.",
            "hero_subtitle": "I'm a passionate Full-Stack developer with expertise in creating modern and responsive web applications. I specialize in React.js/.NET applications and have experience working with various frontend technologies to deliver exceptional user experiences.",
            "hero_roles_0": "Full-Stack Developer",
            "hero_roles_1": "UI/UX Designer",
            "hero_roles_2": "Web Enthusiast",
            "hero_view_work": "View My Work",
            "hero_contact_me": "Contact Me",
            
            // About
            "about_title": "About Me",
            "about_long_description": "I am a software developer with a strong background in frontend and backend technologies. I love building user-friendly and efficient applications.",
            "about_label_name": "Name",
            "about_label_email": "Email",
            "about_label_role": "Role",
            "about_role_frontend": "Full-Stack Developer",
            
            // Experience
            "experience_title": "Work Experience",
            "experience_description": "My professional journey and the positions I've held throughout my career.",
            "exp_1_title": "FullStack Developer",
            "exp_1_company": "Vidalink",
            "exp_1_description": "Development and maintenance of microservices-based solutions, utilizing a tech stack that includes .NET, React.js, MongoDB, Oracle, and PostgreSQL. Active participation in the application lifecycle, working on both the conception of new projects and the support and evolution of legacy systems.",
            "exp_2_title": "FullStack Developer",
            "exp_2_company": "CEJAM",
            "exp_2_description": "Development and maintenance of internal systems, utilizing a robust stack including .NET, C#, JavaScript, React Native, React.js, and MySQL. I actively participated in legacy system modernization projects and implemented significant interface improvements, with an enhanced focus on usability (UX).",
            "exp_3_title": "Team Coordinator",
            "exp_3_company": "General Claims",
            "exp_3_description": "As a coordinator, I provided technical leadership, organized sprints, and mentored the team, leading to a 35% reduction in production bugs through code reviews and standardization.",
            "exp_4_title": "FullStack Developer",
            "exp_4_company": "General Claims",
            "exp_4_description": "Robust ASP.NET MVC application development, integrating AngularJS and SQL Server, and creating RESTful APIs for CRUD solutions. I was responsible for implementing complex business rules in the insurance sector.",
            
            // Skills
            "skills_title": "Skills",
            "skills_subtitle": "Technologies and tools I work with:",
            "skills_dotnet": "Development of robust and scalable applications with C# and .NET Framework/Core",
            "skills_html": "Structuring semantic and accessible web pages",
            "skills_css": "Modern CSS styling and responsive layouts",
            "skills_javascript": "Front-end and back-end development with JavaScript",
            "skills_react": "Creating modern and interactive interfaces with React",
            "skills_sqlserver": "SQL Server database management and optimization",
            "skills_mysql": "MySQL database development and administration",
            "skills_docker": "Application containerization and orchestration",
            
            // Projects
            "projects_title": "My Projects",
            "projects_description": "A selection of projects I've worked on throughout my career.",
            "project_1_title": "E-commerce Platform",
            "project_1_description": "A fully responsive e-commerce platform built with React and Node.js",
            "project_2_title": "Task Management App",
            "project_2_description": "A modern task management application with user authentication",
            "project_3_title": "Portfolio Website",
            "project_3_description": "A responsive portfolio website to showcase projects and skills",
            
            // Contact
            "contact_title": "Get In Touch",
            "contact_description": "Feel free to reach out to me for any questions or opportunities.",
            "contact_information": "Contact Information",
            "contact_name_label": "Name",
            "contact_email_label": "Email",
            "contact_message_label": "Message",
            "contact_name_placeholder": "Your name",
            "contact_email_placeholder": "Your email",
            "contact_message_placeholder": "Your message",
            "contact_send_button": "Send Message",
            
            // Contact Modal
            "contact_modal_title": "Under Maintenance",
            "contact_modal_message": "The contact form is currently under maintenance. Please reach out directly via phone.",
            "contact_modal_phone": "Phone",
            
            // Schedule Meeting
            "schedule_meeting_button": "Schedule Meeting",
            "schedule_meeting_title": "Schedule a Meeting",
            "schedule_meeting_subtitle": "Choose a time that works best for you"
        }
    },
    pt: {
        translation: {
            // Header
            "nav_about": "Sobre",
            "nav_experience": "Experiência",
            "nav_projects": "Projetos",
            "nav_contact": "Contato",
            
            // Hero
            "hero_greeting": "Eric Giannetti",
            "hero_title": "Um Desenvolvedor Full-Stack apaixonado.",
            "hero_subtitle": "Sou um desenvolvedor Full-Stack apaixonado, com experiência na criação de aplicações web modernas e responsivas. Sou especialista em aplicações React.js/.NET e tenho experiência trabalhando com diversas tecnologias front-end para proporcionar experiências excepcionais ao usuário.",
            "hero_roles_0": "Desenvolvedor Full-Stack",
            "hero_roles_1": "Designer UI/UX",
            "hero_roles_2": "Entusiasta da Web",
            "hero_view_work": "Ver Projetos",
            "hero_contact_me": "Fale Comigo",
            
            // About
            "about_title": "Sobre Mim",
            "about_long_description": "Sou um desenvolvedor de software com forte experiência em tecnologias frontend e backend. Adoro construir aplicações eficientes e fáceis de usar.",
            "about_label_name": "Nome",
            "about_label_email": "E-mail",
            "about_label_role": "Função",
            "about_role_frontend": "Desenvolvedor Full-Stack",
            
            // Experience
            "experience_title": "Experiência Profissional",
            "experience_description": "Minha trajetória profissional e os cargos que ocupei ao longo da carreira.",
            "exp_1_title": "Desenvolvedor FullStack",
            "exp_1_company": "Vidalink",
            "exp_1_description": "Desenvolvimento e manutenção de soluções baseadas em microsserviços, utilizando uma pilha tecnológica que inclui .NET, React.js, MongoDB, Oracle e PostgreSQL. Participação ativa no ciclo de vida das aplicações, atuando tanto na concepção de novos projetos quanto na sustentação e evolução de sistemas legados.",
            "exp_2_title": "Desenvolvedor FullStack",
            "exp_2_company": "CEJAM",
            "exp_2_description": "Desenvolvimento e manutenção de sistemas internos, utilizando uma pilha robusta incluindo .NET, C#, JavaScript, React Native, React.js e MySQL. Participei ativamente de projetos de modernização de sistemas legados e implementei melhorias significativas de interface, com foco aprimorado em usabilidade (UX).",
            "exp_3_title": "Coordenador de Equipe",
            "exp_3_company": "General Claims",
            "exp_3_description": "Como coordenador, forneci liderança técnica, organizei sprints e mentorizei a equipe, levando a uma redução de 35% em bugs de produção através de revisões de código e padronização.",
            "exp_4_title": "Desenvolvedor FullStack",
            "exp_4_company": "General Claims",
            "exp_4_description": "Desenvolvimento robusto de aplicações ASP.NET MVC, integrando AngularJS e SQL Server, e criando APIs RESTful para soluções CRUD. Fui responsável por implementar regras de negócio complexas no setor de seguros.",
            
            // Skills
            "skills_title": "Habilidades",
            "skills_subtitle": "Tecnologias e ferramentas com as quais trabalho:",
            "skills_dotnet": "Desenvolvimento de aplicações robustas e escaláveis com C# e .NET Framework/Core",
            "skills_html": "Estruturação de páginas web semânticas e acessíveis",
            "skills_css": "Estilização moderna com CSS e layouts responsivos",
            "skills_javascript": "Desenvolvimento front-end e back-end com JavaScript",
            "skills_react": "Criação de interfaces modernas e interativas com React",
            "skills_sqlserver": "Gestão e otimização de banco de dados SQL Server",
            "skills_mysql": "Desenvolvimento e administração de banco de dados MySQL",
            "skills_docker": "Containerização e orquestração de aplicações",
            
            // Projects
            "projects_title": "Meus Projetos",
            "projects_description": "Uma seleção de projetos em que trabalhei ao longo da minha carreira.",
            "project_1_title": "Plataforma de E-commerce",
            "project_1_description": "Uma plataforma de e-commerce totalmente responsiva desenvolvida com React e Node.js",
            "project_2_title": "Aplicativo de Gerenciamento de Tarefas",
            "project_2_description": "Uma aplicação moderna de gerenciamento de tarefas com autenticação de usuário",
            "project_3_title": "Site de Portfólio",
            "project_3_description": "Um site de portfólio responsivo para apresentar projetos e habilidades",
            
            // Contact
            "contact_title": "Entre em Contato",
            "contact_description": "Sinta-se à vontade para me contatar para dúvidas ou oportunidades.",
            "contact_information": "Informações de Contato",
            "contact_name_label": "Nome",
            "contact_email_label": "E-mail",
            "contact_message_label": "Mensagem",
            "contact_name_placeholder": "Seu nome",
            "contact_email_placeholder": "Seu e-mail",
            "contact_message_placeholder": "Sua mensagem",
            "contact_send_button": "Enviar Mensagem",
            
            // Contact Modal
            "contact_modal_title": "Em Manutenção",
            "contact_modal_message": "O formulário de contato está em manutenção. Entre em contato direto por telefone.",
            "contact_modal_phone": "Telefone",
            
            // Schedule Meeting
            "schedule_meeting_button": "Agendar Reunião",
            "schedule_meeting_title": "Agende uma Reunião",
            "schedule_meeting_subtitle": "Escolha um horário que funcione melhor para você"
        }
    },
    es: {
        translation: {
            // Header
            "nav_about": "Sobre mí",
            "nav_experience": "Experiencia",
            "nav_projects": "Proyectos",
            "nav_contact": "Contacto",
            
            // Hero
            "hero_greeting": "Eric Giannetti",
            "hero_title": "Un Desarrollador Full-Stack apasionado.",
            "hero_subtitle": "Soy un desarrollador Full-Stack apasionado con experiencia en la creación de aplicaciones web modernas y responsivas. Me especializo en aplicaciones React.js/.NET y tengo experiencia trabajando con varias tecnologías frontend para ofrecer experiencias excepcionales al usuario.",
            "hero_roles_0": "Desarrollador Full-Stack",
            "hero_roles_1": "Diseñador UI/UX",
            "hero_roles_2": "Entusiasta de la Web",
            "hero_view_work": "Ver Proyectos",
            "hero_contact_me": "Contáctame",
            
            // About
            "about_title": "Sobre Mí",
            "about_long_description": "Soy un desarrollador de software con sólida experiencia en tecnologías frontend y backend. Me encanta crear aplicaciones eficientes y fáciles de usar.",
            "about_label_name": "Nombre",
            "about_label_email": "Correo",
            "about_label_role": "Rol",
            "about_role_frontend": "Desarrollador Full-Stack",
            
            // Experience
            "experience_title": "Experiencia Laboral",
            "experience_description": "Mi trayectoria profesional y los puestos que he ocupado a lo largo de mi carrera.",
            "exp_1_title": "Desarrollador FullStack",
            "exp_1_company": "Vidalink",
            "exp_1_description": "Desarrollo y mantenimiento de soluciones basadas en microservicios, utilizando un stack tecnológico que incluye .NET, React.js, MongoDB, Oracle y PostgreSQL. Participación activa en el ciclo de vida de las aplicaciones, actuando tanto en la concepción de nuevos proyectos como en el soporte y evolución de sistemas legados.",
            "exp_2_title": "Desarrollador FullStack",
            "exp_2_company": "CEJAM",
            "exp_2_description": "Desarrollo y mantenimiento de sistemas internos, utilizando una pila sólida que incluye .NET, C#, JavaScript, React Native, React.js y MySQL. Participé activamente en proyectos de modernización de sistemas heredados e implementé mejoras significativas en la interfaz, con un enfoque mejorado en usabilidad (UX).",
            "exp_3_title": "Coordinador de Equipo",
            "exp_3_company": "General Claims",
            "exp_3_description": "Como coordinador, proporcioné liderazgo técnico, organicé sprints y mentoricé al equipo, logrando una reducción del 35% en errores de producción a través de revisiones de código y estandarización.",
            "exp_4_title": "Desarrollador FullStack",
            "exp_4_company": "General Claims",
            "exp_4_description": "Desarrollo robusto de aplicaciones ASP.NET MVC, integrando AngularJS y SQL Server, y creando API RESTful para soluciones CRUD. Fui responsable de implementar reglas de negocio complejas en el sector de seguros.",
            
            // Skills
            "skills_title": "Habilidades",
            "skills_subtitle": "Tecnologías y herramientas con las que trabajo:",
            "skills_dotnet": "Desarrollo de aplicaciones robustas y escalables con C# y .NET Framework/Core",
            "skills_html": "Estructuración de páginas web semánticas y accesibles",
            "skills_css": "Estilo CSS moderno y diseños responsivos",
            "skills_javascript": "Desarrollo front-end y back-end con JavaScript",
            "skills_react": "Creación de interfaces modernas e interactivas con React",
            "skills_sqlserver": "Gestión y optimización de bases de datos SQL Server",
            "skills_mysql": "Desarrollo y administración de bases de datos MySQL",
            "skills_docker": "Containerización y orquestación de aplicaciones",
            
            // Projects
            "projects_title": "Mis Proyectos",
            "projects_description": "Una selección de proyectos en los que he trabajado a lo largo de mi carrera.",
            "project_1_title": "Plataforma de Comercio Electrónico",
            "project_1_description": "Una plataforma de comercio electrónico completamente responsiva construida con React y Node.js",
            "project_2_title": "Aplicación de Gestión de Tareas",
            "project_2_description": "Una aplicación moderna de gestión de tareas con autenticación de usuario",
            "project_3_title": "Sitio de Portafolio",
            "project_3_description": "Un sitio de portafolio responsivo para mostrar proyectos y habilidades",
            
            // Contact
            "contact_title": "Ponte en Contacto",
            "contact_description": "Siéntete libre de contactarme para cualquier pregunta u oportunidad.",
            "contact_information": "Información de Contacto",
            "contact_name_label": "Nombre",
            "contact_email_label": "Correo",
            "contact_message_label": "Mensaje",
            "contact_name_placeholder": "Tu nombre",
            "contact_email_placeholder": "Tu correo",
            "contact_message_placeholder": "Tu mensaje",
            "contact_send_button": "Enviar Mensaje",
            
            // Contact Modal
            "contact_modal_title": "En Mantenimiento",
            "contact_modal_message": "El formulario de contacto está en mantenimiento. Por favor, comunícate directamente por teléfono.",
            "contact_modal_phone": "Teléfono",
            
            // Schedule Meeting
            "schedule_meeting_button": "Agendar Reunión",
            "schedule_meeting_title": "Agenda una Reunión",
            "schedule_meeting_subtitle": "Elige una hora que te funcione mejor"
        }
    }
};

export default i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "pt",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    })