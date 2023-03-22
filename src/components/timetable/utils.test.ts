import { getFirstDayOfWeek, getLongMonthName } from "./utils";

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
