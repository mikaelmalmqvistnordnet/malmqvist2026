import React from 'react';
import { Router } from '@reach/router';
import Home from '../../routes/home';
import Profile from '../../routes/profile';
import Contact from '../../routes/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Profile path="profile" />
        <Contact path="contact" />
      </Router>
    </div>
  );
}

export default App;
