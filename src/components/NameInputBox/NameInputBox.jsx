import React from 'react';
import './NameInputBox.scss';

const NameInputBox = ({ callMeMaybe, name }) => {
  const helpMe = event => {
    const newValue = event.target.value.replace(/[^a-zA-Z- ',]/g, '');
    callMeMaybe(newValue);
  };

  return (
    <div className="help">
      <span>{'Enter your name'}</span>
      <input type="text" onChange={helpMe} value={name} />
    </div>
  );
};

NameInputBox.defaultProps = {
  callMeMaybe: () => {},
  name: ''
};

export default NameInputBox;