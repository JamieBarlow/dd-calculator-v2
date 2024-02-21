import { useContext } from "react";
import AppContext from "./context/AppContext";
import { Heading } from "@cruk/cruk-react-components";
import Table from "react-bootstrap/Table";

export default function DisplayProcessingDays() {
  const { selectedYear, weekends, processingDays } = useContext(AppContext);
  return (
    <>
      <Heading>Processing Days Calendar</Heading>
      <Table className="table-primary" striped bordered hover>
        <thead className="table-group-divider border-dark">
          <tr className="table-dark">
            <th>Claim Date</th>
            <th>DD Dedupe Report</th>
            <th>Claim run @ 9.00am (completed by Apps Support Team)</th>
            <th>Date to send claim file (completed by Supporter Payments)</th>
            <th>Bank Processing Date</th>
            <th>Payment Date</th>
            <th>ARUDD Reporting (completed by Operations Team)</th>
            <th>ARUDD Reporting sweep-up (completed by Operations Team)</th>
          </tr>
          <tr className="table-info">
            <th>Step 1 - Capture the 5th or 19th of the month</th>
            <th>Step 8 - 3 working days before claim run</th>
            <th>Step 7 - 1 working day before the claim file is sent</th>
            <th>Step 4 - 1 working day before the procesing date</th>
            <th>Step 3 - 1 working day before the payment date</th>
            <th>
              Step 2 - 5th or 19th of the month but must be a working day, if
              falls on weekend of bank holiday, the payment date will be next
              working day following the 5th or 19th.
            </th>
            <th>Step 5 - 1 working day after the payment date</th>
            <th>Step 6 - 2 working days after the payment date</th>
          </tr>
        </thead>
        <tbody>
          {processingDays.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.colA.displayDate}</td>
                <td>{item.colB.displayDate}</td>
                <td>{item.colC.displayDate}</td>
                <td>{item.colD.displayDate}</td>
                <td>{item.colE.displayDate}</td>
                <td>{item.colF.displayDate}</td>
                <td>{item.colG.displayDate}</td>
                <td>{item.colH.displayDate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
