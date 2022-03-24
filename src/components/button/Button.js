import React from 'react';
import './Button.css';

export function Button({ children, className, submit = false, onClick }) {
  return (
    <button
      className={className}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
