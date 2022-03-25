import React, { useCallback, useEffect, useState } from 'react';
import './Game.css';
import { useNavigate } from 'react-router-dom';
import { GameOption } from '../../components/game-option/GameOption';
import { play } from '../../services/Game';
import { getUser, logOut, saveUser } from '../../services/User';
import { GameButton } from '../../components/button/GameButton';
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
      e.target.closest('button').classList.add('on');
      setStatus(STATUS.PLAYING);
      const result = await play(setStatusText, playerOption);
      const { score } = currentUser;
      setCurrentUser({ ...currentUser, score: score + result.score });
      setStatus(STATUS.IDLE);
      e.target.closest('button').classList.remove('on');
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
          <GameOption
            key={option.name}
            option={option}
            disabled={status !== STATUS.IDLE}
            onGameOptionClick={handleChooseOption}
          />
        ))}
      </article>
      <article>
        <span>{statusText}</span>
      </article>
      <footer>
        <GameButton
          className="btn btn-primary"
          disabled={status !== STATUS.IDLE}
          onClick={handleExitClick}
        >
          Exit
        </GameButton>
      </footer>
    </main>
  );
}

export default Game;
