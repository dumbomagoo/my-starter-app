import React from 'react';
import _ from 'lodash';

// CSS
import './FavoriteChoice.scss'

const FavoriteChoice = props => {
  const {
    action,
    choices,
    currentChoice,
    favoriteType
  } = props;

  const triggerAction = event => {
    action(_.get(event, 'target.value', ''), favoriteType);
  };
 
  return (
    <div className={'favorite-choice'}>
      <span>{`What is your favorite ${favoriteType}?`} </span>
      <select name={favoriteType} onChange={triggerAction} value={currentChoice}>
        <option value={''}>{'Select'}</option>
        {
          choices.map((choice, index) => (
            <option key={`choice-${index}`} value={choice}>{choice}</option>
          ))
        }
      </select>
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