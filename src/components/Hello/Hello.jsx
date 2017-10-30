import React from 'react';

const Hello = ({ name }) => (
  <div data-something="whatever">
    <p>{`Hello ${name}`}</p>
  </div>
);

Hello.defaultProps = {
  name: ''
};

export default Hello;