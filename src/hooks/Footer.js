import { graphql, useStaticQuery } from 'gatsby';

const useFooterContent = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query FooterContent {
        markdownRemark(frontmatter: {templateKey: {eq: "settings-page"}}) {
          frontmatter {
            email
          }
          html
        }
      }
    `
  );
  const { frontmatter: { email }, html } = markdownRemark;
  return {
    email,
    html,
  };
}

export default useFooterContent;
