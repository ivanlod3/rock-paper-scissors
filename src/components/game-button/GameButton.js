import React from 'react';
import './GameButton.css';

export function GameButton({ name, icon, onGameButtonClick }) {
  return (
    <button
      type="button"
      className="GameButton"
      onClick={() => onGameButtonClick(name)}
    >
      <div>{icon}</div>
      <span className="tooltip">{name}</span>
    </button>
  );
}
