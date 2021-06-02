import React from 'react';
import useEvents from '../../hooks/Events';
import Day from './Day';
import Event from './Event';
import ButtonInterLink from '../Button/ButtonInterLink';
import './EventsTeaser.scss';

function EventsTeaser() {
  const { events, length } = useEvents(3);

  return (
    <div className="EventsTeaser">
      <div className="container container__page">
        <h2 className="EventsTeaser__headline center">Kommende Termine</h2>

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

        <div className="EventsTeaser__button">
          <ButtonInterLink to="/events">
            Alle Termine
          </ButtonInterLink>
        </div>
      </div>
    </div>
  );
}

export default EventsTeaser;
