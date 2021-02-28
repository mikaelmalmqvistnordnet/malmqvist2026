import React from 'react';
import { Link } from '@reach/router';

import './index.css';

const Navigation: React.FC = () => (
  <header>
    <nav className="navigation">
      <Link to="/" className="navigation-home" title="Home">
        Mikael Malmqvist
      </Link>
      <Link to="about" title="About">
        About
      </Link>
      <Link to="contact" title="Contact">
        Contact
      </Link>
    </nav>
  </header>
);

export default Navigation;
