import React, { useCallback, useEffect, useState } from 'react';
import './Game.css';
import { useNavigate } from 'react-router-dom';
import { GameButton } from '../../components/game-button/GameButton';
import { GAME_OPTIONS, getComputerOption, play } from '../../services/Game';
import { getUser, logOut, saveUser } from '../../services/User';
import { Button } from '../../components/button/Button';
import { wait } from '../../services/Util';

function Game({ userName }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    getUser(userName) || { name: userName, score: 0 }
  );
  const [status, setStatus] = useState(`Score: ${currentUser.score}`);

  useEffect(() => {
    setStatus(`Score: ${currentUser.score}`);
    saveUser(currentUser);
  }, [currentUser]);

  const handleChooseOption = useCallback(
    async (e, playerOption) => {
      const { score } = currentUser;
      setStatus('Computer is choosing...');
      const computerOption = await getComputerOption();
      const result = play(playerOption, computerOption);
      setStatus(result ? `You won!` : `You lost!`);
      await wait(1000);
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
        {GAME_OPTIONS.map((option) => (
          <GameButton
            key={option.name}
            option={option}
            onGameButtonClick={handleChooseOption}
          />
        ))}
      </article>
      <article>
        <span>{status}</span>
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
