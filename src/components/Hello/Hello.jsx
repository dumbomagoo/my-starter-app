import React from 'react';

const Hello = props => {
  const { name = '' } = props;
  return (
    <div data-something="whatever">
      <p>{`Hello ${name}`}</p>
    </div>
  );
};

export default Hello;