import React from 'react';
import * as FontAwesome from 'react-icons/fa';
import './GameButton.css';

export function GameButton({ name, iconString, onGameButtonClick }) {
  const icon = React.createElement(FontAwesome[iconString]);
  return (
    <button type="button" className="GameButton" onClick={onGameButtonClick}>
      <div>{icon}</div>
      <span className="tooltip">{name}</span>
    </button>
  );
}
