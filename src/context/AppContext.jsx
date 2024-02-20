import { createContext, useState } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [nonProcessingDays, setNonProcessingDays] = useState([]);
  const [bankHols, setBankHols] = useState([]);
  const [weekends, setWeekends] = useState([]);
  const [processingDays, setProcessingDays] = useState([]);
  const [selectedYear, setSelectedYear] = useState("Select a year");
  const [calculated, setCalculated] = useState(false);
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
        setProcessingDays
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
