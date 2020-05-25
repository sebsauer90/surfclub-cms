import React from 'react';
import './Day.scss';

function Day({ month, day, dayName }) {
  return (
    <div className="Day">
      <div className="Day__day">{day}.</div>
      <div className="Day__details">
        <div className="Day__dayName">{month}</div>
        <div className="Day__month">{dayName}</div>
      </div>
    </div>
  );
}

export default Day;
