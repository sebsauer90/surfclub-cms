import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './Header.scss';
import ButtonInterLink from '../Button/ButtonInterLink';
import InstagramIcon from '../Icons/InstagramIcon';
import FacebookIcon from '../Icons/FacebookIcon';
import BarsIcon from '../Icons/BarsIcon';
import Navigation from './Navigation';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { allMarkdownRemark: { edges }} = useStaticQuery(graphql`
    query PageNavQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "page" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
              html
            }
          }
        }
      }
  `);

  return (
    <header className="Header">
      <div className="Header__wrapper container">
        <ButtonInterLink to="/webcam">Webcam</ButtonInterLink>
        <Navigation isOpen={isOpen} setIsOpen={setIsOpen} items={edges} />

        <div className="Social">
          {/* <a className="Social__link" href="#"><FacebookIcon className="Social__icon" /></a> */}
          <a className="Social__link" href="https://www.instagram.com/surfclub_hachen_sorpesee/?hl=de"><InstagramIcon className="Social__icon" /></a>

          <button className="NavigationTrigger" onClick={() => setIsOpen(!isOpen)}>
            <BarsIcon className="NavigationTrigger__icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
