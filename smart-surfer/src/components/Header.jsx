import { useEffect, useRef, useState } from "react";
import "./Header.css";
import smartSurferLogo from "../public/images/SmartSurferLogo.png";

function Header({ activePage, onNavigate }) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    ["home", "Home"],
    ["content", "Content"],
    ["hotlines", "Reporting Hotlines"],
  ];

  return (
    <header className={`site-header ${isVisible ? "is-visible" : "is-hidden"}`}>
      <button
        className="brand"
        onClick={() => onNavigate("home")}
        aria-label="Smart Surfer home"
      >
        <img className="brand-logo" src={smartSurferLogo} alt="" />
        <span className="brand-name">Smart Surfer</span>
      </button>
      <nav className="main-nav" aria-label="Primary navigation">
        {links.map(([id, label]) => (
          <button
            className={activePage === id ? "nav-link active" : "nav-link"}
            key={id}
            onClick={() => onNavigate(id)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
