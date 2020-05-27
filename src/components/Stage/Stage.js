import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import './Stage.scss';
import logo from '../../img/logo.svg';

function Stage({ small }) {
  const { markdownRemark: { frontmatter } } = useStaticQuery(graphql`
    query StageTemplate {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const image = frontmatter.image;
  const url = !!image.childImageSharp ? image.childImageSharp.fluid.src : image;

  return (
    <div className={`Stage mb${small ? ' Stage--small' : ''}`} style={{ backgroundImage: `url(${url})` }}>
      <div className="container">
        <div className="Stage__wrapper">
          {small ? (
            <Link className="Stage__logo" to="/">
              <img src={logo} alt="Surfclub Hachen-Sorpesee e.V. seit 1984" />
            </Link>
          ) : (
            <h1 className="Stage__logo">
              <img src={logo} alt="Surfclub Hachen-Sorpesee e.V. seit 1984" />
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stage;
