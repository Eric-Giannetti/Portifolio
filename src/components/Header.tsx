import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // 1. Importar hook de tradução
import { navItems } from "../data";
import { Menu, X, Moon, Sun } from "lucide-react";

// 2. Adicionar as novas props para o controle de idioma
interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  changeLanguage: (lng: string) => void;
  currentLanguage: string;
}

export default function Header({
                                 darkMode,
                                 toggleDarkMode,
                                 changeLanguage,
                                 currentLanguage,
                               }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation(); // 3. Inicializar a função de tradução

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Componente auxiliar para o seletor de idioma para evitar repetição
  const LanguageSwitcher = () => (
      <div className="flex items-center space-x-3 border-l border-gray-300 dark:border-gray-600 ml-4 pl-4">
        <button
            onClick={() => changeLanguage("pt")}
            className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                currentLanguage === "pt" ? "font-bold text-blue-600 dark:text-blue-400" : ""
            }`}
        >
          PT
        </button>
        <button
            onClick={() => changeLanguage("en")}
            className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                currentLanguage === "en" ? "font-bold text-blue-600 dark:text-blue-400" : ""
            }`}
        >
          EN
        </button>
        <button
            onClick={() => changeLanguage("es")}
            className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                currentLanguage === "es" ? "font-bold text-blue-600 dark:text-blue-400" : ""
            }`}
        >
          ES
        </button>
      </div>
  );

  return (
      <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
              isScrolled
                  ? "py-3 bg-white/90 shadow-md backdrop-blur dark:bg-gray-900/90"
                  : "py-5 bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Eric.dev
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                  <a
                      key={item.key} // usar a chave como key
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {t(item.key)} {/* 4. Traduzir o título */}
                  </a>
              ))}
              <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              {/* 5. Adicionar seletor de idioma no Desktop */}
              <LanguageSwitcher />
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                  onClick={toggleDarkMode}
                  className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg text-gray-700 dark:text-gray-300"
                  aria-label="Open menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-4 px-4 animate-fade-in">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                    <a
                        key={item.key}
                        href={item.href}
                        className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 py-2 transition-colors duration-300 text-center"
                        onClick={() => setIsMenuOpen(false)}
                    >
                      {t(item.key)} {/* Traduzir o título */}
                    </a>
                ))}
                {/* 6. Adicionar seletor de idioma no menu mobile */}
                <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-center">
                    <LanguageSwitcher />
                  </div>
                </div>
              </nav>
            </div>
        )}
      </header>
  );
}