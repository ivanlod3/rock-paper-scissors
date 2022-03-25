import React from 'react';
import './GameButton.css';

export function GameButton({
  option: { name: option, iconComponent },
  onGameButtonClick
}) {
  return (
    <button
      type="button"
      className="GameButton"
      onClick={() => onGameButtonClick({ name, beats })}
      aria-label={`Choose ${name}`}
    >
      <div>{iconComponent}</div>
      <span className="tooltip">{option}</span>
    </button>
  );
}
