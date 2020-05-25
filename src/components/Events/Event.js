import React from 'react';
import './Event.scss';

function Event({ data }) {
  const { frontmatter: { title, category, location }, time } = data;

  return (
    <div className="Event">
      <div className="Event__header">
        <h3 className="Event__title">{title}</h3>
        <p className="Event__category">{category}</p>
      </div>
      <div className="Event__data">
        {time && (<p>Wann: {time}</p>)}
        {location && (<p>Wo: {location}</p>)}
      </div>
    </div>
  );
}

export default Event;
