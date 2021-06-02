import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Stage from '../components/Stage/Stage';
import News from '../components/News/News';
import EventsTeaser from '../components/Events/EventsTeaser';

export const IndexPageTemplate = () => (
  <div>
    <Stage />
    <div className="mb">
      <News />
    </div>
    <EventsTeaser />
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
