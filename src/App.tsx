import React, { useState } from "react";
import ListHeader from "./components/ListHeader";
import List from "./components/List";

const App: React.FC = () => {
  const [users] = useState<string[]>(["Henrik", "Piotr"]);
  const [cities, setCities] = useState<string[]>([
    "Oslo",
    "Gdansk",
    "Stockholm",
  ]);

  return (
    <>
      <ListHeader>List of cities in children</ListHeader>
      <List items={cities} />
      <button onClick={()=>{setCities([...cities, "added new city"])}}>add</button>
      <br />
      <List items={users} />
    </>
  );
};

export default App;
