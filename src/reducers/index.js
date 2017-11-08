import { combineReducers } from 'redux';
import visitorReducer from './visitorReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  visitor: visitorReducer,
  menu: menuReducer
});

export default rootReducer;