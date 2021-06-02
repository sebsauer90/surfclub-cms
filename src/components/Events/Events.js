import React from 'react';
// import useEvents from '../../hooks/Events';
import Day from './Day';
import Event from './Event';
import Filter from './Filter';
import './Events.scss';

function Events() {
  // const {
  //   events,
  //   categoryFilter,
  //   setCategoryFilter,
  //   searchQuery,
  //   setSearchQuery,
  //   length,
  // } = useEvents();

  return null;

  // return (
  //   <div className="Events">
  //     <Filter
  //       categoryFilter={categoryFilter}
  //       setCategoryFilter={setCategoryFilter}
  //       searchQuery={searchQuery}
  //       setSearchQuery={setSearchQuery}
  //     />

  //     {length === 0 && (
  //       <div className="Events__empty">
  //         Keine Termine gefunden.
  //       </div>
  //     )}

  //     {Object.keys(events).map((year) => (
  //       <div key={year}>
  //         {Object.keys(events[year]).map((month) => (
  //           <div key={month}>
  //             {Object.keys(events[year][month]).map((day) => (
  //               <div key={day}>
  //                 <Day month={month} day={day} dayName={events[year][month][day][0].dayName} />
  //                 {events[year][month][day].map((event) => (
  //                   <Event key={event.id} data={event} />
  //                 ))}
  //               </div>
  //             ))}
  //           </div>
  //         ))} 
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default Events;
