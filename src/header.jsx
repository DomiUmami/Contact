import React, { useState } from "react";
import "./styles/Header.css";
import { useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const routeTitles = {
    "/": "Home",
    "/app": "App",
    "/contact": "Contact",
  };

  // Default fallback if path doesn’t match
  const headerName = routeTitles[location.pathname] || "App";


  return (
    <header className="header">
      <h1 className="logo">{headerName}</h1>
      <nav className="nav">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          Menu ▼
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/app">App</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
