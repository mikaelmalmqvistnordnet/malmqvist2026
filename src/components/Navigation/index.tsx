import React from 'react';
import { Link } from '@reach/router';

import './index.css';

const Navigation: React.FC = () => (
  <header>
    <nav className="navigation">
      <Link to="/" className="navigation-home">
        Mikael Malmqvist
      </Link>
      <Link to="profile">Profile</Link>
      <Link to="contact">Contact</Link>
    </nav>
  </header>
);

export default Navigation;
