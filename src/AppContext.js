import React, { createContext, useContext, useState } from 'react';
import { categories } from 'data/data';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem('history'))
  );

  if (history === null) {
    setHistory([]);
  }

  const addElementToHistory = (element) => {
    setHistory([...history, element]);
    localStorage.setItem('history', JSON.stringify([...history, element]));
  };

  const removeElementFromHistory = (id) => {
    const newHistory = history.filter((item) => item.id !== id);
    setHistory(newHistory);
    localStorage.setItem('history', JSON.stringify(newHistory));
  };

  return (
    <AppContext.Provider
      value={{
        history,
        categories,
        addElementToHistory,
        removeElementFromHistory,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
