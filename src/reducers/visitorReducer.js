import { CHANGE_NAME } from '../actions/changeNameAction';

export default (state = { name: 'You' }, { name = '', type }) => {
  const newState = { ...state };
  newState.name = type === CHANGE_NAME ? name : state.name;
  return newState;
}