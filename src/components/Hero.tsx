import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const { t } = useTranslation();
  const roles = [t("hero_roles_0"), t("hero_roles_1"), t("hero_roles_2")];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting) {
        // Typing
        if (charIndex < currentRole.length) {
          setTypedText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          setTypingSpeed(150);
        } else {
          // Pause at the end of typing
          setIsDeleting(true);
          setTypingSpeed(1000);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setTypedText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          setTypingSpeed(75);
        } else {
          // Move to next role
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6 py-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in">
            {t("hero_greeting")}
          </h1>
          <div className="h-16 flex justify-center items-center">
            <h2 className="text-xl md:text-3xl font-medium text-blue-600 dark:text-blue-400">
             <span className="typing-text">{typedText}</span>
              <span className="typing-cursor">|</span>
            </h2>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 my-6 max-w-2xl mx-auto animate-fade-in-up">
            {t("hero_subtitle")}
          </p>
          <div className="mt-8 space-x-4 animate-fade-in-up">
            <a
              href="#projects"
              className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              {t("hero_view_work")}
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition-colors duration-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              {t("hero_contact_me")}
            </a>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-blue-600 dark:text-blue-400" size={32} />
      </a>
    </section>
  );
}