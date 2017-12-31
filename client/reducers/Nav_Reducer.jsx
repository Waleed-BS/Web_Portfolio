import {
  SET_HOVER,
  SET_ACTIVE
} from '../actions/Nav_Actions.jsx'

const initialState = {
  hovering: false,
  active: 'Home'
};

function navBar(state = initialState, action) {
  switch (action.type) {
    case SET_HOVER:
      return { ...state, hovering: action.hover };
    case SET_ACTIVE:
      return { ...state, active: action.active };
    default:
      return state;
  }
}

export default navBar;
