import React, { useCallback, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button/Button';

function Home({ onUsernameChange, userName }) {
  const navigate = useNavigate();
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
    [name, navigate, onUsernameChange]
  );

  const buttonText = 'Start';
  const buttonClass = 'btn btn-primary';
  return (
    <div className="Home">
      <header className="header">Home</header>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            id="nameInput"
            className="input"
            title="Only letters and numbers"
            type="text"
            placeholder="User name *"
            pattern="[a-zA-Z0-9]+"
            tabIndex="0"
            aria-label="User name"
            required
            onChange={handleInputChange}
          />
          <nav className="nav">
            <Button
              className={buttonClass}
              tabIndex="0"
              ariaLabel="Start game"
              submit
            >
              {buttonText}
            </Button>
          </nav>
        </form>
      </main>
    </div>
  );
}

export default Home;
