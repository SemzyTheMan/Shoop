import React from 'react'
import { Logo } from '../logo'

// @ts-ignore
describe('<Logo />', () => {
  // @ts-ignore
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    // @ts-ignore
    cy.mount(<Logo />)
  })
})