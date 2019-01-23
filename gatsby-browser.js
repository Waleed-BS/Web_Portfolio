/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
// import { Router } from '@reach/router'
import { Provider } from 'react-redux'

import createStore from './src/state/createStore'

const store = createStore()

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = (
    <Provider store={store}>{element}</Provider>
  )
  return ConnectedRootElement
}
