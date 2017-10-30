import React from 'react';

const FavoriteChoice = props => {
  const {
    action,
    choices,
    favoriteType,
    question
  } = props;

  const triggerAction = event => {
    action(event.target.value, favoriteType);
  };
 
  return (
      <label>{question}
        <select name={favoriteType} onChange={triggerAction}>
          <option value={''}>Select one</option>
          {
            choices.map((choice, index) => {
              return (
                <option key={index} value={choice}>{choice}</option>
              );
            })
          }
        </select>
      </label>
  );
};

FavoriteChoice.defaultProps = {
  action: () => {},
  choices: [],
  favoriteType: '',
  question: ''
}

export default FavoriteChoice;