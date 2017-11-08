import { TOGGLE_MENU } from '../actions/menuActions';

const initialState = {
  isMenuOpen: false
};

export default (state = initialState, action) => {
  const { type } = action;

  switch(type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    default:
      return state;
  }
}