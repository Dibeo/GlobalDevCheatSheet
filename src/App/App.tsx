/*  App.tsx   */
import React from "react";
import logo from "../logo.svg";
import "./App.css";
import AppBar from "../Nav-Bar/Nav-Bar";
import SommaireComponent from "../Summary/summary";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GlobalProvider, useGlobalContext } from "../GlobalContext";

import Content from "../Content/ContentBase";

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#FF5733",
        },
        // ...other tokens
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#E0C2FF",
        },
        // ...other tokens
      },
    },
  },
});

const App: React.FC = () => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const { globalVariable, setGlobalVariable } = useGlobalContext();
  setGlobalVariable("/Global/Home");

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <div className="App" style={{ width: "100%" }}>
          <header className="App-header">
            <AppBar expanded={expanded} onToggle={handleToggle} />
          </header>
          <div
            className="App-content"
            style={{
              marginLeft: expanded ? "17%" : "0", // Ajout de marge à gauche si expanded
              transition: "margin-left 0.3s ease", // Transition fluide
            }}
          >
            <SommaireComponent expanded={expanded} />
            <Content />
          </div>
        </div>
      </ThemeProvider>
    </GlobalProvider>
  );
};

export default App;
