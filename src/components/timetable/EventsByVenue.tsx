import React from "react";
import { Event } from "../../stories/domain";
import SessionsByWeek from "./SessionsByWeek";
import { groupEventsByVenueName } from "./utils";

type EventsByVenueProps = {
  events: Event[];
};

const renderEvents = (events: Event[]) => {
  return (
    <ul style={{ margin: 0, padding: "10px", listStyle: "none" }}>
      {events.map((event, idx) => (
        <li key={idx}>
          {event.name}
          <SessionsByWeek sessions={event.sessions} />
        </li>
      ))}
    </ul>
  );
};

const EventsByVenue = ({ events }: EventsByVenueProps) => (
  <ul style={{ margin: 0, padding: "10px", listStyle: "none" }}>
    {Object.entries(groupEventsByVenueName(events)).map(
      ([venueName, venueEvents], idx: number) => (
        <li key={idx}>
          <h3 style={{ margin: 0 }}>{venueName}</h3>
          {renderEvents(venueEvents)}
        </li>
      )
    )}
  </ul>
);

export default EventsByVenue;
