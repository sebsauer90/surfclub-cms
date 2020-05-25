import { graphql, useStaticQuery } from 'gatsby';
import moment from 'moment';
import 'moment/locale/de';

moment.locale('de');

const useEvents = () => {
  const { allMarkdownRemark: { edges } } = useStaticQuery(
    graphql`
      query Events {
        allMarkdownRemark(
          filter: {frontmatter: {templateKey: {eq: "event"}}}
          sort: {fields: frontmatter___date, order: ASC}
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date
                location
                duration
                category
              }
            }
          }
        }
      }
    `
  );

  if (edges.length === 0) {
    return null;
  }

  const dates = {};
  edges
    .filter((item) => {
      const date = moment(item.node.frontmatter.date);
      const diff = date.diff(moment(), 'days');
      return diff >= 0;
    })
    .forEach(({ node }) => {
      const date = moment(node.frontmatter.date);
      const year = date.year();
      const month = date.format('MMMM');
      const day = date.date();
      const dayName = date.format('dddd');
      const time = date.format('HH:mm');

      if (!dates[year]) dates[year] = {};
      if (!dates[year][month]) dates[year][month] = {};
      if (!dates[year][month][day]) dates[year][month][day] = [];

      dates[year][month][day].push({
        ...node,
        year,
        month,
        day,
        time,
        dayName,
      });
    });

  return dates;
}

export default useEvents;
