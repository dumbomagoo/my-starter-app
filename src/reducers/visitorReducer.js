import { CHANGE_NAME } from '../actions/changeNameAction';
import { CLEAR_FAVORITES, UPDATE_FAVORITE } from '../actions/favoriteActions';

const initialState = {
  favorites: {},
  name: 'You'
};

export default (state = initialState, action) => {
  const { 
    type, 
    favoriteType,
    favoriteValue,
    name
  } = action;

  const newState = { ...state };
  newState.name = type === CHANGE_NAME ? name : state.name;

  if (type === UPDATE_FAVORITE) {
    newState.favorites[favoriteType] = favoriteValue;
    
  } else if (type === CLEAR_FAVORITES) {
    newState.favorites = {};
  }
  
  return newState;
}