import { useContext } from "react";
import AppContext from "./context/AppContext";
import { Heading } from "@cruk/cruk-react-components";
import Table from "react-bootstrap/Table";

export default function DisplayWeekends() {
  const { submittedYear, weekends } = useContext(AppContext);
  return (
    <>
      <Heading>{`Weekend dates for ${submittedYear} (including late ${
        submittedYear - 1
      } and early ${Number(submittedYear) + 1})`}</Heading>
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
