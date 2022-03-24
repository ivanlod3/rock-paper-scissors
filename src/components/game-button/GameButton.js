import React from 'react';
import './GameButton.css';

export function GameButton({ children, option, onGameButtonClick }) {
  return (
    <button
      type="button"
      className="GameButton"
      onClick={() => onGameButtonClick(option)}
    >
      <div>{children}</div>
      <span className="tooltip">{option}</span>
    </button>
  );
}
