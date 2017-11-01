export const UPDATE_FAVORITE = 'UPDATE_FAVORITE';
export const CLEAR_FAVORITES = 'CLEAR_FAVORITES';

export const update = (value, favoriteType) => {
  const newFavorite = {};
  newFavorite[favoriteType] = value;
  
  return {
    type: UPDATE_FAVORITE,
    newFavorite
  };
}

export const clearAll = () => (
  {
    type: CLEAR_FAVORITES
  }
)