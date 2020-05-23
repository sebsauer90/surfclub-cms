import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import TeaserOutlined from '../Teaser/TeaserOutlined';
import './News.scss';

function News({ data, limit }) {
  const { edges: posts } = data.allMarkdownRemark;
  const renderItems = limit && posts ? posts.slice(0, limit) : posts;

  return (
    <div className="container mb">
      <div className="News">
        {renderItems && renderItems.map(({ node: post }) => (
          <TeaserOutlined
            key={post.id}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            to={post.fields.slug}
            label="mehr erfahren"
          />
        ))}
      </div>
    </div>
  );
}

News.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default ({ limit }) => (
  <StaticQuery
    query={graphql`
      query NewsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <News data={data} count={count} limit={limit} />}
  />
)
