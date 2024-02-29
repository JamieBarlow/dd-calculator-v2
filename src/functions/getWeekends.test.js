import getWeekends from "./getWeekends";
import { describe, expect, expectTypeOf, it, test } from "vitest";
import { dateUtils } from "./dateUtils";
const { testUKDateFormat } = dateUtils;

describe("getWeekends", () => {
  const results = getWeekends(2020);
  it("returns an array of objects", () => {
    expect(results).toBeInstanceOf(Array);
    results.forEach((item) => {
      expect(item).toBeInstanceOf(Object);
    });
  });
  it("each returned object should have a displayDate, JSDate and dayOfWeek property", () => {
    results.forEach((item) => {
      expect(item).toHaveProperty("displayDate");
      expect(item).toHaveProperty("JSDate");
      expect(item).toHaveProperty("dayOfWeek");
    });
  });
  it("type and format checking: displayDate should be in DD/MM/YYY format, JSDate should be in JS Date format, dayOfWeek should be a String, bankHolName should be a String", () => {
    results.forEach((item) => {
      expectTypeOf(item.displayDate).toBeString();
      expect(() => testUKDateFormat(item.displayDate)).not.toThrow();
      expect(item.JSDate).toBeInstanceOf(Date);
      expectTypeOf(item.dayOfWeek).toBeString();
    });
  });
});
