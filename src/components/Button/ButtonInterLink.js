import React from 'react';
import { Link } from 'gatsby';
import './Button.scss';

function ButtonInterLink({ to, children }) {
  return (
    <Link className="Button" to={to}>
      {children}
    </Link>
  );
}

export default ButtonInterLink;
