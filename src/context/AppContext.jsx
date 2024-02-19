import { createContext, useState } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedYear, setSelectedYear] = useState("Select a year");
  return (
    <AppContext.Provider
      value={{
        selectedYear,
        setSelectedYear,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
