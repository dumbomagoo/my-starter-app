export const UPDATE_FAVORITE = 'UPDATE_FAVORITE';
export const CLEAR_FAVORITES = 'CLEAR_FAVORITES';

export const update = (value, favoriteType) => (
  {
    type: UPDATE_FAVORITE,
    favoriteType,
    favoriteValue: value
  }
)

export const clearAll = () => (
  {
    type: CLEAR_FAVORITES
  }
)