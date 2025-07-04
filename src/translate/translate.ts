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
            "contact_send_button": "Send Message"
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
            "contact_send_button": "Enviar Mensagem"
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
            "experience_description": "Mi trayectoria profesional e