import {
  getFirstDayOfWeek,
  getLongMonthName,
  getPrettyDateRange,
  getTimetableTitle,
} from "./utils";

describe("getLongMonthName", () => {
  test.each([
    ["First month of year", new Date(2023, 0, 22), "January"],
    ["Last month of year", new Date(2023, 11, 22), "December"],
    ["Middle of year", new Date(2023, 3, 22), "April"],
  ])("%s: getLongMonthName(%s) => %s", (testTitle, date, expected) => {
    expect(getLongMonthName(date)).toEqual(expected);
  });
});

describe("getFirstDayOfWeek", () => {
  test.each([
    [
      "Given a Sunday",
      new Date(2023, 2, 19, 0, 0, 0, 0),
      new Date(2023, 2, 13, 0, 0, 0, 0),
    ],
    [
      "Given a Monday",
      new Date(2022, 11, 26, 0, 0, 0, 0),
      new Date(2022, 11, 26, 0, 0, 0, 0),
    ],
    [
      "Given a Wednesday",
      new Date(2022, 11, 14, 0, 0, 0, 0),
      new Date(2022, 11, 12, 0, 0, 0, 0),
    ],
  ])("%s: getFirstDayOfWeek(%s) => %s", (testTitle, date, expected) => {
    expect(getFirstDayOfWeek(date)).toEqual(expected);
  });
});

describe("getPrettyDateRange", () => {
  test.each([
    [
      "Only from date",
      new Date(2023, 2, 19, 0, 0, 0, 0),
      undefined,
      "From Sunday, March 19, 2023",
    ],
    [
      "Only to date",
      undefined,
      new Date(2022, 11, 26, 0, 0, 0, 0),
      " to Monday, December 26, 2022",
    ],
    [
      "From and to dates",
      new Date(2022, 11, 14, 0, 0, 0, 0),
      new Date(2022, 11, 12, 0, 0, 0, 0),
      "From Wednesday, December 14, 2022 to Monday, December 12, 2022",
    ],
  ])("%s: getFirstDayOfWeek(%s,%s) => %s", (testTitle, from, to, expected) => {
    expect(getPrettyDateRange(from, to)).toEqual(expected);
  });
});

describe("getTimetableTitle", () => {
  test.each([
    ["No tags", [], " Activities"],
    ["1 tag", [{ name: "tag 1", type: "type 1" }], "Tag 1 Activities"],
    [
      "2 tags",
      [
        { name: "tag 1", type: "type 1" },
        { name: "tag 2", type: "type 2" },
      ],
      "Tag 1, Tag 2 Activities",
    ],
  ])("%s: getTimetableTitle(%s) => %s", (testTitle, tags, expected) => {
    expect(getTimetableTitle(tags)).toEqual(expected);
  });
});
