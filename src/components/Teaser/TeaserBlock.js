import React from 'react';
import './TeaserBlock.scss';

function TeaserBlock({ items }) {
  return (
    <div className="TeaserBlock mb">
      <div className="container">
        <ul className="TeaserBlock__list">
          {items.map((item, index) => (
            <li key={index} className="TeaserBlock__item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TeaserBlock;
