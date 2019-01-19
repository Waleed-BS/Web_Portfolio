import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
  // console.log('action', action)
  // console.log('state', state)
  if (action.type === 'SET_HOVER') {    
    return Object.assign({}, state, {
      isHovered: action.isHovered,
    })
  } else if (action.type === 'SET_ACTIVE') {
    return Object.assign({}, state, {
      active: action.active,
    })
  } else if (action.type === 'TOGGLE_BUTTON') {
    return Object.assign({}, state, {
      isInfoDisplayed: !state.isInfoDisplayed,
    })
  }
  return state
}

const initialState = {
  isHovered: false,
  active: 'Home',
  isInfoDisplayed: false,
}

const createStore = () => reduxCreateStore(reducer, initialState)

export default createStore
