import { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import moment from 'moment';
import 'moment/locale/de';

moment.locale('de');

const useEvents = (limit) => {
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { allMarkdownRemark: { edges } } = useStaticQuery(
    graphql`
      query Events {
        allMarkdownRemark(
          filter: {frontmatter: {templateKey: {eq: "event"}}}
        ) {
          edges {
            node {
              id
              frontmatter {
                events {
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
      }
    `
  );

  const events = edges[0].node?.frontmatter?.events || [];
  const formattedEvents = events.sort((a, b) => moment(a.date) - moment(b.date));

  const handleSetCategoryFilter = (next) => {
    setCategoryFilter(categoryFilter === next ? null : next);
  };

  const dates = {};
  let length = 0;

  let items = formattedEvents.filter((item) => {
    const date = moment(item.date);
    const diff = date.diff(moment(), 'days');
    const isFilteredByCategory = categoryFilter ? item.category === categoryFilter : true;
    const isFilteredByQuery = searchQuery ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    return diff >= 0 && isFilteredByCategory && isFilteredByQuery;
  })

  items = limit && items ? items.slice(0, limit) : items;

  items.forEach((item) => {
    const date = moment(item.date);
    const year = date.year();
    const month = date.format('MMMM');
    const day = date.date();
    const dayName = date.format('dddd');
    const time = date.format('HH:mm');

    if (!dates[year]) dates[year] = {};
    if (!dates[year][month]) dates[year][month] = {};
    if (!dates[year][month][day]) dates[year][month][day] = [];

    dates[year][month][day].push({
      ...item,
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
