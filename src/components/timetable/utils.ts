import { Event, EventSession, Tag } from "../../stories/domain";
import { GroupedByTagType } from "./Timetable";

export const getTimetableTitle = (tags: Tag[]) =>
  `${tagsToCSV(tags)} Activities`;

const tagsToCSV = (tags: Tag[]) =>
  tags.map((t) => toTitleCase(t.name)).join(", ");

const toTitleCase = (str: string) =>
  str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );

const toLongDate = (date: Date): string =>
  date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const getPrettyDateRange = (
  from: Date | undefined,
  to: Date | undefined
): string => {
  let str = from ? `From ${toLongDate(from)}` : "";
  str += to ? ` to ${toLongDate(to)}` : "";
  return str;
};

function groupBy<T>(arr: T[], fn: (item: T) => any) {
  return arr.reduce<Record<string, T[]>>((prev, curr) => {
    const groupKey = fn(curr);
    const group = prev[groupKey] || [];
    group.push(curr);
    return { ...prev, [groupKey]: group };
  }, {});
}

export const groupEventsByTagType = (
  events: Event[],
  groupedByTagType: GroupedByTagType
) =>
  groupBy<Event>(
    events,
    (e: Event) => e.tags.find((t: Tag) => t.type === groupedByTagType)?.name
  );

export const groupEventsByVenueName = (events: Event[]) =>
  groupBy<Event>(events, (e: Event) => e.venue.name);

export const getFirstDayOfWeek = (date: Date): Date => {
  const clonedDate = new Date(date);
  const day = clonedDate.getDay();
  const diff = clonedDate.getDate() - day + (day === 0 ? -6 : 1);

  return new Date(clonedDate.setDate(diff));
};

export const getLongMonthName = (date: Date) =>
  date.toLocaleString("default", { month: "long" });

export const groupEventSessionsByWeek = (sessions: EventSession[]) =>
  groupBy<EventSession>(sessions, (session: EventSession) =>
    getFirstDayOfWeek(session.from)
  );

export const groupEventSessionsByHourMinuteOfDay = (sessions: EventSession[]) =>
  groupBy<EventSession>(
    sessions,
    (session: EventSession) =>
      `${session.from.getHours()}:${String(session.from.getMinutes()).padStart(
        2,
        "0"
      )}`
  );

export const dateSorter = function (a: EventSession, b: EventSession) {
  return new Date(a.from).getTime() - new Date(b.from).getTime();
};
