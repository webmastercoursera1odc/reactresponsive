import React from "react";
import { HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Header.css";

// Exemple de tableau de liens sociaux
const socials = [
  { name: "GitHub", url: "https://github.com", icon: faGithub },
  { name: "LinkedIn", url: "https://linkedin.com", icon: faLinkedin },
];

export default function Header({ isVisible, handleClick }) {
  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* Liens internes */}
        <HStack spacing={4}>
          <a href="#projects-section" onClick={(e) => handleClick(e, "projects-section")}>
            Projets
          </a>
          <a href="#contactme-section" onClick={(e) => handleClick(e, "contactme-section")}>
            Me contacter
          </a>
        </HStack>

        {/* Liens externes */}
        <HStack spacing={4}>
          {socials.map((social) => (
            <a
              key={social.name} // clé unique
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
          ))}
        </HStack>

      </nav>
    </header>
  );
}
