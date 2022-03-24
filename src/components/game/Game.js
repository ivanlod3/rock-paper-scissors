import React, { useEffect, useState } from "react";
import "./Game.css";
import { useNavigate } from "react-router-dom";
import GameButton from "../game-button/GameButton";
import { gameLogic } from "../../services/Game";
import { getUserData, saveUserData } from "../../services/User";

const Game = ({ userName }) => {
  const navigate = useNavigate();
  const [currentGame, setCurrentGame] = useState(getUserData(userName));

  useEffect(() => {
    saveUserData({ userName, currentGame });
  });

  function handleGameButtonClick() {
    const game = gameLogic(currentGame);
    setCurrentGame({ ...game });
  }

  return (
    <main className="Game">
      <span>User: {userName}</span>
      <article>
        {["Rock", "Paper", "Scissors"].map((name) => (
          <GameButton
            key={name}
            onGameButtonClick={handleGameButtonClick}
            name={name}
          />
        ))}
      </article>
      <article>
        <span>Score: {currentGame.score}</span>
      </article>
      <footer>
        <button className="standard" onClick={() => navigate("/")}>
          Exit
        </button>
      </footer>
    </main>
  );
};

export default Game;
