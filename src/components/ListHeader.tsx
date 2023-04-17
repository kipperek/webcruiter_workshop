import React from "react";

const ListHeader: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <h1>{children}</h1>;
};

ListHeader.displayName = "App_ListHeader";

export default ListHeader;
