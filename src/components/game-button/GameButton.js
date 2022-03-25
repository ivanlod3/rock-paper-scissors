import React from 'react';
import './GameButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function GameButton({
  option: { name, beats, icon },
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
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <span className="tooltip">{name}</span>
    </button>
  );
}
