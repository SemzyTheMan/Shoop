import React from 'react'
import { IButton } from '../button'

// @ts-ignore
describe('<IButton />', () => {
  // @ts-ignore
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    // @ts-ignore
    cy.mount(<IButton text={'Test Button'} icon={<>Icon here</>} />)
  })
})