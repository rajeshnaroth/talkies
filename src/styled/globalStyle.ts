import { createGlobalStyle } from "styled-components";

import "reset-css";

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
  }
  body {
    background-color: #002c34;
    margin: 0;
    padding:0;
    border:0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
`;
