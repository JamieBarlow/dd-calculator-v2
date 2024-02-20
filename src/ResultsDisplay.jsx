import DisplayBankHols from "./DisplayBankHols";
import { useContext } from "react";
import AppContext from "./context/AppContext";

export default function ResultsDisplay() {
  const { calculated } = useContext(AppContext);
  return <>{calculated && <DisplayBankHols />}</>;
}
