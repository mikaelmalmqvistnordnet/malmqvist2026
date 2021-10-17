import React from 'react';
import { Link } from '@reach/router';

type Props = {
  to: string;
  title: string;
  active?: boolean;
};

const MenuLink: React.FC<Props> = ({ to, title, active, children }) => (
  <Link to={to} className="px-2 relative flex justify-center no-underline" title={title}>
    {children}
    {active && <div className="absolute border-solid border border-white -bottom-2.5 animate-widen" />}
  </Link>
);

export default MenuLink;
