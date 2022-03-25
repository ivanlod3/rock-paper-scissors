import React from 'react';
import './GameOption.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function GameOption({
  option: { name, beats, icon },
  disabled,
  onGameOptionClick
}) {
  return (
    <button
      type="button"
      className="GameOption"
      aria-label={`Choose ${name}`}
      disabled={disabled}
      onClick={(e) => onGameOptionClick(e, { name, beats })}
    >
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <span className="tooltip">{name}</span>
    </button>
  );
}
