import React from 'react';
import { Router } from '@reach/router';
import Home from '../../routes/home';
import About from '../../routes/about';
import Contact from '../../routes/contact';
import Navigation from '../Navigation';

import './index.css';

function App() {
  return (
    <div className="app">
      <span className="app-background" />
      <div className="main">
        <Navigation />
        <Router>
          <Home path="/" />
          <About path="about" />
          <Contact path="contact" />
        </Router>
      </div>
    </div>
  );
}

export default App;
