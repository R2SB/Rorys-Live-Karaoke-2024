import React, { useState } from 'react';
import './CalendarEvents.css';
import { CALENDAR_ID } from '../../constants';

const CalendarEvents = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  // The calendar ID from your existing code
  
  // Using parameters that provide a more minimal look
  // Try to use the most minimal version possible
  const calendarEmbedUrl = `https://calendar.google.com/calendar/embed?src=${CALENDAR_ID}&ctz=local&mode=AGENDA&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&bgcolor=%23f9f9f9&color=%23ff5252&showHeader=0`;
  
  return (
    <section className="calendar-events-container" id="events">
      <div className="section-heading"><p>UPCOMING EVENTS</p></div>
      
      <div className={`calendar-wrapper ${isLoaded ? 'loaded' : 'loading'}`}>
        {!isLoaded && <div className="calendar-loading">Loading calendar...</div>}
        <iframe 
          src={calendarEmbedUrl}
          frameBorder="0" 
          scrolling="no"
          title="Google Calendar Events"
          className="calendar-iframe"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          allow="fullscreen"
        ></iframe>
      </div>
      
      <a 
        href={`https://calendar.google.com/calendar/u/0/r?cid=${CALENDAR_ID}`} 
        className="view-all-button" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View Full Calendar
      </a>
    </section>
  );
};

export default CalendarEvents;
