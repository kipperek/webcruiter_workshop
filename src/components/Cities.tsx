import React from "react";
import List from "./List";
import useCities from "./hooks/useCities";
import CityForm from "./CityForm";

const Cities: React.FC = () => {
  const { data: cities, isFetching } = useCities();

  const content = isFetching ? <div>LOADING!</div> : <List items={cities} />;

  return (
    <>
      {content}
      <CityForm />
    </>
  );
};

export default Cities;
