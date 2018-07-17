import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === `SET_HOVER`) {
    return Object.assign({}, state, {
      hover: action.isHovering,
    })
  } else if (action.type === `SET_ACTIVE`) {
    return Object.assign({}, state, {
      active: action.isActive,
    })
  }
  return state
}

const initialState = { isHovering: false, isActive: 'Home' }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
