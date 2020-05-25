import { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import moment from 'moment';
import 'moment/locale/de';

moment.locale('de');

const useEvents = () => {
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
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

  const handleSetCategoryFilter = (next) => {
    setCategoryFilter(categoryFilter === next ? null : next);
  };

  const dates = {};
  let length = 0;

  edges
    .filter((item) => {
      const date = moment(item.node.frontmatter.date);
      const diff = date.diff(moment(), 'days');
      const isFilteredByCategory = categoryFilter ? item.node.frontmatter.category === categoryFilter : true;
      const isFilteredByQuery = searchQuery ? item.node.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
      return diff >= 0 && isFilteredByCategory && isFilteredByQuery;
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
      length++;
    });

  return {
    events: dates,
    categoryFilter,
    setCategoryFilter: handleSetCategoryFilter,
    searchQuery,
    setSearchQuery,
    length,
  };
}

export default useEvents;
