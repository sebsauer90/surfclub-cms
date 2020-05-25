import { graphql, useStaticQuery } from 'gatsby';

const useFooterContent = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query FooterContent {
        markdownRemark(frontmatter: {templateKey: {eq: "settings-page"}}) {
          html
        }
      }
    `
  );
  return {
    html: markdownRemark.html,
  };
}

export default useFooterContent;
