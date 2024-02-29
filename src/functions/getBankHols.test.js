import getBankHols from "./getBankHols";
import { dateUtils } from "./dateUtils";
const { testUKDateFormat } = dateUtils;

import { describe, expect, expectTypeOf, it } from "vitest";

describe("#getBankHols", async () => {
  const year = 2020;
  const results = await getBankHols(year);
  it("should return something from a fetch call to the Gov bank hols API, and not return an error", () => {
    expect(results).toBeTruthy();
    expect(() => getBankHols(year)).not.toThrow();
  });
  it("returns an array of objects", () => {
    expect(results).toBeInstanceOf(Array);
    results.forEach((item) => {
      expect(item).toBeInstanceOf(Object);
    });
  });
  it("each object should have the properties 'displayDate', 'JSDate', 'dayOfWeek' and 'bankHolName'", () => {
    results.forEach((item) => {
      expect(item).toHaveProperty("displayDate");
      expect(item).toHaveProperty("JSDate");
      expect(item).toHaveProperty("dayOfWeek");
      expect(item).toHaveProperty("bankHolName");
    });
  });
  it("type checking: displayDate should be in DD/MM/YYY format, JSDate should be in JS Date format, dayOfWeek should be a String, bankHolName should be a String", () => {
    results.forEach((item) => {
      expectTypeOf(item.displayDate).toBeString();
      expect(() => testUKDateFormat(item.displayDate)).not.toThrow();
      expect(item.JSDate).toBeInstanceOf(Date);
      expectTypeOf(item.dayOfWeek).toBeString();
      expectTypeOf(item.bankHolName).toBeString();
    });
  });
});
