import React,  { useState, useEffect } from "react";
import Levels from "./components/Levels";
import Level from "./components/Level";
import "./styles/main.css";
import "./styles/card.css";

const App = () => { 
  const [level, setLevel] = useState(1);

  return (
    <section className="app-container">
      <header>
        <h1>Memory Card</h1>
        <h2>Level: { level }</h2>
      </header>
      <Levels />
    </section>
  )
};

export default App;