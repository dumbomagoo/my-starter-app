import React from 'react';

const InputBox = props => {
  const { callMeMaybe } = props;
  const helpMe = event => {
    callMeMaybe(event.target.value);
  };

  return (
    <input type="text" onChange={helpMe}/>
  );
};

InputBox.defaultProps = {
  callMeMaybe: () => {}
};

export default InputBox;