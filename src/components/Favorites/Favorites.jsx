import React from 'react';
import Header from '../Header/Header';

const Favorites = props => (
  <div>
    <Header name={props.visitorInfo.name} />
    <p>
      {'What is your favorite clam?'}
    </p>
    <select>
      <option>Quahogs</option>
      <option>Razors</option>
      <option>Steamers</option>
    </select>
  </div>
);

Favorites.defaultProps = {
  visitorInfo: {
    name: ''
  }
};

export default Favorites;