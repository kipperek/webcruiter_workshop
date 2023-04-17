import React from "react";
import classNames from "classnames";

type ListProps = {
  items: string[];
};

const List: React.FC<ListProps> = ({ items }) => {
  const selectedIndex = 0;

  const renderItem = (item: string, index: number) => (
    <div
      key={index}
      className={classNames({
        active: selectedIndex === index,
      })}
    >
      {item}
    </div>
  );

  const emptyCityInfo = "List of items is empty";
  const citiesEmpty = items.length === 0;

  return (
    <div>
      {citiesEmpty && emptyCityInfo}
      {items.map(renderItem)}
      <br />
      <div>Number of items: {items.length}</div>
    </div>
  );
};

List.displayName = "App_List";

export default List;
