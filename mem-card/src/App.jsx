import React,  { useState, useEffect } from "react";
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
      <Level length = {3}/>
    </section>
  )
};

export default App;