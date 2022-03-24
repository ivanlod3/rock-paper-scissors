import React from "react";
import "./Button.css";

export function Button({ children, className, type, onClick }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
