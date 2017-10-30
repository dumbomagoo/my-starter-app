import React from 'react';

const FavoriteChoice = props => {
  const {
    action,
    choices,
    currentChoice,
    favoriteType
  } = props;

  const triggerAction = event => {
    action(event.target.value, favoriteType);
  };
 
  return (
    <div>
      <label>{`What is your favorite ${favoriteType}`}
        <select name={favoriteType} onChange={triggerAction} value={currentChoice}>
          <option value={''}>Select one</option>
          {
            choices.map((choice, index) => (
              <option key={`choice-${index}`} value={choice}>{choice}</option>
            ))
          }
        </select>
      </label>
    </div>
  );
};

FavoriteChoice.defaultProps = {
  action: () => {},
  choices: [],
  currentChoice: '',
  favoriteType: ''
}

export default FavoriteChoice;