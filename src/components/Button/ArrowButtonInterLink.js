import React from 'react';
import { Link } from 'gatsby';
import ChevronIcon from '../Icons/ChevronIcon';

function ArrowButtonInterLink({ to, children }) {
  return (
    <Link className="ArrowButton" to={to}>
      {children}
      <ChevronIcon className="ArrowButton__icon" />
    </Link>
  );
}

export default ArrowButtonInterLink;
