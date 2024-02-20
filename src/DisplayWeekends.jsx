//     const tableBody = document.querySelector("#weekendsTable__body");
//     let rowIndex = 1;
//     for (let i = 0; i < dates.length; i++) {
//       const row = document.createElement("tr");
//       tableBody.append(row);
//       // Generate column 1 cells (dates)
//       const dateCell = document.createElement("th");
//       dateCell.scope = "row";
//       dateCell.innerText = dates[i];
//       tableBody.childNodes[rowIndex].append(dateCell);
//       // Generate column 2 cells (day of week)
//       const dayCell = document.createElement("td");
//       dayCell.innerText = weekendDays[i];
//       tableBody.childNodes[rowIndex].append(dayCell);
//       rowIndex++;
//     }
//     console.log(`Display weekends: ${nonProcessingDays[2]}`);
//     displayProcessingDays();
//   };
import { useContext } from "react";
import AppContext from "./context/AppContext";
import { Heading } from "@cruk/cruk-react-components";
import Table from "react-bootstrap/Table";

export default function DisplayWeekends() {
  const { selectedYear, weekends } = useContext(AppContext);
  return (
    <>
      <Heading>{`Weekend dates for ${selectedYear} (including late ${
        selectedYear - 1
      } and early ${Number(selectedYear) + 1})`}</Heading>
      <Table className="table-success" striped bordered hover>
        <thead className="table-dark">
          <tr>
            <th>Date</th>
            <th>Day of the week</th>
          </tr>
        </thead>
        <tbody>
          {weekends.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.displayDate}</td>
                <td>{item.dayOfWeek}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
