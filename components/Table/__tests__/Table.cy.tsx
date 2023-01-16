import React from "react";
import { DCol, Table } from "../Table";

const testColumns: DCol[] = [
  { header: "Test 1", valueField: "" },
  { header: "Test 2", valueField: "" },
  { header: "Test 3", valueField: "" },
];
// @ts-ignore
describe("<Table />", () => {
  // @ts-ignore
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    // @ts-ignore
    cy.mount(<Table data={[]} columns={testColumns} />);
  });
});
