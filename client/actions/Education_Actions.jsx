export function setEducationActive(section, active) {
  let type = '';
  switch (section) {
    case 'SUNYNewPaltz':
      type = 'SET_SUNYNEWPALTZ_ACTIVE';
      break;
    case 'Udacity':
      type = 'SET_UDACITY_ACTIVE';
      break;
    default:
      break;
  }

  return {
    type,
    active,
  };
}
