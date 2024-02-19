import { useContext } from "react";
// import AppContext from "./context/AppContext";

import { dateUtils } from "./dateUtils";
const { convertGovDateToDMY, convertGovDateToObject } = dateUtils;

// Todo: convert to React component
export default function displayBankHols(dates, daysOfWeek, bankHolNames) {
  //   const { nonProcessingDays, setNonProcessingDays } = useContext(AppContext);
  //   const header = document.createElement("h2");
  //   header.innerText = `Bank holiday dates for ${yearSelected} (and late ${
  //     yearSelected - 1
  //   })`;
  //   bankHols.prepend(header);
  //   const tableBody = document.querySelector("#bankHolTable__body");
  //   let rowIndex = 1;
  for (let i = 0; i < dates.length; i++) {
    console.log("Test!: " + dates[i]);
    // const row = document.createElement("tr");
    // tableBody.append(row);
    // // Generate column 1 cells (dates)
    // const dateCell = document.createElement("th");
    // let ukDate = convertGovDateToDMY(dates[i]);
    // dateCell.scope = "row";
    // dateCell.innerText = ukDate;
    // tableBody.childNodes[rowIndex].append(dateCell);
    // // Generate column 2 cells (day of week)
    // const dayCell = document.createElement("td");
    // dayCell.innerText = daysOfWeek[i];
    // tableBody.childNodes[rowIndex].append(dayCell);
    // // Generate column 3 cells (bank holiday title)
    // const title = document.createElement("td");
    // title.innerText = bankHolNames[i];
    // tableBody.childNodes[rowIndex].append(title);
    // // Add date to global array for calculations
    // nonProcessingDays.push(convertGovDateToObject(dates[i]));
    // rowIndex++;
  }
}
