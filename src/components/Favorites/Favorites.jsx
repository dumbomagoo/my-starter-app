import React from 'react';
import FavoriteChoice from '../FavoriteChoice/FavoriteChoice';

const Favorites = props => {
  const {
    favoriteAction,
    visitorInfo: {
      favorites
    }
  } = props;

  const getDefaultChoiceFromProps = favoriteType => 
    favorites[favoriteType] || '';

  return (
    <div>
      <FavoriteChoice 
        action={favoriteAction}
        currentChoice={getDefaultChoiceFromProps('clam')}
        favoriteType={'clam'}
        choices={['Geoducks', 'Quahogs', 'Razors', 'Steamers']}
      />
      <FavoriteChoice 
        action={favoriteAction}
        currentChoice={getDefaultChoiceFromProps('color')}
        favoriteType={'color'}
        choices={['red', 'blue', 'yellow', 'orange', 'green', 'purple']}
      />
      <FavoriteChoice
        action={favoriteAction}
        currentChoice={getDefaultChoiceFromProps('number')}
        favoriteType={'number'}
        choices={['1','2','3','4','5']}
      />
    </div>
  )
};

Favorites.defaultProps = {
  favoriteAction: () => {},
  visitorInfo: {
    favorites: {}
  }
};

export default Favorites;