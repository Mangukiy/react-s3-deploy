import React, { useState } from "react";
import Login from "./Login";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setLoggedIn(status);
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <h1>🚀 Welcome, Admin!</h1>
          <p>Your React app is deployed and you are logged in.</p>
        </div>
      )}
    </div>
  );
}

export default App;
