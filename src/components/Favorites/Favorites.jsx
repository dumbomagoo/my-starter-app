import React from 'react';
import Header from '../Header/Header';
import FavoriteChoice from '../FavoriteChoice/FavoriteChoice';

const Favorites = props => (
  <div>
    <Header name={props.visitorInfo.name} />
    <FavoriteChoice 
      favoriteType={'clam'}
      question={'What is your favorite clam?'}
      choices={['Quahogs', 'Razors', 'Steamers']}
    />
  </div>
);

Favorites.defaultProps = {
  visitorInfo: {
    name: ''
  }
};

export default Favorites;