import React from 'react';
import { Link } from 'gatsby';
import './Header.scss';
import ButtonInterLink from '../Button/ButtonInterLink';
import InstagramIcon from '../Icons/InstagramIcon';
import FacebookIcon from '../Icons/FacebookIcon';

function Header() {
  return (
    <header className="Header">
      <div className="Header__wrapper container">
        <ButtonInterLink>Webcam</ButtonInterLink>
        <nav className="Navigation">
          <Link to="/" className="Navigation__link" activeClassName="Navigation__link--active">Startseite</Link>
          <Link to="/index" className="Navigation__link" activeClassName="Navigation__link--active">Link</Link>
          <Link to="/index" className="Navigation__link" activeClassName="Navigation__link--active">Link</Link>
        </nav>
        <div className="Social">
          <FacebookIcon className="Social__icon" />
          <InstagramIcon className="Social__icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
