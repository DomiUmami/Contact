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

    "/contact": "Contact",
    
  };

  // Default fallback if path doesn’t match
  const headerName = routeTitles[location.pathname] || "Contact" /*This will change when more pages are set up*/;


  return (
    <header className="header">
      <h1 className="logo">{headerName}</h1>
      <nav className="nav">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          Menu ▼
        </button>
        {isOpen && (
          <ul className="dropdown-menu">

            <li><a href="/contact">Contact</a></li>

          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
