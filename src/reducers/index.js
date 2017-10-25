import { combineReducers } from 'redux';
import visitorReducer from './visitorReducer';

const rootReducer = combineReducers({
  visitor: visitorReducer
});

export default rootReducer;