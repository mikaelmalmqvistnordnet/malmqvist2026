import { useLocation } from '@tanstack/react-router';
import React from 'react';
import { Link } from './Link';
import { FlowersAroundName } from './FlowersAroundName';

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <FlowersAroundName>
        <div className="flex flex-col gap-5 z-20">
          <h2 className="font-curly">Välkommen på bröllop</h2>
          <h1 className="font-professional-spaced text-4xl md:text-7xl">ERIKA & MIKAEL</h1>
          <h3 className="font-professional-spaced mt-4 ">25 JULI 2026</h3>
        </div>
      </FlowersAroundName>
      <nav className="pt-20 flex justify-center gap-2 items-center flex-wrap pb-3">
        <Link to="/" isActive={location.pathname === '/'}>
          Hem
        </Link>
        •
        <Link to="/osa" isActive={location.pathname === '/osa'}>
          OSA
        </Link>
        •
        <Link to="/hitta-hit" isActive={location.pathname === '/hitta-hit'}>
          Hitta hit
        </Link>
        •
        <Link to="/kontakt" isActive={location.pathname === '/kontakt'}>
          Kontakt
        </Link>
        •
        <Link to="/tal" isActive={location.pathname === '/tal'}>
          Anmäl tal
        </Link>
      </nav>
    </>
  );
};
