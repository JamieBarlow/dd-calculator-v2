import DisplayBankHols from "./DisplayBankHols";
import DisplayWeekends from "./DisplayWeekends";
import DisplayProcessingDays from "./DisplayProcessingDays";
import DisplayCompanyHols from "./DisplayCompanyHols";
import { useContext } from "react";
import AppContext from "./context/AppContext";

export default function DisplayResults() {
  const { calculated, companyHolsAdded } = useContext(AppContext);
  return (
    <>
      {companyHolsAdded && <DisplayCompanyHols />}
      {calculated && <DisplayBankHols />}
      {calculated && <DisplayWeekends />}
      {calculated && <DisplayProcessingDays />}
    </>
  );
}
