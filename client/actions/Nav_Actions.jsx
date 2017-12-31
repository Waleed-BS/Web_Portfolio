export const SET_HOVER = 'SET_HOVER';
export const SET_ACTIVE = 'SET_ACTIVE';

export function setHover(hover) {
  return {
    type: SET_HOVER,
    hover,
  };
}

export function setActive(active) {
  return {
    type: SET_ACTIVE,
    active,
  };
}
