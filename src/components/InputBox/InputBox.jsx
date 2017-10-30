import React from 'react';
import './InputBox.css';

const InputBox = props => {
  const { callMeMaybe } = props;
  const helpMe = event => {
    callMeMaybe(event.target.value);
  };

  return (
    <div className="help">
      <span>
      {'Enter your name'}
      </span>
      <input type="text" onChange={helpMe}/>
    </div>
  );
};

InputBox.defaultProps = {
  callMeMaybe: () => {}
};

export default InputBox;