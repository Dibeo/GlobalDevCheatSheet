import React from "react";
import logo from "../logo.svg";
import "./App.css";
import AppBar from "../Nav-Bar/Nav-Bar";
import SommaireComponent from "../Summary/summary";

const App: React.FC = () => {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };
  return (
    <div className="App" style={{"width": "100%"}}>
      <header className="App-header">
        <AppBar expanded={expanded} onToggle={handleToggle} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SommaireComponent expanded={expanded} />
    </div>
  );
};

export default App;
