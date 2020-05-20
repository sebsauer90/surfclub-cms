import React from 'react';
import Seperator from '../Icons/Seperator';
import ArrowButtonInterLink from '../Button/ArrowButtonInterLink';
import './TeaserOutlined.scss';

function TeaserOutlined(props) {
  const { title, description, to, label } = props;

  return (
    <article className="TeaserOutlined">
      <h3 className="TeaserOutlined__headline">{title}</h3>
      <Seperator className="TeaserOutlined__seperator" />
      <p className="TeaserOutlined__text">{description}</p>
      {to && (
        <ArrowButtonInterLink to={to}>
          {label}
        </ArrowButtonInterLink>
      )}
    </article>
  );
}

export default TeaserOutlined;
