import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import News from '../components/News/News';
import Stage from '../components/Stage/Stage';

export const IndexPageTemplate = () => (
  <div>
    <Stage />
    <News />
  </div>
);

IndexPageTemplate.propTypes = {};

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
};

IndexPage.propTypes = {};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
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
`;
