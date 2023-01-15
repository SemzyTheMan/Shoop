import React from "react";
import { DashboardLayout } from "../dashboard";

// @ts-ignore
describe("<DashboardLayout />", () => {
  // @ts-ignore
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    // @ts-ignore
    cy.mount(<DashboardLayout header={{ title: "Test" }} />);
  });
});
