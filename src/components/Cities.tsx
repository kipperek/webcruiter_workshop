import React from "react";
import { useDataContext } from "./DataContext";
import List from "./List";

const Cities: React.FC = () => {
  const { cities, addCity: addCityAlias } = useDataContext();

  const addCity = () => {
    addCityAlias?.("city");
  };

  return (
    <>
      <List items={cities} />
      <button onClick={addCity}>add</button>
    </>
  );
};

export default Cities;
