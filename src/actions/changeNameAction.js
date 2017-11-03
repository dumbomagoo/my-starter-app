import { clearAll } from './favoriteActions';

export const CHANGE_NAME = 'CHANGE_NAME';

export default name => {
  return (dispatch, getState) => {
    const state = getState();
    if(state.visitor.name !== name) {
      dispatch(clearAll());
    }

    // dispatch after checking existing name value in state
    dispatch({
      type: CHANGE_NAME,
      name
    });
  };
}