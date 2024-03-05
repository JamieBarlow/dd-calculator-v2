import displayProcessingDays from "./displayProcessingDays";
import { describe, expect, expectTypeOf, it, test } from "vitest";
import { dateUtils } from "./dateUtils";
const { testUKDateFormat } = dateUtils;
import { year2020, year2021, year2022, year2023 } from "../mockData";

describe("displayProcessingDays", () => {
  const year = 2020;
  const nonProcessingDays = [
    {
      displayDate: "01/01/2020",
      JSDate: new Date(
        "Wed Jan 01 2020 00:00:00 GMT+0000 (Greenwich Mean Time)"
      ),
      dayOfWeek: "Wednesday",
      bankHolName: "New Year’s Day",
    },
    {
      displayDate: "10/04/2020",
      JSDate: new Date(
        "Fri Apr 10 2020 00:00:00 GMT+0100 (British Summer Time)"
      ),
      dayOfWeek: "Friday",
      bankHolName: "Good Friday",
    },
    {
      displayDate: "13/04/2020",
      JSDate: new Date(
        "Mon Apr 13 2020 00:00:00 GMT+0100 (British Summer Time)"
      ),
      dayOfWeek: "Monday",
      bankHolName: "Easter Monday",
    },
    {
      displayDate: "08/05/2020",
      JSDate: new Date(
        "Fri May 08 2020 00:00:00 GMT+0100 (British Summer Time)"
      ),
      dayOfWeek: "Friday",
      bankHolName: "Early May bank holiday (VE day)",
    },
    {
      displayDate: "25/05/2020",
      JSDate: new Date(
        "Mon May 25 2020 00:00:00 GMT+0100 (British Summer Time)"
      ),
      dayOfWeek: "Monday",
      bankHolName: "Spring bank holiday",
    },
    {
      displayDate: "31/08/2020",
      JSDate: new Date(
        "Mon Aug 31 2020 00:00:00 GMT+0100 (British Summer Time)"
      ),
      dayOfWeek: "Monday",
      bankHolName: "Summer bank holiday",
    },
    {
      displayDate: "25/12/2020",
      JSDate: new Date(
        "Fri Dec 25 2020 00:00:00 GMT+0000 (Greenwich Mean Time)"
      ),
      dayOfWeek: "Friday",
      bankHolName: "Christmas Day",
    },
    {
      displayDate: "28/12/2020",
      JSDate: new Date(
        "Mon Dec 28 2020 00:00:00 GMT+0000 (Greenwich Mean Time)"
      ),
      dayOfWeek: "Monday",
      bankHolName: "Boxing Day",
    },
  ];
  const expectedKeys = [
    "colA",
    "colB",
    "colC",
    "colD",
    "colE",
    "colF",
    "colG",
    "colH",
  ];
  const results = displayProcessingDays(year, nonProcessingDays);
  it("returns an array of objects", () => {
    expect(results).toBeInstanceOf(Array);
    results.forEach((item) => {
      expect(item).toBeInstanceOf(Object);
    });
  });
  it("returns an array of objects representing rows, each object containing a nested object containing keys for each column from colA to colH", () => {
    results.forEach((item) => {
      expectedKeys.forEach((key) => {
        expect(item).toHaveProperty(key);
      });
    });
  });
  it("within each row, each column's object should have a displayDate property in string (DD/MM/YYYY) format, and a JSDate property in JS Date format", () => {
    results.forEach((item) => {
      expect(item).toBeInstanceOf(Object);
      expectedKeys.forEach((key) => {
        expect(item[key]).toHaveProperty("JSDate");
        expect(item[key]).toHaveProperty("displayDate");
        expectTypeOf(item[key].displayDate).toBeString();
        expect(() => testUKDateFormat(item[key].displayDate)).not.toThrow();
        expect(item[key].JSDate).toBeInstanceOf(Date);
      });
    });
  });
  it("should output results that match mock test results for 2020, 2021, 2022 and 2023", () => {});
});
