import { CHANGE_NAME } from '../actions/changeNameAction';
import { CLEAR_FAVORITES, UPDATE_FAVORITE } from '../actions/favoriteActions';

const initialState = {
  favorites: {},
  name: ''
};

export default (state = initialState, action) => {
  const { 
    type, 
    newFavorite,
    name
  } = action;

  if (type === CHANGE_NAME) {
    return { ...state, name };
  }
  else if (type === UPDATE_FAVORITE) {
    return { 
      ...state,
      favorites: {
        ...state.favorites,
        ...newFavorite
      }
    };
    
  } else if (type === CLEAR_FAVORITES) {
    return { ...state, favorites: {} };
  }
  
  return state;
}