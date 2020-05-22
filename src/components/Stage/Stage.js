import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
          <img className="Stage__logo" src={logo} alt="Surfclub Hachen-Sorpesee e.V. seit 1984" />
        </div>
      </div>
    </div>
  );
}

export default Stage;
