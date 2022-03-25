import React from 'react';
import './GameButton.css';

export function GameButton({
  option: { name, beats, iconComponent },
  disabled,
  onGameButtonClick
}) {
  return (
    <button
      type="button"
      className="GameButton"
      aria-label={`Choose ${name}`}
      disabled={disabled}
      onClick={(e) => onGameButtonClick(e, { name, beats })}
    >
      <div>{iconComponent}</div>
      <span className="tooltip">{name}</span>
    </button>
  );
}
