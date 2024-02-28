import { dateUtils } from "./dateUtils";
import { describe, expect, it, test } from "vitest";
const {
  testGovDateFormat,
  testUKDateFormat,
  convertGovDateToDMY,
  convertGovDateToObject,
  convertUKDateToObject,
  convertJSDateToDMY,
  namedDaysOfWeek,
  forwards,
  backwards,
  shiftDates,
} = dateUtils;

describe("#forwards", () => {
  it("increments a date forwards by 1", () => {
    const originalDate = new Date("December 05, 1995");
    const expectedDate = new Date("December 06, 1995");
    const incrementedDate = new Date(originalDate);
    incrementedDate.setDate(incrementedDate.getDate() + 1);
    expect(forwards(originalDate).getTime()).toEqual(expectedDate.getTime());
  });
});

describe("#backwards", () => {
  it("decrements a date by 1", () => {
    const originalDate = new Date("December 05, 1995");
    const expectedDate = new Date("December 04, 1995");
    const decrementedDate = new Date(originalDate);
    decrementedDate.setDate(decrementedDate.getDate() - 1);
    expect(backwards(originalDate).getTime()).toEqual(expectedDate.getTime());
  });
});

describe("#shiftDates", () => {
  const dates = [
    new Date("December 05, 1995"),
    new Date("December 06, 1995"),
    new Date("December 07, 1995"),
  ];
  it("shifts an array of dates forward by 1 day, using the 'forwards' utility function as the direction argument", () => {
    const expectedDates = [
      new Date("December 06, 1995"),
      new Date("December 07, 1995"),
      new Date("December 08, 1995"),
    ];
    expect(shiftDates(dates, forwards)).toEqual(expectedDates);
  });
  it("shifts an array of dates backwards by 1 day, using the 'backwards' utility function as the direction argument", () => {
    const expectedDates = [
      new Date("December 04, 1995"),
      new Date("December 05, 1995"),
      new Date("December 06, 1995"),
    ];
    expect(shiftDates(dates, backwards)).toEqual(expectedDates);
  });
  it("should fail if at least 1 of the dates is not incremented correctly", () => {
    const wronglyIncrementedDates = [
      new Date("December 07, 1995"),
      new Date("December 07, 1995"),
      new Date("December 08, 1995"),
    ];
    expect(shiftDates(dates, forwards)).not.toEqual(wronglyIncrementedDates);
  });
  it("should fail if the returned dates are the same as the original", () => {
    const sameDates = [
      new Date("December 05, 1995"),
      new Date("December 06, 1995"),
      new Date("December 07, 1995"),
    ];
    expect(shiftDates(dates, forwards)).not.toEqual(sameDates);
  });
});
