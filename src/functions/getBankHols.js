import displayBankHols from "./displayBankHols";

let namedDaysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function getBankHols(year) {
  return fetch(`https://www.gov.uk/bank-holidays.json`)
    .then(
      (res) => {
        if (res.ok) {
          console.log("RESOLVED!", res);
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

      // Extract dates from nonProcessing results
      let dates = nonProcessing.map((result) => result.date);

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
        displayBankHols(dates, daysOfWeek, bankHolNames),
        // getWeekends(year),
      ]).then(() => {
        let resultsObj = {
          apiResults,
          dates,
          daysOfWeek,
          bankHolNames,
        };
        console.log("All data from API call:", apiResults);
        console.log("Bank hol dates:", dates);
        console.log("Bank hol days of week:", daysOfWeek);
        console.log("Bank hol names:", bankHolNames);
        // nonProcessingDays.forEach((date) => {
        //   const newDate = convertJSDateToDMY(date);
        //   console.log(newDate);
        // });
        // console.log("NONPROCESSINGDAYS:", nonProcessingDays);
        // removeDeleteBtns();
        return resultsObj;
        // return processingDaysObj;
      });
    });
}
