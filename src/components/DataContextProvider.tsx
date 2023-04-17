import React, { useState } from "react";
import { DataContext } from "./DataContext";

const DataContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [cities, setCities] = useState<string[]>([
    "Oslo",
    "Gdansk",
    "Stockholm",
  ]);

  const addCity = (city: string) => {
    setCities([...cities, city]);
  };

  return (
    <DataContext.Provider
      value={{
        cities,
        addCity,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
