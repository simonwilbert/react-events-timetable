import React from "react";
import { EventSession } from "../../stories/domain";
import TimeGroups from "./TimeGroups";
import {
  dateSorter,
  getLongMonthName,
  groupEventSessionsByWeek,
} from "./utils";

type SessionsByWeekProps = {
  sessions: EventSession[];
};

const SessionsByWeek = ({ sessions }: SessionsByWeekProps) => {
  const weeks = Object.entries(groupEventSessionsByWeek(sessions));

  return (
    <ul style={{ margin: 0, padding: "10px", listStyle: "none" }}>
      {weeks.map(([, weekSessions], idx: number) => {
        const orderedSessions = weekSessions.sort(dateSorter);
        const firstSession = orderedSessions[0];
        const lastSession = orderedSessions[orderedSessions.length - 1];
        const monthName = getLongMonthName(weekSessions[0].from);
        const firstDay = firstSession.from.getDate();
        const lastDay = lastSession.from.getDate();

        return (
          <div key={idx}>
            <small>{`${monthName} ${firstDay} to ${lastDay}`} </small>
            <TimeGroups sessions={weekSessions} />
          </div>
        );
      })}
    </ul>
  );
};

export default SessionsByWeek;
