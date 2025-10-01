import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/App.css';
import Header from '../header';

function Home() {

  return (
    <div className='App'>
      <Header />
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome!</h1>
    </div>
    <footer className='App-footer'>
      footer
    </footer>
    </div>
  );
}

export default Home;

