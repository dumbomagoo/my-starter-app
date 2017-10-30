import React from 'react';
import Header from '../Header/Header';
import FavoriteChoice from '../FavoriteChoice/FavoriteChoice';

const Favorites = props => {
  const {
    favoriteAction,
    visitorInfo: { 
      name, 
      favorites
    }
  } = props;

  const getDefaultChoiceFromProps = favoriteType => 
    favorites[favoriteType] || '';

  return (
    <div>
      <Header name={name} />
      <FavoriteChoice 
        action={favoriteAction}
        currentChoice={getDefaultChoiceFromProps('clam')}
        favoriteType={'clam'}
        choices={['Quahogs', 'Razors', 'Steamers']}
      />
      <FavoriteChoice 
        action={favoriteAction}
        currentChoice={getDefaultChoiceFromProps('color')}
        favoriteType={'color'}
        choices={['red', 'blue', 'yellow', 'orange', 'green', 'purple']}
      />
    </div>
  )
};

Favorites.defaultProps = {
  favoriteAction: () => {},
  visitorInfo: {
    name: '',
    favorites: {}
  }
};

export default Favorites;