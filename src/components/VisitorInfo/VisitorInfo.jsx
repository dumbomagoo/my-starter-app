import React from 'react';
import './VisitorInfo.css';

const VisitorInfo = ({ favorites }) => (
  <div className={'visitor-info'}>
    {(Object.keys(favorites).length ) ? <h2>{'Your Favorites'}</h2> : null}
    <div className={'border-magic'}>
    {
      Object.keys(favorites).map((item, index) => (
        <div className={'favorite-row'} key={`favorite-${index}`}>
          <div className={'favorite-cell'}>{item}</div>
          <div className={'favorite-cell'}>{favorites[item]}</div>
        </div>
      ))
    }
    </div>
  </div>
);

VisitorInfo.defaultProps = {
  favorites: {}
};

export default VisitorInfo;