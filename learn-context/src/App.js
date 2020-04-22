import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeProvider } from "styled-components";
import * as themes from "./styles/themes";
import ThemeContext from "./styles/themes/context";

function App() {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme: theme }}>
        <ThemeSwitcher
          toggleTheme={() => {
            setTheme(theme === themes.dark ? themes.light : themes.dark);
          }}
        />
        <ThemeContext.Consumer>
          {(currentTheme) => (
            <ThemeProvider theme={currentTheme}>
              <TodoList />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
