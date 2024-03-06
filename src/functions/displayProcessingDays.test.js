import displayProcessingDays from "./displayProcessingDays";
import { describe, expect, expectTypeOf, it, test } from "vitest";
import { dateUtils } from "./dateUtils";
const { testUKDateFormat } = dateUtils;
import {
  nonProcessing2020,
  nonProcessing2021,
  nonProcessing2022,
  nonProcessing2023,
  mockResults2020,
  mockResults2021,
  mockResults2022,
  mockResults2023,
} from "../mockData";

describe("displayProcessingDays", () => {
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
  const results2020 = displayProcessingDays(2020, nonProcessing2020);
  const results2021 = displayProcessingDays(2021, nonProcessing2021);
  const results2022 = displayProcessingDays(2022, nonProcessing2022);
  const results2023 = displayProcessingDays(2023, nonProcessing2023);

  it("returns an array of objects", () => {
    expect(results2020).toBeInstanceOf(Array);
    results2020.forEach((item) => {
      expect(item).toBeInstanceOf(Object);
    });
  });
  it("returns an array of objects representing rows, each object containing a nested object containing keys for each column from colA to colH", () => {
    results2020.forEach((item) => {
      expectedKeys.forEach((key) => {
        expect(item).toHaveProperty(key);
      });
    });
  });
  it("within each row, each column's object should have a displayDate property in string (DD/MM/YYYY) format, and a JSDate property in JS Date format", () => {
    results2020.forEach((item) => {
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
  it("should output results that match mock test results for 2020, 2021, 2022 and 2023", () => {
    expect(results2020).toEqual(mockResults2020);
    expect(results2021).toEqual(mockResults2021);
    expect(results2022).toEqual(mockResults2022);
    expect(results2023).toEqual(mockResults2023);
  });
});
