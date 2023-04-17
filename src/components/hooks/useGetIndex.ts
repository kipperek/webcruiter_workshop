import { useEffect, useState } from "react";

const useGetIndex = (items: string[]) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    setSelectedIndex(items.length - 1);
  }, [items]);

  return {
    selectedIndex,
    setSelectedIndex,
  };
};

export default useGetIndex;