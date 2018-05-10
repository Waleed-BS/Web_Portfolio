const INITIAL_EDUCATION_STATE = {
  SUNYNewPaltz: false,
  Udacity: false,
};

export function educationActive(state = INITIAL_EDUCATION_STATE, action) {
  switch (action.type) {
    case 'SET_SUNYNEWPALTZ_ACTIVE':
      return { ...state, SUNYNewPaltz: action.active };
    case 'SET_UDACITY_ACTIVE':
      return { ...state, Udacity: action.active };

    default:
      return state;
  }
}
