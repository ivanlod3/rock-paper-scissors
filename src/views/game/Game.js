import React, { useCallback, useEffect, useState } from 'react';
import './Game.css';
import { useNavigate } from 'react-router-dom';
import { GameButton } from '../../components/game-button/GameButton';
import { play } from '../../services/Game';
import { getUser, logOut, saveUser } from '../../services/User';
import { Button } from '../../components/button/Button';
import { OPTIONS, STATUS } from '../../constants/constants';
import { SCORE } from '../../constants/strings';

function Game({ userName }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    getUser(userName) || { name: userName, score: 0 }
  );
  const [status, setStatus] = useState(STATUS.IDLE);
  const [statusText, setStatusText] = useState(
    `${SCORE}: ${currentUser.score}`
  );

  useEffect(() => {
    saveUser(currentUser);
    setStatusText(`${SCORE}: ${currentUser.score}`);
  }, [currentUser]);

  const handleChooseOption = useCallback(
    async (e, playerOption) => {
      setStatus(STATUS.PLAYING);
      const result = await play(setStatusText, playerOption);
      const { score } = currentUser;
      setCurrentUser({ ...currentUser, score: score + result.score });
      setStatus(STATUS.IDLE);
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
        {OPTIONS.map((option) => (
          <GameButton
            key={option.name}
            option={option}
            disabled={status !== STATUS.IDLE}
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
          disabled={status !== STATUS.IDLE}
          onClick={handleExitClick}
        >
          Exit
        </Button>
      </footer>
    </main>
  );
}

export default Game;
