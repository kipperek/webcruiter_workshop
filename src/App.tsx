import React from "react";
import ListHeader from "./components/ListHeader";
import List from "./components/List";

const App: React.FC = () => {
  const cities = ["Oslo", "Gdansk", "Stockholm"];
  const users = ["Henrik", "Piotr"];

  return (
    <>
      <ListHeader>List of cities in children</ListHeader>
      <List items={cities} />
      <br />
      <List items={users} />
    </>
  );
};

export default App;
