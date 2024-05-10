import React, { createContext } from "react";
import JoblyApi from "./Api";

const JoblyContext = createContext();

export const JoblyProvider = ({ children }) => {
  return (
    <JoblyContext.Provider value={JoblyApi}>
      {children}
    </JoblyContext.Provider>
  );
};

export default JoblyContext;