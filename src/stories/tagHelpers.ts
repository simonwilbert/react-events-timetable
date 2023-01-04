import { Tag } from "./domain";
import { generateRandomNumber } from "./utils";

export const TAG_LOCATION_TYPE = "LOCATIONTYPE";
export const TAG_AGE_TYPE = "AGETYPE";
export const TAG_ACTIVITY_TYPE = "ACTIVITYTYPE";

const Locations = [
  "Venue 1",
  "Venue 2",
  "Venue 3",
  "Venue 4",
  "Venue 5",
  "Venue 6",
  "Venue 7",
  "Venue 8",
  "Venue 9",
  "Venue 10",
];

const ActivityTypes = [
  "Dance",
  "Music",
  "Outdoor Learning",
  "Fitness",
  "Free and Low-cost",
  "SEND",
  "Holiday Camps",
  "STEM",
  "Phonics",
  "Community Support",
];

const AgeTypes = [
  "Baby",
  "Toddler",
  "Preschool",
  "KS1",
  "KS2",
  "KS3",
  "KS4",
  "Adult",
  "Senior",
  "Antenatal",
];

const getPastelColour = () =>
  `hsl(${360 * Math.random()},${25 + 70 * Math.random()}%,${
    85 + 10 * Math.random()
  }%)`;

const createTag = (): Tag => ({
  name: `Tag ${generateRandomNumber(1, 50)}`,
});

const createLocationTag = () => ({
  name: Locations[generateRandomNumber(0, Locations.length - 1)],
  type: TAG_LOCATION_TYPE,
  color: getPastelColour(),
});

const createActivityTypeTag = () => ({
  name: ActivityTypes[generateRandomNumber(0, Locations.length - 1)],
  type: TAG_ACTIVITY_TYPE,
  color: getPastelColour(),
});

const createAgeTag = () => ({
  name: AgeTypes[generateRandomNumber(0, Locations.length - 1)],
  type: TAG_AGE_TYPE,
  color: getPastelColour(),
});

export const createTags = (numberOfTags: number): Tag[] => {
  const tags: Tag[] = [];
  for (let idx = 0; idx < numberOfTags; idx++) {
    tags.push(createTag());
  }
  return tags;
};

export const createEventTags = (numberOfTags: number): Tag[] => [
  ...createTags(numberOfTags),
  createLocationTag(),
  createActivityTypeTag(),
  createAgeTag(),
];
