import React, { useEffect, useState, useCallback } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // Fonction de scroll fluide pour les liens internes
  const handleClick = useCallback((e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        setShowHeader(false); // scroll vers le bas -> cacher header
      } else {
        setShowHeader(true); // scroll vers le haut -> afficher header
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <Header isVisible={showHeader} handleClick={handleClick} />
      <Landing />
      <Projects />
      <Contact />
    
    </>
  );
}

export default App;
