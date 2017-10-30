
export const CHANGE_NAME = 'CHANGE_NAME';

export default (name) => {
  return {
    type: CHANGE_NAME,
    name
  };
}