import { dateUtils } from "./dateUtils";
import { describe, expect, expectTypeOf, it, test } from "vitest";
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

describe("#testGovDateFormat", () => {
  it("does not throw an error if the date is in format YYYY-MM-DD", () => {
    expect(() => testGovDateFormat("1995-12-05")).not.toThrow();
  });
  it("throws an error if the date passed in doesn't match the YYYY-MM-DD format", () => {
    const errorMsg = "date to be converted must be in format YYYY-MM-DD";
    expect(() => testGovDateFormat("05-12-1995")).toThrowError(errorMsg);
    expect(() => testGovDateFormat("05/12/1995")).toThrowError(errorMsg);
  });
});

describe("#testUKDateFormat", () => {
  it("does not throw an error if the date is in format DD/MM/YYYY", () => {
    expect(() => testUKDateFormat("05/12/1995")).not.toThrow();
  });
  it("throws an error if the date passed in doesn't match the YYYY-MM-DD format", () => {
    const errorMsg = "date to be converted must be in format DD/MM/YYYY";
    expect(() => testUKDateFormat("05-12-1995")).toThrowError(errorMsg);
    expect(() => testUKDateFormat("1995-12-05")).toThrowError(errorMsg);
    expect(() => testUKDateFormat("1995/12/05")).toThrowError(errorMsg);
  });
});

describe("#convertGovDateToDMY", () => {
  it("Converts dates returned from Gov API (format YYYY-MM-DD) to UK display format (DD/MM/YYYY)", () => {
    expect(convertGovDateToDMY("1995-12-05")).toBe("05/12/1995");
  });
  it("throws an error if the date passed in doesn't match YYYY-MM-DD format", () => {
    expect(() => convertGovDateToDMY("05-12-1995")).toThrow();
    expect(() => testUKDateFormat("1995-12-05")).toThrow();
    expect(() => testUKDateFormat("1995/12/05")).toThrow();
  });
});

describe("#convertGovDateToObject", () => {
  it("Converts dates from Gov API (format YYYY-MM-DD) to a JS Date object", () => {
    const date = "1995-12-05";
    expect(convertGovDateToObject(date)).toBeInstanceOf(Date);
    expectTypeOf(convertGovDateToObject(date)).not.toBeString();
    expectTypeOf(convertGovDateToObject(date)).not.toBeNumber();
  });
});

describe("#convertUKDateToObject", () => {
  it("Converts UK format dates (DD/MM/YYYY) to JS Date object", () => {
    const date = "05/12/1995";
    expect(convertUKDateToObject(date)).toBeInstanceOf(Date);
    expectTypeOf(convertUKDateToObject(date)).not.toBeString();
    expectTypeOf(convertUKDateToObject(date)).not.toBeNumber();
  });
});

describe("#convertJSDateToDMY", () => {
  it("Converts JS Date object to a type of String", () => {
    const date = new Date("December 05, 1995");
    expectTypeOf(convertJSDateToDMY(date)).toBeString();
    expect(convertJSDateToDMY(date)).not.toBeInstanceOf(Date);
    expectTypeOf(convertJSDateToDMY(date)).not.toBeNumber();
  });
  it("Converts to format DD/MM/YYYY", () => {
    const date = new Date("December 05, 1995");
    const converted = convertJSDateToDMY(date);
    expect(() => testUKDateFormat(converted)).not.toThrow();
  });
});

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
  it("should fail if at least 1 of the dates is not shifted correctly", () => {
    const wronglyIncrementedDates = [
      new Date("December 07, 1995"),
      new Date("December 07, 1995"),
      new Date("December 08, 1995"),
    ];
    expect(shiftDates(dates, forwards)).not.toEqual(wronglyIncrementedDates);
    expect(shiftDates(dates, backwards)).not.toEqual(wronglyIncrementedDates);
  });
  it("should fail if the returned dates are the same as the original", () => {
    const sameDates = [
      new Date("December 05, 1995"),
      new Date("December 06, 1995"),
      new Date("December 07, 1995"),
    ];
    expect(shiftDates(dates, forwards)).not.toEqual(sameDates);
    expect(shiftDates(dates, backwards)).not.toEqual(sameDates);
  });
});
