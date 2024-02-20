import DisplayBankHols from "./DisplayBankHols";
import DisplayWeekends from "./DisplayWeekends";
import DisplayProcessingDays from "./DisplayProcessingDays";
import { useContext } from "react";
import AppContext from "./context/AppContext";

export default function ResultsDisplay() {
  const { calculated } = useContext(AppContext);
  return (
    <>
      {calculated && <DisplayBankHols />}
      {calculated && <DisplayWeekends />}
      {calculated && <DisplayProcessingDays />}
    </>
  );
}
