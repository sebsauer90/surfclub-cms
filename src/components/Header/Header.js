import React from 'react';
import { Link } from 'gatsby';
import './Header.scss';
import ButtonInterLink from '../Button/ButtonInterLink';

function Header() {
  return (
    <header className="Header">
      <div className="Header__wrapper container">
        <ButtonInterLink>Webcam</ButtonInterLink>
        <nav>
          <Link to="/index">Startseite</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
