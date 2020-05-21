import React from 'react';
import { Link } from 'gatsby';
import InstagramIcon from '../Icons/InstagramIcon';
import FacebookIcon from '../Icons/FacebookIcon';
import logo from '../../img/logo-surfer.svg';
import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="Footer__wrapper">
          <div className="Footer__column">
          <h4>Surfclub Hachen-Sorpesee e.V.</h4>
            <p className="mb-sm">
              Drostestr. 5<br />
              59846 Sundern<br />
              Tel. Allgemein 0 29 35 / 43 55<br />
              Tel. Breitensport 0 29 35 / 45 36
            </p>
            <h4>Vereinsheim</h4>
            <p>
              Am Sorpesee 11<br />
              59846 Sundern
            </p>
          </div>
          <div className="Footer__column Footer__column--social">
            <p>
              <a href="mailto:info@surfclub-hachen.de">info@surfclub-hachen.de</a>
            </p>
            <p className="Footer__links">
              <Link to="/index">Impressum</Link><br />
              <Link to="/index">Datenschutz</Link>
            </p>
            <div className="Footer__social">
              <a className="Footer__socialLink" href="/facebook"><FacebookIcon /></a>
              <a className="Footer__socialLink" href="/instagram"><InstagramIcon /></a>
            </div>
          </div>
          <div className="Footer__column Footer__column--logo">
            <img className="Footer__logo" src={logo} alt="Surfclub Hachen-Sorpesee e.V. seit 1984" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
