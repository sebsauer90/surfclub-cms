import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import './Header.scss';
import ButtonInterLink from '../Button/ButtonInterLink';
import InstagramIcon from '../Icons/InstagramIcon';
import FacebookIcon from '../Icons/FacebookIcon';

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
            }
          }
        }
      }
  `);

  return (
    <header className="Header">
      <div className="Header__wrapper container">
        <ButtonInterLink>Webcam</ButtonInterLink>
        <nav className="Navigation">
          <Link to="/" className="Navigation__link" activeClassName="Navigation__link--active">Startseite</Link>
          {edges.map(({ node }) => (
            <Link
              key={node.id}
              to={node.fields.slug}
              className="Navigation__link"
              activeClassName="Navigation__link--active">
              {node.frontmatter.title}
            </Link>
          ))}
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
