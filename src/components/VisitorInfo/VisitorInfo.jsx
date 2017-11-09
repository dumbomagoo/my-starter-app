import React from 'react';

// CSS
import './VisitorInfo.scss';

const VisitorInfo = ({ favorites }) => (
  <div className={'visitor-info'}>
    {
      Object.keys(favorites).length === 0 ? null :
      <span>
        <h2>{'Your Favorites'}</h2>
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
      </span>
    }
  </div>
);

VisitorInfo.defaultProps = {
  favorites: {}
};

export default VisitorInfo;