import { render } from "@testing-library/react";
import styled from "@xstyled/styled-components";
import { backgroundColor } from "@xstyled/system";
import React from "react";
import createCleanComponent from "./createCleanComponent";

const CleanComponent = createCleanComponent("div", [
  "testInvalidProp",
  "invalidProp",
  "backgroundColor",
]);

const Component = styled(CleanComponent)`
  ${backgroundColor}
  width: 100px;
  height: 100px;
  background: red;
`;

describe("createCleanComponent", () => {
  test("Without children", () => {
    const { asFragment, getByTestId } = render(
      <Component
        data-testid="component"
        disabled
        testInvalidProp="testInvalidProp"
        invalidProp="invalidProp"
        backgroundColor="red"
      />
    );

    expect(getByTestId("component")).not.toHaveAttribute("testInvalidProp");
    expect(getByTestId("component")).not.toHaveAttribute("invalidProp");
    expect(getByTestId("component")).not.toHaveAttribute("backgroundColor");
    expect(getByTestId("component")).toHaveAttribute("disabled");

    expect(asFragment()).toMatchSnapshot();
  });

  test("With children", () => {
    const { asFragment, getByTestId, getByText } = render(
      <Component
        data-testid="component"
        disabled
        testInvalidProp="testInvalidProp"
        invalidProp="invalidProp"
        backgroundColor="red"
      >
        CHILDREN!
      </Component>
    );

    expect(getByTestId("component")).not.toHaveAttribute("testInvalidProp");
    expect(getByTestId("component")).not.toHaveAttribute("invalidProp");
    expect(getByTestId("component")).not.toHaveAttribute("backgroundColor");
    expect(getByTestId("component")).toHaveAttribute("disabled");
    expect(getByText("CHILDREN!")).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
