import { getLongMonthName } from "./utils";

describe("getLongMonthName", () => {
  test.each([
    ["First month of year", new Date(2023, 0, 22), "January"],
    ["Last month of year", new Date(2023, 11, 22), "December"],
    ["Middle of year", new Date(2023, 3, 22), "April"],
  ])("%s: getLongMonthName(%s) => %s", (testTitle, date, expected) => {
    expect(getLongMonthName(date)).toBe(expected);
  });
});
