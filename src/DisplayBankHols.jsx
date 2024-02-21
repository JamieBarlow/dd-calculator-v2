import { useContext } from "react";
import AppContext from "./context/AppContext";
import { Heading } from "@cruk/cruk-react-components";
import Table from "react-bootstrap/Table";

export default function DisplayBankHols() {
  const { bankHols, selectedYear } = useContext(AppContext);
  return (
    <>
      <Heading>{`Bank holiday dates for ${selectedYear} (and late ${
        selectedYear - 1
      })`}</Heading>
      <Table className="table-primary" striped bordered hover>
        <thead className="table-dark">
          <tr>
            <th>Date</th>
            <th>Day of the week</th>
            <th>Bank Holiday</th>
          </tr>
        </thead>
        <tbody>
          {bankHols.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.displayDate}</td>
                <td>{item.dayOfWeek}</td>
                <td>{item.bankHolName}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
