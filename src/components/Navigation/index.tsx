import React from 'react';
import { LocationProvider } from '@reach/router';

import './index.css';
import MenuLink from '../MenuLink';

const Navigation: React.FC = () => (
  <header>
    <nav className="navigation">
      <LocationProvider>
        {(locationContext) => (
          <>
            <MenuLink to="/" className="navigation-home" title="Home">
              Mikael Malmqvist
            </MenuLink>
            <MenuLink
              to="about"
              title="About"
              active={locationContext.location.pathname === '/about'}
            >
              About
            </MenuLink>
            <MenuLink
              to="contact"
              title="Contact"
              active={locationContext.location.pathname === '/contact'}
            >
              Contact
            </MenuLink>
          </>
        )}
      </LocationProvider>
    </nav>
  </header>
);

export default Navigation;
