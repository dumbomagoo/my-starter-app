export const UPDATE_FAVORITE = 'UPDATE_FAVORITE';

export const update = (value, favoriteType) => (
  {
    type: UPDATE_FAVORITE,
    favoriteType,
    favoriteValue: value
  }
)