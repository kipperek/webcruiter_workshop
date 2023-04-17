import React, { createContext, useContext } from "react";

export interface IDataContext {
  cities: string[];
  addCity?: (city: string) => void;
}

export const DataContext: React.Context<IDataContext> = createContext({
  cities: [] as string[],
});

export const useDataContext = () => useContext(DataContext);
