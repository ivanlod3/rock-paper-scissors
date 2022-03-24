import React from "react";
import * as FontAwesome from "react-icons/fa";
import "./GameButton.css";

const GameButton = ({ name, iconString, onGameButtonClick }) => {
  const icon = React.createElement(FontAwesome[iconString]);
  return (
    <div className="GameButton" onClick={onGameButtonClick}>
      <div>{icon}</div>
      <span className="tooltip">{name}</span>
    </div>
  );
};

export default GameButton;
