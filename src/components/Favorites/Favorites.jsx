import React from 'react';
import HeaderButton from '../HeaderButton/HeaderButton';
import './Favorites.css';

const Favorites = props => (
  <div>
    <div className={'profile-header'}>
      <h1>{'Welcome You'}</h1>
      <HeaderButton label="Home" path="/" />
    </div>
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

export default Favorites;