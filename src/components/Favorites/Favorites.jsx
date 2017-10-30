import React from 'react';
import Header from '../Header/Header';
import FavoriteChoice from '../FavoriteChoice/FavoriteChoice';

const Favorites = props => (
  <div>
    <Header name={props.visitorInfo.name} />
    <FavoriteChoice 
      action={props.favoriteAction}
      favoriteType={'clam'}
      question={'What is your favorite clam?'}
      choices={['Quahogs', 'Razors', 'Steamers']}
    />
    <FavoriteChoice 
      action={props.favoriteAction}
      favoriteType={'color'}
      question={'What is your favorite color?'}
      choices={['red', 'blue', 'yellow', 'orange', 'green', 'purple']}
    />
  </div>
);

Favorites.defaultProps = {
  favoriteAction: () => {},
  visitorInfo: {
    name: ''
  }
};

export default Favorites;