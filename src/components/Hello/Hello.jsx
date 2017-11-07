import React from 'react';
import './Hello.scss';

const Hello = ({ name }) => (
  <div className={'hello'} data-something="whatever">
    <h2>{`Hello ${name}`}</h2>
  </div>
);

Hello.defaultProps = {
  name: ''
};

export default Hello;