// describe("getWeekends", () => {
//     it("returns an array of weekend dates for a given year", () => {
//       const input = 2022;
//       const actual = functions.getWeekends(input);
//       assert.isNotEmpty(actual.weekends);
//     }),
//       it("returns an array of days for the weekend dates provided", () => {
//         const input = 2022;
//         const actual = functions.getWeekends(input);
//         assert.isNotEmpty(actual.weekendDays);
//       });
//   });

// describe('getBankHols', () => {
//     it('returns bank holiday data from the Government API in the form of an array', async () => {
//         const actual = await functions.getBankHols();
//         console.log('actual!!', actual)
//         assert.isNotEmpty(actual.results);
//     }),
//         it('returns dates', async () => {
//             const actual = await functions.getBankHols();
//             assert.isNotEmpty(actual.dates);
//         })
// })

// describe("app E2E test", () => {
//     console.log("YEARNUMBER:", variables.yearSelected.value);
//     it("should match the default results for nonProcessing days in a previous year, as chosen (run app first with a year chosen and no extra company holiday dates)", async () => {
//       const year = variables.yearSelected.value;
//       const expected = mockData[`year${year}`];
//       const appOutput = await functions.getBankHols(year);
//       const actual = appOutput;
//       console.table("EXPECTED:", expected);
//       console.table("ACTUAL:", actual);
//       assert.deepEqual(expected, actual);
//     });
//   });
