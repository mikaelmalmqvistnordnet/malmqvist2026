import React, { type PropsWithChildren } from 'react';
import { Link as RouterLink } from '@tanstack/react-router';

type Props = {
  to: string;
  isActive: boolean;
};

export const Link: React.FC<PropsWithChildren<Props>> = ({ to, isActive, children }) => {
  return (
    <div
      className={`font-professional text-gray-600 text-lg md:text-2xl hover:text-gray-800 ${
        isActive ? 'underline' : ''
      }`}
    >
      <RouterLink to={to}>{children}</RouterLink>
    </div>
  );
};
