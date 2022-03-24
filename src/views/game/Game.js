import React, { useCallback, useEffect, useState } from 'react';
import './Game.css';
import { useNavigate } from 'react-router-dom';
import { GameButton } from '../../components/game-button/GameButton';
import { gameOptions, play } from '../../services/Game';
import { getUser, logOut, saveUser } from '../../services/User';
import { Button } from '../../components/button/Button';

function Game({ userName }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    getUser(userName) || { name: userName, score: 0 }
  );

  useEffect(() => {
    saveUser(currentUser);
  });

  const handleGameButtonClick = useCallback(
    (playerOption) => {
      const { score } = currentUser;
      const result = play(playerOption);
      setCurrentUser({ ...currentUser, score: score + result });
    },
    [currentUser]
  );

  const handleExitClick = useCallback(() => {
    logOut();
    navigate('/');
  }, [navigate]);

  return (
    <main className="Game">
      <span>User: {currentUser.name}</span>
      <article className="buttons">
        {gameOptions.map(({ name, icon }) => (
          <GameButton
            key={name}
            name={name}
            icon={icon}
            onGameButtonClick={handleGameButtonClick}
          />
        ))}
      </article>
      <article>
        <span>Score: {currentUser.score}</span>
      </article>
      <footer>
        <Button className="btn btn-primary" onClick={handleExitClick}>
          Exit
        </Button>
      </footer>
    </main>
  );
}

export default Game;
