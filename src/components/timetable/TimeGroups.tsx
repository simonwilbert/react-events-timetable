import React from "react";
import { EventSession } from "../../stories/domain";
import { groupEventSessionsByHourMinuteOfDay } from "./utils";

type TimeGroupsProps = {
  sessions: EventSession[];
};

const TimeGroups = ({ sessions }: TimeGroupsProps) => {
  const timeGroups = groupEventSessionsByHourMinuteOfDay(sessions);

  return (
    <span>
      {Object.entries(timeGroups).map(
        ([time, timeGroupedSessions], idx: number) => {
          const daysOfWeek = timeGroupedSessions
            .map((s) => s.from.toLocaleString("default", { weekday: "short" }))
            .join(",");
          return <span key={idx}>{`${daysOfWeek} at ${time}`}</span>;
        }
      )}
    </span>
  );
};
export default TimeGroups;
