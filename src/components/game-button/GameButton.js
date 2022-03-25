import React from 'react';
import './GameButton.css';

export function GameButton({
  children,
  className,
  submit = false,
  tabIndex,
  ariaLabel,
  disabled,
  onClick
}) {
  return (
    <button
      className={className}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
