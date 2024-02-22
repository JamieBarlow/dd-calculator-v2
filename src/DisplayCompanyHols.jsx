import { useContext } from "react";
import AppContext from "./context/AppContext";
import { Heading } from "@cruk/cruk-react-components";
import Table from "react-bootstrap/Table";

export default function DisplayCompanyHols() {
  const { companyHols, setCompanyHols } = useContext(AppContext);
  return (
    <>
      <Heading>Company holiday dates</Heading>
      <ul>
        {companyHols.map((item, i) => {
          return <li key={i}>{item.displayDate}</li>;
        })}
      </ul>
    </>
  );
}
