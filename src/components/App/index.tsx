import React from 'react';
import { Router } from '@reach/router';
import Home from '../../routes/home';
import About from '../../routes/about';
import Contact from '../../routes/contact';
import Header from '../Header';

function App() {
  return (
    <div className="flex flex-col items-center h-full w-full relative overflow-hidden ">
      <span className="z-0 absolute w-full h-full top-0 left-0 bg-black opacity-60 overflow-hidden" />
      <div className="z-10 flex flex-col items-center overflow-y-auto px-5 w-full">
        <Header />
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
