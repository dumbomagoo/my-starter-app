import React from 'react';
import { Link } from 'react-router-dom'

import './HeaderButton.scss';

const HeaderButton = ({ label, path, onClickAction }) => (
  <Link to={path} className={'header-button'} onClick={onClickAction}>
    <button>{label}</button>
  </Link>
);

HeaderButton.defaultProps = {
  label: '',
  onClickAction: () => {},
  path: '/'
};

export default HeaderButton;