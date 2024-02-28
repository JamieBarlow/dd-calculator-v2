import { useEffect, useContext, useState } from "react";
import AppContext from "./context/AppContext";
import { Text, Button, Box } from "@cruk/cruk-react-components";
import { dateUtils } from "./functions/dateUtils";
const { convertJSDateToDMY } = dateUtils;
import { v4 as uuidv4 } from "uuid";

// Custom React datepicker with UK localisation
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { enGB } from "date-fns/locale/en-GB";
registerLocale("en-GB", enGB);
setDefaultLocale("en-GB");

// Icons
import { RxCalendar } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";

export default function CompanyHolsForm() {
  const {
    nonProcessingDays,
    setNonProcessingDays,
    companyHolsAdded,
    setCompanyHolsAdded,
    companyHols,
    setCompanyHols,
    addToast,
  } = useContext(AppContext);
  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = {
      id: uuidv4(),
      displayDate: convertJSDateToDMY(startDate),
      JSDate: startDate,
    };
    setNonProcessingDays((prev) => [...prev, date]);
    setCompanyHols((prev) => [...prev, date]);
    setCompanyHolsAdded(true);
    addToast("Date added to company hols");
  };
  useEffect(() => {
    if (companyHolsAdded === true) {
      // console.log(nonProcessingDays);
      // console.log(companyHols);
    }
  }, [nonProcessingDays, companyHols, companyHolsAdded]);

  return (
    <>
      <form id="extra-dates__form" onSubmit={handleSubmit}>
        <Text textSize="l" textColor="textOnPrimary">
          <label htmlFor="company-dates">
            Please enter a date and click 'Add' after each entry:
          </label>
        </Text>
        <Box marginLeft="l" style={{ display: "flex", alignItems: "center" }}>
          <DatePicker
            className="datePicker"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            openToDate={new Date()}
            placeholderText="    Click to select a date"
            showIcon
            id="company-dates"
            pattern="([0-9]+(/[0-9]+)+)"
            icon={<RxCalendar />}
            required
            locale="en-GB"
          />
          <Button
            id="addCompanyDatesBtn"
            type="submit"
            style={{ margin: 10 }}
            size="m"
          >
            Add
            <FaPlus />
          </Button>
        </Box>
      </form>
    </>
  );
}
