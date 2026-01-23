import React from 'react';
import '../styles/App.css';


import Header from '../components/header';
import Footer from '../components/footer';

import "../styles/Header.css"
import "../styles/Layout.css"
import "../styles/Contact.css"

import ProjectCardGenerator from "../components/CardGenerator";
import GithubProfile from '../components/GitHubCall';

function Contact() {

  
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
      </aside>

      <Footer></Footer>
    </div>
  );
}

export default Contact;