import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
  const [toasts, setToasts] = useState([]);
  const addToast = (message) => {
    const id = uuidv4();
    setToasts([...toasts, { id, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };
  const removeToast = (idToRemove) => {
    setToasts((prevToasts) => prevToasts.filter(({ id }) => id !== idToRemove));
    console.log(toasts);
  };
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
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
