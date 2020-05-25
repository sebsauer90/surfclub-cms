import React from 'react';

function Button({ secondary, active, children, ...props }) {
  const classNames = ['Button'];

  if (secondary) classNames.push('Button--secondary');
  if (active) classNames.push('Button--active');

  return (
    <button className={classNames.join(' ')} {...props}>
      {children}
    </button>
  );
}

export default Button;
