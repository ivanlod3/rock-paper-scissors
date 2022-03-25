import React, { useCallback, useEffect, useState } from 'react';
import './Game.css';
import { useNavigate } from 'react-router-dom';
import { GameButton } from '../../components/game-button/GameButton';
import { GAME_OPTIONS, GAME_STATUS, play } from '../../services/Game';
import { getUser, logOut, saveUser } from '../../services/User';
import { Button } from '../../components/button/Button';

function Game({ userName }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    getUser(userName) || { name: userName, score: 0 }
  );
  const [statusText, setStatusText] = useState(`Score: ${currentUser.score}`);
  const [status, setStatus] = useState(GAME_STATUS.IDLE);

  useEffect(() => {
    saveUser(currentUser);
  }, [currentUser]);

  // FIXME memory leak when component unmounts and promise play is not resolved
  const handleChooseOption = useCallback(
    async (e, playerOption) => {
      setStatus(GAME_STATUS.PLAYING);
      const result = await play(setStatusText, playerOption);
      const { score } = currentUser;
      setCurrentUser({ ...currentUser, score: score + result.score });
      setStatusText(`Score: ${currentUser.score}`);
      setStatus(GAME_STATUS.IDLE);
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
        {GAME_OPTIONS.map((option) => (
          <GameButton
            key={option.name}
            option={option}
            disabled={status !== GAME_STATUS.IDLE}
            onGameButtonClick={handleChooseOption}
          />
        ))}
      </article>
      <article>
        <span>{statusText}</span>
      </article>
      <footer>
        <Button
          className="btn btn-primary"
          disabled={status !== GAME_STATUS.IDLE}
          onClick={handleExitClick}
        >
          Exit
        </Button>
      </footer>
    </main>
  );
}

export default Game;
