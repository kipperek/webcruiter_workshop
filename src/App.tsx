import React from "react";
import ListHeader from "./components/ListHeader";
import DataContextProvider from "./components/DataContextProvider";
import Cities from "./components/Cities";

const App: React.FC = () => {
  return (
    <DataContextProvider>
      <ListHeader>List of cities in children</ListHeader>
      <Cities />
    </DataContextProvider>
  );
};

export default App;
