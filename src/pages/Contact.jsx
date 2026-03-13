import React from 'react';
import '../styles/NewApp.css';


import Header from '../components/header';
import Footer from '../components/footer';

import GithubProfile from '../components/GitHubCall';


function Contact() {

  
  return (
    <div className="body">
      <Header/>
      <main className="main">
        <GithubProfile username="DomiUmami"/>
      <a className="contact-card" href="https://mail.google.com/mail/?view=cm&fs=1&to=duminimum@gmail.com&su=Hello&body=I%20saw%20your%20portfolio..."
      target="_blank"
      rel="noopener noreferrer"> Email </a>
      <a className="contact-card" href="https://www.linkedin.com/in/dominikwilliams/">LinkedIn</a>
      </main>
      <Footer/>
    </div>
  );
}

export default Contact;