import React from 'react';
import { Link } from '@reach/router';

import './index.css';

const Navigation: React.FC = () => (
  <nav className="navigation">
    <Link to="/">Home</Link>
    <Link to="profile">Profile</Link>
    <Link to="contact">Contact</Link>
  </nav>
);

export default Navigation;
