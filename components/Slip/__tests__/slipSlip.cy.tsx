import React from "react";
import { Slip } from "../slip";

describe("<Slip />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Slip />);
  });
});
