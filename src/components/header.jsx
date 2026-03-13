import React, { useState } from "react";
import '../styles/NewApp.css';
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
      <a className="compname" onClick={goHome} > DUMinimum </a>
     <nav className="nav">
          <a className="links" href="https://duminimum.vercel.app">Home</a>
<a> | </a>
          <a className="links" href="https://ducontact.vercel.app">Contact</a>
<a> | </a>
          <a className="links" href="https://www.linkedin.com/in/dominikwilliams/">LinkedIn</a>
<a> | </a>
          <a className="links" href="https://handlerlite.vercel.app">Handlerlite</a>
<a> | </a>
          <a className="links" href="https://github.com/DomiUmami/DomiUmami.git">About Me</a>
      </nav>
    </header>
  );
}

export default Header;