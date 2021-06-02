import React from 'react';
import useEvents from '../../hooks/Events';
import Day from './Day';
import Event from './Event';
import Filter from './Filter';
import './Events.scss';

function Events() {
  const {
    events,
    categoryFilter,
    setCategoryFilter,
    searchQuery,
    setSearchQuery,
    length,
  } = useEvents();

  return (
    <div className="Events">
      <Filter
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {length === 0 && (
        <div className="Events__empty">
          Keine Termine gefunden.
        </div>
      )}

      {Object.keys(events).map((year, yi) => (
        <div key={`${year}_${yi}`}>
          {Object.keys(events[year]).map((month, mi) => (
            <div key={`${month}_${mi}`}>
              {Object.keys(events[year][month]).map((day, di) => (
                <div key={`${day}_${di}`}>
                  <Day month={month} day={day} dayName={events[year][month][day][0].dayName} />
                  {events[year][month][day].map((event, ei) => (
                    <Event key={`${event.time}_${ei}`} data={event} />
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
