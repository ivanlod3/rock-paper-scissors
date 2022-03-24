import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  // FIXME change variable name
  const [inputText, setInputText] = useState("");

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUsernameChange(inputText);
    navigate("/game");
  }

  return (
    <div className="Home">
      <header className="header">Home</header>
      <main className="main">
        <form onSubmit={handleSubmit}>
          <input
            className="standard"
            type="text"
            placeholder="Escribe tu nombre"
            required
            onChange={handleInputChange}
          />
          <nav className="nav">
            <button className="standard" type="submit">
              Enviar
            </button>
          </nav>
        </form>
      </main>
    </div>
  );
}

export default Home;
