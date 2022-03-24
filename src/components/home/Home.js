import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../button/Button";

function Home({ onUsernameChange }) {
  const navigate = useNavigate();
  // FIXME change variable name
  const [userName, setUserName] = useState("");

  function handleInputChange(e) {
    setUserName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUsernameChange(userName);
    navigate("/game");
  }

  const buttonText = "Start";
  const buttonClass = "btn btn-primary";
  const buttonType = "submit";
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
            <Button className={buttonClass} type={buttonType}>
              {buttonText}
            </Button>
          </nav>
        </form>
      </main>
    </div>
  );
}

export default Home;
