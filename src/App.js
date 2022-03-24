import React, { useCallback, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
import Game from './views/game/Game';
import Home from './views/home/Home';
import { getLoggedUser, isLogged, logIn } from './services/User';

function App() {
  const [userName, setUserName] = useState(getLoggedUser() || '');

  const handleUserNameChange = useCallback(
    (name) => {
      setUserName(name);
      logIn(name);
    },
    [setUserName]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UserNotLogged userName={userName}>
              <Home
                userName={userName}
                onUsernameChange={handleUserNameChange}
              />
            </UserNotLogged>
          }
        />
        <Route path="/game" element={<Game userName={userName} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function UserNotLogged({ children, userName }) {
  const location = useLocation();
  if (!isLogged(userName)) {
    return children;
  }
  return <Navigate to={-1} state={{ from: location }} replace />;
}
