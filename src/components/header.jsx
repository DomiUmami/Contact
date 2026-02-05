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
   //Currently empty
  };

  // Default fallback if path doesn’t match
  const headerName = routeTitles[location.pathname] || "Home" /*This will change when more pages are set up*/;

const goHome = () => {
    // External link (different domain)
    window.location.href = "https://duminimum.vercel.app/";
  };

  return (
       <header className="header">
      <h1 className="logo" onClick={goHome} >
        {headerName}
      </h1>


     <nav className="nav">
        <button className="dropdown-btn" 
        onClick={toggleDropdown}
        >
          Menu
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li><a href="https://ducontact.vercel.app">Contact</a></li>
            <li><a href="https://duminimum.vercel.app/cred">Credentialing</a></li>
            <li><a href="https://handlerlite.vercel.app">Handlerlite</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;