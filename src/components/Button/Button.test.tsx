import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Test Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      children: "Test Button",
      appearence: "primary",
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should render foo text correctly", () => {
    props.children = "Hello World";
    const { baseElement } = renderComponent();

    const component = baseElement;

    expect(component).toHaveTextContent("Hello World");
  });
});
