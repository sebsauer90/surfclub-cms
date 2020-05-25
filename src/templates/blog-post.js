import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Stage from '../components/Stage/Stage';
import SectionHeadline from '../components/Typo/SectionHeadline';
import Content, { HTMLContent } from '../components/Content/Content';
import NewsBox from '../components/News/NewsBox';

export const BlogPostTemplate = ({
  id,
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      {helmet || ''}

      <Stage small />
      <section className="container__page mb">
        <div className="container center mb">
          <SectionHeadline>{title}</SectionHeadline>
          <p>{description}</p>
        </div>
        <div className="container">
          <PostContent content={content} />
        </div>
      </section>
      <NewsBox currentId={id} />
    </>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        id={post.id}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Surfclub Hachen-Sorpesee e.V.">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
