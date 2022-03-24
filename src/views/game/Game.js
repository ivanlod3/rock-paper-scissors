import React, { useCallback, useEffect, useState } from 'react';
import './Game.css';
import { useNavigate } from 'react-router-dom';
import { GameButton } from '../../components/game-button/GameButton';
import { gameOptions, getComputerOption, play } from '../../services/Game';
import { getUser, logOut, saveUser } from '../../services/User';
import { Button } from '../../components/button/Button';

function Game({ userName }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    getUser(userName) || { name: userName, score: 0 }
  );
  const [computerChoosing, setComputerChoosing] = useState(false);
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);

  useEffect(() => {
    saveUser(currentUser);
  });

  async function showGameResult(result) {
    setWinner(result === 1);
    setLoser(result === 0);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    setWinner(false);
    setLoser(false);
  }

  const playGame = useCallback(
    async (playerOption, computerOption) => {
      const { score } = currentUser;
      const result = play(playerOption, computerOption);
      await showGameResult(result);
      setCurrentUser({ ...currentUser, score: score + result });
    },
    [currentUser]
  );

  const handleGameButtonClick = useCallback(
    async (e, playerOption) => {
      setComputerChoosing(true);
      const computerOption = await getComputerOption();
      setComputerChoosing(false);
      await playGame(playerOption, computerOption);
    },
    [playGame]
  );

  const handleExitClick = useCallback(() => {
    logOut();
    navigate('/');
  }, [navigate]);

  function getStatusText() {
    if (computerChoosing) {
      return 'Computer is choosing...';
    }
    if (winner) {
      return 'You won!';
    }
    if (loser) {
      return 'You lost!';
    }
    return `Score: ${currentUser.score}`;
  }

  return (
    <main className="Game">
      <span>User: {currentUser.name}</span>
      <article className="buttons">
        {gameOptions.map((option) => (
          <GameButton
            key={option.name}
            option={option}
            onGameButtonClick={handleGameButtonClick}
          />
        ))}
      </article>
      <article>
        <span>{getStatusText()}</span>
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
