import { createContext, useState } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [nonProcessingDays, setNonProcessingDays] = useState([]);
  const [companyHols, setCompanyHols] = useState([]);
  const [bankHols, setBankHols] = useState([]);
  const [weekends, setWeekends] = useState([]);
  const [processingDays, setProcessingDays] = useState([]);
  const [selectedYear, setSelectedYear] = useState("Select a year");
  const [submittedYear, setSubmittedYear] = useState("");
  const [calculated, setCalculated] = useState(false);
  const [companyHolsAdded, setCompanyHolsAdded] = useState(false);
  return (
    <AppContext.Provider
      value={{
        selectedYear,
        setSelectedYear,
        nonProcessingDays,
        setNonProcessingDays,
        calculated,
        setCalculated,
        bankHols,
        setBankHols,
        weekends,
        setWeekends,
        processingDays,
        setProcessingDays,
        companyHolsAdded,
        setCompanyHolsAdded,
        companyHols,
        setCompanyHols,
        submittedYear,
        setSubmittedYear,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
