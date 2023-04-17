import React from "react";
import List from "./List";
import useCities from "./hooks/useCities";

const Cities: React.FC = () => {
  const { data: cities, isLoading } = useCities();

  if (isLoading) return <div>LOADING!</div>;

  return <List items={cities} />;
};

export default Cities;
