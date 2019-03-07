// @flow

import React, { useState } from "react";
import { IThemeCollection } from "../../types/ThemeInterface";
import ThemeContext from "./ThemeContext";

const themes: IThemeCollection = {
  default: {
    background: "#282c34",
    foreground: "white",
    color: "white",
  },
  bright: {
    background: "yellow",
    foreground: "white",
    color: "black",
  },
};

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.default);

  const changeTheme = (themeName) => {
    setTheme(themes[themeName] || themes.default);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
