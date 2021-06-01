import Dictionary from "./Dictionary";
import logo from "./logo.png";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo"  /> 
        </header>
        <main>
          <Dictionary defaultKeyword="pandemic" />
        </main>
        <footer className="App-footer">
          <small><a href="https://github.com/zbernasol/dictionary-project" target="_blank" rel="noreferrer">Open-source</a> code by <a href="https://www.linkedin.com/in/zian-angelica-bernasol-6a190a113/" target="_blank" rel="noreferrer">Zian Bernasol</a></small>
          </footer>
      </div>
    </div>
  );
}


