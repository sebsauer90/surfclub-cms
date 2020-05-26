import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Stage from '../components/Stage/Stage';
import Slider from '../components/Slider/Slider';
import TeaserBlock from '../components/Teaser/TeaserBlock';
import SectionHeadline from '../components/Typo/SectionHeadline';
import Content, { HTMLContent } from '../components/Content/Content';

export const PageTemplate = ({
  content,
  contentComponent,
  description,
  teaser,
  title,
  imageSlider,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      {helmet || ''}

      <Stage small />
      <section className="mb">
        <div className="container container__page center mb">
          <SectionHeadline>{title}</SectionHeadline>
          {description && (<p>{description}</p>)}
          {imageSlider && imageSlider.length > 0 && (
            <Slider
              items={imageSlider.map(item => ({
                ...item,
                image: item.image.childImageSharp.fluid.src,
              }))}
            />
          )}
        </div>
        {teaser && teaser.length > 0 && (
          <TeaserBlock items={teaser} />
        )}
        <div className="container container__page mb">
          <PostContent content={content} />
        </div>
      </section>
    </>
  )
};

PageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const Page = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        teaser={post.frontmatter.teaser}
        title={post.frontmatter.title}
        imageSlider={post.frontmatter.imageSlider}
        helmet={
          <Helmet titleTemplate="%s | Surfclub Hachen-Sorpesee e.V.">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
};

Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Page;

export const pageQuery = graphql`
  query PagePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        teaser {
          text
          title
        }
        imageSlider {
          image {
            childImageSharp {
              fluid(maxWidth: 1220, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
