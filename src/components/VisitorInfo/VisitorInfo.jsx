import React from 'react';

const VisitorInfo = ({ favorites = {} }) => (
  <div>
  {
    Object.keys(favorites).map((item, index) => {
      return (
        <p key={`favorite-${index}`}>{`Favorite ${item} is "${favorites[item]}"`}</p>
      );
    })
  }
  </div>
);

export default VisitorInfo;