import React from 'react';

const VisitorInfo = ({ favorites }) => (
  <div>
  {
    Object.keys(favorites).map((item, index) => (
      <p key={`favorite-${index}`}>{`Favorite ${item} is "${favorites[item]}"`}</p>
    ))
  }
  </div>
);

VisitorInfo.defaultProps = {
  favorites: {}
};

export default VisitorInfo;