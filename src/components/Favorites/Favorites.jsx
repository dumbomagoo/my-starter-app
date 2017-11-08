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
    name: '',
    favorites: {}
  }
};

export default Favorites;