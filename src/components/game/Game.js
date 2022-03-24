import React, { useEffect, useState } from "react";
import "./Game.css";
import { useNavigate } from "react-router-dom";
import GameButton from "../game-button/GameButton";
import { gameLogic } from "../../services/Game";
import { getUserData, saveUserData } from "../../services/User";
import { Button } from "../button/Button";

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

  const gameOptions = [
    { name: "Rock", iconString: "FaHandRock" },
    { name: "Paper", iconString: "FaHandPaper" },
    { name: "Scissors", iconString: "FaHandScissors" },
  ];
  return (
    <main className="Game">
      <span>User: {userName}</span>
      <article className="buttons">
        {gameOptions.map(({ name, iconString }) => (
          <GameButton
            key={name}
            name={name}
            iconString={iconString}
            onGameButtonClick={handleGameButtonClick}
          />
        ))}
      </article>
      <article>
        <span>Score: {currentGame.score}</span>
      </article>
      <footer>
        <Button className={"btn btn-primary"} onClick={() => navigate("/")}>
          {"Exit"}
        </Button>
      </footer>
    </main>
  );
};

export default Game;
