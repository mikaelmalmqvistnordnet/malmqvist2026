import { Link, useLocation } from '@tanstack/react-router';
import React from 'react';

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <h2 className="font-curly">Välkommen på bröllop</h2>
      <h1 className="font-professional-spaced text-4xl md:text-7xl">MIKAEL & ERIKA</h1>
      <h3 className="font-professional-spaced mt-4">25 JULI 2026</h3>
      <nav className="pt-8 flex justify-center gap-2 items-center">
        <div
          className={`font-bold text-gray-600 text-2xl ${
            location.pathname === '/' ? 'underline' : ''
          }`}
        >
          <Link to="/">Hem</Link>
        </div>
        •
        <div
          className={`font-bold text-gray-600 text-2xl ${
            location.pathname === '/osa' ? 'underline' : ''
          }`}
        >
          <Link to="/osa" className={location.pathname === '/osa' ? 'underline' : ''}>
            OSA
          </Link>
        </div>
        •
        <div
          className={`font-bold text-gray-600 text-2xl ${
            location.pathname === '/hitta-hit' ? 'underline' : ''
          }`}
        >
          <Link to="/hitta-hit">Hitta hit</Link>
        </div>
        •
        <div
          className={`font-bold text-gray-600 text-2xl ${
            location.pathname === '/kontakt' ? 'underline' : ''
          }`}
        >
          <Link to="/kontakt">Kontakt</Link>
        </div>
        •
        <div
          className={`font-bold text-gray-600 text-2xl ${
            location.pathname === '/tal' ? 'underline' : ''
          }`}
        >
          <Link to="/tal">Anmäl tal</Link>
        </div>
      </nav>
    </>
  );
};
