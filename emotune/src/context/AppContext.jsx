import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [session, setSession] = useState({
    emotion: null,
    frequency: null,
    playlist: [],
  });

  useEffect(() => {
    window.updateAppSession = (data) => {
      setSession((prev) => ({ ...prev, ...data }));
    };
  }, []);

  return (
    <AppContext.Provider value={{ session, setSession }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
