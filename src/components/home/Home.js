import React, { useCallback, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '../button/Button';

function Home({ onUsernameChange, userName }) {
  const navigate = useNavigate();
  // FIXME change variable name
  const [name, setName] = useState(userName || '');

  function handleInputChange(e) {
    setName(e.target.value);
  }

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onUsernameChange(name);
      navigate('/game');
    },
    [name, onUsernameChange, navigate]
  );

  const buttonText = 'Start';
  const buttonClass = 'btn btn-primary';
  return (
    <div className="Home">
      <header className="header">Home</header>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="User name *"
            required
            onChange={handleInputChange}
          />
          <nav className="nav">
            <Button className={buttonClass} onClick={handleSubmit} submit>
              {buttonText}
            </Button>
          </nav>
        </form>
      </main>
    </div>
  );
}

export default Home;
