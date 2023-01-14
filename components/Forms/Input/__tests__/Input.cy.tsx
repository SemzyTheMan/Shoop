import React from "react";
import { Input } from "../Input";

// @ts-ignore
describe("<Input />", () => {
  // @ts-ignore
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    // @ts-ignore
    cy.mount(<Input />);
  });
});
