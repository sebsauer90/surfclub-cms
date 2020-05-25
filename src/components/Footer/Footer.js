import React from 'react';
import { Link } from 'gatsby';
import InstagramIcon from '../Icons/InstagramIcon';
// import FacebookIcon from '../Icons/FacebookIcon';
import logo from '../../img/logo-surfer.svg';
import useFooterContent from '../../hooks/Footer';
import { HTMLContent } from '../Content/Content';
import './Footer.scss';

function Footer() {
  const { html } = useFooterContent();

  return (
    <footer className="Footer">
      <div className="container">
        <div className="Footer__wrapper">
          <div className="Footer__column">
            <HTMLContent content={html} />
          </div>
          <div className="Footer__column Footer__column--social">
            <p>
              <a href="mailto:info@surfclub-hachen.de">info@surfclub-hachen.de</a>
            </p>
            <p className="Footer__links">
              <Link to="/impressum">Impressum</Link><br />
              <Link to="/datenschutz">Datenschutz</Link>
            </p>
            <div className="Footer__social">
              {/* <a className="Footer__socialLink" href="/facebook"><FacebookIcon /></a> */}
              <a className="Footer__socialLink" href="https://www.instagram.com/surfclub_hachen_sorpesee/?hl=de"><InstagramIcon /></a>
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
