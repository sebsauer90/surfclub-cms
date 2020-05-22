import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Stage from '../components/Stage/Stage';
import SectionHeadline from '../components/Typo/SectionHeadline';
import Content, { HTMLContent } from '../components/Content/Content';

export const ImprintPageTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      {helmet || ''}

      <Stage small />
      <section className="container__page center mb">
        <div className="container">
          <SectionHeadline>{title}</SectionHeadline>
          <PostContent content={content} />
        </div>
      </section>
    </>
  )
};

ImprintPageTemplate.propTypes = {
  description: PropTypes.string,
};

const ImprintPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ImprintPageTemplate
        title={post.frontmatter.title}
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Surfclub Hachen-Sorpesee e.V.">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
      />
    </Layout>
  )
}

ImprintPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ImprintPage;

export const imprintPageQuery = graphql`
  query ImprintPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
