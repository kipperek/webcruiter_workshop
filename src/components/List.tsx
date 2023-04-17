import React from "react";

const List: React.FC = () => {
  const cities = ["Oslo", "Gdansk", "Stockholm"];

  const renderCity = (city: string, index: number) => (
    <div key={index}>{city}</div>
  );

  const emptyCityInfo = "List of cities is empty";
  const citiesEmpty = cities.length === 0;

  return (
    <div>
      {citiesEmpty && emptyCityInfo}
      {cities.map(renderCity)}
      <br />
      <div>Number of cities: {cities.length}</div>
    </div>
  );
};

List.displayName = "App_List";

export default List;
