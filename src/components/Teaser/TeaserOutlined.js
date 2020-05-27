import React from 'react';
import { Link } from 'gatsby';
import ChevronIcon from '../Icons/ChevronIcon';
import Seperator from '../Icons/Seperator';
import './TeaserOutlined.scss';

function TeaserOutlined(props) {
  const { title, description, to, label } = props;

  return (
    <Link className="TeaserOutlined" to={to}>
      <article>
        <h3 className="TeaserOutlined__headline">{title}</h3>
        <Seperator className="TeaserOutlined__seperator" />
        <p className="TeaserOutlined__text">{description}</p>
        {to && (
          <span className="ArrowButton">
            {label}
            <ChevronIcon className="ArrowButton__icon" />
          </span>
        )}
      </article>
    </Link>
  );
}

export default TeaserOutlined;
