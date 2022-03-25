import React from 'react';
import './Button.css';

export function Button({
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
