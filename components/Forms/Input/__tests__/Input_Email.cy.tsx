import { Email } from "../email";
import React from "react";

// @ts-ignore
describe("<Select />", () => {
  // @ts-ignore
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    // @ts-ignore
    cy.mount(<Email placeholder={"Enter your Email"} />);
  });
});
