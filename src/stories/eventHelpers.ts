import { createEventTags } from "./tagHelpers";
import { generateRandomDate, generateRandomNumber } from "./utils";
import { Event, EventSession } from "./domain";
import { createVenue } from "./venueHelpers";

const createSession = (): EventSession => {
  const from = generateRandomDate(10);
  from.setHours(
    8 + generateRandomNumber(0, 4),
    generateRandomNumber(0, 3) * 15,
    0,
    0
  );
  const to = new Date(from);
  const newHours = from.getHours() + generateRandomNumber(0, 8);

  to.setHours(newHours);

  return {
    from,
    to,
  };
};

const createSessions = (maxSessions: number): EventSession[] => {
  const sessions = [];
  for (let idx = 0; idx < generateRandomNumber(3, maxSessions); idx++) {
    sessions.push(createSession());
  }
  return sessions;
};

const createEvent = (): Event => ({
  name: `Event ${generateRandomNumber(1, 50)}`,
  description: `Description ${generateRandomNumber(1, 50)}`,
  sessions: createSessions(20),
  tags: createEventTags(3),
  venue: createVenue(),
});

const hardcodedEvents = [
  {
    name: "Toddler & Preschooler 2-4 yrs - Yateley",
    description: "Music",
    sessions: [
      {
        from: new Date(2022, 11, 12, 9, 30),
        to: new Date(2022, 11, 12, 10, 0),
      },
      {
        from: new Date(2022, 11, 14, 9, 30),
        to: new Date(2022, 11, 14, 10, 0),
      },
      {
        from: new Date(2022, 11, 16, 10, 0),
        to: new Date(2022, 11, 16, 10, 30),
      },
    ],
    tags: createEventTags(3),
    venue: {
      name: "Vivace Music School (Hard-coded)",
    },
  },
];

export const createEvents = (numberOfEvents: number): Event[] => {
  const events: Event[] = hardcodedEvents;
  for (let idx = 0; idx < numberOfEvents; idx++) {
    events.push(createEvent());
  }
  return events;
};
