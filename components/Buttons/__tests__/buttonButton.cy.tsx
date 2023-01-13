import React from 'react'
import { Button } from '../button'

// @ts-ignore
describe('<Button />', () => {
  // @ts-ignore
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    // @ts-ignore
    cy.mount(<Button text={'Test Button'} />)
  })
})