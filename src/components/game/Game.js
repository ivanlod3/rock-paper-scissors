import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gameLogic, getGame, saveGame } from "../../services/Game";
import GameButton from "../game-button/GameButton";
import "./Game.css";

const Game = (props) => {
  const navigate = useNavigate();

  const [currentGame, setCurrentGame] = useState(
    getGame(props.userName) || { score: 0 }
  );

  useEffect(() => {
    saveGame(props.userName, currentGame);
  });

  function handleGameButtonClick() {
    const game = gameLogic(currentGame);
    setCurrentGame({ ...game });
  }

  return (
    <main className="Game">
      <span>Usuario: {props.userName}</span>
      <article>
        {["Piedra", "Papel", "Tijera"].map((name) => (
          <GameButton
            key={name}
            onGameButtonClick={handleGameButtonClick}
            name={name}
          />
        ))}
      </article>
      <article>
        <span>Puntuación: {currentGame.score}</span>
      </article>
      <footer>
        <button className="standard" onClick={() => navigate("/")}>
          Salir
        </button>
      </footer>
    </main>
  );
};

export default Game;
