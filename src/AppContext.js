import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  history as historyData,
  categories as categoriesData,
} from 'data/data';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [history, setHistory] = useState(historyData);
  const [categories, setCategories] = useState(categoriesData);

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem('history')));
  }, []);

  const [nextID, setNextID] = useState(historyData.length);

  const addElementToHistory = (element) => {
    setHistory([...history, element]);
    localStorage.setItem('history', JSON.stringify([...history, element]));
  };

  const removeElementFromHistory = (id) => {
    const newHistory = history.filter((item) => item.id !== id);
    setHistory(newHistory);
    localStorage.setItem('history', JSON.stringify(newHistory));
  };

  useEffect(() => {
    setNextID((n) => n + 1);
  }, [history]);

  return (
    <AppContext.Provider
      value={{
        history,
        categories,
        addElementToHistory,
        removeElementFromHistory,
        nextID,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
