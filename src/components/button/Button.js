import React from 'react';
import './Button.css';

export function Button({
  children,
  className,
  submit = false,
  tabIndex,
  ariaLabel,
  onClick
}) {
  return (
    <button
      className={className}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
