import React from 'react';
import { Link } from '@reach/router';

import './index.css';

type Props = {
  to: string;
  title: string;
  active?: boolean;
  className?: string;
};

const MenuLink: React.FC<Props> = ({
  to,
  title,
  className,
  active,
  children,
}) => (
  <Link to={to} className={className} title={title}>
    {children}
    {active && <div className="active-indicator" />}
  </Link>
);

export default MenuLink;
