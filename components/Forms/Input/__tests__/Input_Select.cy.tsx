import { Input } from "../Input";
import React from "react";

// @ts-ignore
describe("<Select />", () => {
  // @ts-ignore
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    // @ts-ignore
    cy.mount(<Input type={"select"} options={["hi", "there"]} />);
  });
});
