import DisplayBankHols from "./DisplayBankHols";
import DisplayWeekends from "./DisplayWeekends";
import DisplayProcessingDays from "./DisplayProcessingDays";
import DisplayCompanyHols from "./DisplayCompanyHols";
import { useContext } from "react";
import AppContext from "./context/AppContext";
import { Tab, Tabs } from "react-bootstrap";

export default function DisplayResults() {
  const { calculated, companyHolsAdded } = useContext(AppContext);
  return (
    <>
      {(companyHolsAdded || calculated) && (
        <Tabs
          defaultActiveKey="companyHols"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab
            eventKey="companyHols"
            title="Company Hols"
            disabled={!companyHolsAdded}
          >
            {companyHolsAdded && <DisplayCompanyHols />}
          </Tab>
          <Tab eventKey="bankHols" title="Bank Hols" disabled={!calculated}>
            {calculated && <DisplayBankHols />}
          </Tab>
          <Tab eventKey="weekends" title="Weekends" disabled={!calculated}>
            {calculated && <DisplayWeekends />}
          </Tab>
          <Tab
            eventKey="processingDays"
            title="Processing Days"
            disabled={!calculated}
          >
            {calculated && <DisplayProcessingDays />}
          </Tab>
        </Tabs>
      )}
    </>
  );
}
