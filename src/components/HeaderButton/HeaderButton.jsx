import React from 'react';
import { Link } from 'react-router-dom'

import './HeaderButton.css';

const HeaderButton = ({ label, path }) => (
  <Link to={path}>
    <button className={'header-button'}>{label}</button>
  </Link>
);

HeaderButton.defaultProps = {
  label: '',
  path: '/'
};

export default HeaderButton;