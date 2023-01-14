import React from "react";
import { FormGroup } from "../Formgroup";

// @ts-ignore
describe("<FormGroup />", () => {
  // @ts-ignore
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    // @ts-ignore
    cy.mount(
      <FormGroup
        type={"checkbox"}
        placeholder={"Remember for 30 days"}
        label={"Remember for 30 days"}
      />
    );
  });
});
