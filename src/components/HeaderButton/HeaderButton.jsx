import React from 'react';
import { Link } from 'react-router-dom'

const HeaderButton = props => {
  const {
    label = "",
    path = "/"
  } = props

  return (
    <Link to={path}>
      <button>{label}</button>
    </Link>
  );
}

export default HeaderButton;