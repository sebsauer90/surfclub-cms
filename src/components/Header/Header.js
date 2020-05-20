import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './Header.scss';
import ButtonInterLink from '../Button/ButtonInterLink';
import InstagramIcon from '../Icons/InstagramIcon';
import FacebookIcon from '../Icons/FacebookIcon';
import BarsIcon from '../Icons/BarsIcon';
import Navigation from './Navigation';

function Header() {
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
        <ButtonInterLink>Webcam</ButtonInterLink>
        <Navigation items={edges} />
        <div className="Social">
          <FacebookIcon className="Social__icon" />
          <InstagramIcon className="Social__icon" />
          <button className="NavigationTrigger">
            <BarsIcon className="NavigationTrigger__icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
