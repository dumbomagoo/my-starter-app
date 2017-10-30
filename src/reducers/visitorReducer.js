import { CHANGE_NAME } from '../actions/changeNameAction';
import { UPDATE_FAVORITE } from '../actions/updateFavoriteAction';

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
  }
  
  return newState;
}