import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import BackToTop from "./components/BackToTop";

interface MainContentProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  changeLanguage: (lng: string) => void;
  currentLanguage: string;
}

function MainContent({ darkMode, toggleDarkMode, changeLanguage, currentLanguage }: MainContentProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        changeLanguage={changeLanguage}
        currentLanguage={currentLanguage}
      />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router basename="/Portifolio">
      <Routes>
        <Route 
          path="/" 
          element={
            <MainContent 
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              changeLanguage={changeLanguage}
              currentLanguage={i18n.language}
            />
          } 
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={
          <MainContent 
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            changeLanguage={changeLanguage}
            currentLanguage={i18n.language}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;