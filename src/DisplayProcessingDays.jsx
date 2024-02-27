import { useContext, useRef } from "react";
import AppContext from "./context/AppContext";
import { Heading, Button } from "@cruk/cruk-react-components";
import Table from "react-bootstrap/Table";
import { FaClipboard } from "react-icons/fa";
import copyElement from "./functions/copyTable";

export default function DisplayProcessingDays() {
  const { processingDays, addToast } = useContext(AppContext);
  const resultsTableRef = useRef(null);
  const handleCopy = () => {
    if (resultsTableRef.current) {
      copyElement(resultsTableRef.current)
      addToast("Table copied")
    }
  }
  return (
    <>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <Heading>Processing Days Calendar</Heading>
        <Button
          id="addCompanyDatesBtn"
          type="button"
          style={{ margin: 10, background: "#198754", border: "#198754" }}
          size="m"
          onClick={handleCopy}
        >
          Copy
          <FaClipboard />
        </Button>
      </div>
      <Table className="table-primary" striped bordered hover ref={resultsTableRef}>
        <thead className="table-group-divider border-dark">
          <tr className="table-dark">
            <th>Claim Date</th>
            <th>DD Dedupe Report (Supporter Income)</th>
            <th>Claim run @ 9.00am (Apps Support Team)</th>
            <th>Date to send claim file (Supporter Income)</th>
            <th>Bank Processing Date</th>
            <th>Payment Date</th>
            <th>ARUDD Reporting (Operations Team)</th>
            <th>ARUDD Reporting sweep-up (Operations Team)</th>
          </tr>
          <tr className="table-info">
            <th>Capture the 5th or 19th of the month</th>
            <th>3 working days before claim run</th>
            <th>1 working day before the claim file is sent</th>
            <th>1 working day before the processing date</th>
            <th>1 working day before the payment date</th>
            <th>
              5th / 19th of month but if on a weekend/bank hol the payment date will be next
              working day
            </th>
            <th>1 working day after the payment date</th>
            <th>2 working days after the payment date</th>
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
