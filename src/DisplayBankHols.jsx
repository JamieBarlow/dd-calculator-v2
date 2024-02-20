import { useContext } from "react";
import AppContext from "./context/AppContext";
import { dateUtils } from "./functions/dateUtils"
const { convertGovDateToDMY, convertGovDateToObject } = dateUtils;
import { Heading } from "@cruk/cruk-react-components";

export default function DisplayBankHols({ dates, daysOfWeek, bankHolNames }) {
    const { nonProcessingDays, setNonProcessingDays, calculated, selectedYear } = useContext(AppContext);
    //   const tableBody = document.querySelector("#bankHolTable__body");
    //   let rowIndex = 1;
    // for (let i = 0; i < dates.length; i++) {
    // console.log("Test!: " + dates[i]);
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
    // }

    return (
        <>
            <Heading>{`Bank holiday dates for ${selectedYear} (and late ${selectedYear - 1})`}</Heading>
            {nonProcessingDays.dates.map((date, index) => {
                return (
                    <div key={index}>{date}</div>
                )
            })}
        </>

    )
}