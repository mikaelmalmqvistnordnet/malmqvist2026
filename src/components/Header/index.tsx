import { LocationProvider } from '@reach/router';
import React from 'react';
import avatar from '../../assets/avatar.jpg';
import MenuLink from '../MenuLink';

const Header: React.FC = () => (
  <header className="flex flex-col justify-center items-center w-full py-5">
    <img alt="" width="100" height="100" src={avatar} className="mb-2 rounded-full" />
    <span className="text-white font-bold text-base">Mikael Malmqvist</span>
    <nav className="flex justify-center mt-5 text-base font-light">
      <LocationProvider>
        {(locationContext) => (
          <>
            <MenuLink to="/" title="Home" active={locationContext.location.pathname === '/'}>
              Home
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

export default Header;
