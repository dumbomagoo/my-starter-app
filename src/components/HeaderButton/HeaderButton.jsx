import React from 'react';
import { Link } from 'react-router-dom'

const HeaderButton = ({ label, path }) => (
  <Link to={path}>
    <button>{label}</button>
  </Link>
);

HeaderButton.defaultProps = {
  label: '',
  path: '/'
};

export default HeaderButton;