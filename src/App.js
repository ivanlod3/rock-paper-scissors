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
import { getUserData, saveUserData } from "./services/User";

function App() {
  const [userName, setUserName] = useState("");

  function handleUserNameChange(name) {
    setUserName(name);
    const currentGame = getUserData(name) || { score: 0 };
    saveUserData({ userName: name, currentGame });
  }

  function UserNameExists({ children }) {
    let location = useLocation();
    if (getUserData(userName)) {
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
