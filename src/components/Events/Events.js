import React from 'react';
import useEvents from '../../hooks/Events';
import Day from './Day';
import Event from './Event';
import './Events.scss';

function Events() {
  const events = useEvents();

  if (events === null) {
    return (
      <div className="Events">
        <div className="Events__empty">
          Zur Zeit gibt es keine Termine.
        </div>
      </div>
    );
  }

  return (
    <div className="Events">
      {Object.keys(events).map((year) => (
        <div key={year}>
          {Object.keys(events[year]).map((month) => (
            <div key={month}>
              {Object.keys(events[year][month]).map((day) => (
                <div key={day}>
                  <Day month={month} day={day} dayName={events[year][month][day][0].dayName} />
                  {events[year][month][day].map((event) => (
                    <Event key={event.id} data={event} />
                  ))}
                </div>
              ))}
            </div>
          ))} 
        </div>
      ))}
    </div>
  );
}

export default Events;
