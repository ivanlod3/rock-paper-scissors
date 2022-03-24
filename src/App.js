import React, { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Game from "./components/game/Game";
import Home from "./components/home/Home";
import { getGame } from "./services/Game";
import { getUserName } from "./services/User";

function App() {
  const [userName, setUserName] = useState("");

  function handleUserNameChange(name) {
    setUserName(name);
    const game = getGame(name) || { score: 0 };
    localStorage.setItem(name, JSON.stringify(game));
  }

  function UserNameExists({ children }) {
    let location = useLocation();
    if (getUserName(userName)) {
      return children;
    }
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home userName={userName} onUsernameChange={handleUserNameChange} />
          }
        />
        <Route
          path="/game"
          element={
            <UserNameExists>
              <Game userName={userName} />
            </UserNameExists>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
