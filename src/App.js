import React from "react";
import Dictionary from "./Dictionary";
import logo from "./logo.png";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo " alt="logo"  /> 
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}


