import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaDocker, FaDatabase } from "react-icons/fa";
import { SiDotnet, SiJavascript, SiMysql } from "react-icons/si";

interface SkillCard {
  icon: JSX.Element;
  name: string;
  description: string;
}

const skillCards: SkillCard[] = [
  {
    icon: <SiDotnet className="w-16 h-16 text-purple-600" />,
    name: "C#/.NET",
    description: "Desenvolvimento de aplicações robustas e escaláveis com C# e .NET Framework/Core"
  },
  {
    icon: <FaHtml5 className="w-16 h-16 text-orange-500" />,
    name: "HTML",
    description: "Estruturação de páginas web semânticas e acessíveis"
  },
  {
    icon: <FaCss3Alt className="w-16 h-16 text-blue-500" />,
    name: "CSS",
    description: "Estilização e layouts responsivos com CSS moderno"
  },
  {
    icon: <SiJavascript className="w-16 h-16 text-yellow-400" />,
    name: "JavaScript",
    description: "Desenvolvimento front-end e back-end com JavaScript"
  },
  {
    icon: <FaReact className="w-16 h-16 text-cyan-400" />,
    name: "React.js",
    description: "Criação de interfaces modernas e interativas com React"
  },
  {
    icon: <FaDatabase className="w-16 h-16 text-red-600" />,
    name: "SQL Server",
    description: "Gerenciamento e otimização de bancos de dados SQL Server"
  },
  {
    icon: <SiMysql className="w-16 h-16 text-blue-600" />,
    name: "MySQL",
    description: "Desenvolvimento e administração de bancos de dados MySQL"
  },
  {
    icon: <FaDocker className="w-16 h-16 text-blue-400" />,
    name: "Docker",
    description: "Containerização e orquestração de aplicações"
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            Skills <span className="text-blue-600">.</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            *passe o cursor do mouse no card para ler*
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skillCards.map((skill, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col items-center">
                {skill.icon}
                <span className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-75 rounded-xl transition-opacity duration-300">
                <p className="text-white text-sm text-center px-4">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}