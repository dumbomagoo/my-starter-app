export const UPDATE_FAVORITE = 'UPDATE_FAVORITE';

export default (value, favoriteType) => (
  {
    type: UPDATE_FAVORITE,
    favoriteType,
    favoriteValue: value
  }
)