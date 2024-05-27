// src/App.jsx
import React from "react";
import Leaderboard from "./component/Leaderboard"; // Ensure this path is correct
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LeaderBoards</h1>
        <span className="dot"></span>
      </header>
      <Leaderboard />
    </div>
  );
}

export default App;
