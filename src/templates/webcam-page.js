import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Stage from '../components/Stage/Stage';
import SectionHeadline from '../components/Typo/SectionHeadline';
import WebcamView from '../components/Webcam/Webcam';
import NewsBox from '../components/News/NewsBox';

export const WebcamPageTemplate = ({ description }) => {
  return (
    <>
      <Helmet titleTemplate="%s | Surfclub Hachen-Sorpesee e.V.">
        <title>Webcam</title>
        <meta
          name="description"
          content="Webcam"
        />
      </Helmet>

      <Stage small />
      <section className="container__page center mb">
        <div className="container">
          <SectionHeadline>Webcam</SectionHeadline>
          <p className="mb">{description}</p>
          <WebcamView />
        </div>
      </section>
      <NewsBox />
    </>
  )
};

WebcamPageTemplate.propTypes = {
  description: PropTypes.string,
};

const WebcamPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WebcamPageTemplate description={post.frontmatter.description} />
    </Layout>
  )
}

WebcamPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WebcamPage;

export const webcamPageQuery = graphql`
  query WebcamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        description
      }
    }
  }
`;
