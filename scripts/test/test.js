// Importing app functions and Mocha assert functionality
import { variables, functions } from '../functions.js';
import * as mockData from '../mockData.js';
const assert = chai.assert;

describe('+', () => {
    it('returns the sum of its arguments', () => {
        assert.isOk(3 + 4 === 7);
    })
})

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

describe('getWeekends', () => {
    it('returns an array of weekend dates for a given year', () => {
        const input = 2022;
        const actual = functions.getWeekends(input);
        assert.isNotEmpty(actual.weekends)
    }),
        it('returns an array of days for the weekend dates provided', () => {
            const input = 2022;
            const actual = functions.getWeekends(input);
            assert.isNotEmpty(actual.weekendDays)
        })
})

describe('convertGovDateToDMY', () => {
    it('converts dates returned from Gov API (format YYYY-MM-DD) to UK display format (DD/MM/YYYY)', () => {
        const input = '2022-06-01';
        const expected = '01/06/2022';
        const actual = functions.convertGovDateToDMY(input);
        assert.strictEqual(actual, expected);
    }),
        it('throws an error if the date input is not in format YYYY-MM-DD', () => {
            const input = '01/06/2022';
            assert.throws(() => {
                functions.convertGovDateToDMY(input)
            }, /date to be converted must be in format YYYY-MM-DD/);
        })
})

describe('convertGovDateToObject', () => {
    it('Converts dates from Gov API (format YYYY-MM-DD) to a JavaScript Date Object', () => {
        const expected = new Date('January 1, 2022');
        const actual = functions.convertGovDateToObject('2022-01-01');
        assert.deepEqual(actual, expected)
    }),
        it('throws an error if the date input is not in format YYYY-MM-DD', () => {
            const input = '01/06/2022';
            assert.throws(() => {
                functions.convertGovDateToObject(input)
            }, 'date to be converted must be in format YYYY-MM-DD')
        })
})

describe('convertUKDateToObject', () => {
    it('Converts UK format dates (format DD/MM/YYY) to a JavaScript Date Object', () => {
        const expected = new Date('January 1, 2022');
        const actual = functions.convertUKDateToObject('01/01/2022');
        assert.deepEqual(actual, expected);
    }),
        it('throws an error if the date input is not in format DD/MM/YYYY', () => {
            const input = '2022-06-01';
            assert.throws(() => {
                functions.convertUKDateToObject(input)
            }, 'date to be converted must be in format DD/MM/YYYY')
        })
})

describe('convertJSDateToDMY', () => {
    it('Converts JavaScript Date Object to UK display format (DD/MM/YYYY)', () => {
        const expected = '01/01/2022';
        const actual = functions.convertJSDateToDMY(new Date('January 1, 2022'));
        assert.deepEqual(actual, expected);
    })
})

describe('shiftDates', () => {
    it('Shifts dates backwards by 1 day', () => {
        const input = [new Date('June 1, 2022')];
        let direction = functions.backwards;
        const expected = [new Date('May 31, 2022')];
        const actual = functions.shiftDates(input, direction);
        assert.deepEqual(actual, expected)
    }),
        it('Shifts dates forwards by 1 day', () => {
            const input = [new Date('June 1, 2022')];
            let direction = functions.forwards;
            const expected = [new Date('June 2, 2022')];
            const actual = functions.shiftDates(input, direction);
            assert.deepEqual(actual, expected)
        })
})

describe('app E2E test', () => {
    console.log('YEARNUMBER:', variables.yearSelected.value)
    it('should match the default results for nonProcessing days in a previous year, as chosen (run app first with a year chosen and no extra company holiday dates)', async () => {
        const year = variables.yearSelected.value;
        const expected = mockData[`year${year}`];
        const appOutput = await functions.getBankHols(year);
        const actual = appOutput;
        console.table('EXPECTED:', expected);
        console.table('ACTUAL:', actual);
        assert.deepEqual(expected, actual);
    })
});


// To run tests in the browser, use mocha.run() in the console