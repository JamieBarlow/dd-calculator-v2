import { useEffect, useContext } from "react";
import AppContext from "./context/AppContext";
import { Select, Text, Button } from "@cruk/cruk-react-components";
import { FaCalculator } from "react-icons/fa6";

import getBankHols from "./functions/getBankHols";
import getWeekends from "./functions/getWeekends";

export default function DateSelectForm() {
  const { selectedYear, setSelectedYear, setCalculated, nonProcessingDays, setNonProcessingDays, setBankHols, weekends, setWeekends } = useContext(AppContext);
  const handleYearSelect = (e) => {
    setSelectedYear(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Generate bank hols and add to state
    const bankHols = await getBankHols(selectedYear);
    setNonProcessingDays((prevNonProcessingDays) => [
      ...prevNonProcessingDays,
      ...bankHols
    ]);
    setBankHols(bankHols);
    // Generate weekends and add to state
    const weekendDates = getWeekends(selectedYear);
    setWeekends(weekendDates);
    setNonProcessingDays((prevNonProcessingDays) => [
      ...prevNonProcessingDays,
      ...weekendDates
    ]);
    // Allow for results to display
    setCalculated(true);
  };
  useEffect(() => {
    console.log(nonProcessingDays);
  }, [nonProcessingDays]);

  return (
    <form action="#" method="GET" id="chooseYear" onSubmit={handleSubmit}>
      <Text textSize="l" textColor="textOnPrimary">
        <label htmlFor="year-select" className="form-label">
          {`Choose a year and select 'calculate dates':`}
        </label>
      </Text>
      <Select
        className="form-select"
        aria-label="year select"
        name="year"
        id="year-select"
        required
        value={selectedYear}
        onChange={handleYearSelect}
      >
        <option value="Select a year">Select a year</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
        <option value="2029">2029</option>
        <option value="2030">2030</option>
      </Select>
      <Button
        id="calculateDatesBtn"
        type="submit"
        style={{ margin: 10 }}
        size="m"
      >
        Calculate Dates
        <FaCalculator />
      </Button>
    </form>
  );
}
