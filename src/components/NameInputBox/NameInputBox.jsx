import React from 'react';
import _ from 'lodash';

// CSS
import './NameInputBox.scss';

const NameInputBox = ({ callMeMaybe, name }) => {
  const helpMe = event => {
    const normalizedValue = _.get(event, 'target.value', '').replace(/[^a-zA-Z- ',]/g, '');
    callMeMaybe(normalizedValue);
  };

  return (
    <div className="help">
      <span>{'Enter your name'}</span>
      <input type="search" onChange={helpMe} value={name} />
    </div>
  );
};

NameInputBox.defaultProps = {
  callMeMaybe: () => {},
  name: ''
};

export default NameInputBox;