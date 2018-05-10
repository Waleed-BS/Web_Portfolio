import { combineReducers } from 'redux'
import navBar from './Nav_Reducer.jsx';
import {educationActive} from './Education_Reducer.jsx';

export default combineReducers({
  navBar,
  educationActive
});
