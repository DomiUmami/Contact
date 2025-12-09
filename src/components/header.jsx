import React, { useState } from "react";
import "../styles/Header.css";
import { useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const location = useLocation();
  const routeTitles = {
    "/": "Home",
    "/cred": "Credentialing App",
    "/contact": "Contact",
    "/verity": "Verity",
    "/osiris" : "Osiris"
  };

  // Default fallback if path doesn’t match
  const headerName = routeTitles[location.pathname] || "Failed";
 const goHome = () => {
    // External link (different domain)
    window.location.href = "https://duminimum.vercel.app/";
  };

  return (
       <header className="header">
      <h1 className="logo" onClick={goHome} style={{ cursor: "pointer" }}>
        {headerName}
      </h1>
      <nav className="nav">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          Menu ▼
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li><a href="https://duminimum.vercel.app/contact">Contact</a></li>
            <li><a href="https://duminimum.vercel.app/cred">Credentialing</a></li>
            <li><a href="https://duminimum.vercel.app/osiris">Osiris</a></li>
            <li><a href="https://duminimum.vercel.app/verity">Verity</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
