import { useState, useEffect } from "react";
import { Select, Text, Button } from "@cruk/cruk-react-components";
import { FaCalculator } from "react-icons/fa6";

let namedDaysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getBankHols(year) {
  let results, dates;
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
      results = data["england-and-wales"].events;
      // console.log(results);
      let nonProcessing = [];
      let thisYearResults = results.filter(
        (result) => result.date.slice(0, 4) === year
      );
      let lastYearResults = results.filter(
        (result) => result.date.slice(0, 4) === (year - 1).toString()
      );
      let endOflastYearResults = lastYearResults.filter(
        (item) => item.date.slice(5, 7) === "12"
      );
      nonProcessing.push(...thisYearResults, ...endOflastYearResults);

      // Extract dates from nonProcessing results
      dates = nonProcessing.map((result) => result.date);

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
        let resultsObj = {
          results,
          dates,
          daysOfWeek,
        };
        console.log("dates!!", dates);
        console.log("results!", resultsObj);
        console.log("daysOfWeek!!", daysOfWeek);
        console.log("Bankholnames!", bankHolNames);
        console.log("APPOUTPUT:", resultsObj);
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

export default function DateSelectForm() {
  const [selectedYear, setSelectedYear] = useState("Select a year");
  const handleYearSelect = (e) => {
    setSelectedYear(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getBankHols(selectedYear);
  };
  useEffect(() => {
    console.log(selectedYear);
  }, [selectedYear]);

  return (
    <form action="#" method="GET" id="chooseYear" onSubmit={handleSubmit}>
      <Text textSize="l" textColor="textOnPrimary">
        <label htmlFor="year-select" className="form-label">
          Choose a year and select 'calculate dates':
        </label>
      </Text>
      <Select
        className="form-select"
        aria-label="year select"
        name="year"
        id="year-select"
        required
        value={selectedYear}
        onChange={handleYearSelect}
      >
        <option value="Select a year">Select a year</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
        <option value="2029">2029</option>
        <option value="2030">2030</option>
      </Select>
      <Button
        id="calculateDatesBtn"
        type="submit"
        style={{ margin: 10 }}
        size="m"
      >
        Calculate Dates
        <FaCalculator />
      </Button>
    </form>
  );
}
