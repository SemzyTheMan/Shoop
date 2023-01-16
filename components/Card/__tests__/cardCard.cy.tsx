import React from "react";
import { Card } from "../card";

// @ts-ignore
describe("<Card />", () => {
  // @ts-ignore
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    // @ts-ignore
    cy.mount(
      <Card header={<div>Test Card</div>}>
        <div>This is the body of the test card</div>
      </Card>
    );
  });
});
