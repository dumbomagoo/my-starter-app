import React from 'react';
import { Link } from 'react-router-dom'

import './HeaderButton.scss';

const HeaderButton = ({ label, path }) => (
  <Link to={path} className={'header-button'}>
    <button>{label}</button>
  </Link>
);

HeaderButton.defaultProps = {
  label: '',
  path: '/'
};

export default HeaderButton;