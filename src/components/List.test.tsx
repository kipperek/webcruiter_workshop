import { render, screen } from "@testing-library/react";
import List, { ListProps } from "./List";

describe("Button component", () => {
  const defeaultProps: ListProps = {
    items: ["Gdansk", "Oslo"],
  };

  const renderWrapper = (props: ListProps) => render(<List {...props} />);

  it("shows empty info when items has no elements", () => {
    renderWrapper({ items: [] });
    const emptyInfo = screen.queryByText("List of items is empty");
    expect(emptyInfo).toBeInTheDocument();
  });

  it("shows all elements", () => {
    renderWrapper(defeaultProps);
    const items = screen.getAllByTestId("item").map((item) => item.textContent);
    expect(items).toEqual(defeaultProps.items);
  });
});

export {};
