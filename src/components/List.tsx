import React from "react";
import classNames from "classnames";
import useGetIndex from "./hooks/useGetIndex";

export type ListProps = {
  items: string[];
};

const List: React.FC<ListProps> = ({ items }) => {
  const { selectedIndex, setSelectedIndex } = useGetIndex(items);

  const renderItem = (item: string, index: number) => (
    <div
      data-testid="item"
      key={index}
      className={classNames({
        active: selectedIndex === index,
      })}
      onClick={() => {
        setSelectedIndex(index);
      }}
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
