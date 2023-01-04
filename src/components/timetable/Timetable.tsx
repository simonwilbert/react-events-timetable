import React from "react";
import { Event, Tag } from "../../stories/domain";
import EventsByVenue from "./EventsByVenue";
import {
  getPrettyDateRange,
  getTimetableTitle,
  groupEventsByTagType,
} from "./utils";

export type GroupedByTagType = "LOCATIONTYPE" | "AGETYPE" | "ACTIVITYTYPE";

export interface TimetableProps {
  description: string;
  groupedBy: GroupedByTagType;
  events: Event[];
  tags: Tag[];
  from?: Date;
  to?: Date;
}

const Timetable = ({
  description,
  groupedBy,
  events,
  tags,
  from,
  to,
}: TimetableProps) => {
  return (
    <div>
      <h2>
        <strong>{getTimetableTitle(tags)}</strong>
      </h2>
      {description && <p>{description}</p>}
      {Object.entries(groupEventsByTagType(events, groupedBy)).map(
        ([tagTypeTagName, events], idx: number) => (
          <div
            key={idx}
            style={{
              border: "1px solid",
              borderRadius: "10px",
              padding: "0",
            }}
          >
            <h3
              style={{
                margin: 0,
                padding: "10px",
                backgroundColor: "#f60",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              {tagTypeTagName}
            </h3>
            <EventsByVenue events={events} />
          </div>
        )
      )}
      <h2 className="fromTo">{getPrettyDateRange(from, to)}</h2>
    </div>
  );
};

export default Timetable;
