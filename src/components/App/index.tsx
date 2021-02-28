import React from 'react';
import { Router } from '@reach/router';
import Home from '../../routes/home';
import Profile from '../../routes/profile';
import Contact from '../../routes/contact';
import Navigation from '../Navigation';

import './index.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Router className="main">
        <Home path="/" />
        <Profile path="profile" />
        <Contact path="contact" />
      </Router>
    </div>
  );
}

export default App;
