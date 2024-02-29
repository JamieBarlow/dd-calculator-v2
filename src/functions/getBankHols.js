import { dateUtils } from "./dateUtils";
const { namedDaysOfWeek, convertGovDateToObject, convertGovDateToDMY } =
  dateUtils;

export default function getBankHols(year) {
  return fetch(`https://www.gov.uk/bank-holidays.json`)
    .then(
      (res) => {
        if (res.ok) {
          // console.log("RESOLVED!", res);
          return res.json();
        }
        throw new Error("request failed!");
      },
      (networkError) => console.log(networkError.message)
    )
    .then((data) => {
      let apiResults = data["england-and-wales"].events;
      // console.log(results);
      let nonProcessing = [];
      let thisYearResults = apiResults.filter(
        (result) => result.date.slice(0, 4) === year
      );
      let endOfLastYearResults = apiResults.filter((result) => {
        const resultYear = parseInt(result.date.slice(0, 4));
        const resultMonth = parseInt(result.date.slice(5, 7));
        return resultYear === year - 1 && resultMonth === 12;
      });

      // let lastYearResults = apiResults.filter(
      //   (result) => result.date.slice(0, 4) === (year - 1).toString()
      // );
      // let endOflastYearResults = lastYearResults.filter(
      //   (item) => item.date.slice(5, 7) === "12"
      // );
      nonProcessing.push(...thisYearResults, ...endOfLastYearResults);

      // Extract dates (YYYY-MM-DD) from nonProcessing results
      let dates = nonProcessing.map((result) => result.date);

      // Get JS dates
      let JSDates = [];
      for (let date of dates) {
        let converted = convertGovDateToObject(date);
        JSDates.push(converted);
      }

      // Get display dates (DD/MM/YYYY)
      let displayDates = [];
      for (let date of dates) {
        let converted = convertGovDateToDMY(date);
        displayDates.push(converted);
      }

      // Extract day of week from results
      const daysOfWeek = dates.map((result) => {
        let date = new Date(result);
        let day = date.getDay();
        day = namedDaysOfWeek[day];
        return day;
      });
      // Extract Bank Holiday name from results
      const bankHolNames = nonProcessing.map((result) => result.title);

      return Promise.all([
        // displayBankHols(dates, daysOfWeek, bankHolNames),
        // getWeekends(year),
      ]).then(() => {
        // Returns array of objects
        let bankHols = dates.map((date, i) => ({
          displayDate: displayDates[i],
          JSDate: JSDates[i],
          dayOfWeek: daysOfWeek[i],
          bankHolName: bankHolNames[i],
        }));
        // console.log("All data from API call:", apiResults);
        // console.log("Bank hol dates:", dates);
        // console.log("Bank hol days of week:", daysOfWeek);
        // console.log("Bank hol names:", bankHolNames);
        // nonProcessingDays.forEach((date) => {
        //   const newDate = convertJSDateToDMY(date);
        //   console.log(newDate);
        // });
        // console.log("NONPROCESSINGDAYS:", nonProcessingDays);

        // removeDeleteBtns();
        // console.log(bankHols);
        return bankHols;
      });
    });
}
