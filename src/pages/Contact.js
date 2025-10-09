import React from 'react';
import '../styles/App.css';
/*import { useHistory } from 'react-router-dom';*/

import Header from '../components/header';
import Footer from '../components/footer';

import "../styles/Header.css"
import "../styles/Layout.css"
import "../styles/Contact.css"
import placeholder from '../images/placeholder.png'

import ProjectCardGenerator from "../components/CardGenerator";
import GithubProfile from '../components/GitHubCall';

function Contact() {
  /*const history = useHistory();*/
  
  return (
    <div className="grid-container">
      <Header></Header>

      <aside className="sidebar">
        <ProjectCardGenerator username="DomiUmami"/>
      </aside>

      <main className="main">
        <GithubProfile username="DomiUmami" />

        
      </main>

      <aside className="rightside">
        <img src={placeholder} className="img" alt="logo" />
        <img src={placeholder} className="img" alt="logo" />
        <img src={placeholder} className="img" alt="logo" />
      </aside>

      <Footer></Footer>
    </div>
  );
}

export default Contact;
